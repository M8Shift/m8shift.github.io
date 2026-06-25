# Roadmap

The roadmap separates shipped behavior from specifications. Civilization may survive
this radical act of honesty.

## <i class="fa-solid fa-flag-checkered m8-heading-icon" aria-hidden="true"></i> Stage 1 — Relay foundation <Badge type="tip" text="available" />

- local passive CLI;
- single shared pen;
- claim-before-work;
- immutable turn journal;
- atomic writes and inter-process lock;
- stale-lock recovery;
- configurable agent pair;
- generated anchors and protocol.

## <i class="fa-solid fa-cube m8-heading-icon" aria-hidden="true"></i> Stage 2 — M8Shift core <Badge type="tip" text="available" />

- `m8shift.py` CLI;
- generated files `M8SHIFT.*`;
- anchors, documentation, and tests;
- this website.

## <i class="fa-solid fa-people-arrows m8-heading-icon" aria-hidden="true"></i> Stage 3 — N-agent directed relay <Badge type="tip" text="available" />

- N-agent roster;
- directed handoffs to any other roster member;
- structured advisory turn fields;
- shared memory, task ledger, recap, peek, log, status JSON, and session history;
- loop guardrails: `next`, `status --for`, and `append --wait`.

## <i class="fa-solid fa-file-signature m8-heading-icon" aria-hidden="true"></i> Stage 4 — Contracts and validation <Badge type="warning" text="partial" />

- available: advisory branch/commit/tests/next/blocked fields and custom `x_*` fields;
- available: `claim --check` advisory overlap probe;
- specified: enforced source/target roles, required outputs, approve/revise/reject paths,
  and schema validation.

## <i class="fa-solid fa-code-branch m8-heading-icon" aria-hidden="true"></i> Stage 5 — Isolated concurrency <Badge type="tip" text="companion available" />

- `m8shift-worktree.py` for branches/worktrees per task;
- serialized integration pen;
- status, claim, done, integrate, and drop operations;
- specified future RFC: true degree > 1 writes in one shared working tree remains
  rejected for the core; isolated worktrees stay the supported parallelism model.

## <i class="fa-solid fa-puzzle-piece m8-heading-icon" aria-hidden="true"></i> Stage 6 — Integrations <Badge type="info" text="exploratory" />

- headless runners;
- IDE status panel;
- MCP adapter;
- orchestrator integration;
- optional local notifications;
- specified future RFCs: hosted/runtime control plane and provider management as
  optional companions outside the passive core;
- release artifacts and package distribution.
