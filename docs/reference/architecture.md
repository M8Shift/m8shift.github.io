# <i class="fa-solid fa-diagram-project m8-heading-icon" aria-hidden="true"></i> Architecture

M8Shift is a local relay: a passive core owns the pen, while companions observe,
prepare context, notify, or isolate parallel work without becoming a second writer.

::: tip Local by design
Every channel below is local: repository files, shell argv, JSON/stdin-stdout, exit
codes, and git. The **core relay** has no hosted control plane, no network path, and no daemon. (The optional `--with-rtk` / `--with-headroom` installers perform **install-time** downloads, and the RFC 034 adapters run as **pinned argv subprocesses** — v3.40+; runtime stays offline.)
:::

## <i class="fa-solid fa-network-wired m8-heading-icon" aria-hidden="true"></i> Module communication

`RTK` and `headroom_ext` are optional token-usage adapters. See
[Token adapters: RTK and Headroom](./features#token-adapters-rtk-and-headroom).

```mermaid
flowchart LR
    classDef actor fill:#FF7A18,stroke:#AD2F0A,color:#11183A;
    classDef core fill:#5D26F2,stroke:#2D09A4,color:#FFF8F0;
    classDef companion fill:#22C55E,stroke:#14432f,color:#07110b;
    classDef record fill:#F252BF,stroke:#8B47F9,color:#11183A;
    classDef external fill:#FD9F2C,stroke:#AD2F0A,color:#11183A;

    A["agents / maintainer UI"]:::actor
    C["m8shift.py core<br/>mutex + turn journal"]:::core
    R["M8SHIFT.md + LOCK"]:::record
    L[".m8shift.lock<br/>O_EXCL guard"]:::record
    B["memory / tasks / sessions<br/>MD + JSONL"]:::record
    RT["m8shift-runtime.py<br/>presence · progress · notify"]:::companion
    RS[".m8shift/runtime/*"]:::record
    CX["m8shift-context.py<br/>pack · compress · retrieve"]:::companion
    CS[".m8shift/context/*<br/>packs · records · adapters"]:::record
    WT["m8shift-worktree.py<br/>degree-2 worktrees"]:::companion
    E2E["m8shift-e2e.py<br/>hermetic runner"]:::companion
    EXT["local commands<br/>git · RTK · headroom_ext · hooks"]:::external

    A -->|"shell argv: claim/next/append/status"| C
    C -->|"atomic file R/W: state + turn append"| R
    C -->|"O_EXCL create/remove: mutex"| L
    C -->|"MD/JSONL append/read: boards"| B
    RT -->|"subprocess argv: status --json / pause"| C
    RT -->|"JSON/JSONL file R/W: runtime sidecars"| RS
    RT -->|"one-shot argv + exit code: notify hook"| EXT
    CX -->|"bounded file read: relay/context input"| R
    CX -->|"JSON/text file R/W: packs + records"| CS
    CX -->|"argv + stdin/stdout + exit code: RFC 034 adapter"| EXT
    WT -->|"import core helpers: integration handoff"| C
    WT -->|"git argv + exit code: worktree/merge"| EXT
    E2E -->|"subprocess argv + exit code: copied core cases"| C
```

## <i class="fa-solid fa-people-arrows m8-heading-icon" aria-hidden="true"></i> Inter-application agent flow

```mermaid
sequenceDiagram
    autonumber
    participant U as maintainer / UI
    participant A as agent A
    participant B as agent B
    participant C as m8shift.py + M8SHIFT.md
    participant Board as memory/tasks/sessions
    participant Ctx as m8shift-context.py
    participant WT as m8shift-worktree.py
    participant Rt as m8shift-runtime.py
    participant Hook as local hooks

    rect rgb(247,245,255)
        U->>A: UI prompt / user scope
        A->>C: shell argv `claim A` → file LOCK `WORKING_A`
        A->>Board: shell argv board command → MD/JSONL append
        A->>C: shell argv `append --to B` → turn append + `AWAITING_B`
        B->>C: shell argv `next B` → claim + handoff read
    end

    rect rgb(255,248,240)
        B->>Ctx: shell argv `compress --stdin` → stdin text
        Ctx-->>B: JSON stdout record id + exit code
        B->>C: shell argv `append --body record-id` → turn append
        A->>Ctx: shell argv `retrieve record --json` → bounded JSON stdout
    end

    rect rgb(240,253,244)
        A->>WT: shell argv `claim feature --base main` → worktree request
        WT-->>A: git worktree path + exit code
        WT->>C: imported core helpers → serialized integration handoff
    end

    rect rgb(239,246,255)
        Rt->>C: subprocess argv `status --json` → JSON stdout
        Rt->>Hook: one-shot argv/stdout/file/bell → notification result
        Hook-->>Rt: exit code / warning, relay unchanged
    end
```

## <i class="fa-solid fa-check-double m8-heading-icon" aria-hidden="true"></i> Verified channels

| Channel | Code path |
|---------|-----------|
| agents / maintainer → core | `m8shift.py` command handlers such as `claim`, `next`, `append`, `pause`, `resume` |
| core → relay files | `M8SHIFT.md` state updates guarded by `.m8shift.lock` and atomic writes |
| runtime → core | `m8shift-runtime.py run_core_json()` calls `[python, m8shift.py, ...]` and parses JSON stdout |
| runtime → notifications | one-shot stdout/file/bell/OS/hook tiers; hooks return exit codes and never mutate relay state |
| context → adapters | RFC 034 argv-only runner with bounded stdout/stderr and exit-code handling |
| context → compression store | `compress` writes raw/compact/record files; `retrieve` serves bounded, hash-verified content |
| worktree → git/core | git worktree/merge argv calls plus imported core helpers for serialized integration |
| e2e → core | temp-copy scenarios driven by subprocess argv and exit codes |
