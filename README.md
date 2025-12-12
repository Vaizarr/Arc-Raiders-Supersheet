# Arc Raiders Supersheet

A lightweight, client-side **item management** web app for Arc Raiders.

The core purpose of the app is to help players decide what to do with items:
**KEEP**, **RECYCLE**, or **SELL** — so they always have required items ready for progression, and can safely liquidate items as soon as they’re no longer needed.

Progression (quests, workstation upgrades, expedition planning) is the primary signal that drives these decisions.

---

## What the app focuses on

- Classifying items into KEEP / RECYCLE / SELL
- Highlighting which items matter *now* and *why*
- Automatically reducing “keep” scope as progression is completed
- Guiding recycle vs sell decisions using progression relevance, user preferences, and economics

The app’s value is not raw data display, but **clear, confident item decisions**.

---

## UX goals

- Fast scanning and low cognitive load
- Strong visual cues for priority and relevance
- Clear explainability (“why is this item kept / recycled / sold?”)
- Minimal friction: few clicks, obvious actions

---

## Data-driven model

- Item definitions: `item-data.js` (`ICON_DATA`)
- Primary quest & dependency model: `quest-graph.json`
- Reverse lookup helpers: `item-quest-index.json`
- Economic hints: sell profit and recycle yield data
- App state: LocalStorage (via `storage.js`)

All logic should be derived from data and state — not hardcoded per item.

---

## Tech stack

- Vanilla HTML, CSS, JavaScript (ES modules)
- Static data files
- No backend, no framework, no build step
- Runs as a static site (local server or GitHub Pages)

---

## Conceptual reference

For the intended hierarchy, decision flow, and UX intent, see:

- `docs/DECISION_MODEL.md`

This document describes *what* the system should optimize for, without prescribing *how* it must be implemented.
