/**
 * app.js - Main application entry point
 * Arc Raiders SuprSheet - Modular ES6 version
 * 
 * This is the main controller that orchestrates all modules:
 * - storage.js: State persistence
 * - questManager.js: Quest tracking
 * - workstationManager.js: Workstation tier management
 * - itemGrid.js: Item filtering and sorting
 */

import { loadAppState, saveAppState } from './storage.js';
import { questManager } from './questManager.js';
import { workstationManager } from './workstationManager.js';
import { itemGrid } from './itemGrid.js';

/**
 * Constants
 */
const CURRENCY_ICON_PATH = 'currency_icon_gray.svg';
const QUEST_ICON_PATH = 'quest_icon.png';
const WORKSHOP_ICON_PATH = 'wrench_icon.png';

/**
 * Application state
 * Managed through storage.js module
 */
let appState = null;
let selectedItemKey = null;
let tooltipEl = null;
let questSearchResults = [];
let showQuestSearch = false;

/**
 * Application initialization
 */
document.addEventListener('DOMContentLoaded', () => {
  initApp().catch((err) => {
    console.error('[App] Failed to initialize:', err);
    const summaryEl = document.getElementById('summary');
    if (summaryEl) {
      summaryEl.textContent = 'Error loading data. See console.';
    }
  });
});

/**
 * Initialize application
 */
async function initApp() {
  console.log('[App] Initializing...');
  
  // Load persistent state from storage
  appState = loadAppState();
  
  // Initialize all managers
  await Promise.all([
    itemGrid.initialize(),
    questManager.initialize(),
    workstationManager.initialize(),
  ]);
  
  // Initialize workstation default tiers if needed
  workstationManager.initializeDefaultTiers(appState);
  
  // Set initial selected item
  const items = itemGrid.getItems();
  const firstPriced = items.find((i) => typeof i.value === 'number');
  selectedItemKey = firstPriced ? firstPriced.key : null;
  
  // Initialize tooltip
  initTooltip();
  
  // Attach event listeners
  attachEventListeners();
  
  // Initial render
  render();
  
  console.log('[App] Initialization complete');
}

/**
 * Initialize tooltip element
 */
function initTooltip() {
  tooltipEl = document.getElementById('item-tooltip');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'item-tooltip';
    document.body.appendChild(tooltipEl);
  }
  hideTooltip();
}

/**
 * Main render function
 * Orchestrates all UI updates
 */
function render() {
  // Get filtered and sorted items
  const flaggedItems = itemGrid.applyCategoryAndSearch(appState);
  const sortedItems = itemGrid.sortItems(flaggedItems, appState);
  
  // Render all UI sections
  renderSummaryBar(sortedItems);
  renderControls();
  renderItemGrid(sortedItems);
  renderWorkstationPanel();
  renderItemDetailsPanel();
  renderQuestSearchPanel();
  
  // Save state after render
  saveAppState(appState);
}

/**
 * Render summary bar
 */
function renderSummaryBar(itemsWithFlags) {
  const el = document.getElementById('summary');
  if (!el) return;

  const items = itemGrid.getItems();
  if (!items.length) {
    el.textContent = 'No items loaded.';
    return;
  }

  const keep = itemsWithFlags.filter((x) => x.item.baseCategory === 'keep').length;
  const rec = itemsWithFlags.filter((x) => x.item.baseCategory === 'recycle').length;
  const sell = itemsWithFlags.filter((x) => x.item.baseCategory === 'sell').length;

  const selectedCats = appState.uiPreferences.selectedCategories;
  const active = Object.entries(selectedCats)
    .filter(([_, v]) => v)
    .map(([k]) => k);

  const filterLabel =
    active.length && !appState.uiPreferences.showAll
      ? ` • Filter: ${active.join(', ')}`
      : active.length && appState.uiPreferences.showAll
      ? ` • Highlight: ${active.join(', ')}`
      : '';

  el.textContent = `${itemsWithFlags.length} items shown • Keep: ${keep} • Recycle: ${rec} • Sell: ${sell}${filterLabel}`;
}

/**
 * Render controls section
 */
