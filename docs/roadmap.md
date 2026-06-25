# Releases / Roadmap

The page separates shipped behavior from specifications. Civilization may survive
this radical act of honesty.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Releases

Newest first. `tagged` means a Git tag exists in the source repository; `main` means
the version is present on the current mainline and is awaiting the next public tag.

| Version | Status | What shipped |
|---------|--------|--------------|
| `v3.13.0` | `main` / pending tag | Stage-4 contract validation: `contract validate`, `doctor --contracts`, dedicated contract flags on `append`, headless runner run IDs/lifecycle events, updated checksums, and documentation alignment. |
| `v3.12.1` | mainline history | Timezone-prefixed human timestamps (`CEST 2026-…`, fallback `local`), Windows PowerShell installer, checksum refresh, FAQ expansion, release/install docs, worktree toolbox links, and site documentation refresh. |
| `v3.9.0` | tagged | Relay loop guardrails: `next`, `status --for`, `append --wait`, plus the `next --force` live-lock refusal fix. |
| `v3.8.0` | tagged | Session history and human local-time display next to UTC. |
| `v3.7.0` | tagged | `doctor`, session history groundwork, version lockstep across distributed scripts, test rename, runtime/session RFCs, and documentation hygiene. |
| `v3.5.0` | tagged | Opt-in `m8shift-worktree.py` companion: isolated git worktrees for parallel feature work and one serialized integration pen. |
| `v3.4.x` | tagged | Task ledger, version stamp / `--version`, runner and claim-check review fixes, and audit cleanup around N-agent documentation. |
| `v3.3.0` | tagged | `claim --check`, a read-only advisory overlap probe for files touched by other agents. |
| `v3.2.0` | tagged | Shared memory via `remember`, durable notes, and recap headlines. |
| `v3.1.0` | tagged | Advisory turn fields on `append`: branch, commit, tests, next, blocked-on, and custom `x_*` fields. |
| `v3.0.0` | tagged | M8Shift-only rename, English core, injectable language packs, and localized build tooling. |
| `v2.4.0` | tagged | Stage-2 N-agent relay: configurable roster and directed handoffs to any active agent. |
| `v2.3.0` | tagged | Read surfaces: `recap`, `peek`, `log`, and `status --json`. |
| `v2.2.x` / `v2.1.x` / `v2.0.0` | tagged | M8Shift rebrand phases, technical rename, backwards-compatible transition, i18n EN/FR, and public repository layout. |
| `v1.x` | tagged | Original relay protocol: claim-before-work, exclusive pen, canonical anchors, bridge files, and early VS Code/user documentation. |

## <i class="fa-solid fa-route m8-heading-icon" aria-hidden="true"></i> Roadmap stages

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

## <i class="fa-solid fa-file-signature m8-heading-icon" aria-hidden="true"></i> Stage 4 — Contracts and validation <Badge type="tip" text="available" />

- available: advisory branch/commit/tests/next/blocked fields and custom `x_*` fields;
- available: `claim --check` advisory overlap probe;
- available: typed Stage-4 contract fields on `append`, including schema, roles, relation,
  requirements, expected output, evidence, permissions, decision and waiver reason;
- available: read-only validation via `contract validate [--strict] [--json] [--all]`
  and `doctor --contracts`;
- boundary: validation never routes work, grants permissions, runs tools, or mutates the `LOCK`.

## <i class="fa-solid fa-code-branch m8-heading-icon" aria-hidden="true"></i> Stage 5 — Isolated concurrency <Badge type="tip" text="companion available" />

- `m8shift-worktree.py` for branches/worktrees per task;
- serialized integration pen;
- status, claim, done, integrate, and drop operations;
- specified future RFC: true degree > 1 writes in one shared working tree remains
  rejected for the core; isolated worktrees stay the supported parallelism model.

## <i class="fa-solid fa-puzzle-piece m8-heading-icon" aria-hidden="true"></i> Stage 6 — Integrations <Badge type="warning" text="partial" />

- available: install scripts, checksums, `watch`, site/docs sync, and reference headless runner
  with `--once`, `M8SHIFT_RUN_ID`, heartbeat and `.m8shift/runtime/runs.jsonl`;
- remaining: stable run-plan format, provider registry, IDE recipes/panel, read-only MCP adapter,
  orchestrator recipes, and optional local notifications;
- specified future RFCs: hosted/runtime control plane and provider management as
  optional companions outside the passive core;
- release artifacts/package distribution remain convenience layers around the single-file core.
