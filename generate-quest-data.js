#!/usr/bin/env node
/**
 * Quest Data Generator
 * 
 * This script processes all quest JSON files and generates:
 * 1. quest-graph.json - Normalized quest hierarchy
 * 2. item-quest-index.json - Item-to-quest mapping
 */

const fs = require('fs');
const path = require('path');

const QUESTS_DIR = path.join(__dirname, 'quests');
const OUTPUT_QUEST_GRAPH = path.join(__dirname, 'quest-graph.json');
const OUTPUT_ITEM_INDEX = path.join(__dirname, 'item-quest-index.json');

/**
 * Read all quest files from the quests directory
 */
function readQuestFiles() {
  const files = fs.readdirSync(QUESTS_DIR);
  const quests = {};

  for (const file of files) {
    if (!file.endsWith('.json')) continue;

    const filePath = path.join(QUESTS_DIR, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const quest = JSON.parse(content);
      
      // Normalize the quest data
      const normalized = {
        id: quest.id,
        name: quest.name?.en || 'Unknown Quest',
        trader: quest.trader || null,
        requiresItems: Array.isArray(quest.requiredItemIds) && quest.requiredItemIds.length > 0,
        requiredItems: Array.isArray(quest.requiredItemIds) 
          ? quest.requiredItemIds.map(item => ({
              itemId: item.itemId,
              quantity: item.quantity
            }))
          : [],
        previousQuestIds: Array.isArray(quest.previousQuestIds) ? quest.previousQuestIds : [],
        nextQuestIds: Array.isArray(quest.nextQuestIds) ? quest.nextQuestIds : [],
        isMain: false // Default, will be manually set later
      };

      quests[quest.id] = normalized;
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  return quests;
}

/**
 * Find root quests (quests with no previous quests)
 */
function findRoots(quests) {
  const roots = [];
  
  for (const [id, quest] of Object.entries(quests)) {
    if (quest.previousQuestIds.length === 0) {
      roots.push(id);
    }
  }
  
  return roots.sort();
}

/**
 * Generate quest-graph.json
 */
function generateQuestGraph(quests) {
  const roots = findRoots(quests);
  
  const questGraph = {
    quests,
    roots,
    mainQuestIds: [] // Empty for now, will be filled manually later
  };

  fs.writeFileSync(OUTPUT_QUEST_GRAPH, JSON.stringify(questGraph, null, 2), 'utf8');
  console.log(`✓ Generated quest-graph.json with ${Object.keys(quests).length} quests`);
  console.log(`  - ${roots.length} root quests (no prerequisites)`);
}

/**
 * Generate item-quest-index.json
 */
function generateItemQuestIndex(quests) {
  const itemIndex = {};

  for (const [questId, quest] of Object.entries(quests)) {
    if (!quest.requiresItems) continue;

    for (const item of quest.requiredItems) {
      const { itemId, quantity } = item;

      if (!itemIndex[itemId]) {
        itemIndex[itemId] = [];
      }

      itemIndex[itemId].push({
        questId: quest.id,
        questName: quest.name,
        trader: quest.trader,
        quantity: quantity,
        isMain: quest.isMain
      });
    }
  }

  // Sort each item's quest array by questId for consistency
  for (const itemId in itemIndex) {
    itemIndex[itemId].sort((a, b) => a.questId.localeCompare(b.questId));
  }

  fs.writeFileSync(OUTPUT_ITEM_INDEX, JSON.stringify(itemIndex, null, 2), 'utf8');
  
  const itemCount = Object.keys(itemIndex).length;
  const totalQuestReferences = Object.values(itemIndex).reduce((sum, arr) => sum + arr.length, 0);
  
  console.log(`✓ Generated item-quest-index.json`);
  console.log(`  - ${itemCount} unique items required by quests`);
  console.log(`  - ${totalQuestReferences} total item-quest relationships`);
}

/**
 * Main execution
 */
function main() {
  console.log('Quest Data Generator');
  console.log('====================\n');

  console.log('Reading quest files...');
  const quests = readQuestFiles();

  console.log('\nGenerating quest-graph.json...');
  generateQuestGraph(quests);

  console.log('\nGenerating item-quest-index.json...');
  generateItemQuestIndex(quests);

  console.log('\n✓ Generation complete!');
  console.log('\nOutput files:');
  console.log(`  - ${OUTPUT_QUEST_GRAPH}`);
  console.log(`  - ${OUTPUT_ITEM_INDEX}`);
}

// Run the script
main();
