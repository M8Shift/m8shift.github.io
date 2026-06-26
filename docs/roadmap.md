# Releases / Roadmap

The page separates shipped behavior from specifications. Civilization may survive
this radical act of honesty.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Releases

Newest first. The current version is marked with a badge.

### <i class="fa-solid fa-tags m8-heading-icon" aria-hidden="true"></i> Why the first public release is not `v0.1` or `v1.0`

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
  <div>
    <strong>The public release does not reset the project history.</strong>
    <p>M8Shift has already gone through months of cumulative versions while being used to coordinate its own work. The first public release is therefore the version that is actually available and stabilized at publication time, not an artificial <code>v0.1</code> or marketing <code>v1.0</code>.</p>
  </div>
</div>

Version numbers follow the working artifact: shipped relay behavior, install scripts,
checksums, documentation, and validation features. Publishing the project publicly makes
that accumulated state visible; it does not make the software begin from zero.

| Version | Status | What shipped |
|---------|--------|--------------|
| `v3.26.0` | <Badge type="tip" text="current" /> | Bounded runtime sidecar retention with `m8shift-runtime.py retention prune --keep N`; archives older JSONL rows by default while leaving the core relay untouched. |
| `v3.25.0` | | Immutable headless run plans and post-run `LOCK` verification. |
| `v3.24.0` | | Runtime no-progress detection for companion loops. |
| `v3.23.0` | | Runtime lane ownership: one fresh managed runtime per agent identity, explicit stale takeover. |
| `v3.22.0` | | Runtime sidecars for presence, run lifecycle, progress, operator inbox, idempotency, approvals, reports, and diagnostics. |
| `v3.21.0` | | `doctor --lint` core-safe diagnostics, including relay/LOCK validity, anchors, protocol drift, sessions, duplicate open sessions, and livelock indicators. |
| `v3.19.0` | | Token-footprint split: small mandatory protocol core plus on-demand reference. |
| `v3.18.3` | | Session reports and decision ledgers generated from existing turns. |
| `v3.17.0` | | Stable `PAUSED` state for open sessions with no active work, plus explicit `resume`. |
| `v3.16.0` | | Provider registry, runtime scaffold, and hardened headless runner surfaces. |
| `v3.15.0` | | Runtime companion v1 and cooperative turn request / steering commands. |
| `v3.13.0` | | Stage-4 contract validation: `contract validate`, `doctor --contracts`, dedicated contract flags on `append`, headless runner run IDs/lifecycle events, updated checksums, and documentation alignment. |
| `v3.12.1` | | Timezone-prefixed human timestamps (`CEST 2026-…`, fallback `local`), Windows PowerShell installer, checksum refresh, FAQ expansion, release/install docs, worktree toolbox links, and site documentation refresh. |
| `v3.9.0` | | Relay loop guardrails: `next`, `status --for`, `append --wait`, plus the `next --force` live-lock refusal fix. |
| `v3.8.0` | | Session history and human local-time display next to UTC. |
| `v3.7.0` | | `doctor`, session history groundwork, version lockstep across distributed scripts, test rename, runtime/session RFCs, and documentation hygiene. |
| `v3.5.0` | | Opt-in `m8shift-worktree.py` companion: isolated git worktrees for parallel feature work and one serialized integration pen. |
| `v3.4.x` | | Task ledger, version stamp / `--version`, runner and claim-check review fixes, and audit cleanup around N-agent documentation. |
| `v3.3.0` | | `claim --check`, a read-only advisory overlap probe for files touched by other agents. |
| `v3.2.0` | | Shared memory via `remember`, durable notes, and recap headlines. |
| `v3.1.0` | | Advisory turn fields on `append`: branch, commit, tests, next, blocked-on, and custom `x_*` fields. |
| `v3.0.0` | | M8Shift-only rename, English core, injectable language packs, and localized build tooling. |
| `v2.4.0` | | Stage-2 N-agent relay: configurable roster and directed handoffs to any active agent. |
| `v2.3.0` | | Read surfaces: `recap`, `peek`, `log`, and `status --json`. |
| `v2.2.x` / `v2.1.x` / `v2.0.0` | | M8Shift rebrand phases, technical rename, backwards-compatible transition, i18n EN/FR, and public repository layout. |
| `v1.x` | | Original relay protocol: claim-before-work, exclusive pen, canonical anchors, bridge files, and early VS Code/user documentation. |

## <i class="fa-solid fa-route m8-heading-icon" aria-hidden="true"></i> Roadmap stages

