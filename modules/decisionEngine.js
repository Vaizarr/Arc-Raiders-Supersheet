/**
 * decisionEngine.js - Core decision logic for item categorization
 * 
 * This module computes the "effective category" for items based on:
 * - Quest completion state
 * - Workstation tier progress
 * - Expedition phase tracking
 * - Economic profitability (sell vs recycle)
 * 
 * Decision priority (highest to lowest):
 * 1. NEED - Expedition items when tracking enabled
 * 2. KEEP - Active quest reasons OR workstation upgrades needed
 * 3. SELL - Profitable items when currency focus enabled
 * 4. RECYCLE - Default for recyclable items
 */

import { questManager } from '../questManager.js';
import { workstationManager } from '../workstationManager.js';

/**
 * Compute the effective category for an item based on current state
 * @param {Object} appState - Application state
 * @param {Object} item - Item object from itemGrid
 * @returns {Object} Decision object with category, reasons, and expired reasons
 */
export function computeEffectiveCategory(appState, item) {
  const reasons = [];
  const expiredReasons = [];
  const prefs = appState.uiPreferences;
  const expeditionState = appState.expeditionProgress || { trackExpedition: false, completedPhases: {} };
  
  // ===== 1. CHECK EXPEDITION (HIGHEST PRIORITY) =====
  if (expeditionState.trackExpedition && item.hasExpedition && item.expeditionPhases.length > 0) {
    // Check if any phase is NOT completed
    const activePhases = item.expeditionPhases.filter(
      phase => !expeditionState.completedPhases[phase]
    );
    
    if (activePhases.length > 0) {
      reasons.push({
        type: 'expedition',
        phases: activePhases,
        priority: 100, // Highest priority
        text: `Needed for Expedition Phase ${activePhases.join(', ')}`
      });
      
      return {
        category: 'need',
        effectiveCategory: 'need',
        baseCategory: item.baseCategory,
        reasons,
        expiredReasons,
        demoted: false
      };
    } else {
      // All phases completed
      expiredReasons.push({
        type: 'expedition',
        phases: item.expeditionPhases,
        text: 'All expedition phases completed'
      });
    }
  }
  
  // ===== 2. CHECK QUEST REASONS =====
  let hasActiveQuestReason = false;
  
  if (prefs.saveQuestItems && item.questIdsUsed.length > 0) {
    const activeQuests = [];
    const completedQuests = [];
    
    item.questIdsUsed.forEach(questId => {
      if (questManager.isQuestCompleted(appState, questId)) {
        completedQuests.push(questId);
      } else {
        activeQuests.push(questId);
      }
    });
    
    if (activeQuests.length > 0) {
      hasActiveQuestReason = true;
      reasons.push({
        type: 'quest',
        questIds: activeQuests,
        priority: 80,
        text: `Required for ${activeQuests.length} active quest${activeQuests.length > 1 ? 's' : ''}`
      });
    }
    
    if (completedQuests.length > 0) {
      expiredReasons.push({
        type: 'quest',
        questIds: completedQuests,
        text: `${completedQuests.length} quest${completedQuests.length > 1 ? 's' : ''} completed`
      });
    }
  } else if (!prefs.saveQuestItems && item.questIdsUsed.length > 0) {
    // Quest tracking disabled
    expiredReasons.push({
      type: 'quest',
      questIds: item.questIdsUsed,
      text: 'Quest tracking disabled'
    });
  }
  
  // Check if item needed for tracked quests (from quest manager)
  if (prefs.saveQuestItems && questManager.isItemNeededForTrackedQuests(appState, item.key)) {
    if (!hasActiveQuestReason) {
      hasActiveQuestReason = true;
      reasons.push({
        type: 'quest',
        priority: 80,
        text: 'Needed for tracked quests'
      });
    }
  }
  
  // ===== 3. CHECK WORKSTATION REASONS =====
  let hasActiveWorkstationReason = false;
  const workstationTracking = appState.workstationTracking || { enabled: true };
  
  if (workstationTracking.enabled && item.workstations && Object.keys(item.workstations).length > 0) {
    const activeStations = [];
    const reachedStations = [];
    
    for (const [stationId, tiers] of Object.entries(item.workstations)) {
      if (!Array.isArray(tiers)) continue;
      
      const currentTier = workstationManager.getTier(appState, stationId);
      const activeTiers = tiers.filter(tier => tier > currentTier);
      const reachedTiers = tiers.filter(tier => tier <= currentTier);
      
      if (activeTiers.length > 0) {
        activeStations.push({
          station: stationId,
          tiers: activeTiers,
          displayName: workstationManager.getDisplayName(stationId)
        });
      }
      
      if (reachedTiers.length > 0) {
        reachedStations.push({
          station: stationId,
          tiers: reachedTiers,
          displayName: workstationManager.getDisplayName(stationId)
        });
      }
    }
    
    if (activeStations.length > 0) {
      hasActiveWorkstationReason = true;
      reasons.push({
        type: 'workstation',
        stations: activeStations,
        priority: 70,
        text: `Needed for ${activeStations.length} workstation upgrade${activeStations.length > 1 ? 's' : ''}`
      });
    }
    
    if (reachedStations.length > 0) {
      expiredReasons.push({
        type: 'workstation',
        stations: reachedStations,
        text: `Workstation tier${reachedStations.length > 1 ? 's' : ''} already reached`
      });
    }
  } else if (!workstationTracking.enabled && item.workstations && Object.keys(item.workstations).length > 0) {
    // Workstation tracking disabled
    expiredReasons.push({
      type: 'workstation',
      text: 'Workstation tracking disabled'
    });
  }
  
  // ===== 4. DETERMINE EFFECTIVE CATEGORY =====
  
  // If item has active quest or workstation reasons → KEEP
  if (hasActiveQuestReason || hasActiveWorkstationReason) {
    return {
      category: 'keep',
      effectiveCategory: 'keep',
      baseCategory: item.baseCategory,
      reasons,
      expiredReasons,
      demoted: item.baseCategory === 'keep' && expiredReasons.length > 0
    };
  }
  
  // If item was KEEP but reasons expired → demote to economic decision
  const wasKeep = item.baseCategory === 'keep';
  const demoted = wasKeep && expiredReasons.length > 0;
  
  // Economic decision: SELL vs RECYCLE
  let effectiveCategory = item.baseCategory;
  
  // High-yield donors ALWAYS stay in RECYCLE (never reroute to SELL)
  if (item.isHighYieldDonor) {
    reasons.push({
      type: 'recycle',
      priority: 60,
      text: 'High-priority component donor'
    });
    effectiveCategory = 'recycle';
  }
  // Profitable items can be rerouted to SELL if currency focus enabled
  else if (
    prefs.enableProfitTips &&
    item.baseCategory === 'recycle' &&
    item.isSellMoreProfitable
  ) {
    reasons.push({
      type: 'economic',
      priority: 50,
      profitPercent: item.sellProfitPercent,
      text: `${item.sellProfitPercent}% more profit when selling`
    });
    effectiveCategory = 'sell';
  }
  
  return {
    category: effectiveCategory,
    effectiveCategory,
    baseCategory: item.baseCategory,
    reasons,
    expiredReasons,
    demoted
  };
}

/**
 * Check if an item is relevant for current progression
 * (has any active reasons)
 * @param {Object} appState - Application state
 * @param {Object} item - Item object
 * @returns {boolean}
 */
export function isItemRelevant(appState, item) {
  const decision = computeEffectiveCategory(appState, item);
  return decision.reasons.length > 0;
}

/**
 * Get priority score for sorting items
 * @param {Object} decision - Decision object from computeEffectiveCategory
 * @returns {number} Priority score (higher = more important)
 */
export function getPriorityScore(decision) {
  if (decision.reasons.length === 0) return 0;
  
  // Return highest priority reason
  return Math.max(...decision.reasons.map(r => r.priority || 0));
}

export default {
  computeEffectiveCategory,
  isItemRelevant,
  getPriorityScore
};
