# Threat model

M8Shift is a **cooperative, advisory** coordination layer. It mitigates *coordination
errors* between agents that follow the protocol. It is not a sandbox and does not contain
a malicious or compromised agent — that is the host's job (filesystem permissions,
branch protection, secret scoping).

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
