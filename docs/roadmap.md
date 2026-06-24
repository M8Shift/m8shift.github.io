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

## Stage 2 — M8Shift core

<span class="m8-badge">Available</span>

- `m8shift.py` CLI;
- generated files `M8SHIFT.*`;
- anchors, documentation, and tests;
- this website.

## Stage 3 — N-agent directed relay

<span class="m8-badge">Available</span>

- N-agent roster;
- directed handoffs to any other roster member;
- structured advisory turn fields;
- shared memory, task ledger, recap, peek, log, status JSON, and session history;
- loop guardrails: `next`, `status --for`, and `append --wait`.

## Stage 4 — Contracts and validation

<span class="m8-badge">Partly available / partly specified</span>

- available: advisory branch/commit/tests/next/blocked fields and custom `x_*` fields;
- available: `claim --check` advisory overlap probe;
- specified: enforced source/target roles, required outputs, approve/revise/reject paths,
  and schema validation.

## Stage 5 — Isolated concurrency

<span class="m8-badge">Available as companion</span>

- `m8shift-worktree.py` for branches/worktrees per task;
- serialized integration pen;
- status, claim, done, integrate, and drop operations;
- still future: a full dependency scheduler and hosted runtime.

## Stage 6 — Integrations

<span class="m8-badge">Exploratory</span>

- headless runners;
- IDE status panel;
- MCP adapter;
- orchestrator integration;
- optional local notifications;
- release artifacts and package distribution.
