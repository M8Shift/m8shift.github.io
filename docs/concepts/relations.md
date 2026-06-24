# Relations

A **relation** answers "why is the pen moving from this agent to that one?"

## Shipped: `ask`, `next`, tasks, and advisory fields

The primary relation is carried by the handoff's free-text `ask` field — what the next
agent is expected to do. You can refine it with `--next`, `--blocked-on`, custom
`--field key=value` metadata, and the append-only task ledger.

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract." \
  --ask "Implement the parser and keep legacy behaviour." \
  --next "Return to claude for review." \
  --field x_relation=implement
```

Those fields remain data. M8Shift records them for humans and tools, but does not infer
or enforce a controlled workflow from them.
