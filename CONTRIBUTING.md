## Contribution & Implementation Guidelines

This project is an **item decision engine with a UI**.
Changes should improve the quality, clarity, and confidence of KEEP / RECYCLE / SELL recommendations.

Before implementing logic or UI changes, understand the intent described in:
- `docs/DECISION_MODEL.md`

---

### Core principles

- Decisions must be data-driven and explainable
- Prefer clarity over clever abstractions
- Keep the system lightweight and performant
- Optimize for user decision-making, not raw feature count

---

### Data & logic

- Items come from `item-data.js` (`ICON_DATA`)
- Quest and progression relationships come primarily from `quest-graph.json`
- Avoid per-item hardcoding; always derive behavior from data + state
- Progression-related reasons must be able to expire as the player advances

If adding new signals (shortage list, expedition stash, additional progression sources), integrate them as inputs to the same decision logic rather than as one-off UI rules.

---

### Decision-first mindset

When adding or changing logic:
- Prefer producing structured outputs (action, priority, reasons)
- Avoid embedding core decision logic directly into UI rendering
- UI should consume decisions, not re-derive them

---

### UI / UX guidance

- Prioritize fast scanning and obvious priorities
- Use visual cues first; text/details should be progressive (hover/click)
- Place information where it supports the player’s decision flow
- Reduce clutter as data volume grows

If unsure about placement, ask:
“What decision is the player trying to make here?”

---

### Code structure

- Use ES modules with clear, single responsibility
- Keep state mutations centralized and predictable
- Avoid unnecessary refactors; prefer small, reversible changes
- Styling should be class-based and data-driven (e.g. rarity)

---

### When uncertain

If intent or impact is unclear:
- Propose a small, reversible change, or
- Ask for clarification rather than guessing
