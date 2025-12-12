/**
 * storage.js - Centralized state persistence layer
 * Handles localStorage persistence with future backend sync capabilities
 */

const STORAGE_KEY = 'arcraiders-suprsheet-state';
const CURRENT_VERSION = 1;

/**
 * Default application state structure
 */
const DEFAULT_STATE = {
  version: CURRENT_VERSION,
  
  // Quest tracking
  questProgress: {
    selectedQuestIds: [],        // Currently tracked quests
    completedQuestIds: {},       // { questId: true }
    searchHistory: [],           // Recent quest searches
  },
  
  // Workstation configuration
  workstationTiers: {},           // { stationId: tierLevel }
  
  // Expedition tracking
  expeditionProgress: {
    trackExpedition: false,       // Toggle state
    completedPhases: {            // Phase completion status
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  
  // Item tagging system
  itemTags: {
    keep: {},                     // { itemKey: true }
    sell: {},                     // { itemKey: true }
    recycle: {},                  // { itemKey: true }
  },
  
  // UI preferences
  uiPreferences: {
    selectedCategories: {
      keep: true,
      recycle: false,
      sell: false,
    },
    showAll: false,
    saveQuestItems: true,
    enableProfitTips: false,
    compactGrid: true,
    sortMode: 'recommended',
    lastSearch: '',
  },
  
  // Sync metadata
  syncMeta: {
    lastSyncTimestamp: null,
    userId: null,
    isDirty: false,              // Indicates unsaved changes
  },
};

/**
 * Load application state from localStorage
 * @returns {Object} Complete application state
 */
export function loadAppState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (!stored) {
      console.log('[Storage] No saved state found, using defaults');
      return structuredClone(DEFAULT_STATE);
    }
    
    const parsed = JSON.parse(stored);
    
    // Version migration logic
    if (!parsed.version || parsed.version < CURRENT_VERSION) {
      console.log(`[Storage] Migrating state from v${parsed.version || 0} to v${CURRENT_VERSION}`);
      return migrateState(parsed);
    }
    
    // Merge with defaults to handle new fields
    const merged = deepMerge(structuredClone(DEFAULT_STATE), parsed);
    if (merged.itemTags) delete merged.itemTags.inventory;
    if (merged.uiPreferences) delete merged.uiPreferences.inventoryMode;
    console.log('[Storage] State loaded successfully');
    
    return merged;
    
  } catch (err) {
    console.error('[Storage] Failed to load state:', err);
    return structuredClone(DEFAULT_STATE);
  }
}

/**
 * Save application state to localStorage
 * @param {Object} state - Complete application state
 * @returns {boolean} Success status
 */
export function saveAppState(state) {
  try {
    // Mark as dirty for future sync
    state.syncMeta.isDirty = true;
    
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
    
    console.log('[Storage] State saved successfully');
    return true;
    
  } catch (err) {
    console.error('[Storage] Failed to save state:', err);
    return false;
  }
}

/**
 * Clear all stored state (useful for reset/logout)
 * @returns {boolean} Success status
 */
export function clearAppState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log('[Storage] State cleared');
    return true;
  } catch (err) {
    console.error('[Storage] Failed to clear state:', err);
    return false;
  }
}

/**
 * TODO: Backend sync - Fetch user state from server
 * @param {string} userId - User identifier
 * @returns {Promise<Object|null>} Server state or null if not found
 */
export async function syncFromServer(userId) {
  // TODO: Implement API call to fetch user state
  // Example endpoint: GET /api/users/{userId}/state
  
  console.warn('[Storage] syncFromServer() is a stub - backend not implemented');
  
  /*
  TODO: Implementation template:
  
  try {
    const response = await fetch(`/api/users/${userId}/state`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        console.log('[Storage] No server state found for user');
        return null;
      }
      throw new Error(`Server responded with ${response.status}`);
    }
    
    const serverState = await response.json();
    console.log('[Storage] State synced from server');
    
    // Merge server state with local state (server wins on conflicts)
    const localState = loadAppState();
    const mergedState = mergeStates(localState, serverState);
    
    // Save merged state locally
    saveAppState(mergedState);
    
    return mergedState;
    
  } catch (err) {
    console.error('[Storage] Failed to sync from server:', err);
    return null;
  }
  */
  
  return null;
}

/**
 * TODO: Backend sync - Push local state to server
 * @param {string} userId - User identifier
 * @param {Object} state - Application state to sync
 * @returns {Promise<boolean>} Success status
 */