function renderControls() {
  const prefs = appState.uiPreferences;
  
  document.getElementById('show-all-checkbox').checked = prefs.showAll;
  document.getElementById('save-quest-checkbox').checked = prefs.saveQuestItems;
  document.getElementById('compact-grid-checkbox').checked = prefs.compactGrid;
  
  const inventoryCheckbox = document.getElementById('inventory-mode-checkbox');
  if (inventoryCheckbox) {
    inventoryCheckbox.checked = prefs.inventoryMode;
  }

  const sort = document.getElementById('sort-select');
  sort.value = prefs.sortMode;

  document.querySelectorAll('.pill[data-category]').forEach((p) =>
    p.setAttribute('data-selected', prefs.selectedCategories[p.dataset.category] ? 'true' : 'false')
  );

  const grid = document.getElementById('item-grid');
  grid.classList.toggle('item-grid--compact', prefs.compactGrid);

  // Update Focus currency button state
  // Only show when RECYCLE or SELL category is active
  const focusCurrencyBtn = document.getElementById('focus-currency-btn');
  const focusCurrencyIcon = document.getElementById('focus-currency-icon');
  if (focusCurrencyBtn) {
    const showButton = prefs.selectedCategories.recycle || prefs.selectedCategories.sell;
    focusCurrencyBtn.style.display = showButton ? 'inline-flex' : 'none';
    focusCurrencyBtn.setAttribute('data-active', prefs.enableProfitTips ? 'true' : 'false');
    if (focusCurrencyIcon) {
      focusCurrencyIcon.src = prefs.enableProfitTips 
        ? 'ui_img/icons_small/currency_icon_on.png'
        : 'ui_img/icons_small/currency_icon_off.png';
    }
  }
}

/**
 * Render item grid
 */
function renderItemGrid(itemsWithFlags) {
  const grid = document.getElementById('item-grid');
  const prefs = appState.uiPreferences;
  
  hideTooltip();
  grid.innerHTML = '';

  if (!itemsWithFlags.length) {
    const msg = document.createElement('div');
    msg.textContent = 'No items match the current filters.';
    msg.style.color = '#999';
    grid.appendChild(msg);
    return;
  }

  for (const { item, flags } of itemsWithFlags) {
    if (!flags.isVisibleAfterCategoryFilter) continue;

    const tile = document.createElement('div');
    tile.className = 'item-tile';
    tile.dataset.itemKey = item.key;

    if (flags.isHighlightedByCategory) tile.classList.add('item-tile--highlight');
    if (flags.isDimmedByCategory) tile.classList.add('item-tile--dim');
    if (selectedItemKey === item.key) tile.classList.add('item-tile--selected');

    // Image
    const wrap = document.createElement('div');
    const rarity = item.rarity || '';
    const rarityClass = rarity ? 'rarity-' + rarity.toLowerCase() : '';
    const curveClass = rarity ? 'curve-' + rarity : '';
    wrap.className = `item-image ${rarityClass}`;

    if (item.hasImage && item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.onerror = () => {
        img.remove();
        wrap.classList.add('item-image--placeholder');
      };
      wrap.appendChild(img);
    } else {
      wrap.classList.add('item-image--placeholder');
    }

    const curve = document.createElement('div');
    curve.className = `item-image__curve ${curveClass}`;
    wrap.appendChild(curve);

    tile.appendChild(wrap);

    const name = document.createElement('div');
    name.className = 'item-name';
    name.textContent = item.name;
    tile.appendChild(name);

    // Icons
    if (flags.showQuestIcon) {
      const q = document.createElement('div');
      q.className = 'tile-icon tile-icon--quest';
      const img = document.createElement('img');
      img.src = QUEST_ICON_PATH;
      q.appendChild(img);
      tile.appendChild(q);
    }

    if (flags.showWorkshopIcon) {
      const w = document.createElement('div');
      w.className = 'tile-icon ' + (flags.showQuestIcon ? 'tile-icon--workshop' : 'tile-icon--quest');
      const img = document.createElement('img');
      img.src = WORKSHOP_ICON_PATH;
      w.appendChild(img);
      tile.appendChild(w);
    }

    // Profit badge
    if (
      prefs.enableProfitTips &&
      prefs.selectedCategories.sell &&
      typeof item.sellProfitPercent === 'number' &&
      item.sellProfitPercent > 0
    ) {
      const profit = document.createElement('div');
      profit.className = 'sell-profit-badge';
      profit.textContent = `${item.sellProfitPercent}%`;
      tile.appendChild(profit);
    }

    // High-yield badge
    if (prefs.selectedCategories.sell && item.isHighYieldDonor) {
      const hy = document.createElement('div');
      hy.className = 'high-yield-badge';
      hy.textContent = '!';
      tile.appendChild(hy);
    }

    // Keep label
    if (item.baseCategory === 'keep') {
      const keepLabel = document.createElement('div');
      keepLabel.className = 'keep-label';
      keepLabel.textContent = 'Keep';
      wrap.appendChild(keepLabel);
    }

    // Inventory checkmark
    if (prefs.inventoryMode && appState.itemTags.inventory[item.key]) {
      const invLabel = document.createElement('div');
      invLabel.className = 'inventory-checkmark';
      invLabel.textContent = '✓';
      tile.appendChild(invLabel);
    }

    // Event listeners
    tile.addEventListener('click', () => {
      if (prefs.inventoryMode) {
        // Toggle inventory status
        if (appState.itemTags.inventory[item.key]) {
          delete appState.itemTags.inventory[item.key];
        } else {
          appState.itemTags.inventory[item.key] = true;
        }
        render();
      } else {
        selectedItemKey = item.key;
        render();
      }
    });

    tile.addEventListener('mouseenter', (evt) => showTooltip(item, evt));
    tile.addEventListener('mousemove', (evt) => positionTooltip(evt));
    tile.addEventListener('mouseleave', () => hideTooltip());

    grid.appendChild(tile);
  }
}

