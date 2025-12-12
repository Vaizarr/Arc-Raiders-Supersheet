# CLAUDE.md — AI Coding Assistant Guide

> **Quick Context:** Arc Raiders Supersheet — a lightweight, client-side item management web app that helps players decide what to do with items (KEEP/RECYCLE/SELL) based on progression data.

**Priority order when conflicts arise:**
1. This file → 2. `docs/DECISION_MODEL.md` → 3. `CONTRIBUTING.md` → 4. `README.md`

---

## 🎯 Quick Reference

**Core principle:** Help users make fast, explainable item decisions driven by progression state.

**Tech stack:** Vanilla HTML/CSS/JS (ES modules) — no build tools/frameworks  
**Data source:** `quest-graph.json` (authoritative), `item-data.js` (item definitions)  
**Decision logic:** Lives in dedicated modules, NOT in UI rendering code  
**Changes:** Small, reversible, data-driven (avoid hardcoding per-item logic)

---

## 1) Success Criteria (optimize for these)

The app is successful when:
- ✅ Users get **fast, confident decisions** with minimal input
- ✅ Every recommendation is **explainable** (clear "why KEEP/RECYCLE/SELL")
- ✅ The "KEEP" set **shrinks automatically** as players progress (expired reasons drop off)
- ✅ UI stays **quick and intuitive** as data scales
- ✅ System remains **lightweight** (no build steps unless explicitly needed)

---

## 2) Architecture & Data Flow

### File Structure
```
index.html           # App shell
app.js              # Bootstrap & module wiring
modules/            # ES modules (single responsibility)
  └─ storage.js     # State persistence (LocalStorage)
item-data.js        # ICON_DATA (canonical item definitions)
quest-graph.json    # ⭐ AUTHORITATIVE progression model
item-quest-index.json  # Reverse lookup (items → quests)
docs/
  └─ DECISION_MODEL.md  # ⭐ READ THIS - decision logic rules
```

### Data Authority
- **`quest-graph.json`** is the single source of truth for progression
- Do NOT assume individual files in `quests/` are authoritative
- **`ICON_DATA`** (in `item-data.js`) defines items, exposed on `window`

### Decision Model
**Must read:** `docs/DECISION_MODEL.md`

**Core principle:** Decisions = structured reasons + priority (not ad-hoc UI logic)
- UI **consumes** decisions; it does NOT derive core logic
- Reasons should be **data-driven** and **expirable** based on state

---

## 3) Coding Constraints (IMPORTANT)

### ✅ Do
- Use vanilla HTML/CSS/JS (ES modules only)
- Keep changes **small and reversible**
- Maintain **single responsibility** per module
- Derive behavior from **data + state** (not hardcoded per-item rules)
- Use **CSS classes** over inline styles
- Validate JSON after any data changes

### ❌ Don't (unless explicitly requested)
- Add frameworks, bundlers, or large dependencies
- Make sweeping refactors
- Change JSON schemas without strong justification
- Put decision logic in rendering code
- Hardcode item-specific behavior
- Rewrite entire UI layouts
- Remove explainability hooks (reasons/flags)
- Touch asset/image folders

---

## 4) UI/UX Principles

### Decision-First Design
Before adding/changing UI, ask:
- **"What decision is the player making RIGHT NOW?"**
- **"How does this help them decide faster or with more confidence?"**

### Guidelines
- **Visual hierarchy:** Use priority/reason indicators
- **Progressive disclosure:** Details on demand, not upfront clutter
- **Fast scan loop:** Scan → Decide → Act should be effortless
- **Explainability:** Indicators must answer "why" (quest/workshop/expedition/shortage/economic)

### Example (Good vs. Bad)
❌ **Bad:** Add a new column showing raw quest IDs  
✅ **Good:** Add a visual badge showing "Needed for 3 active quests" (hover for details)

---

## 5) Development Workflow

### Local Development
This is a **static app**. ES modules require a local server:

```bash
# Option 1
python -m http.server 8000

# Option 2
npx serve

# Then visit: http://localhost:8000
```

### Validation Checklist
- [ ] App loads without console errors
- [ ] JSON files remain valid (if modified)
- [ ] Test with a **small subset** of items first
- [ ] Verify decision logic with edge cases (completed quests, tier changes)
- [ ] Check explainability (hover tooltips, reason text)

**Testing:** No heavy test frameworks unless requested. Prefer pragmatic manual checks.

---

## 6) Git Workflow

**Default approach:** Feature branch → `main` when stable

```bash
# Work on feature branch
git checkout -b feature/item-priority-badges

# When ready
git checkout main
git merge feature/item-priority-badges
```

**Avoid:** Force-pushing to `main`

---

## 7) Task Completion Format

When you implement a change, provide:

1. **Summary:** What changed and why
2. **Files modified:** List with brief notes
3. **Integration points:** Where you hooked into existing state/data
4. **Verification steps:** How to test the change

**Code formatting:** Keep code readable (no minification, preserve indentation)

---

## 8) Handling Ambiguity

When requirements are unclear:

1. **Prefer:** Small change + explanation ("I chose X because...")
2. **Avoid:** Large speculative redesigns
3. **If two approaches exist:** Propose both, implement the safer/incremental one
4. **Ask for clarification when:**
   - Change affects data schemas
   - Multiple modules need coordination
   - UI/UX direction is ambiguous
   - Performance implications are unclear

### Example
**Ambiguous request:** "Make item sorting better"

**Good response:**
> "I can interpret this as either: (A) add multi-column sorting, or (B) change default sort to prioritize active quest items. I'll implement (B) since it's simpler and aligns with the 'fast decisions' goal. The change adds a `sortPriority` field in the decision module and updates the sort comparator. Want me to proceed?"

---

## 9) Common Patterns

### Adding a New Decision Reason
1. Update decision logic module (NOT UI code)
2. Add reason to structured output with priority
3. Update UI to consume the new reason type
4. Add explainability text/tooltip

### Modifying Quest Data Dependencies
1. Check `quest-graph.json` structure
2. Update parsing logic if needed
3. Invalidate/migrate LocalStorage state if schema changed
4. Test with both fresh and existing user states

### Adding UI Indicators
1. Define CSS class in stylesheets
2. Hook into existing decision output
3. Add progressive disclosure (tooltip/modal)
4. Test with various screen sizes

---

## 10) You'll Do Great If...

- You **read `docs/DECISION_MODEL.md`** before touching decision logic
- You keep changes **scoped and testable**
- You **explain trade-offs** when you make judgment calls
- You **preserve explainability** (users should always know "why")
- You ask when unsure rather than guessing at scale

---

## Appendix: Key Terminology

- **ICON_DATA:** Canonical item definitions (name, tier, image paths)
- **Progression state:** User's quest completion, workstation tiers, saved expeditions
- **Decision output:** Structured KEEP/RECYCLE/SELL + reasons + priority
- **Explainability:** The "why" behind each decision (must be human-readable)
- **Reason expiry:** When progression makes a reason obsolete (e.g., quest completed)

```

---
