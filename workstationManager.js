/**
 * workstationManager.js - Workstation tier tracking and item relevance
 * Handles workstation data and determines which items are needed for upgrades
 */

import { saveAppState } from './storage.js';

// Hideout source files → hideout JSONs
const HIDEOUT_STATION_FILES = [
  'hideout/scrappy.json',
  'hideout/equipment_bench.json',
  'hideout/weapon_bench.json',
  'hideout/utility_bench.json',
  'hideout/med_station.json',
  'hideout/refiner.json',
  'hideout/explosives_bench.json',
];

// Order for UI sidebar
const TRACKED_STATION_ORDER = [
  'scrappy',
  'equipment_bench',
  'weapon_bench',
  'utility_bench',
  'med_station',
  'refiner',
  'explosives_bench',
];

// Mapping hideout ID → item-data.js workstation IDs
const HIDEOUT_TO_GAME_STATION_ID = {
  scrappy: 'scrappy',
  equipment_bench: 'gear_bench',
  weapon_bench: 'gunsmith',
  utility_bench: 'utility_station',
  med_station: 'medical_lab',
  refiner: 'refiner',
  explosives_bench: 'explosives_station',
};

const STATION_DISPLAY_NAMES = {
  scrappy: 'Scrappy',
  gear_bench: 'Gear Bench',
  gunsmith: 'Gunsmith',
  utility_station: 'Utility Station',
  medical_lab: 'Medical Lab',
  refiner: 'Refiner',
  explosives_station: 'Explosives',
};

/**
 * Workstation manager instance
 */
class WorkstationManager {
  constructor() {
    this.stationsById = {};
    this.stationsList = [];
    this.workshopUpgrades = null;
  }

  /**
   * Initialize workstation data
   * TODO: Load from backend API instead of static files
   */
  async initialize() {
    try {
      // Load hideout station data
      const results = await Promise.all(
        HIDEOUT_STATION_FILES.map(async (file) => {
          // TODO: Replace with API call: GET /api/workstations/{stationId}
          const json = await this.fetchJson(file);
          if (!json || !json.id) return null;

          // Normalize: convert hideout ID → game station ID
          const gameId = this.toGameStationId(json.id);
          const obj = { ...json, gameStationId: gameId };

          this.stationsById[json.id] = obj;
          return obj;
        })
      );

      this.stationsList = TRACKED_STATION_ORDER
        .map((id) => this.stationsById[id])
        .filter(Boolean);

      // TODO: Replace with API call: GET /api/workstations/upgrades
      this.workshopUpgrades = await this.fetchJson('workshop_upgrades.json');

      console.log('[WorkstationManager] Initialized with', this.stationsList.length, 'workstations');
      return true;
    } catch (err) {
      console.error('[WorkstationManager] Initialization failed:', err);
      return false;
    }
  }

  /**
   * Initialize default workstation tiers in app state
   * @param {Object} appState - Application state
   */
  initializeDefaultTiers(appState) {
    this.stationsList.forEach((st) => {
      const id = st.gameStationId;
      if (!(id in appState.workstationTiers)) {
        // Scrappy starts at T1, others at T0
        appState.workstationTiers[id] = id === 'scrappy' ? 1 : 0;
      }
    });
    
    saveAppState(appState);
  }

  /**
   * Get workstation tier level
   * @param {Object} appState - Application state
   * @param {string} stationId - Workstation ID
   * @returns {number} Current tier level
   */
  getTier(appState, stationId) {
    return appState.workstationTiers[stationId] ?? 0;
  }

  /**
   * Set workstation tier level
   * @param {Object} appState - Application state
   * @param {string} stationId - Workstation ID
   * @param {number} tier - New tier level
   */
  setTier(appState, stationId, tier) {
    appState.workstationTiers[stationId] = tier;
    console.log('[WorkstationManager] Set', stationId, 'to tier', tier);
    saveAppState(appState);
  }

  /**
   * Check if item is relevant for workstation upgrades
   * @param {Object} appState - Application state
   * @param {Object} item - Item object with workstations property
   * @returns {boolean} True if item is needed for future upgrades
   */
  isItemRelevantForUpgrades(appState, item) {
    if (!item.workstations) return false;

    const workstations = item.workstations;

    for (const [stationId, requiredLevels] of Object.entries(workstations)) {
      if (!Array.isArray(requiredLevels)) continue;

      const playerTier = this.getTier(appState, stationId);

      // Check if item is needed for any tier above current tier
      if (requiredLevels.some((lvl) => lvl > playerTier)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Get workstation display name
   * @param {string} stationId - Workstation ID
   * @returns {string} Display name
   */
  getDisplayName(stationId) {
    return STATION_DISPLAY_NAMES[stationId] || stationId;
  }

  /**
   * Get all workstations list
   * @returns {Array} List of workstation objects
   */
  getStations() {
    return this.stationsList;
  }

  /**
   * Get workstation by hideout ID
   * @param {string} hideoutId - Hideout station ID
   * @returns {Object|null} Workstation object or null
   */
  getStation(hideoutId) {
    return this.stationsById[hideoutId] || null;
  }

  /**
   * Get max tier for a workstation
   * @param {string} hideoutId - Hideout station ID
   * @returns {number} Maximum tier level
   */
  getMaxTier(hideoutId) {
    const station = this.getStation(hideoutId);
    if (!station) return 0;
    return station.maxLevel ?? (station.levels?.length ?? 0);
  }

  /**
   * Get items needed for specific workstation tier
   * @param {string} stationId - Workstation ID
   * @param {number} tier - Target tier
   * @returns {Array} List of required items
   */
  getItemsForTier(stationId, tier) {
    // TODO: Implement based on workshop upgrades data
    // This would parse workshopUpgrades to find items needed for specific tier
    return [];
  }

  /**
   * Convert hideout ID to game station ID
   * @private
   * @param {string} hideoutId - Hideout station ID
   * @returns {string} Game station ID
   */
  toGameStationId(hideoutId) {
    return HIDEOUT_TO_GAME_STATION_ID[hideoutId] || hideoutId;
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
      console.warn('[WorkstationManager] fetchJson error:', path, err);
      return null;
    }
  }

  /**
   * Export current workstation configuration
   * @param {Object} appState - Application state
   * @returns {Object} Workstation tiers configuration
   */
  exportConfig(appState) {
    return {
      tiers: { ...appState.workstationTiers },
      timestamp: Date.now(),
    };
  }

  /**
   * Import workstation configuration
   * @param {Object} appState - Application state
   * @param {Object} config - Configuration to import
   * @returns {boolean} Success status
   */
  importConfig(appState, config) {
    try {
      if (config.tiers) {
        appState.workstationTiers = { ...config.tiers };
        saveAppState(appState);
        console.log('[WorkstationManager] Configuration imported');
        return true;
      }
      return false;
    } catch (err) {
      console.error('[WorkstationManager] Import failed:', err);
      return false;
    }
  }
}

// Export singleton instance
export const workstationManager = new WorkstationManager();