/**
 * Render workstation panel
 */
function renderWorkstationPanel() {
  const box = document.getElementById('workstation-list');
  const stations = workstationManager.getStations();
  
  box.innerHTML = '';

  if (!stations.length) {
    box.textContent = 'No workstation data loaded.';
    return;
  }

  for (const st of stations) {
    const row = document.createElement('div');
    row.className = 'workstation-row';

    const name = document.createElement('div');
    name.className = 'workstation-name';
    name.textContent = st.name?.en || st.id;
    row.appendChild(name);

    const wrap = document.createElement('div');
    wrap.className = 'tier-buttons';

    const gameId = st.gameStationId;
    const max = workstationManager.getMaxTier(st.id);
    const current = workstationManager.getTier(appState, gameId);

    for (let lvl = 0; lvl <= max; lvl++) {
      const b = document.createElement('button');
      b.className = 'tier-btn';
      b.dataset.stationId = gameId;
      b.dataset.level = lvl;
      b.dataset.active = lvl === current ? 'true' : 'false';
      b.textContent = `T${lvl}`;
      wrap.appendChild(b);
    }

    row.appendChild(wrap);
    box.appendChild(row);
  }
}

/**
 * Render item details panel
 */
function renderItemDetailsPanel() {
  const box = document.getElementById('details-content');
  const item = itemGrid.getItem(selectedItemKey);
  
  box.innerHTML = '';

  if (!item) {
    box.textContent = 'Select an item.';
    return;
  }

  // Item name with rarity color
  const rarityClass = item.rarity ? 'details-name--rarity-' + item.rarity.toLowerCase() : '';
  const name = document.createElement('div');
  name.className = `details-name ${rarityClass}`;
  name.textContent = item.name;
  box.appendChild(name);

  // Subline with metadata
  const sub = document.createElement('div');
  sub.className = 'details-subline';
  const bits = [];
  
  if (item.rarity) bits.push(item.rarity);
  
  if (item.value != null) {
    const v = document.createElement('span');
    v.className = 'details-meta-pill';
    const icon = document.createElement('img');
    icon.src = CURRENCY_ICON_PATH;
    icon.className = 'currency-icon-inline';
    v.appendChild(icon);
    v.appendChild(document.createTextNode(item.value));
    bits.push(v);
  }
  
  if (item.stackSize != null) bits.push('Stack ×' + item.stackSize);
  if (item.type) bits.push(item.type);

  bits.forEach((b, i) => {
    if (i) sub.appendChild(document.createTextNode(' • '));
    if (typeof b === 'string') sub.appendChild(document.createTextNode(b));
    else sub.appendChild(b);
  });
  box.appendChild(sub);

  // Reason summary
  const rsTitle = document.createElement('div');
  rsTitle.className = 'details-section-title';
  rsTitle.textContent = 'Reason summary';
  box.appendChild(rsTitle);

  const rsBody = document.createElement('div');
  rsBody.className = 'details-section-body';
  rsBody.textContent = item.reasonSummary || 'No detailed reason available.';
  box.appendChild(rsBody);

  // Profit callout
  if (typeof item.sellProfitPercent === 'number' && item.sellProfitPercent !== 0) {
    const profitWrap = document.createElement('div');
    profitWrap.className = 'details-section-body profit-callout';
    const icon = document.createElement('span');
    icon.className = 'profit-callout__icon';
    icon.textContent = '!';
    profitWrap.appendChild(icon);
    const text = document.createElement('span');
    text.textContent = `${item.sellProfitPercent}% profit when selling vs recycle`;
    profitWrap.appendChild(text);
    box.appendChild(profitWrap);
  }

  // High-yield recycle
  if (item.isHighYieldDonor && item.highYieldDonations.length) {
    const t = document.createElement('div');
    t.className = 'details-section-title';
    t.textContent = 'High-yield recycle';
    box.appendChild(t);
    const body = document.createElement('div');
    body.className = 'details-section-body';
    item.highYieldDonations.forEach((d) => {
      const row = document.createElement('div');
      const qty = d.yield != null ? `${d.yield}× ` : '';
      row.textContent = `${qty}${d.component}`;
      body.appendChild(row);
    });
    box.appendChild(body);
  }

  // Best donors
  const bestDonors = item.highYieldBestDonors || [];
  if (bestDonors.length) {
    const t = document.createElement('div');
    t.className = 'details-section-title';
    t.textContent = 'Best donors';
    box.appendChild(t);
    const body = document.createElement('div');
    body.className = 'details-section-body';
    bestDonors.forEach((d) => {
      const row = document.createElement('div');
      const qty = d.yield != null ? `${d.yield}× ` : '';
      row.textContent = `${qty}${d.itemName}`;
      body.appendChild(row);
    });
    box.appendChild(body);
  }

  // Quests
  const questReasons = item.reasons.filter((r) => r.type === 'quest');
  if (questReasons.length) {
    const t = document.createElement('div');
    t.className = 'details-section-title';
    t.textContent = 'Quests';
    box.appendChild(t);
    const body = document.createElement('div');
    body.className = 'details-section-body';
    questReasons.forEach((qr) => {
      const id = qr.questId;
      const done = questManager.isQuestCompleted(appState, id);
      const tag = document.createElement('button');
      tag.className = 'quest-tag';
      tag.dataset.questId = id;
      tag.dataset.completed = done ? 'true' : 'false';
      tag.textContent = qr.questName || `Quest ${id}`;
      body.appendChild(tag);
    });
    box.appendChild(body);
  }

  // Workstations
  const wsReasons = item.reasons.filter((r) => r.type === 'workshop');
  if (wsReasons.length) {
    const t = document.createElement('div');
    t.className = 'details-section-title';
    t.textContent = 'Workstations';
    box.appendChild(t);
    const body = document.createElement('div');
    body.className = 'details-section-body';
    const map = new Map();
    wsReasons.forEach((r) => {
      const st = r.workshopStation;
      const lvl = Number(r.workshopLevel || r.workshopLevelId);
      if (!st || !lvl) return;
      if (!map.has(st)) map.set(st, new Set());
      map.get(st).add(lvl);
    });
    for (const [st, lvSet] of map.entries()) {
      const row = document.createElement('div');
      row.className = 'ws-entry';
      const n = document.createElement('span');
      n.className = 'ws-entry-name';
      n.textContent = workstationManager.getDisplayName(st);
      row.appendChild(n);
      const lv = Array.from(lvSet).sort((a, b) => a - b);
      const lvEl = document.createElement('span');
      lvEl.className = 'ws-entry-levels';
      lvEl.textContent = 'T' + lv.join(', T');
      row.appendChild(lvEl);
      body.appendChild(row);
    }
    box.appendChild(body);
  }

  // Expedition
  const exp = item.reasons.filter((r) => r.type === 'project');
  if (item.hasExpedition || exp.length) {
    const t = document.createElement('div');
    t.className = 'details-section-title';
    t.textContent = 'Expedition';
    box.appendChild(t);
    const body = document.createElement('div');
    body.className = 'details-section-body';
    if (item.expeditionPhases.length) {
      const l = document.createElement('div');
      l.textContent = 'Project phases: ' + item.expeditionPhases.join(', ');
      body.appendChild(l);
    }
    exp.forEach((r) => {
      const l = document.createElement('div');
      const name = r.projectName || 'Project';
      const phase = r.projectPhase != null ? `Phase ${r.projectPhase}` : '';
      l.textContent = phase ? `${name} — ${phase}` : name;
      body.appendChild(l);
    });
    if (!body.hasChildNodes()) {
      body.textContent = 'Expedition-related item.';
    }
    box.appendChild(body);
  }
}

