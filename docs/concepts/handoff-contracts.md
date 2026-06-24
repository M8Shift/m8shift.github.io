# Handoff contracts

A handoff is a **turn**: a numbered, immutable record of what happened and what is asked
next. It turns an informal "your turn now" into a durable, greppable unit of work.

The shipped turn carries core fields (`from`, `to`, `ask`, `done`, `files`, `handoff`)
and optional advisory fields such as `branch`, `commit`, `tests`, `next`, `blocked_on`,
and custom `x_*` fields. See the full [turn schema](/reference/contract-schema).

```text
<!-- M8SHIFT:TURN 4 claude BEGIN -->
from: claude
to: codex
ask: Implement the parser and keep legacy behaviour.
done: Defined the parser contract and added tests.
files: docs/spec.md, tests/test_parser.py
branch: parser-contract
tests: python3 -m unittest discover -s tests
handoff: codex
<!-- M8SHIFT:TURN 4 claude END -->
```

```mermaid
flowchart LR
    O["open turn<br/>(claim)"] --> F["fill fields<br/>ask/done/files/tests"]
    F --> A["append<br/>(END marker)"]
    A --> C["closed = immutable"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    class O,F,A agent
    class C ok
```

*🟣 active steps · 🟢 closed (immutable)*

Two principles hold:

- **A closed turn is immutable.** The tool never rewrites a turn once its `END` marker
  is set, so the journal is an honest, append-only history.
- **Contracts are data, not commands.** M8Shift never executes a path, test command,
  branch name, commit field, or custom field merely because it appears in the journal.
