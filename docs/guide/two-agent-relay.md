# Two-agent relay

The simplest M8Shift workflow uses two agents and one global pen:

```mermaid
flowchart LR
  A[Claude claims] --> B[Claude works]
  B --> C[Claude hands off to Codex]
  C --> D[Codex claims]
  D --> E[Codex works]
  E --> F[Codex hands off or completes]
```

This mode is deliberately sequential. Its value is not maximum throughput; it is
predictable ownership and a durable handoff trail.
