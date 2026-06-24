# Agents and roles

## The roster

You declare the relay's agents at `init`:

```bash
python3 m8shift.py init --agents claude,codex,gemini
```

The list is stored in the lock's `agents:` field. Any listed agent can receive the
shared pen; the relay remains degree 1, so exactly one agent writes in the shared
repository at a time.

Each agent gets a canonical **anchor** file where the protocol stanza is injected:

| Agent | Anchor |
| --- | --- |
| `claude` | `CLAUDE.md` |
| `codex`, `lechat`, `mistral` | `AGENTS.md` (+ `AGENTS.override.md` if present) |
| `gemini` | `GEMINI.md` |

The stanza is injected idempotently at the top of the file; the previous content is
backed up to `<anchor>.m8shift.bak`.

```mermaid
flowchart LR
    CLAUDE["claude"] --> A1["CLAUDE.md"]
    CODEX["codex"] --> A2["AGENTS.md<br/>(+ AGENTS.override.md)"]
    GEMINI["gemini"] --> A3["GEMINI.md"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef store fill:#ff7a1822,stroke:#fb923c;
    class CLAUDE,CODEX,GEMINI agent
    class A1,A2,A3 store
```

*🟣 agents · 🟠 anchor files*

## Roles are conventions

M8Shift records the roster identity that holds or receives the pen. Higher-level roles
such as architect, implementer, reviewer, or integrator are conventions expressed in the
turn's `ask`, `next`, task ledger, or prompt. The core CLI does not enforce role
permissions.
