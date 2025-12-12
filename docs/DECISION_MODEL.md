# Decision Model (KEEP / RECYCLE / SELL)

This project’s core product is **item management**:
help the player decide what to do with each item — **KEEP**, **RECYCLE**, or **SELL** —
so they have required items ready *when needed*, and can safely liquidate items as soon as they’re no longer useful.

Progression (quests, workstation tiers, expedition planning) is the primary signal that drives these decisions.

---

## 1) Current behavior (today)

### 1.1 Item categories
Each item currently has a `baseCategory` (keep/recycle/sell) coming from item data (`ICON_DATA`).
The UI uses this category to filter/highlight and to structure the player’s decisions.

### 1.2 Signals and highlighting
The app computes **display flags** per item (not a full decision engine yet), including:
- `isQuestTracked`: item is required for a currently selected quest (or has quest reasons not completed)
- `isWorkstationRelevant`: item is relevant for upgrades based on tracked workstation tiers
- profit tip highlighting (when enabled + sell/recycle categories are active)
- expedition relevance (via `hasExpedition`, used as a sort signal)

### 1.3 Sorting intent (recommended)
“Recommended” sorting currently prioritizes:
1) profit opportunities (when enabled),
2) quest relevance,
3) workstation relevance,
4) expedition relevance,
5) category rank,
6) item value,
7) name.

This is already aligned with the goal: surface what matters most for decisions.

---

## 2) Target behavior (direction)

The long-term goal is a **dynamic decision engine** where an item’s final action can change based on:
- progression state (quests completed / selected, workstation tiers, expedition plan),
- user preferences (currency vs progression speed, recycle priorities),
- economics (sell value vs recycle yields / conversion usefulness),
- personal shortages (“I’m low on X”, “I want to craft Y”).

As the player progresses, the “KEEP” set should shrink automatically:
when a requirement is satisfied/completed, previously reserved items become eligible for RECYCLE/SELL.

---

## 3) Decision hierarchy (final action)

Final action is determined by highest-priority active rule:

1. **KEEP** (reserved for upcoming progression or explicit stash)
2. **RECYCLE** (best conversion toward current targets/shortages/preferences)
3. **SELL** (default when neither KEEP nor RECYCLE is beneficial)

Hard rule: **KEEP must never be overridden by economics**.

---

## 4) Reasons: the backbone of explainability

Every recommendation must be explainable. The engine should produce structured “reasons” per item.

### 4.1 Reason schema (suggested)
A reason should be a small object like:

- `type`: `quest` | `workshop` | `project` | `expedition` | `shortage` | `economic`
- `sourceId`: questId, stationId, targetId, etc.
- `detail`: optional short text (UI-friendly)
- `priority`: optional numeric weight/tier
- `until`: optional expiration condition (e.g. quest completed, tier reached)

### 4.2 Existing reason types in data
Items already include `reasons[]` with types like:
- `quest` (with questId references)
- `workshop`
- `project`

These should be reused rather than replaced.

### 4.3 Expiring reasons (critical)
Many reasons must expire as progression changes:
- Quest requirement reason expires when quest is completed (or no longer tracked/needed).
- Workstation requirement expires when the tracked tier target is reached.
- Expedition stash expires when expedition saving is disabled or phase changes.

This is how the app avoids “keep everything forever”.

---

## 5) Decision engine output contract (what UI should consume)

For each item, the decision engine should output:

- `action`: KEEP | RECYCLE | SELL
- `priority`: number/tier for sorting and badges
- `reasons[]`: structured explainability payload
- optional: `suggestedQtyToKeep` (future)
- optional: `routingHint` (e.g. “Recycle because it yields Component X for Shortage Y”)

The UI should not need to re-derive core logic; it should render this output.

---

## 6) UX requirements (non-negotiable feel)

The UI should:
- make decisions fast (scan → decide → act),
- reduce cognitive load,
- show “why” without clutter (progressive disclosure: hover/click details),
- make priority obvious with strong visual cues.

A good rule of thumb:
- default view: category + priority cues
- on demand: explanation (“kept for Quest A”, “recycle yields Part B for target C”)

---

## 7) Planned signals (future modules / data)

The model should remain lightweight but ready to accept new signals:

- **Shortage list**: user-defined “need/low on” targets that influence recycle priority
- **Expedition stash**: reserve items for expeditions without polluting long-term KEEP
- **Better economics**: consider sell vs recycle yields and conversion chains
- **More progression graphs**: additional quest/workshop sources beyond current files

Rule: new signals should plug into the same `reasons + priority` model rather than adding one-off UI hacks.

---

## 8) Implementation guidance (kept intentionally flexible)

- Prefer a dedicated “decision engine” module that:
  - takes (items, appState, quest/workstation context, preferences)
  - returns decisions (action/priority/reasons)
- Keep it deterministic and cheap to recompute on state changes.
- Keep DOM rendering and decision logic separate.
- Avoid per-item hardcoding; always derive from data + preferences.
