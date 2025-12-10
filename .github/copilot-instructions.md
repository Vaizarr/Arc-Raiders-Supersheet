# Copilot instructions for Arc Raiders Loot Helper

Keep suggestions tightly focused on this static web app. Prefer small, well-scoped edits that preserve the project's data-first structure.

- **Big picture:** This is a single-page static web app. UI lives in `index.html` (styles + DOM) and logic in `app.js`. Item metadata is a large in-memory dataset provided by `item-data.js` (`ICON_DATA`). Additional runtime inputs are JSON files in the `hideout/` folder and `workshop_upgrades.json`.

- **Run / debug:** The app fetches local JSON files via `fetch()` so `file://` will fail. Serve the folder over HTTP. Example (PowerShell):

  ```powershell
  python -m http.server 8000
  # or, if Node available:
  npx serve -l 8000 .
  ```

- **Key patterns to preserve**
  - Global single-file state is in `state` inside `app.js`. Modify state only where intended (init, event handlers, or small controlled helpers).
  - Item dataset authoritative source: `item-data.js` defines `ICON_DATA` array. When adding or changing items, edit this file (it's large — make minimal diffs).
  - Hideout/workstation data are read from `hideout/*.json`. `HIDEOUT_STATION_FILES` in `app.js` defines which files are loaded; update that list if you add new hideout JSON files.
  - Mapping between hideout IDs and game station IDs lives in `HIDEOUT_TO_GAME_STATION_ID` (see `toGameStationId` helper).

- **Where to change behavior** (examples)
  - To change station sidebar order: edit `TRACKED_STATION_ORDER` in `app.js`.
  - To add a new workshop rule/level: update `workshop_upgrades.json` and ensure `WORKSHOP_UPGRADES_FILE` path matches.
  - To change search/filter logic: edit `filterBySearch`, `computeItemFlags`, or `applyCategoryAndSearch` in `app.js`.

- **Performance & diffs**
  - `item-data.js` is a big generated/hand-edited file. Prefer small, targeted changes (add or modify single item objects) rather than wholesale reformatting.
  - Avoid drastically changing large arrays formatting — git diffs become noisy and harder to review.

- **Testing changes locally**
  - Start a local HTTP server (see above), open `http://localhost:8000/` and use DevTools console to inspect `state` and `ICON_DATA`.
  - Useful debug points: `initApp()`, `loadHideoutData()`, and `render()` in `app.js`.

- **Conventions**
  - JSON files in `hideout/` and `items/` follow the same shape as entries in `item-data.js` — reuse fields like `key`, `name`, `workstations`, `reasonSummary`.
  - UI strings are created in-place (no i18n). Keep text edits small and consistent with existing tone.

- **Do not change**
  - Avoid refactoring the global `state` object into many modules unless you also update `index.html` script loading and confirm the app still runs via local server.

If anything here is unclear or you want the instructions expanded (e.g., examples for adding a new hideout JSON or a small unit-test harness), tell me which section to expand.
