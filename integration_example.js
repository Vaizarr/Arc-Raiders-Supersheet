/**
 * INTEGRATION EXAMPLE
 * How to add API features to your existing Arc Raiders Supersheet
 * 
 * This file shows you how to integrate the new modules into your app.js
 */

// ============================================================================
// STEP 1: Import the new modules at the top of your app.js
// ============================================================================

import { 
  getAllItems, 
  getItemById, 
  getMapData,
  MAPS 
} from './map-api.js';

import { 
  showItemLocations, 
  addLocationButtonsToItems,
  addCacheManagementPanel 
} from './location-display.js';

import { 
  clearAllCaches, 
  getCacheInfo 
} from './api-cache.js';


// ============================================================================
// STEP 2: Add location display to your existing item detail view
// ============================================================================

// Example: Modify your existing item click handler
function onItemCardClick(itemId) {
  // Your existing code to show item details
  showItemDetails(itemId);
  
  // NEW: Add location information
  showItemLocations(itemId, 'item-locations-container');
}


// ============================================================================
// STEP 3: Add HTML container for locations in your index.html
// ============================================================================

/*
Add this to your item detail panel in index.html:

<div class="item-detail-panel">
  <h2 id="item-name"></h2>
  <div id="item-description"></div>
  
  <!-- Your existing item info -->
  <div id="item-info"></div>
  
  <!-- NEW: Location display area -->
  <div id="item-locations-container" class="location-section">
    <!-- Location data will be inserted here -->
  </div>
</div>
*/


// ============================================================================
// STEP 4: Add CSS for the new location displays
// ============================================================================

/*
Add this to your CSS file:

.location-section {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #888;
}

.no-locations {
  text-align: center;
  padding: 1rem;
  color: #888;
}

.map-section {
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.map-section h4 {
  margin-top: 0;
  color: #4CAF50;
}

.location-list {
  list-style: none;
  padding: 0;
}

.location-list li {
  padding: 0.5rem;
  margin: 0.5rem 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.location-type {
  background: #2196F3;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.location-coords {
  color: #888;
  font-family: monospace;
}

.map-links {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.map-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.map-links a {
  color: #4CAF50;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 4px;
  border: 1px solid #4CAF50;
  transition: all 0.2s;
}

.map-links a:hover {
  background: rgba(76, 175, 80, 0.2);
  transform: translateY(-2px);
}

.error {
  text-align: center;
  padding: 1rem;
  color: #f44336;
}

.error button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error button:hover {
  background: #d32f2f;
}

/ * Location button on item cards * /
.location-btn {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  width: 100%;
  transition: background 0.2s;
}

.location-btn:hover {
  background: #1976D2;
}

/ * Modal styles * /
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #1a1a1a;
  margin: 5% auto;
  padding: 2rem;
  border: 1px solid #888;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #fff;
}
*/


// ============================================================================
// STEP 5: Optional - Add settings panel for cache management
// ============================================================================

// Add this to your settings/debug page
function initializeSettings() {
  // Your existing settings code
  
  // NEW: Add cache management
  addCacheManagementPanel('cache-settings');
}


// ============================================================================
// STEP 6: Optional - Compare local vs API data
// ============================================================================

async function compareLocalVsAPIData() {
  console.log('Comparing local data with MetaForge API...');
  
  try {
    // Fetch fresh API data
    const apiData = await getAllItems({ limit: 1000 });
    
    // Your local data (from item-data.js)
    const localItemCount = Object.keys(ICON_DATA).length;
    const apiItemCount = apiData.items?.length || 0;
    
    console.log(`Local items: ${localItemCount}`);
    console.log(`API items: ${apiItemCount}`);
    
    if (apiItemCount > localItemCount) {
      console.warn(`API has ${apiItemCount - localItemCount} more items than local data!`);
      // You could prompt user to update
    }
    
  } catch (error) {
    console.error('Could not compare data:', error);
  }
}


// ============================================================================
// STEP 7: Add attribution footer (required!)
// ============================================================================

/*
Add this to your index.html footer:

<footer class="attribution">
  <p>
    Data sources: 
    <a href="https://github.com/RaidTheory/arcraiders-data" target="_blank">RaidTheory</a> | 
    <a href="https://metaforge.app/arc-raiders" target="_blank">MetaForge</a>
  </p>
  <p>Arc Raiders © Embark Studios. This is a community tool.</p>
</footer>
*/