/**
 * Render quest search panel
 */
function renderQuestSearchPanel() {
  const selectedQuestsList = document.getElementById('selected-quests-list');
  const resultsEl = document.getElementById('quest-search-results');
  
  if (!selectedQuestsList) return;

  // Render selected quests
  selectedQuestsList.innerHTML = '';
  
  const selectedQuests = questManager.getSelectedQuests(appState);
  
  if (selectedQuests.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'empty-quest-message';
    emptyMsg.textContent = 'No active quests. Search above to add quests.';
    selectedQuestsList.appendChild(emptyMsg);
  } else {
    selectedQuests.forEach((quest) => {
      const card = createQuestCard(quest);
      selectedQuestsList.appendChild(card);
    });
  }

  // Render search results if any
  if (resultsEl && questSearchResults.length > 0 && showQuestSearch) {
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = '';
    
    questSearchResults.forEach((quest) => {
      const result = document.createElement('div');
      result.className = 'quest-search-result';
      result.dataset.questId = quest.id;
      
      const name = document.createElement('div');
      name.className = 'quest-search-result-name';
      name.textContent = quest.name;
      result.appendChild(name);
      
      const meta = document.createElement('div');
      meta.className = 'quest-search-result-meta';
      meta.textContent = `ID: ${quest.id}`;
      if (quest.type) {
        meta.textContent += ` • ${quest.type}`;
      }
      result.appendChild(meta);
      
      resultsEl.appendChild(result);
    });
  } else if (resultsEl) {
    resultsEl.style.display = 'none';
  }
}

