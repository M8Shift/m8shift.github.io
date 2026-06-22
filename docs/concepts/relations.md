# Relations

A **relation** answers "why is the pen moving from this agent to that one?"

## Shipped: the `ask`

Today the relation is carried by the handoff's free-text `ask` field — what the next
agent is expected to do:

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract." \
  --ask "Implement the parser and keep legacy behaviour."
```

That single, human-readable instruction *is* the relation. It is attached to the turn,
not permanently to either agent.

## Specified: a relation vocabulary

::: tip Specified, not shipped
A controlled vocabulary (`delegate`, `consult`, `implement`, `review`, `revise`,
`verify`, `integrate`, `unblock`, `document`, `continue`…) is part of the multi-agent
[roadmap](/roadmap). It would let tools reason about handoffs without parsing prose — but
it is not part of the current relay.
:::
