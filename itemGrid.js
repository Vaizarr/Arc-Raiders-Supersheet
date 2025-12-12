/**
 * itemGrid.js - Item filtering, sorting, and display logic
 * Handles item data processing and grid rendering logic
 */

import { questManager } from './questManager.js';
import { workstationManager } from './workstationManager.js';

const RARITY_COLORS = {
  common: '#6c6c6c',
  uncommon: '#26bf57',
  rare: '#00a8f2',
  epic: '#cc3099',
  legendary: '#ffc600',
};

/**
 * Item data manager
 */
class ItemGrid {
  constructor() {
    this.items = [];
    this.highYieldData = {
      componentToDonors: {},
      donorToComponents: {},
    };
  }

  /**
   * Initialize item data
   * TODO: Load from backend API instead of global window object
   */
  async initialize() {
    try {
      // TODO: Replace with API call: GET /api/items
      this.items = this.loadItemDataFromIconData();
      
      // TODO: Replace with API call: GET /api/items/high-yield-recycle
      this.highYieldData = await this.loadHighYieldRecycleData();
      
      // Annotate items with high-yield information
      this.annotateHighYieldItems();
      
      console.log('[ItemGrid] Initialized with', this.items.length, 'items');
      return true;
    } catch (err) {
      console.error('[ItemGrid] Initialization failed:', err);
      return false;
    }
  }

  /**
   * Load item data from ICON_DATA global
   * TODO: Replace with API endpoint
   * @private
   */
  loadItemDataFromIconData() {
    if (!Array.isArray(window.ICON_DATA)) {
      console.error('[ItemGrid] ICON_DATA missing or not array');
      return [];
    }

    return window.ICON_DATA.map(this.normalizeItem);
  }

  /**
   * Normalize raw item data
   * @private
   */
  normalizeItem(raw) {
    const reasons = Array.isArray(raw.reasons) ? raw.reasons : [];

    let questIdsUsed = [];
    let questReasonCount = 0;
    let workshopReasonCount = 0;
    let projectReasonCount = 0;

    for (const r of reasons) {
      if (!r) continue;

      if (r.type === 'quest') {
        questReasonCount++;
        if (r.questId && !questIdsUsed.includes(r.questId))
          questIdsUsed.push(r.questId);
      } else if (r.type === 'workshop') {
        workshopReasonCount++;
      } else if (r.type === 'project') {
        projectReasonCount++;
      }
    }

    const sellProfitMap =
      (typeof window !== 'undefined' && window.SELL_PROFIT_PERCENT_BY_NAME) || {};

    const sellProfitPercent =
      typeof sellProfitMap[raw.name] === 'number'
        ? sellProfitMap[raw.name]
        : null;

    const isSellMoreProfitable =
      typeof sellProfitPercent === 'number' && sellProfitPercent > 0;

    return {
      key: raw.key,
      name: raw.name,
      image: raw.image || null,
      hasImage: Boolean(raw.hasImage),
      rarity: raw.rarity ?? null,
      type: raw.type ?? null,
      value: typeof raw.value === 'number' ? raw.value : null,
      stackSize: typeof raw.stackSize === 'number' ? raw.stackSize : null,
      sellProfitPercent,
      isSellMoreProfitable,
      baseCategory: raw.baseCategory ?? null,
      quest: Boolean(raw.quest),
      workstations: raw.workstations || {},
      hasExpedition: Boolean(raw.hasExpedition),
      expeditionPhases: Array.isArray(raw.expeditionPhases)
        ? raw.expeditionPhases
        : [],
      reasonSummary: raw.reasonSummary ?? null,
      reasons,
      questIdsUsed,
      questReasonCount,
      workshopReasonCount,
      projectReasonCount,
      hasQuestReason: questReasonCount > 0,
      hasWorkshopReason: workshopReasonCount > 0,
      hasProjectReason: projectReasonCount > 0,
    };
  }

  /**
   * Load high-yield recycle data
   * TODO: Replace with API endpoint
   * @private
   */
  async loadHighYieldRecycleData() {
    const raw = (await this.fetchJson('item-high-yield-recycle.json')) || {};
    const componentToDonors = {};
    const donorToComponents = {};

    for (const [component, donors] of Object.entries(raw)) {
      if (!Array.isArray(donors)) continue;
      
      componentToDonors[component] = donors
        .map((d) => ({
          itemName: d.itemName,
          yield: typeof d.yield === 'number' ? d.yield : null,
        }))
        .filter((d) => d.itemName);

      componentToDonors[component].forEach((d) => {
        if (!donorToComponents[d.itemName]) donorToComponents[d.itemName] = [];
        donorToComponents[d.itemName].push({
          component,
          yield: d.yield,
        });
      });
    }

    return { componentToDonors, donorToComponents };
  }

