# The pen

The pen represents exclusive write ownership. There is exactly one pen, and it guards
the whole shared working tree: at any moment at most one agent holds it, and only the
holder may modify the repository.

Acquiring the pen is the `claim` command. It is exclusive — if two agents claim at the
same time, exactly one wins; the other waits. This is a cooperative mutex of **degree
one** (a mutex, not a semaphore): strict alternation, never two writers.

```mermaid
flowchart LR
    C1["claude<br/>claim"] --> G{{"pen free?<br/>(exclusive)"}}
    C2["codex<br/>claim"] --> G
    G -->|winner| WIN["holds the pen<br/>WORKING_holder · sole writer"]
    G -->|loser| WAIT["waits its turn"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef wait fill:#94a3b822,stroke:#64748b;
    class C1,C2 agent
    class G pen
    class WIN ok
    class WAIT wait
```

*🟣 agents · 🩷 the pen · 🟢 ok · ⚪ wait*

The pen is **cooperative and advisory**. It prevents conflicts only when agents follow
the protocol; it cannot stop a process that ignores it or edits files directly.
