/**
 * questManager.js - Quest tracking and selection functionality
 * Handles quest data loading, search, and progress tracking
 */

import { saveAppState } from './storage.js';

/**
 * Quest manager instance
 */
class QuestManager {
  constructor() {
    this.quests = {};
    this.questGraph = null;
    this.itemQuestIndex = null;
  }

  /**
   * Initialize quest data
   * TODO: Load from backend API instead of static files
   */
  async initialize() {
    try {
      // TODO: Replace with API call: GET /api/quests
      this.questGraph = await this.fetchJson('quest-graph.json');
      
      // TODO: Replace with API call: GET /api/items/quest-index
      this.itemQuestIndex = await this.fetchJson('item-quest-index.json');
      
      // Build quest lookup map
      this.buildQuestMap();
      
      console.log('[QuestManager] Initialized with', Object.keys(this.quests).length, 'quests');
      return true;
    } catch (err) {
      console.error('[QuestManager] Initialization failed:', err);
      return false;
    }
  }

  /**
   * Build quest lookup map from quest graph
   * @private
   */
  buildQuestMap() {
    if (!this.questGraph || !this.questGraph.quests) {
      this.quests = {};
      return;
    }

    this.quests = {};
    
    // quest-graph.json has quests as an object with IDs as keys
    const questsObj = this.questGraph.quests;
    
    for (const questId in questsObj) {
      const quest = questsObj[questId];
      if (quest && quest.id) {
        // Extract item keys from requiredItems array
        const itemKeys = [];
        if (Array.isArray(quest.requiredItems)) {
          quest.requiredItems.forEach(reqItem => {
            if (reqItem.itemId) {
              itemKeys.push(reqItem.itemId);
            }
          });
        }
        
        this.quests[quest.id] = {
          id: quest.id,
          name: quest.name || quest.id,
          description: quest.description || '',
          type: quest.trader || 'quest',
          prerequisites: quest.previousQuestIds || [],
          rewards: quest.rewards || [],
          items: itemKeys,
          trader: quest.trader || '',
          requiresItems: quest.requiresItems || false,
          isMain: quest.isMain || false,
        };
      }
    }
  }

  /**
   * Search quests by name or ID
   * @param {string} query - Search query
   * @returns {Array} Matching quests
   */
  searchQuests(query) {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    const results = [];

    for (const quest of Object.values(this.quests)) {
      const nameMatch = quest.name.toLowerCase().includes(normalizedQuery);
      const idMatch = quest.id.toLowerCase().includes(normalizedQuery);
      const descMatch = quest.description?.toLowerCase().includes(normalizedQuery);

      if (nameMatch || idMatch || descMatch) {
        results.push({
          ...quest,
          relevance: nameMatch ? 3 : (idMatch ? 2 : 1),
        });
      }
    }

    // Sort by relevance, then alphabetically
    results.sort((a, b) => {
      if (a.relevance !== b.relevance) {
        return b.relevance - a.relevance;
      }
      return a.name.localeCompare(b.name);
    });

    return results.slice(0, 10); // Limit to top 10 results
  }

  /**
   * Get quest by ID
   * @param {string} questId - Quest identifier
   * @returns {Object|null} Quest data or null
   */
  getQuest(questId) {
    return this.quests[questId] || null;
  }

  /**
   * Get items required for a quest
   * @param {string} questId - Quest identifier
   * @returns {Array} Item keys required for quest
   */
  getQuestItems(questId) {
    const quest = this.getQuest(questId);
    return quest ? quest.items : [];
  }

  /**
   * Check if quest is completed
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier
   * @returns {boolean} Completion status
   */
  isQuestCompleted(appState, questId) {
    return Boolean(appState.questProgress.completedQuestIds[questId]);
  }

  /**
   * Toggle quest completion status
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier
   */
  toggleQuestCompletion(appState, questId) {
    if (this.isQuestCompleted(appState, questId)) {
      delete appState.questProgress.completedQuestIds[questId];
      console.log('[QuestManager] Quest unmarked as completed:', questId);
    } else {
      appState.questProgress.completedQuestIds[questId] = true;
      console.log('[QuestManager] Quest marked as completed:', questId);
      
      // Auto-complete prerequisites
      this.autoCompletePrerequisites(appState, questId);
    }
    
    saveAppState(appState);
  }

