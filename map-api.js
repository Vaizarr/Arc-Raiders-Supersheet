/**
 * MetaForge API Integration Module
 * Fetches Arc Raiders data from MetaForge API with automatic caching
 * 
 * Attribution: This project uses data from MetaForge (https://metaforge.app/arc-raiders)
 * Please add attribution link in your UI footer as required by their API terms
 */

import { fetchWithCache } from './api-cache.js';

const METAFORGE_API = 'https://metaforge.app/api';
const GAME_ID = 'arc-raiders';

// Available map names in Arc Raiders
export const MAPS = {
  DAM: 'dam',
  SPACEPORT: 'spaceport',
  BURIED_CITY: 'buried-city',
  BLUE_GATE: 'blue-gate',
  STELLA_MONTIS: 'stella-montis'
};

/**
 * Fetch all items from MetaForge API
 * @param {Object} options - Query options
 * @param {number} options.page - Page number (default: 1)
 * @param {number} options.limit - Items per page (default: 100)
 * @param {string} options.category - Filter by category
 * @returns {Promise<Object>} Items data with metadata
 */
export async function getAllItems(options = {}) {
  const { page = 1, limit = 100, category = '' } = options;
  
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString()
  });
  
  if (category) params.append('category', category);
  
  const cacheKey = `items-all-${params.toString()}`;
  
  return fetchWithCache(cacheKey, async () => {
    const url = `${METAFORGE_API}/${GAME_ID}/items?${params}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Fetch a specific item by ID with optional location data
 * @param {string} itemId - The item ID
 * @param {boolean} includeLocations - Include map location data
 * @returns {Promise<Object>} Item data
 */
export async function getItemById(itemId, includeLocations = false) {
  const cacheKey = `item-${itemId}${includeLocations ? '-locations' : ''}`;
  
  return fetchWithCache(cacheKey, async () => {
    const params = new URLSearchParams({ id: itemId });
    if (includeLocations) params.append('includeLocations', 'true');
    
    const url = `${METAFORGE_API}/${GAME_ID}/items?${params}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Fetch all ARCs (missions/activities)
 * @param {boolean} includeLoot - Include loot data
 * @returns {Promise<Array>} Array of ARCs
 */
export async function getAllArcs(includeLoot = false) {
  const cacheKey = `arcs-all${includeLoot ? '-loot' : ''}`;
  
  return fetchWithCache(cacheKey, async () => {
    const params = new URLSearchParams();
    if (includeLoot) params.append('includeLoot', 'true');
    
    const url = `${METAFORGE_API}/${GAME_ID}/arcs${params.toString() ? '?' + params : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Fetch all quests
 * @returns {Promise<Array>} Array of quests with requirements and rewards
 */
export async function getAllQuests() {
  const cacheKey = 'quests-all';
  
  return fetchWithCache(cacheKey, async () => {
    const url = `${METAFORGE_API}/${GAME_ID}/quests`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Fetch map data for a specific map
 * @param {string} mapName - Name of the map (use MAPS constant)
 * @returns {Promise<Object>} Map data including POIs, loot spawns, etc.
 */
export async function getMapData(mapName) {
  if (!Object.values(MAPS).includes(mapName)) {
    throw new Error(`Invalid map name: ${mapName}. Use one of: ${Object.values(MAPS).join(', ')}`);
  }
  
  const cacheKey = `map-${mapName}`;
  
  return fetchWithCache(cacheKey, async () => {
    const params = new URLSearchParams({
      game: GAME_ID,
      map: mapName
    });
    
    const url = `${METAFORGE_API}/game-map-data?${params}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Fetch all event timers
 * @returns {Promise<Array>} Array of event timers
 */
export async function getEventTimers() {
  const cacheKey = 'event-timers';
  
  // Cache for shorter duration (15 minutes) since events are time-sensitive
  return fetchWithCache(cacheKey, async () => {
    const url = `${METAFORGE_API}/${GAME_ID}/event-timers`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  }, 15 * 60 * 1000); // 15 minutes
}

/**
 * Fetch all trader inventories
 * @returns {Promise<Array>} Array of traders with their inventories
 */
export async function getTraders() {
  const cacheKey = 'traders-all';
  
  return fetchWithCache(cacheKey, async () => {
    const url = `${METAFORGE_API}/${GAME_ID}/traders`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Search for items by name
 * @param {string} searchTerm - Search term
 * @returns {Promise<Array>} Matching items
 */
export async function searchItems(searchTerm) {
  if (!searchTerm || searchTerm.length < 2) {
    throw new Error('Search term must be at least 2 characters');
  }
  
  const cacheKey = `search-${searchTerm.toLowerCase()}`;
  
  return fetchWithCache(cacheKey, async () => {
    const params = new URLSearchParams({
      search: searchTerm
    });
    
    const url = `${METAFORGE_API}/${GAME_ID}/items?${params}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`MetaForge API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  });
}

/**
 * Get item spawn locations across all maps
 * This combines data from multiple map endpoints
 * @param {string} itemId - Item ID to search for
 * @returns {Promise<Array>} Array of locations where item spawns
 */
export async function getItemSpawnLocations(itemId) {
  const cacheKey = `item-spawns-${itemId}`;
  
  return fetchWithCache(cacheKey, async () => {
    const locations = [];
    
    // Fetch all maps and search for the item
    const mapPromises = Object.values(MAPS).map(async (mapName) => {
      try {
        const mapData = await getMapData(mapName);
        
        // Search through map data for item spawns
        if (mapData.markers) {
          mapData.markers.forEach(marker => {
            if (marker.itemId === itemId || marker.loot?.includes(itemId)) {
              locations.push({
                map: mapName,
                x: marker.x,
                y: marker.y,
                type: marker.type,
                name: marker.name
              });
            }
          });
        }
      } catch (error) {
        console.warn(`Could not fetch map ${mapName}:`, error);
      }
    });
    
    await Promise.allSettled(mapPromises);
    
    return locations;
  });
}
