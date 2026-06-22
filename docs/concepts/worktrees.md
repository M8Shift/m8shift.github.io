# Isolated worktrees

Parallel tasks require isolated write environments.

```text
.cowork/worktrees/content
.cowork/worktrees/assets
.cowork/worktrees/tests
```

Each workspace has one holder. Integration happens in dependency order under a single
integration pen.

Path-scoped promises inside one shared working tree are not sufficient isolation.
Agents and tools routinely touch files outside their politely announced scope.