/**
 * Create quest card element
 */
function createQuestCard(quest) {
  const card = document.createElement('div');
  card.className = 'selected-quest-card';
  card.dataset.questId = quest.id;
  
  const isCompleted = questManager.isQuestCompleted(appState, quest.id);
  card.dataset.completed = isCompleted ? 'true' : 'false';
  
  // Header with name and actions
  const header = document.createElement('div');
  header.className = 'selected-quest-header';
  
  const name = document.createElement('div');
  name.className = 'selected-quest-name';
  name.textContent = quest.name;
  header.appendChild(name);
  
  const actions = document.createElement('div');
  actions.className = 'selected-quest-actions';
  
  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.className = 'quest-action-btn quest-action-btn--complete';
  completeBtn.dataset.action = 'complete';
  completeBtn.dataset.questId = quest.id;
  completeBtn.textContent = '✓';
  completeBtn.title = isCompleted ? 'Mark as incomplete' : 'Mark as complete';
  actions.appendChild(completeBtn);
  
  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'quest-action-btn quest-action-btn--remove';
  removeBtn.dataset.action = 'remove';
  removeBtn.dataset.questId = quest.id;
  removeBtn.textContent = '×';
  removeBtn.title = 'Remove from tracking';
  actions.appendChild(removeBtn);
  
  header.appendChild(actions);
  card.appendChild(header);
  
  // Meta info
  const meta = document.createElement('div');
  meta.className = 'selected-quest-meta';
  meta.textContent = `Quest ID: ${quest.id}`;
  if (quest.type) {
    meta.textContent += ` • ${quest.type}`;
  }
  card.appendChild(meta);
  
  // Required items
  const items = quest.items || [];
  if (items.length > 0) {
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'selected-quest-items';
    
    items.forEach((itemKey) => {
      const tag = document.createElement('div');
      tag.className = 'quest-item-tag';
      tag.textContent = itemKey;
      itemsContainer.appendChild(tag);
    });
    
    card.appendChild(itemsContainer);
  }
  
  return card;
}

