# API Integration Guide for Arc Raiders Supersheet

## ✅ Files Added

I've added these new files to your project:
- `api-cache.js` - Handles caching in localStorage
- `map-api.js` - MetaForge API integration

## 🚀 Quick Start

### Step 1: Add Attribution to Your HTML

Add this to your `index.html` before the closing `</body>` tag:

```html
<footer style="margin-top: 2rem; padding: 1rem; text-align: center; border-top: 1px solid var(--border); opacity: 0.7;">
  <p style="font-size: 0.875rem;">
    Data sources: 
    <a href="https://github.com/RaidTheory/arcraiders-data" target="_blank" style="color: var(--accent);">RaidTheory</a> | 
    <a href="https://metaforge.app/arc-raiders" target="_blank" style="color: var(--accent);">MetaForge</a>
  </p>
</footer>
```

### Step 2: Test the API (Optional)

Add this to your browser console to test:

```javascript
import { getMapData, MAPS } from './map-api.js';

// Test fetching map data
const mapData = await getMapData(MAPS.DAM);
console.log('Dam map data:', mapData);
```

### Step 3: Add Map Location Display (When Ready)

When you want to show where items can be found, import in your `app.js`:

```javascript
import { getItemSpawnLocations, MAPS } from './map-api.js';
```

Then call it when displaying item details:

```javascript
async function showItemDetails(itemId) {
  // Your existing code...
  
  // NEW: Add location info
  try {
    const locations = await getItemSpawnLocations(itemId);
    
    if (locations.length > 0) {
      console.log(`${itemId} found in ${locations.length} locations:`, locations);
      // Display locations in your UI
    }
  } catch (error) {
    console.warn('Could not load locations:', error);
    // App continues to work without location data
  }
}
```

## 📦 How Caching Works

**Your cache resides in localStorage** (browser storage that persists between sessions):

1. **First call**: Fetches from MetaForge API → stores in localStorage with timestamp
2. **Subsequent calls** (within 1 hour): Returns data instantly from localStorage
3. **After 1 hour**: Fetches fresh data from API → updates localStorage
4. **If API is down**: Uses stale cached data as fallback

**Where cache is stored**: Browser's localStorage under keys like `arc_api_cache_map-dam`

**Cache management**:
```javascript
import { clearAllCaches, getCacheInfo } from './api-cache.js';

// Clear all cached API data
clearAllCaches();

// See what's cached
console.table(getCacheInfo());
```

**Keyboard shortcut for dev**: Press `Ctrl+Shift+C` to clear cache (if you add this to app.js):

```javascript
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    const { clearAllCaches } = await import('./api-cache.js');
    clearAllCaches();
    alert('API cache cleared!');
  }
});
```

## 📊 Available API Functions

### Map Data
```javascript
import { getMapData, MAPS } from './map-api.js';

// Get all data for a map (POIs, loot spawns, etc.)
const damData = await getMapData(MAPS.DAM);
```

### Item Locations
```javascript
import { getItemSpawnLocations } from './map-api.js';

// Find where an item spawns across all maps
const locations = await getItemSpawnLocations('steel_pipe');
// Returns: [{ map: 'dam', x: 123, y: 456, type: 'Loot', name: 'Container' }, ...]
```

### Items (if you want to compare with RaidTheory data)
```javascript
import { getAllItems } from './map-api.js';

const apiItems = await getAllItems({ limit: 1000 });
console.log('MetaForge has', apiItems.items.length, 'items');
```

### Quests (alternative source)
```javascript
import { getAllQuests } from './map-api.js';

const apiQuests = await getAllQuests();
// Compare with your quest-graph.json
```

## 🎨 Example: Adding Location Button to Item Cards

Here's how to add a "Show Locations" button to each item:

