# Why M8Shift?

AI agents are effective individually, but shared repository work creates predictable
failure modes:

- concurrent edits overwrite or invalidate each other;
- one agent cannot tell whether another is still working;
- handoffs lose context between sessions;
- producers approve their own work;
- “parallel” tasks quietly share the same files;
- commits and test results are described more confidently than they occurred.

M8Shift addresses the first three directly today: explicit, exclusive ownership (the
pen), an immutable turn journal, and a claim-before-write rule. Richer answers to the
rest — structured contracts, dependency-aware tasks, and independent validation — are a
specified [roadmap](/roadmap) direction, not yet shipped.

```mermaid
flowchart LR
    subgraph Without["Without coordination"]
        direction TB
        a1["claude writes"] --> f[("repo")]
        a2["codex writes"] --> f
        f --> coll["overwrites · lost handoff"]
    end
    subgraph With["With M8Shift"]
        direction TB
        b1["claude · holds pen"] --> r[("repo")]
        r --> hb["append --to codex"]
        hb --> b2["codex · holds pen"] --> r
    end
    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef bad fill:#f43f5e22,stroke:#e11d48;
    classDef store fill:#ff7a1822,stroke:#fb923c;
    class a1,a2,b1,b2 agent;
    class f,r store;
    class coll bad;
    class hb ok;
```

*🟣 agents · 🟠 repo · 🔴 overwrites · 🟢 handoff*

## What it is not

M8Shift is not a model provider, hosted gateway, memory platform, or universal agent
runtime. Full agent runtimes and gateways manage sessions, channels, tools, providers,
memory, and routing. M8Shift focuses on repository-level coordination and can complement
such a runtime rather than impersonating one.
