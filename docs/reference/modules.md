# <i class="fa-solid fa-cubes m8-heading-icon" aria-hidden="true"></i> Module reference

M8Shift ships a small toolkit, not only `m8shift.py`. The repository carries **one
reference page per shipped script**: what it owns, its command surface, the files it
reads and writes, safe examples, and failure modes — so an agent can load the single
page for the module it needs instead of rereading the full RFC set. This page mirrors
the [module index](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/README.md)
on the published `main` branch; treat that index as the data source.

::: tip One pen, advisory everything else
The **core relay is degree-1** (one pen). Every other module is optional and advisory:
it reads state M8Shift already stores, never writes the relay `LOCK`, and never routes
work.
:::

## <i class="fa-solid fa-boxes-stacked m8-heading-icon" aria-hidden="true"></i> Shipped modules

Each module name links to its full reference page in the repository, including a color
Mermaid ownership diagram, a command table, tagged runnable examples, and links to the
owning RFCs and tests. A drift test keeps the pages in lockstep with the module set.

| Module | Script | Primary authority |
|--------|--------|-------------------|
| [Core relay](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/core-relay.md) | `m8shift.py` | one-pen relay, `LOCK`, turn ledger, session reports, task board, shared memory, core `doctor`, companion install (RFC 044) |
| [Runtime companion](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/runtime.md) | `m8shift-runtime.py` | runtime presence, operator inbox, progress, notifications, provider registry, model/task routing, retention, local reports |
| [Context companion](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/context.md) | `m8shift-context.py` | context packs, redacted compression/retrieval records, adapter execution (builtin digest + RTK filter + optional Headroom/Kompress) |
| [Worktree toolbox](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/worktree.md) | `m8shift-worktree.py` | isolated degree-2 feature lanes and serialized integration |
| [Headroom adapter launcher](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/headroom.md) | `m8shift-headroom.py` | optional offline Headroom/Kompress launcher (`m8shift-transform`) |
| [I18n builder](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/i18n.md) | `m8shift-i18n.py` | language-pack build and script generation |
| [E2E harness](https://github.com/M8Shift/M8Shift/blob/main/docs/en/modules/e2e.md) | `m8shift-e2e.py` | local smoke scenarios and regression harness |

## <i class="fa-solid fa-scale-balanced m8-heading-icon" aria-hidden="true"></i> What is honest, and what is not

Every module page carries the same token-economy framing, and this site keeps it intact:

- **RTK** is a **mode-specific lossy semantic *filter*** (`rtk err` / `test` / `git-log`),
  **not a compressor** — it has no standalone compression percentage.
- **Headroom / Kompress** is real compression, **~45–55% on prose only** (it errors on
  shell content).
- The `compress` command's **stored** compact is a bounded head/tail **excerpt + digest**,
  not the backend's compression, and is labeled *operational orientation, not evidence*.

Verify against originals, logs, tests, and diffs — those remain the source of truth.

## <i class="fa-solid fa-download m8-heading-icon" aria-hidden="true"></i> Installing the companion kit

Since `v3.44.0` (RFC 044), `init` can copy the companion scripts into the kit directory
**version-locked to the core**: `init --full` installs all operational companions
(runtime, context, worktree, headroom, i18n), while `--companions runtime,context,...`
or the individual `--with-runtime` / `--with-context` / `--with-worktree` /
`--with-headroom-companion` / `--with-i18n` / `--with-e2e` flags select a subset, and
`--companion-source <dir>` copies from a release or checkout directory. The install is
idempotent, no-clobber (it never downgrades and refuses edited or newer local copies),
atomic, and preflighted before any mutation; the result is recorded in a merged
`.m8shift/kit.json` manifest, and the core `doctor` reports read-only `kit.companions`
findings (missing, skewed, or edited companions).
