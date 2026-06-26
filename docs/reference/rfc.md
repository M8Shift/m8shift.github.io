# <i class="fa-solid fa-file-lines m8-heading-icon" aria-hidden="true"></i> RFC reference

This page mirrors the enriched RFC table from the M8Shift repository README. Treat the
README on the published `main` branch as the data source: RFC numbers are permanent,
statuses only change after code and documentation are merged and released.

::: tip Numbering discipline
RFC numbers are assigned in creation order, not implementation order. For example,
RFC 010 was authored before later runtime companion RFCs, but its retained patterns
shipped across `v3.21` to `v3.26`.
:::

::: warning Drafts are not shipped releases
Unmerged work does not count as implemented. RFC 024 and RFC 025 remain `draft` here
until the release that implements them is merged and published.
:::

| № | RFC | Description | Status | Implemented | How |
|----:|-----|-------------|--------|-------------|-----|
| 001 | [Roster](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/001-rfc-roster.md) | Configurable agent roster (early design) | historical / superseded | v2.1.0 · 2026-06-22 | superseded by RFC 002 |
| 002 | [N agents](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/002-rfc-n-agents.md) | N-agent relay with one shared pen | historical / implemented | v2.4.0 · 2026-06-23 | one-pen routing (`append --to`) |
| 003 | [I18n packs](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/003-rfc-i18n-packs.md) | Build-time language packs (EN core + 8) | shipped | v3.0.0 · 2026-06-23 | AST injector `m8shift-i18n.py` |
| 004 | [Memory](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/004-rfc-memory.md) | Shared append-only memory ledger | shipped | v3.2.0 · 2026-06-23 | `remember` / `recap`, pen-free |
| 005 | [Claim check](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/005-rfc-claim-check.md) | Advisory pre-claim overlap check | shipped | v3.3.0 · 2026-06-23 | `claim --check`, read-only |
| 006 | [Tasks](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/006-rfc-tasks.md) | Shared append-only task board | shipped | v3.4.0 · 2026-06-23 | `task` event-log, pen-free |
| 007 | [Subturn](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/007-rfc-subturn.md) | Sub-turn streaming proposal | rejected | — | rejected by adversarial panel |
| 008 | [Worktree companion](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/008-rfc-worktree-companion.md) | Degree-2 worktree parallelism + serialized integration | implemented v1 | v3.5.0 · 2026-06-24 | `m8shift-worktree.py`; core `LOCK` as integration pen |
| 009 | [Runtime companion](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/009-rfc-runtime-companion.md) | Local presence / inbox / progress / diagnostics | implemented v1 | v3.15.0 · 2026-06-25 | `m8shift-runtime.py` companion |
| 010 | [Runtime patterns](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/010-rfc-runtime-patterns.md) | Pattern filter: retained / rejected / deferred | accepted (filter) | v3.21–v3.26 · 2026-06-26 | 6 retained shipped; 13 rejected; 6 deferred → RFC 024–029 |
| 011 | [Session history](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/011-rfc-session-history.md) | Session history ledger + `history` | implemented | v3.7.0 · 2026-06-24 | `M8SHIFT.sessions.jsonl` |
| 012 | [Contracts validation](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/012-rfc-contracts-validation.md) | Stage-4 contracts + read-only validation | implemented | v3.13.0 · 2026-06-25 | read-only validation surface |
| 013 | [Hosted runtime control plane](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/013-rfc-hosted-runtime-control-plane.md) | Future hosted / runtime control plane | future / not impl. | — | optional layer outside the passive core |
| 014 | [Provider management](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/014-rfc-provider-management.md) | Local provider / adapter registry | implemented v1 | v3.16.0 · 2026-06-25 | `m8shift-runtime.py` providers |
| 015 | [Shared tree degree gt1](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/015-rfc-shared-tree-degree-gt1.md) | True degree > 1 writes in one tree | rejected (research) | — | rejected for the core |
| 016 | [Cooperative turn request](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/016-rfc-cooperative-turn-request.md) | Cooperative baton request + operator steering | implemented | v3.15.0 · 2026-06-25 | core baton request |
| 017 | [Stage6 integrations](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/017-rfc-stage6-integrations.md) | Stage-6 closure: local integration layer | implemented | Stage 6 · 2026-06-25 | local layer; heavier integrations deferred |
| 018 | [Agent runtime architecture](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/018-rfc-agent-runtime-architecture.md) | Local scaffold: roles / workflows / approvals / reports | implemented v1 | v3.16.0 · 2026-06-25 | `m8shift-runtime.py` scaffold |
| 019 | [Input neutral patterns](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/019-rfc-input-neutral-patterns.md) | Neutral runtime-pattern inventory | curated input / not impl. | — | reference for future RFCs |
| 020 | [Headless runner hardening](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/020-rfc-headless-runner-hardening.md) | Reference runner: validation / dry-run / timeout / audit | implemented v1 | v3.16.0 · 2026-06-25 | `examples/headless_runner.py` |
| 021 | [Pause resume](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/021-rfc-pause-resume.md) | Stable `PAUSED` state for idle sessions | implemented v1 | v3.17.0 · 2026-06-25 | core `PAUSED` + `pause` / `resume` |
| 022 | [Session reports](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/022-rfc-session-reports.md) | Session reports + decision ledger | implemented v1 | v3.18.3 · 2026-06-26 | `report` generated from existing turns |
| 023 | [Agent token footprint](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/023-rfc-agent-token-footprint.md) | Cut the mandatory protocol read | implemented (Phase 1) | v3.19.0 · 2026-06-26 | split `protocol.md` / `protocol-reference.md` |
| 024 | [Doctor split](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/024-rfc-doctor-split.md) | Split core doctor vs companion diagnostics | draft | — | deferred from RFC 010 |
| 025 | [Runtime status composition](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/025-rfc-status-runtime.md) | Runtime status over core + sidecars | draft | — | deferred from RFC 010 |
| 026 | [Sidecar retention](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/026-rfc-sidecar-retention.md) | Bound / prune runtime sidecar ledgers | baseline impl. · policy draft | v3.26.0 · 2026-06-26 | baseline `retention prune --keep N`; policy still draft |
| 027 | [Notifications](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/027-rfc-notifications.md) | Local notifications for handoffs / stale turns | draft | — | deferred from RFC 010 |
| 028 | [Headless command templates](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/028-rfc-headless-command-templates.md) | Safe headless command templates | draft | — | deferred from RFC 010 |
| 029 | [Companion workboard](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/029-rfc-m8shift-board.md) | Richer companion workboard outside core | draft | — | deferred from RFC 010 |