  /**
   * Auto-complete prerequisite quests when a quest is completed
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier that was just completed
   */
  autoCompletePrerequisites(appState, questId) {
    const quest = this.getQuest(questId);
    if (!quest || !quest.prerequisites || quest.prerequisites.length === 0) {
      return;
    }

    let completedCount = 0;
    
    quest.prerequisites.forEach((prereqId) => {
      if (!this.isQuestCompleted(appState, prereqId)) {
        appState.questProgress.completedQuestIds[prereqId] = true;
        completedCount++;
        console.log('[QuestManager] Auto-completed prerequisite:', prereqId);
      }
    });

    if (completedCount > 0) {
      console.log(`[QuestManager] Auto-completed ${completedCount} prerequisite quest(s) for ${questId}`);
    }
  }

  /**
   * Check if all required items for a quest are collected
   * Placeholder until a new inventory tracker is reintroduced
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier
   * @returns {boolean} True if all items are collected
   */
  areAllItemsCollected(appState, questId) {
    const quest = this.getQuest(questId);
   if (!quest || !quest.requiresItems || quest.items.length === 0) {
      return false;
    }

    // Inventory tracking UI is currently disabled; return false until a new collection tracker is added.
    return false;
  }

  /**
   * Get completion suggestions for tracked quests
   * @param {Object} appState - Application state
   * @returns {Array} Quest IDs that have all items collected
   */
  getCompletionSuggestions(appState) {
    const suggestions = [];
    const selectedQuests = this.getSelectedQuests(appState);

    selectedQuests.forEach((quest) => {
      if (!this.isQuestCompleted(appState, quest.id) && 
          this.areAllItemsCollected(appState, quest.id)) {
        suggestions.push(quest.id);
      }
    });

    return suggestions;
  }

  /**
   * Select quest for tracking
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier
   */
  selectQuest(appState, questId) {
    if (!appState.questProgress.selectedQuestIds.includes(questId)) {
      appState.questProgress.selectedQuestIds.push(questId);
      console.log('[QuestManager] Quest selected for tracking:', questId);
      saveAppState(appState);
    }
  }

  /**
   * Deselect quest from tracking
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier
   */
  deselectQuest(appState, questId) {
    const index = appState.questProgress.selectedQuestIds.indexOf(questId);
    if (index > -1) {
      appState.questProgress.selectedQuestIds.splice(index, 1);
      console.log('[QuestManager] Quest deselected from tracking:', questId);
      saveAppState(appState);
    }
  }

  /**
   * Check if quest is selected for tracking
   * @param {Object} appState - Application state
   * @param {string} questId - Quest identifier
   * @returns {boolean} Selection status
   */
  isQuestSelected(appState, questId) {
    return appState.questProgress.selectedQuestIds.includes(questId);
  }

  /**
   * Get all selected quests
   * @param {Object} appState - Application state
   * @returns {Array} Selected quest objects
   */
  getSelectedQuests(appState) {
    return appState.questProgress.selectedQuestIds
      .map(id => this.getQuest(id))
      .filter(Boolean);
  }

  /**
   * Check if item is needed for any tracked quest
   * @param {Object} appState - Application state
   * @param {string} itemKey - Item key/identifier
   * @returns {boolean} True if item is needed
   */
  isItemNeededForTrackedQuests(appState, itemKey) {
    const selectedQuests = this.getSelectedQuests(appState);
    
    for (const quest of selectedQuests) {
      if (quest.items.includes(itemKey)) {
        return true;
      }
    }
    
    return false;
  }

  /**
   * Get quests that require a specific item
   * @param {string} itemKey - Item key/identifier
   * @returns {Array} Quest IDs that require this item
   */
  getQuestsForItem(itemKey) {
    if (!this.itemQuestIndex || !this.itemQuestIndex[itemKey]) {
      return [];
    }
    return this.itemQuestIndex[itemKey];
  }

  /**
   * Add search to history
   * @param {Object} appState - Application state
   * @param {string} query - Search query
   */
  addToSearchHistory(appState, query) {
    if (!query || query.trim().length === 0) return;
    
    const history = appState.questProgress.searchHistory;
    const normalized = query.trim();
    
    // Remove if already exists
    const index = history.indexOf(normalized);
    if (index > -1) {
      history.splice(index, 1);
    }
    
    // Add to front
    history.unshift(normalized);
    
    // Keep only last 10 searches
    if (history.length > 10) {
      history.splice(10);
    }
    
    saveAppState(appState);
  }

  /**
   * Fetch JSON data
   * TODO: Replace with proper API calls
   * @private
   * @param {string} path - File path
   * @returns {Promise<Object|null>} Parsed JSON or null
   */
  async fetchJson(path) {
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      console.warn('[QuestManager] fetchJson error:', path, err);
      return null;
    }
  }
}

// Export singleton instance
export const questManager = new QuestManager();
