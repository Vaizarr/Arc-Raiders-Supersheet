## Contribution & Implementation Guidelines

This app is an item decision engine with a UI: help the player classify items into **KEEP / SELL / RECYCLE** using progression signals, then continuously update recommendations as the player’s situation changes.

### Core principles
- Data-driven decisions (no per-item hardcoding)
- Explainability: the UI should be able to show “why” for recommendations
- Lightweight + performant: keep logic and rendering efficient
- UX-first: reduce cognitive load, prioritize relevance, avoid clutter

---

### Data & decision logic
- Items: `item-data.js`
- Primary quest/progression model: `quest-graph.json`
- Recommendations should be derived from:
  - current progression state (quests/workstations/targets)
  - user preferences (priorities, rules)
  - economic trade-offs where relevant (sell vs recycle)

Design for growth: new signals may be introduced later (shortage list, expedition stash, additional progression sources).

---

### UI/UX guidance
When changing UI behavior or adding features, prioritize:
- fast scanning and quick decisions
- strong visual cues for priority and reasoning
- minimal interaction steps
- consistent placement: features should appear where the user needs them in the decision flow

If information is important but noisy, prefer progressive disclosure (details on hover/click).

---

### Code structure
- ES modules with clear single responsibility
- Keep state changes centralized and predictable
- Avoid large refactors unless required; prefer small, testable steps
- Prefer CSS classes over inline styles; visual styling should be driven by data (e.g., rarity)

---

### If uncertain
Propose a small, reversible change or ask for clarification rather than guessing intent.
