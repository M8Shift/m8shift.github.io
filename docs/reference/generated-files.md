# Generated files

`m8shift.py init` writes the core relay files at the project root. Other ledgers are
created on demand by the command that owns them. Generated files use the `M8SHIFT.*`
names.

```mermaid
flowchart TD
    INIT["m8shift.py init"] --> RELAY["M8SHIFT.md<br/>(relay file)"]
    INIT --> PROTO["M8SHIFT.protocol.md"]
    INIT --> ANCH["CLAUDE.md / AGENTS.md / GEMINI.md<br/>(anchors)"]
    INIT --> KIT[".m8shift/kit.json<br/>(companion manifest)<br/>.m8shift/hooks/commit-msg"]
    CMD["remember / task / history"] --> LEDGER["M8SHIFT.memory.md<br/>M8SHIFT.tasks.md<br/>M8SHIFT.sessions.jsonl"]
    RT["m8shift-runtime.py / headless runner"] --> RUNTIME[".m8shift/runtime/*.jsonl<br/>.m8shift/runs/run-id/report.md"]
    MUT["mutating commands"] --> LOCK[".m8shift.lock<br/>(temporary mutex)"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    classDef store fill:#ff7a1822,stroke:#fb923c;
    class INIT,CMD,MUT,RT agent
    class RELAY pen
    class PROTO,ANCH,KIT,LOCK,LEDGER,RUNTIME store
```

*🟣 init · 🩷 relay file · 🟠 generated files*

| File | Purpose |
| --- | --- |
| `M8SHIFT.md` | living lock, workflow state, and the immutable turn journal |
| `M8SHIFT.protocol.md` | the shared protocol, generated from `m8shift.py` |
| `M8SHIFT.archive.md` | older turns moved here by `archive` (created on demand) |
| `M8SHIFT.memory.md` | shared-memory notes appended by `remember` (created on demand) |
| `M8SHIFT.tasks.md` | append-only task events appended by `task` (created on demand) |
| `M8SHIFT.sessions.jsonl` | session start/done events for `history` (created on demand) |
| `.m8shift.lock` | temporary inter-process mutation lock (`O_EXCL`) |
| `.m8shift/kit.json` | merged companion-install manifest written by `init --companions` / `--with-*` / `--full`; checked read-only by `doctor` |
| `.m8shift/hooks/commit-msg` | Git hook template written by `init`; stamps the `Coordinated-With` / `Agent-Model` provenance trailers |
| `.m8shift/decisions.json` | decision-traceability target override persisted by `decisions target --set` (created on demand) |
| `.m8shift/runtime/` | advisory runtime sidecars: presence, runs, progress, inbox, idempotency, approvals, diagnostics, and retention archive |
| `.m8shift/runs/` | optional runtime reports and immutable run artifacts |
| `CLAUDE.md` | Claude anchor (protocol stanza injected at the top) |
| `AGENTS.md` | Codex and generic-agent anchor; `AGENTS.override.md` is synced if present |
| `GEMINI.md` | Gemini anchor, when `gemini` is in the roster |

::: tip Idempotent anchors
The anchor stanza is idempotent: the prior file is backed up to `<anchor>.m8shift.bak`
before injection.
:::

::: tip On-demand ledgers
`init` does not create the memory, task, archive, or session files unless the relevant
commands need them. Their absence means "no entries yet", not an error.
:::

::: warning Runtime sidecars are not the core relay
Files under `.m8shift/` are local companion state. They never grant the pen and may be
removed without corrupting `M8SHIFT.md`.
:::
