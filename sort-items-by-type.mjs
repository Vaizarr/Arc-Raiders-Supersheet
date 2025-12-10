// sort-items-by-type.mjs
// Sorts ./items/*.json into subfolders based on the "type" field in item-data.js

import fs from "fs";
import path from "path";

const __dirname = path.resolve();

// Adjust these if your structure is different
const ITEM_DATA_FILE = path.join(__dirname, "item-data.js");
const ITEMS_DIR = path.join(__dirname, "items");

// Safety: dry-run first to see what it would do
const DRY_RUN = false; // set to false once you're happy with the output

// --- helpers -------------------------------------------------------------

function loadIconDataFromJs(filePath) {
  const src = fs.readFileSync(filePath, "utf8");

  // item-data.js looks like:
  // const ICON_DATA = [ ... ];
  // if (typeof window !== 'undefined') ...
  //
  // We only want the JSON array between the first '[' and the last ']'
  const start = src.indexOf("[");
  const end = src.lastIndexOf("]");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Could not locate JSON array in item-data.js");
  }

  const jsonText = src.slice(start, end + 1);
  return JSON.parse(jsonText);
}

function slugifyType(typeRaw) {
  if (!typeRaw) return "unknown";

  return typeRaw
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")   // spaces & punctuation -> _
    .replace(/^_+|_+$/g, "");      // trim leading/trailing _
}

// --- main ---------------------------------------------------------------

const iconData = loadIconDataFromJs(ITEM_DATA_FILE);

// Map: key -> typeSlug
const keyToTypeSlug = new Map();
for (const item of iconData) {
  const key = item.key;
  const typeRaw = item.type || "Unknown";
  const typeSlug = slugifyType(typeRaw);

  if (!key) continue;
  keyToTypeSlug.set(key, typeSlug);
}

console.log(`Loaded ${iconData.length} items from item-data.js`);
console.log(`Found ${new Set([...keyToTypeSlug.values()]).size} distinct types.\n`);

const files = fs.readdirSync(ITEMS_DIR).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const base = path.basename(file, ".json"); // this is the item key
  const typeSlug = keyToTypeSlug.get(base);

  if (!typeSlug) {
    console.warn(`[WARN] No type found for key '${base}' (file ${file}) – leaving in root.`);
    continue;
  }

  const src = path.join(ITEMS_DIR, file);
  const destDir = path.join(ITEMS_DIR, typeSlug);
  const dest = path.join(destDir, file);

  if (!fs.existsSync(destDir)) {
    if (!DRY_RUN) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    console.log(`[INFO] Creating folder: ${path.relative(__dirname, destDir)}`);
  }

  if (DRY_RUN) {
    console.log(`[DRY RUN] Would move: ${file}  ->  ${path.join(typeSlug, file)}`);
  } else {
    fs.renameSync(src, dest);
    console.log(`Moved: ${file}  ->  ${path.join(typeSlug, file)}`);
  }
}

console.log("\nDone.");
console.log(DRY_RUN ? "DRY_RUN was ON (no files actually moved)." : "Files have been moved.");
