# Threat model

M8Shift is a **cooperative, advisory** coordination layer. It mitigates *coordination
errors* between agents that follow the protocol. It is not a sandbox and does not contain
a malicious or compromised agent — that is the host's job (filesystem permissions,
branch protection, secret scoping).

Every command that mutates state goes through the same serialised path:

```mermaid
flowchart TD
    A["command that mutates"] --> L{"acquire .m8shift.lock<br/>(O_EXCL)"}
    L -->|busy| Q["wait · 60 s takeover if abandoned"] --> L
    L -->|acquired| V{"lock block valid?"}
    V -->|no| X["refuse · exit 1"]
    V -->|yes| W["write atomically<br/>mkstemp + os.replace"]
    W --> R["release .m8shift.lock"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef bad fill:#f43f5e22,stroke:#e11d48;
    classDef wait fill:#94a3b822,stroke:#64748b;
    class A agent
    class L pen
    class V pen
    class Q wait
    class X bad
    class W ok
    class R wait
```

*🟣 agents · 🩷 the pen · 🟢 ok · 🔴 refusal · ⚪ wait*

| Threat | Mitigation |
| --- | --- |
| Two agents claim the pen at once | `claim` is exclusive via an `O_EXCL` lock file; exactly one wins, the other waits |
| A read-modify-write races another process | Every mutation is serialised by `.m8shift.lock` and written atomically (`mkstemp` + `os.replace`) |
| A crashed holder leaves the lock file behind | The lock file carries an ownership token and is reclaimed after 60 s |
| A holder stalls and blocks the relay | The lock has a 30-minute TTL; once `expires` passes, the other agent may `claim --force` |
| Marker injection in a turn (fake `M8SHIFT:TURN`/`LOCK`/`STANZA`) | Field values reject reserved markers; free-text bodies neutralise them |
| Newline injection in single-line fields | `from`/`to`/`ask`/`done`/`files` reject line breaks |
| A handoff targets an agent outside the roster | `--to` is validated against the declared roster; unknown agents are refused (exit `1`) |
| A corrupted or invalid lock block | The lock is parsed and validated before any write; invalid state is refused, not patched |

## What M8Shift does **not** defend against

- A process that ignores the protocol and edits files directly — the lock is advisory.
- An agent lying about tests, commits, or pushes — those claims must be verified by the
  agent or host that ran them.
- OS-level access: advisory permissions are protocol instructions, not enforcement. See
  [permissions](./permissions).
- Network filesystems: `O_EXCL` and atomic rename are less reliable on NFS; target local
  disk.
