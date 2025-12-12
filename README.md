# Arc Raiders Supersheet

A lightweight, client-side item management web app for Arc Raiders.

Core value: help players decide what to do with items — **KEEP**, **SELL**, or **RECYCLE** — so they have required items ready when needed, and can safely liquidate items as soon as they’re no longer useful.

---

## What the app does

- Classifies items into **KEEP / SELL / RECYCLE**
- Uses progression signals (quests, workstation upgrades, targets) to decide what must be kept
- Automatically reduces “keep” scope as progression is completed (finished requirements no longer reserve items)
- Guides recycling decisions using user priorities and item value trade-offs (sell value vs recycle value/parts)

The goal is fast, confident decisions with minimal manual tracking.

---

## UX goals

- Clear, quick, low-friction interface
- Every recommendation should be explainable (show *why* an item is kept / recycled / sold)
- Prioritize what matters now, surface what blocks progress, avoid clutter

---

## Data-driven progression model

- Item definitions come from `item-data.js`
- Quest/progression relationships come primarily from `quest-graph.json`
- Additional progression sources may be added later (workstations, expedition stash, shortages)

---

## Tech

- Vanilla HTML/CSS/JS (ES modules)
- Static data files
- LocalStorage persistence
- Runs as a static site (local server or GitHub Pages)

---

## Notes for contributors / AI tools

- Decisions must be derived from data + user preferences, not hardcoded per item.
- Keep it light and fast; avoid frameworks/build steps unless explicitly requested.
- When adding features, optimize for: decision quality, explainability, and UI clarity.