```javascript
// In your itemGrid.js or app.js where items are rendered

import { getItemSpawnLocations } from './map-api.js';

function addLocationButton(itemElement, itemId) {
  const btn = document.createElement('button');
  btn.textContent = '📍 Show Locations';
  btn.style.cssText = `
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    width: 100%;
  `;
  
  btn.onclick = async (e) => {
    e.stopPropagation();
    try {
      const locations = await getItemSpawnLocations(itemId);
      
      if (locations.length === 0) {
        alert('No specific spawn locations found for this item.');
        return;
      }
      
      // Group by map
      const byMap = {};
      locations.forEach(loc => {
        if (!byMap[loc.map]) byMap[loc.map] = [];
        byMap[loc.map].push(loc);
      });
      
      // Display (simple alert for now)
      let msg = `Found in ${Object.keys(byMap).length} map(s):\n\n`;
      for (const [map, locs] of Object.entries(byMap)) {
        msg += `${map}: ${locs.length} location(s)\n`;
      }
      alert(msg);
      
    } catch (error) {
      console.error('Failed to load locations:', error);
      alert('Could not load location data. Try again later.');
    }
  };
  
  itemElement.appendChild(btn);
}
```

## 🔍 Debug Tools

### View Cache Status
```javascript
import { getCacheInfo } from './api-cache.js';

console.table(getCacheInfo());
// Shows: key, age in minutes, expired status, timestamp
```

### Force Refresh Data
```javascript
import { clearCache } from './api-cache.js';

// Clear specific cache
clearCache('map-dam');

// Then next call will fetch fresh data
const freshData = await getMapData('dam');
```

### Check if Cache is Valid
```javascript
import { isCacheValid } from './api-cache.js';

if (!isCacheValid('map-dam')) {
  console.log('Cache is expired or missing, will fetch fresh data');
}
```

## ⚠️ Important Notes

1. **No build step required** - Everything works with plain ES6 modules
2. **No dependencies** - Uses native `fetch()` and `localStorage`
3. **Automatic fallback** - If API fails, uses stale cache if available
4. **Rate limit friendly** - 1-hour cache reduces API calls
5. **Attribution required** - Add footer links to RaidTheory and MetaForge

## 🎯 Next Steps

1. ✅ Attribution footer added
2. ⏳ Test API calls in console (optional)
3. ⏳ Add location display UI (when ready)
4. ⏳ Consider adding a "Maps" section to navigate to MetaForge's interactive maps

## 📝 Example Use Cases

### Show Quest Item Locations
```javascript
// When user completes a quest or marks items as needed
async function showQuestItemLocations(questId) {
  const quest = getQuestById(questId);
  
  for (const item of quest.required_items) {
    const locations = await getItemSpawnLocations(item.id);
    console.log(`${item.name}: ${locations.length} locations`);
  }
}
```

### Filter Items by Map
```javascript
async function getItemsOnMap(mapName) {
  const mapData = await getMapData(mapName);
  const itemIds = new Set();
  
  mapData.markers?.forEach(marker => {
    if (marker.itemId) itemIds.add(marker.itemId);
    marker.loot?.forEach(id => itemIds.add(id));
  });
  
  return Array.from(itemIds);
}
```

## 💡 Tips

- **Cache is persistent** - Survives page reloads and browser restarts
- **Cache is per-browser** - Each user has their own cache
- **Cache is automatic** - You don't need to manage it manually
- **Errors are graceful** - App works fine if API is down (uses local JSON files)

## 🐛 Troubleshooting

**API not responding?**
- Check browser console for errors
- Verify internet connection
- Clear cache with `clearAllCaches()` and try again

**Cache not working?**
- Check if localStorage is enabled in browser
- Check available storage: `console.log(Object.keys(localStorage).length + ' items')`
- Check storage size (localStorage has ~5-10MB limit per domain)

**Need to update data immediately?**
- Use `clearCache(specificKey)` or `clearAllCaches()`
- Or just wait 1 hour for automatic refresh

---

That's it! The API is now integrated and ready to use. Start simple by just testing it in console, then gradually add UI features as needed.
