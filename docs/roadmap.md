# Roadmap

The roadmap separates shipped behavior from specifications. Civilization may survive
this radical act of honesty.

## Stage 1 — Relay foundation

<span class="m8-badge">Available / inherited</span>

- local passive CLI;
- single shared pen;
- claim-before-work;
- immutable turn journal;
- atomic writes and inter-process lock;
- stale-lock recovery;
- configurable agent pair;
- generated anchors and protocol.

## Stage 2 — M8Shift rename and compatibility

<span class="m8-badge">Next</span>

- rename CLI and generated files;
- preserve `cowork.py` compatibility shim;
- migration from `COWORK.*` to `M8SHIFT.*`;
- update anchors, documentation, package metadata, and tests;
- publish the new website.

## Stage 3 — N-agent directed relay

<span class="m8-badge">Specified</span>

- N-agent roster;
- multiple roles per agent;
- one active role per turn;
- directed handoffs;
- relation vocabulary;
- structured outputs;
- targeted recap and log.

## Stage 4 — Contracts and validation

<span class="m8-badge">Specified</span>

- explicit source and target roles;
- advisory/host/mixed permissions;
- required outputs;
- independent reviewer;
- approve, revise, reject, and waive paths;
- schema validation.

## Stage 5 — Isolated concurrency

<span class="m8-badge">Future RFC</span>

- task graph and dependencies;
- branches/worktrees per task;
- workspace pens;
- exclusive integration pen;
- coordinator and integrator roles;
- parallel writer/image/test/research workflows.

## Stage 6 — Integrations

<span class="m8-badge">Exploratory</span>

- headless runners;
- IDE status panel;
- MCP adapter;
- orchestrator integration;
- optional local notifications;
- release artifacts and package distribution.