export async function syncToServer(userId, state) {
  // TODO: Implement API call to push state to server
  // Example endpoint: PUT /api/users/{userId}/state
  
  console.warn('[Storage] syncToServer() is a stub - backend not implemented');
  
  /*
  TODO: Implementation template:
  
  try {
    const response = await fetch(`/api/users/${userId}/state`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state,
        timestamp: Date.now(),
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    
    // Mark state as clean after successful sync
    state.syncMeta.isDirty = false;
    state.syncMeta.lastSyncTimestamp = Date.now();
    saveAppState(state);
    
    console.log('[Storage] State synced to server');
    return true;
    
  } catch (err) {
    console.error('[Storage] Failed to sync to server:', err);
    return false;
  }
  */
  
  return false;
}

/**
 * TODO: Auto-sync functionality
 * Automatically sync state when changes are detected
 * @param {Object} state - Application state
 * @param {string} userId - User identifier
 */
export function enableAutoSync(state, userId) {
  // TODO: Implement automatic sync when state.syncMeta.isDirty is true
  
  console.warn('[Storage] enableAutoSync() is a stub - backend not implemented');
  
  /*
  TODO: Implementation template:
  
  const SYNC_INTERVAL = 30000; // 30 seconds
  
  setInterval(async () => {
    if (state.syncMeta.isDirty && userId) {
      console.log('[Storage] Auto-syncing dirty state...');
      await syncToServer(userId, state);
    }
  }, SYNC_INTERVAL);
  */
}

/**
 * Migrate old state format to current version
 * @private
 * @param {Object} oldState - State from previous version
 * @returns {Object} Migrated state
 */
function migrateState(oldState) {
  const newState = structuredClone(DEFAULT_STATE);
  
  // Migration from version 0 (original app.js format)
  if (!oldState.version) {
    // Map old format to new format
    if (oldState.currentStationLevels) {
      newState.workstationTiers = oldState.currentStationLevels;
    }
    
    if (oldState.completedQuestIds) {
      newState.questProgress.completedQuestIds = oldState.completedQuestIds;
    }
    
    if (oldState.selectedCategories) {
      newState.uiPreferences.selectedCategories = oldState.selectedCategories;
    }
    
    if (typeof oldState.showAll === 'boolean') {
      newState.uiPreferences.showAll = oldState.showAll;
    }
    
    if (typeof oldState.saveQuestItems === 'boolean') {
      newState.uiPreferences.saveQuestItems = oldState.saveQuestItems;
    }
    
    if (typeof oldState.enableProfitTips === 'boolean') {
      newState.uiPreferences.enableProfitTips = oldState.enableProfitTips;
    }
    
    if (typeof oldState.compactGrid === 'boolean') {
      newState.uiPreferences.compactGrid = oldState.compactGrid;
    }
    
    if (oldState.sortMode) {
      newState.uiPreferences.sortMode = oldState.sortMode;
    }
  }
  
  newState.version = CURRENT_VERSION;
  return newState;
}

/**
 * Deep merge two objects (source wins on conflicts)
 * @private
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Merged object
 */
function deepMerge(target, source) {
  const output = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      // Persisted values override defaults during merge (source wins).
      output[key] = source[key];
    }
  }
  
  return output;
}

/**
 * Get a specific preference value
 * @param {Object} state - Application state
 * @param {string} key - Preference key
 * @returns {*} Preference value
 */
export function getPreference(state, key) {
  return state.uiPreferences[key];
}

/**
 * Set a specific preference value
 * @param {Object} state - Application state
 * @param {string} key - Preference key
 * @param {*} value - New value
 */
export function setPreference(state, key, value) {
  state.uiPreferences[key] = value;
  saveAppState(state);
}

/**
 * Export current state for backup/debugging
 * @param {Object} state - Application state
 * @returns {string} JSON string of state
 */
export function exportState(state) {
  return JSON.stringify(state, null, 2);
}

/**
 * Import state from JSON (useful for restoring backups)
 * @param {string} jsonString - JSON state string
 * @returns {Object|null} Parsed state or null if invalid
 */
export function importState(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed.version) {
      saveAppState(parsed);
      return parsed;
    }
    throw new Error('Invalid state format');
  } catch (err) {
    console.error('[Storage] Failed to import state:', err);
    return null;
  }
}
