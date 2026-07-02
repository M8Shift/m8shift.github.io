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
    <p>M8Shift was bootstrapped on <strong>2026-06-21</strong> as a weekend prototype and built in days, not months — developed using M8Shift itself to coordinate its own work. Two AI agents work as buddies: they implement in turns and cross-review every change to catch regressions before they land. That contradiction-driven peer review compresses what would take a team months into hours. The first public release is therefore not an artificial <code>v0.1</code> or a marketing <code>v1.0</code>: it is the version actually available and stabilized at publication time — already iterated to a state-of-the-art tool and shared openly.</p>
  </div>
</div>

Version numbers follow the working artifact: shipped relay behavior, install scripts,
checksums, documentation, and validation features. Publishing the project publicly makes
that accumulated state visible; it does not make the software begin from zero.

## <i class="fa-solid fa-flask-vial m8-heading-icon" aria-hidden="true"></i> Proven by building itself

::: tip Dogfooded and proven by itself
M8Shift is used to coordinate its own development — M8Shift writing M8Shift — and to deploy itself. In its first days it has also coordinated other kinds of work: video-clip pipelines, book writing, legal drafting, and more. The relay's implement-then-adversarially-review loop is what makes the speed safe. It is still early, think late-alpha, and hardening continues; reaching v3.26 in under a week is itself the proof of the method.
:::

### <i class="fa-solid fa-chart-line m8-heading-icon" aria-hidden="true"></i> In numbers — first 5 days

From **2026-06-21** to **2026-06-26**, for about **$120 of paid AI**:

| Evidence | Snapshot |
|----------|----------|
| Tooling | ~6,900 lines of tool code + ~3,550 lines of tests (255 tests) |
| Knowledge base | 29 RFCs · ~10,000 lines of docs · bilingual site (70 pages, 9 languages) |
| Release pace | 165 commits across 25 releases (`v1.0.0` → `v3.26.0`) |

::: warning Human-equivalent estimate
This is an illustrative order-of-magnitude estimate, not a hard benchmark. Under the assumption that equivalent work would need to be tested, documented, reviewed, and internationalized to a comparable standard, it represents roughly **1–2 person-years** of skilled engineering — a **4–5 person team for several months** — compressed into 5 days.

At the same level of approximation, **~$120 of paid AI** versus **~$150k–300k of equivalent loaded labor** suggests cost efficiency on the order of **~1,000×**. The real cost of AI is higher than the price paid; this is a scale illustration, not an absolute fact.
:::

M8Shift is shared openly so anyone can benefit from the method, not just from this specific codebase.

## <i class="fa-solid fa-star m8-heading-icon" aria-hidden="true"></i> Feature focus — the headline advances