// ============================================================================
// STEP 8: Initialize everything when your app loads
// ============================================================================

// Add this to your existing initialization code
document.addEventListener('DOMContentLoaded', async () => {
  // Your existing init code
  initializeApp();
  
  // NEW: Add location buttons to existing item cards
  addLocationButtonsToItems();
  
  // NEW: Optional - compare data versions
  // compareLocalVsAPIData();
  
  // NEW: Add keyboard shortcut to clear cache (for development)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      console.log('Clearing cache...');
      clearAllCaches();
      alert('Cache cleared! Refresh to fetch fresh data.');
    }
  });
  
  console.log('✅ API integration initialized');
});


// ============================================================================
// EXAMPLE USE CASES
// ============================================================================

// Example 1: Show locations when hovering over an item
function addHoverLocations() {
  const items = document.querySelectorAll('.item-card');
  
  items.forEach(item => {
    const itemId = item.dataset.itemId;
    
    item.addEventListener('mouseenter', async () => {
      // Quick preview of location count
      try {
        const locations = await getItemSpawnLocations(itemId);
        if (locations.length > 0) {
          item.title = `Found in ${locations.length} location(s)`;
        }
      } catch (error) {
        // Silently fail for hover
      }
    });
  });
}

// Example 2: Filter items by map availability
async function filterItemsByMap(mapName) {
  console.log(`Finding items available in ${mapName}...`);
  
  try {
    const mapData = await getMapData(mapName);
    
    // Extract unique item IDs from map
    const availableItems = new Set();
    mapData.markers?.forEach(marker => {
      if (marker.itemId) availableItems.add(marker.itemId);
      if (marker.loot) marker.loot.forEach(id => availableItems.add(id));
    });
    
    console.log(`Found ${availableItems.size} items in ${mapName}`);
    return Array.from(availableItems);
    
  } catch (error) {
    console.error('Failed to filter by map:', error);
    return [];
  }
}

// Example 3: Show where to find items for a quest
async function showQuestItemLocations(questId) {
  // Get quest from your existing quest-graph.json
  const quest = getQuestById(questId); // Your existing function
  
  console.log(`Finding locations for quest: ${quest.name}`);
  
  for (const requiredItem of quest.required_items) {
    console.log(`\nItem: ${requiredItem.name}`);
    
    try {
      const locations = await getItemSpawnLocations(requiredItem.id);
      
      if (locations.length > 0) {
        console.log(`  Found in ${locations.length} locations:`);
        locations.forEach(loc => {
          console.log(`  - ${loc.map}: (${loc.x}, ${loc.y})`);
        });
      } else {
        console.log('  No specific spawn locations found');
      }
    } catch (error) {
      console.error(`  Error: ${error.message}`);
    }
  }
}


// ============================================================================
// TESTING
// ============================================================================

// Add these functions to your console for testing
window.testAPI = {
  showLocations: (itemId) => showItemLocations(itemId, 'item-locations-container'),
  getMapData: (mapName) => getMapData(mapName),
  clearCache: () => clearAllCaches(),
  cacheInfo: () => console.table(getCacheInfo()),
  compareData: () => compareLocalVsAPIData()
};

console.log('Test API functions available via window.testAPI');


// ============================================================================
// NOTES
// ============================================================================

/*
USAGE NOTES:

1. The cache automatically refreshes after 1 hour
2. You can force refresh with Ctrl+Shift+C (added above)
3. All API calls fail gracefully - your app will still work offline
4. The cache uses localStorage, so it persists across page reloads
5. You can check cache status anytime with: window.testAPI.cacheInfo()

ATTRIBUTION REQUIRED:

- Add links to RaidTheory and MetaForge in your footer
- For commercial use, contact MetaForge via their Discord

API RATE LIMITS:

- MetaForge asks you to be respectful with requests
- Cache helps avoid hitting rate limits
- Don't call APIs in loops - fetch once and cache

NEXT STEPS:

1. Copy the 3 module files to your project
2. Add the HTML containers for location display
3. Add the CSS styles
4. Import modules in your app.js
5. Add attribution footer
6. Test with: window.testAPI.showLocations('some-item-id')
*/