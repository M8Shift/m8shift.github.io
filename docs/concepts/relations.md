# Relations

A **relation** answers "why is the pen moving from this agent to that one?"

## Shipped: `ask`, `next`, tasks, advisory fields, and Stage-4 relations

The primary relation is carried by the handoff's free-text `ask` field — what the next
agent is expected to do. You can refine it with `--next`, `--blocked-on`, custom
`--field key=value` metadata, Stage-4 `--relation`, and the append-only task ledger.

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract." \
  --ask "Implement the parser and keep legacy behaviour." \
  --next "Return to claude for review." \
  --schema stage4.v1 \
  --relation review_request
```

Those fields remain data. `contract validate` can check the Stage-4 vocabulary, but
M8Shift still does not infer or enforce a controlled workflow from it.