| Stage | Status | Delivered | Remaining / boundary |
|-------|--------|-----------|----------------------|
| <i class="fa-solid fa-flag-checkered m8-heading-icon" aria-hidden="true"></i> **Stage 1 — Relay foundation** | <Badge type="tip" text="available" /> | Local passive CLI; single shared pen; claim-before-work; immutable turn journal; atomic writes and inter-process lock; stale-lock recovery; configurable agent pair; generated anchors and protocol. | Core invariant: one writer at a time. |
| <i class="fa-solid fa-cube m8-heading-icon" aria-hidden="true"></i> **Stage 2 — M8Shift core** | <Badge type="tip" text="available" /> | `m8shift.py` CLI; generated files `M8SHIFT.*`; anchors; documentation; tests; this website. | The core remains a portable single-file relay. |
| <i class="fa-solid fa-people-arrows m8-heading-icon" aria-hidden="true"></i> **Stage 3 — N-agent directed relay** | <Badge type="tip" text="available" /> | N-agent roster; directed handoffs to any other roster member; structured advisory turn fields; shared memory; task ledger; recap; peek; log; status JSON; session history; loop guardrails via `next`, `status --for`, and `append --wait`. | Coordination is cooperative and advisory; agents still need to follow the protocol. |
| <i class="fa-solid fa-file-signature m8-heading-icon" aria-hidden="true"></i> **Stage 4 — Contracts and validation** | <Badge type="tip" text="available" /> | Advisory branch/commit/tests/next/blocked fields and custom `x_*` fields; `claim --check`; typed Stage-4 contract fields on `append`; read-only validation via `contract validate [--strict] [--json] [--all]` and `doctor --contracts`. | Validation never routes work, grants permissions, runs tools, or mutates the `LOCK`. |
| <i class="fa-solid fa-code-branch m8-heading-icon" aria-hidden="true"></i> **Stage 5 — Isolated concurrency** | <Badge type="tip" text="companion available" /> | `m8shift-worktree.py` for branches/worktrees per task; serialized integration pen; status, claim, done, integrate, and drop operations. | True degree > 1 writes in one shared working tree remain rejected for the core; isolated worktrees are the supported parallelism model. |
| <i class="fa-solid fa-puzzle-piece m8-heading-icon" aria-hidden="true"></i> **Stage 6 — Integrations** | <Badge type="tip" text="shipped" /> | Local integration layer: install scripts; checksums; verify-by-default; `watch`; site/docs sync; reference headless runner with `--once`, `M8SHIFT_RUN_ID`, heartbeat, immutable run plans, post-run `LOCK` verification, and `.m8shift/runtime/runs.jsonl` lifecycle events. Runtime companion surfaces include providers, roles, workflows, approvals, reports, status-runtime, doctor, progress, operator inbox, lane ownership, no-progress checks, and bounded sidecar retention. | Companions are advisory: no second pen, no direct `M8SHIFT.md` edits, no network requirement, and no auto-force. Release artifacts and package distribution remain convenience layers around the single-file core. |
| <i class="fa-solid fa-layer-group m8-heading-icon" aria-hidden="true"></i> **Post-Stage-6 / future companions** | <Badge type="info" text="deferred" /> | RFC-governed direction only; not part of the passive core today. | IDE recipes/panel; read-only MCP adapter; orchestrator recipes; optional local notifications; hosted/runtime control plane; headless command templates; richer companion workboard. |

::: tip RFC status discipline
RFC numbers are permanent creation-order identifiers. They do not track implementation order; for example RFC 010 shipped last because it is a retained/rejected/deferred pattern filter.
:::

## <i class="fa-solid fa-list-ol m8-heading-icon" aria-hidden="true"></i> RFC index

| № | RFC | Status |
|----:|-----|--------|
| 001 | Roster | historical / superseded |
| 002 | N agents | historical / implemented |
| 003 | I18n packs | shipped |
| 004 | Memory | shipped |
| 005 | Claim check | shipped |
| 006 | Tasks | shipped |
| 007 | Subturn | rejected |
| 008 | Worktree companion | implemented v1 |
| 009 | Runtime companion | implemented v1 |
| 010 | Runtime patterns | accepted filter; 6 retained patterns shipped in v3.21–v3.26 |
| 011 | Session history | implemented |
| 012 | Contracts validation | implemented |
| 013 | Hosted runtime control plane | future / not implemented |
| 014 | Provider management | implemented v1 |
| 015 | Shared tree degree > 1 | rejected for the core |
| 016 | Cooperative turn request | implemented |
| 017 | Stage 6 integrations | implemented |
| 018 | Agent runtime architecture | implemented v1 |
| 019 | Input neutral patterns | curated input / not implemented |
| 020 | Headless runner hardening | implemented v1 |
| 021 | Pause / resume | implemented v1 |
| 022 | Session reports | implemented v1 |
| 023 | Agent token footprint | implemented Phase 1 |
| 024 | Doctor split | draft |
| 025 | Runtime status composition | draft |
| 026 | Sidecar retention | baseline implemented; policy draft |
| 027 | Notifications | draft |
| 028 | Headless command templates | draft |
| 029 | Companion workboard | draft |
