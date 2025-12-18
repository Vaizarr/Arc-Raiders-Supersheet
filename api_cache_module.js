/**
 * API Cache Module
 * Handles caching of API responses in localStorage with automatic expiration
 */

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const CACHE_PREFIX = 'arc_api_cache_';

/**
 * Fetch data with automatic caching
 * @param {string} cacheKey - Unique identifier for this cached data
 * @param {Function} fetchFunction - Async function that returns the data to cache
 * @param {number} customDuration - Optional custom cache duration in milliseconds
 * @returns {Promise<any>} The fetched or cached data
 */
export async function fetchWithCache(cacheKey, fetchFunction, customDuration = CACHE_DURATION) {
  const fullCacheKey = CACHE_PREFIX + cacheKey;
  
  // Try to get cached data
  try {
    const cached = localStorage.getItem(fullCacheKey);
    
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const age = Date.now() - timestamp;
      
      // If cache is still fresh, return it
      if (age < customDuration) {
        console.log(`✓ Cache hit for "${cacheKey}" (${Math.round(age/1000/60)}min old)`);
        return data;
      } else {
        console.log(`⚠ Cache expired for "${cacheKey}" (${Math.round(age/1000/60)}min old)`);
      }
    }
  } catch (error) {
    console.warn(`Cache read error for "${cacheKey}":`, error);
  }
  
  // Cache miss or expired - fetch fresh data
  console.log(`↓ Fetching fresh data for "${cacheKey}"`);
  try {
    const data = await fetchFunction();
    
    // Store in cache with timestamp
    try {
      localStorage.setItem(fullCacheKey, JSON.stringify({
        data: data,
        timestamp: Date.now()
      }));
      console.log(`✓ Cached "${cacheKey}"`);
    } catch (storageError) {
      console.warn(`Failed to cache "${cacheKey}":`, storageError);
      // Continue even if caching fails
    }
    
    return data;
  } catch (error) {
    console.error(`✗ Failed to fetch "${cacheKey}":`, error);
    
    // If fetch fails but we have stale cache, return it as fallback
    try {
      const cached = localStorage.getItem(fullCacheKey);
      if (cached) {
        const { data } = JSON.parse(cached);
        console.log(`⚠ Using stale cache as fallback for "${cacheKey}"`);
        return data;
      }
    } catch (fallbackError) {
      // Ignore fallback errors
    }
    
    throw error;
  }
}

/**
 * Clear a specific cached item
 * @param {string} cacheKey - The cache key to clear
 */
export function clearCache(cacheKey) {
  const fullCacheKey = CACHE_PREFIX + cacheKey;
  localStorage.removeItem(fullCacheKey);
  console.log(`✓ Cleared cache for "${cacheKey}"`);
}

/**
 * Clear all API caches
 */
export function clearAllCaches() {
  const keys = Object.keys(localStorage);
  let cleared = 0;
  
  keys.forEach(key => {
    if (key.startsWith(CACHE_PREFIX)) {
      localStorage.removeItem(key);
      cleared++;
    }
  });
  
  console.log(`✓ Cleared ${cleared} cached items`);
}

/**
 * Get cache info for debugging
 * @returns {Array} Array of cache entries with metadata
 */
export function getCacheInfo() {
  const keys = Object.keys(localStorage);
  const caches = [];
  
  keys.forEach(key => {
    if (key.startsWith(CACHE_PREFIX)) {
      try {
        const { timestamp } = JSON.parse(localStorage.getItem(key));
        const age = Date.now() - timestamp;
        const ageMinutes = Math.round(age / 1000 / 60);
        
        caches.push({
          key: key.replace(CACHE_PREFIX, ''),
          ageMinutes: ageMinutes,
          expired: age > CACHE_DURATION,
          timestamp: new Date(timestamp).toLocaleString()
        });
      } catch (error) {
        // Skip invalid cache entries
      }
    }
  });
  
  return caches;
}

/**
 * Check if a cache key exists and is valid
 * @param {string} cacheKey - The cache key to check
 * @returns {boolean} True if cache exists and is not expired
 */
export function isCacheValid(cacheKey) {
  const fullCacheKey = CACHE_PREFIX + cacheKey;
  
  try {
    const cached = localStorage.getItem(fullCacheKey);
    if (!cached) return false;
    
    const { timestamp } = JSON.parse(cached);
    const age = Date.now() - timestamp;
    
    return age < CACHE_DURATION;
  } catch (error) {
    return false;
  }
}