/**
 * Tooltip functions
 */
function showTooltip(item, evt) {
  if (!tooltipEl) return;
  setTooltipContent(item);
  tooltipEl.setAttribute('data-visible', 'true');
  tooltipEl.style.left = '0px';
  tooltipEl.style.top = '0px';
  positionTooltip(evt);
}

function hideTooltip() {
  if (!tooltipEl) return;
  tooltipEl.setAttribute('data-visible', 'false');
  tooltipEl.style.left = '-9999px';
  tooltipEl.style.top = '-9999px';
}

function positionTooltip(evt) {
  if (!tooltipEl) return;
  const offset = 16;
  const rect = tooltipEl.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let x = evt.clientX + offset;
  let y = evt.clientY + offset;

  if (x + rect.width + 8 > viewportWidth) {
    x = evt.clientX - rect.width - offset;
  }
  if (y + rect.height + 8 > viewportHeight) {
    y = evt.clientY - rect.height - offset;
  }

  tooltipEl.style.left = `${Math.max(0, x)}px`;
  tooltipEl.style.top = `${Math.max(0, y)}px`;
}

function setTooltipContent(item) {
  if (!tooltipEl) return;
  tooltipEl.innerHTML = '';
  
  const rarityColor = itemGrid.getRarityColor(item.rarity);
  tooltipEl.style.borderColor = 'rgba(255,255,255,0.2)';

  const titleBar = document.createElement('div');
  titleBar.className = 'tooltip-titlebar';
  const title = document.createElement('div');
  title.className = 'tooltip-title';
  title.style.color = rarityColor;
  title.textContent = item.name || 'Unknown item';
  titleBar.appendChild(title);
  tooltipEl.appendChild(titleBar);

  const body = document.createElement('div');

  const questRowNeeded = item.hasQuestReason || item.quest;
  const workshopRowNeeded =
    item.hasWorkshopReason || (item.workstations && Object.keys(item.workstations).length > 0);
  const highYieldRowNeeded = item.isHighYieldDonor;

  if (questRowNeeded) {
    const questRow = document.createElement('div');
    questRow.className = 'tooltip-row';
    const questIcon = document.createElement('img');
    questIcon.src = QUEST_ICON_PATH;
    questIcon.alt = 'Quest';
    questRow.appendChild(questIcon);
    const questText = document.createElement('span');
    questText.textContent = 'Quest item';
    questRow.appendChild(questText);
    body.appendChild(questRow);
  }

  if (workshopRowNeeded) {
    const wsRow = document.createElement('div');
    wsRow.className = 'tooltip-row';
    const wsIcon = document.createElement('img');
    wsIcon.src = WORKSHOP_ICON_PATH;
    wsIcon.alt = 'Workstation';
    wsRow.appendChild(wsIcon);
    const wsText = document.createElement('span');
    const stationIds = item.workstations ? Object.keys(item.workstations) : [];
    const stationNames = stationIds.length
      ? stationIds.map((id) => workstationManager.getDisplayName(id)).join(', ')
      : 'Workstation use';
    wsText.textContent = stationNames;
    wsRow.appendChild(wsText);
    body.appendChild(wsRow);
  }

  if (highYieldRowNeeded) {
    const hyRow = document.createElement('div');
    hyRow.className = 'tooltip-row';
    const hyIcon = document.createElement('span');
    hyIcon.textContent = '!';
    hyIcon.style.color = '#ffd700';
    hyIcon.style.fontWeight = '800';
    hyRow.appendChild(hyIcon);
    const hyText = document.createElement('span');
    hyText.textContent = 'High-priority component donor';
    hyRow.appendChild(hyText);
    body.appendChild(hyRow);
  }

  const meta = document.createElement('div');
  meta.className = 'tooltip-meta';
  const icon = document.createElement('img');
  icon.src = CURRENCY_ICON_PATH;
  icon.alt = 'Value';
  meta.appendChild(icon);
  const value = document.createElement('span');
  value.className = 'tooltip-meta__value';
  value.textContent = typeof item.value === 'number' ? item.value.toLocaleString() : '—';
  meta.appendChild(value);
  body.appendChild(meta);

  tooltipEl.appendChild(body);
}