  /**
   * Annotate items with high-yield information
   * @private
   */
  annotateHighYieldItems() {
    const { donorToComponents, componentToDonors } = this.highYieldData;
    
    this.items.forEach((item) => {
      const donations = donorToComponents[item.name] || [];
      item.isHighYieldDonor = donations.length > 0;
      item.highYieldDonations = donations;
      item.highYieldBestDonors = componentToDonors[item.name] || [];
    });
  }

  /**
   * Get all items
   * @returns {Array} All items
   */
  getItems() {
    return this.items;
  }

  /**
   * Get item by key
   * @param {string} key - Item key
   * @returns {Object|null} Item or null
   */
  getItem(key) {
    return this.items.find((i) => i.key === key) || null;
  }

  /**
   * Filter items by search query
   * @param {Array} items - Items to filter
   * @param {string} query - Search query
   * @returns {Array} Filtered items
   */
  filterBySearch(items, query) {
    const q = query.trim().toLowerCase();
    if (!q) return items;

    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(q) ||
        (item.key || '').toLowerCase().includes(q) ||
        (item.type || '').toLowerCase().includes(q) ||
        (item.reasonSummary || '').toLowerCase().includes(q)
      );
    });
  }

  /**
   * Check if item is tracked for quest
   * @param {Object} appState - Application state
   * @param {Object} item - Item object
   * @returns {boolean} True if quest tracked
   */
  isQuestTrackedForItem(appState, item) {
    const completedQuestIds = appState.questProgress.completedQuestIds;

    // Check if item is needed for any tracked quest
    if (questManager.isItemNeededForTrackedQuests(appState, item.key)) {
      return true;
    }

    // Check if item has quest IDs and any are not completed
    if (item.questIdsUsed.length > 0) {
      return item.questIdsUsed.some((q) => !completedQuestIds[q]);
    }

    return item.quest || item.hasQuestReason;
  }

  /**
   * Compute item display flags
   * @param {Object} appState - Application state
   * @param {Object} item - Item object
   * @returns {Object} Display flags
   */
  computeItemFlags(appState, item) {
    const prefs = appState.uiPreferences;
    
    const questTracked = this.isQuestTrackedForItem(appState, item);
    const wsRelevant = workstationManager.isItemRelevantForUpgrades(appState, item);
    
    const questCompleted =
      Array.isArray(item.questIdsUsed) &&
      item.questIdsUsed.some((id) => appState.questProgress.completedQuestIds[id]);
    
    const rerouteToSell =
      prefs.enableProfitTips &&
      item.baseCategory === 'recycle' &&
      item.isSellMoreProfitable;

    const profitBoost =
      prefs.enableProfitTips &&
      prefs.selectedCategories.sell &&
      typeof item.sellProfitPercent === 'number' &&
      item.sellProfitPercent > 0;

    const cat = rerouteToSell ? 'sell' : item.baseCategory;
    const selected = prefs.selectedCategories;
    const selectedCount = Object.values(selected).filter(Boolean).length;

    const matches = cat && selected[cat];

    let isHighlighted = false;
    let isDimmed = false;
    let visible = true;

    if (!selectedCount) {
      visible = true;
    } else if (prefs.showAll) {
      isHighlighted = matches;
      isDimmed = !matches;
    } else {
      visible = matches;
      isHighlighted = matches;
    }

    if (cat === 'keep') {
      if (!prefs.saveQuestItems && questTracked) {
        visible = false;
      }
      if (questCompleted) {
        visible = false;
      }
    }

    if (profitBoost) {
      visible = true;
      isHighlighted = true;
      isDimmed = false;
    }

    return {
      showQuestIcon: prefs.saveQuestItems && questTracked,
      showWorkshopIcon: wsRelevant,
      isQuestTracked: questTracked,
      isWorkstationRelevant: wsRelevant,
      isHighlightedByCategory: isHighlighted,
      isDimmedByCategory: isDimmed,
      isVisibleAfterCategoryFilter: visible,
    };
  }

  /**
   * Apply category filter and search
   * @param {Object} appState - Application state
   * @returns {Array} Filtered items with flags
   */
  applyCategoryAndSearch(appState) {
    const prefs = appState.uiPreferences;
    
    // Only show items with prices
    const priced = this.items.filter((i) => typeof i.value === 'number');
    
    // Apply search filter
    const afterSearch = this.filterBySearch(priced, prefs.lastSearch || '');
    
    // Compute flags for each item
    const flagged = afterSearch.map((i) => ({
      item: i,
      flags: this.computeItemFlags(appState, i),
    }));

    // If searching, show all results
    if (prefs.lastSearch && prefs.lastSearch.trim().length) {
      return flagged.map((f) => ({
        ...f,
        flags: { ...f.flags, isVisibleAfterCategoryFilter: true },
      }));
    }

    // If not showing all, filter out non-visible items
    if (!prefs.showAll) {
      const selected = prefs.selectedCategories;
      if (Object.values(selected).some(Boolean)) {
        return flagged.filter((x) => x.flags.isVisibleAfterCategoryFilter);
      }
    }
    
    return flagged;
  }

  /**
   * Sort items
   * @param {Array} itemsWithFlags - Items with flags
   * @param {Object} appState - Application state
   * @returns {Array} Sorted items
   */
  sortItems(itemsWithFlags, appState) {
    const prefs = appState.uiPreferences;
    
    const rarityRank = {
      Common: 1,
      Uncommon: 2,
      Rare: 3,
      Epic: 4,
      Legendary: 5,
    };

    const catRank = { keep: 3, recycle: 2, sell: 1 };

    const out = itemsWithFlags.slice();

    out.sort((a, b) => {
      const ia = a.item;
      const ib = b.item;
      const fa = a.flags;
      const fb = b.flags;

      const nameA = ia.name.toLowerCase();
      const nameB = ib.name.toLowerCase();
      const valA = ia.value ?? -Infinity;
      const valB = ib.value ?? -Infinity;
      const profitA = typeof ia.sellProfitPercent === 'number' ? ia.sellProfitPercent : -Infinity;
      const profitB = typeof ib.sellProfitPercent === 'number' ? ib.sellProfitPercent : -Infinity;
      const rarA = rarityRank[ia.rarity] || 0;
      const rarB = rarityRank[ib.rarity] || 0;
      const catA = catRank[ia.baseCategory] || 0;
      const catB = catRank[ib.baseCategory] || 0;

      switch (prefs.sortMode) {
        case 'name':
          return nameA.localeCompare(nameB);

        case 'rarity':
          return rarB - rarA || nameA.localeCompare(nameB);

        case 'valueHigh':
          return valB - valA || nameA.localeCompare(nameB);

        case 'valueLow':
          return (valA === null ? Infinity : valA) -
            (valB === null ? Infinity : valB) || nameA.localeCompare(nameB);

        default:
          // recommended
          const selected = prefs.selectedCategories;
          const anySelected = Object.values(selected).some(Boolean);
          
          if (prefs.showAll && anySelected) {
            const aSel = selected[ia.baseCategory] ? 1 : 0;
            const bSel = selected[ib.baseCategory] ? 1 : 0;
            if (aSel !== bSel) return bSel - aSel;
          }
          
          if (profitA !== profitB) return profitB - profitA;
          if (fa.isQuestTracked !== fb.isQuestTracked)
            return fa.isQuestTracked ? -1 : 1;
          if (fa.isWorkstationRelevant !== fb.isWorkstationRelevant)
            return fa.isWorkstationRelevant ? -1 : 1;
          if (ia.hasExpedition !== ib.hasExpedition)
            return ia.hasExpedition ? -1 : 1;
          if (catA !== catB) return catB - catA;
          if (valA !== valB) return valB - valA;
          
          return nameA.localeCompare(nameB);
      }
    });

    return out;
  }

  /**
   * Get rarity color
   * @param {string} rarity - Rarity string
   * @returns {string} Color hex code
   */
  getRarityColor(rarity) {
    if (!rarity) return 'rgba(255,255,255,0.18)';
    return RARITY_COLORS[rarity.toLowerCase()] || 'rgba(255,255,255,0.18)';
  }

  /**
   * Fetch JSON data
   * TODO: Replace with proper API calls
   * @private
   */
  async fetchJson(path) {
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      console.warn('[ItemGrid] fetchJson error:', path, err);
      return null;
    }
  }
}

// Export singleton instance
export const itemGrid = new ItemGrid();