::: tip 🚀 Token compression, on by default (RTK)
The context companion can run **[RTK](https://github.com/rtk-ai/rtk)** as an **identity-pinned,
telemetry-off, argv-only** shell-output filter to compress what an agent reads. In our own
measurements the referenced context pack cut the hand-off context by **~97%**, and RTK on real
shell output by **~54–68%** — a large, measured token (and cost) saving. Since **v3.34.0** it is the
**default when RTK is present and pinned**, and **fully-degrading** otherwise: absent, unpinned, or
corrupt → native packing, no error. Telemetry is disabled on setup; the core stays stdlib-only.
Since **v3.36.0** you can *see* the state at a glance — `status-runtime`, `doctor`, and
`m8shift-context.py status` print **`RTK: ON (pinned, compressing packs)`** or **`RTK: OFF (native)`**
with the last-pack ratio, so a shift always knows whether it is actually saving tokens.
:::

::: tip 🧠 Broad-context compression, opt-in only (Headroom adapter)
Since **v3.40.0**, `m8shift-context.py compress --backend auto` keeps broad records such as
`conversation`, `history`, `file`, `report`, `diff`, and `large-context` on the builtin digest
unless an operator explicitly sets `backends.headroom_ext.auto_enabled: true` and identity-pins a
compatible local `headroom` command. Explicit `--backend headroom_ext` remains available for
experiments. M8Shift never starts Headroom proxy/MCP/server modes here, and future wrappers must
force offline/cache-only execution.
:::

Other advances users feel:

- **⚡ Parallelism** — the degree-2 worktree companion runs several agents on isolated branches and
  serialises the merge-back through one integration pen (the core stays strictly one-pen).
- **💸 An economic view of usage** — the core `cooldown` parks the relay before a rolling
  usage-window limit is hit (RFC 040 Phase B), so a shift never blindly burns a session cap.
- **🧾 Provenance & traceability** — every commit can carry *which model* produced it
  (`Agent-Model`), and decisions are recorded in a structured, tool-independent trace (RFC 031).
- **🗺️ On the design board** — parallel multi-session (RFC 038) and full usage monitoring (RFC 040)
  are designed and under review; model/task **cost routing** (RFC 039) has shipped its **Phase 1**
  advisory `route recommend` (v3.35.0), with delegation/launch still under review.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Release history

| Version | Status | What shipped |
|---------|--------|--------------|
| `v3.40.0` | <Badge type="tip" text="current" /> | **RFC 037 Headroom follow-up:** broad contexts now stay on builtin in `auto` unless `backends.headroom_ext.auto_enabled: true`; explicit `--backend headroom_ext` remains available, and the docs record why Headroom is not promoted by default. |
| `v3.39.0` | | **RFC 037 Phase D — optional Headroom backend hook:** added the identity-pinned `headroom_ext` adapter contract and safe degradation for absent, unpinned, failed, or drifted backends. |
| `v3.38.0` | | **RFC 037 Phase C — backend dispatch + RTK:** `m8shift-context.py compress` records requested/actual backend/version, uses identity-pinned `rtk-shell-output` for shell/tool content types, and fail-closes explicit backend errors to reference-only. |
| `v3.37.0` | | **RFC 037 Phase B — local compression records:** redacted raw refs, compact digests, builtin stdlib compressor, bounded `retrieve`, secret-pattern hardening, and reference-only fail-safe for bad config/backend paths. |
| `v3.36.0` | | **RTK visibility (#79):** you can now *see* whether token compression is active — per-agent self-declared `M8SHIFT_RTK` in `status-runtime`, and the context adapter's pinned/native state (**`RTK: ON (pinned, compressing packs)`** / **`RTK: OFF (native)`**) with the last-pack ratio in `status-runtime`, `doctor`, and the new `m8shift-context.py status`. Read-only, advisory, **fail-closed to OFF**; no network, no telemetry re-enable, self-declared only. |
| `v3.35.0` | | **RFC 039 Phase 1 — model/task routing (#59):** an advisory `route recommend` that picks the cheapest **capability-eligible** model for a task (tier floor + required capabilities + context window), fail-safe when the self-model is unknown — recommendation only, never launches anything. |
| `v3.34.2` | | Retention path hardening (backslash-normalised denylist + `O_NOFOLLOW`/symlink refusal on runtime writes) and the full **colour module map** of core + companions in the architecture docs. |
| `v3.34.1` | | RTK corrupt-manifest auto-fallback: a broken/non-object adapter manifest degrades a default pack to native packing instead of aborting — fully-degrading by design. |
| `v3.34.0` | | **RTK is the default context-pack filter when identity-pinned** (never on `PATH` alone), with an install offer (consent) and `rtk telemetry disable` on setup — **token compression on by default, safely** (RFC 034). Mandatory agent rules: RTK token-economy, the decision template, and the issue templates. |
| `v3.33.0` | | **RFC 028** headless command templates: curated argv-only provider examples, a run-plan validator, an env allowlist, and post-run `LOCK` verification — a curation layer over RFC 014/020, no new launcher. |
| `v3.32.0` | | **RFC 027** local notifications companion: tiers 0–4 (stdout · prompt file · TTY bell · OS presets · argv-only operator hook), dedup window, and an audit log — advisory, no daemon, no network. |
| `v3.31.0` | | **RFC 031** tool-independent decision traceability: forge / GitHub / git or a markdown **ADR fallback**, `decisions target/scaffold`, and an advisory `append --stance` — decisions are never lost, whatever the tooling. |
| `v3.30.0` | | `init` manages the host project **`.gitignore`** with a marker block (consent + `--gitignore`/`--no-gitignore`) — relay state stays local, and the agent anchors are left for the operator to decide. |
| `v3.29.0` | | **RFC 026** configurable retention policy: per-ledger fixed-count / age / combined-union strategies, archive + audit index, fail-safe on undatable rows — opt-in and fully-degrading. |
| `v3.28.1` | | Self-declared **`Agent-Model` provenance**: `M8SHIFT_AGENT_MODEL` → a commit trailer stamped alongside `Coordinated-With`, fail-open and independent of the relay version — the forge history shows *which model* produced each commit. Non-UTF-8 commit-message fail-open fix. |
| `v3.28.0` | | Native context companion (`m8shift-context.py`): referenced context packs, receipts and metrics, plus an **identity-pinned** RTK `shell_output_filter` adapter — verified fail-closed against renamed/wrapper/PATH-hijack execution (RFC 034). `PAUSED`-aware `wait`: the listener stays armed, quiet, and wakes on resume (RFC 035). Runtime headroom guard `m8shift-runtime.py headroom` with tiered proxy signals (RFC 036). Bounded `git()` collector timeout. |
| `v3.27.0` | | Doctor/status split: core-safe `doctor` versus runtime companion diagnostics (RFC 024); runtime `status` composed over presence/progress/inbox/run sidecars (RFC 025). |
| `v3.26.0` | | Bounded runtime sidecar retention with `m8shift-runtime.py retention prune --keep N`; archives older JSONL rows by default while leaving the core relay untouched. |
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