/**
 * Event listeners
 */
function attachEventListeners() {
  // Category pills
  document.getElementById('category-pills').addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    const cat = pill.dataset.category;
    const current = Boolean(appState.uiPreferences.selectedCategories[cat]);
    const next = { keep: false, recycle: false, sell: false };
    if (!current) next[cat] = true;
    appState.uiPreferences.selectedCategories = next;
    render();
  });

  // Show all checkbox
  document.getElementById('show-all-checkbox').addEventListener('change', (e) => {
    appState.uiPreferences.showAll = e.target.checked;
    render();
  });

  // Save quest items checkbox
  document.getElementById('save-quest-checkbox').addEventListener('change', (e) => {
    appState.uiPreferences.saveQuestItems = e.target.checked;
    render();
  });

  // Compact grid checkbox
  document.getElementById('compact-grid-checkbox').addEventListener('change', (e) => {
    appState.uiPreferences.compactGrid = e.target.checked;
    render();
  });

  // Focus currency button
  const focusCurrencyBtn = document.getElementById('focus-currency-btn');
  if (focusCurrencyBtn) {
    focusCurrencyBtn.addEventListener('click', () => {
      appState.uiPreferences.enableProfitTips = !appState.uiPreferences.enableProfitTips;
      render();
    });
  }

  // Inventory mode checkbox
  const inventoryCheckbox = document.getElementById('inventory-mode-checkbox');
  if (inventoryCheckbox) {
    inventoryCheckbox.addEventListener('change', (e) => {
      appState.uiPreferences.inventoryMode = e.target.checked;
      render();
    });
  }

  // Sort select
  document.getElementById('sort-select').addEventListener('change', (e) => {
    appState.uiPreferences.sortMode = e.target.value;
    render();
  });

  // Search input
  document.getElementById('search-input').addEventListener('input', (e) => {
    appState.uiPreferences.lastSearch = e.target.value;
    render();
  });

  // Workstation tier buttons
  document.getElementById('workstation-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.tier-btn');
    if (!btn) return;
    const st = btn.dataset.stationId;
    const lvl = Number(btn.dataset.level);
    workstationManager.setTier(appState, st, lvl);
    render();
  });

  // Quest tags in details panel
  document.getElementById('details-content').addEventListener('click', (e) => {
    const tag = e.target.closest('.quest-tag');
    if (!tag) return;
    const id = tag.dataset.questId;
    questManager.toggleQuestCompletion(appState, id);
    render();
  });

  // Quest search input
  const questSearchInput = document.getElementById('quest-search-input');
  if (questSearchInput) {
    questSearchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      
      if (query.trim().length > 0) {
        questSearchResults = questManager.searchQuests(query);
        showQuestSearch = true;
      } else {
        questSearchResults = [];
        showQuestSearch = false;
      }
      
      renderQuestSearchPanel();
    });

    // Close search results when input loses focus (after a delay to allow clicking)
    questSearchInput.addEventListener('blur', () => {
      setTimeout(() => {
        showQuestSearch = false;
        renderQuestSearchPanel();
      }, 200);
    });
  }

  // Quest search results selection
  const questSearchResultsEl = document.getElementById('quest-search-results');
  if (questSearchResultsEl) {
    questSearchResultsEl.addEventListener('click', (e) => {
      const result = e.target.closest('.quest-search-result');
      if (!result) return;
      
      const questId = result.dataset.questId;
      questManager.selectQuest(appState, questId);
      
      // Clear search
      if (questSearchInput) {
        questSearchInput.value = '';
      }
      questSearchResults = [];
      showQuestSearch = false;
      
      render();
    });
  }

  // Quest card actions
  const selectedQuestsList = document.getElementById('selected-quests-list');
  if (selectedQuestsList) {
    selectedQuestsList.addEventListener('click', (e) => {
      const btn = e.target.closest('.quest-action-btn');
      if (!btn) return;
      
      const questId = btn.dataset.questId;
      const action = btn.dataset.action;
      
      if (action === 'complete') {
        questManager.toggleQuestCompletion(appState, questId);
      } else if (action === 'remove') {
        questManager.deselectQuest(appState, questId);
      }
      
      render();
    });
  }
}
