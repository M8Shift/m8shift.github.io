# Limitations

- M8Shift uses cooperative coordination, not an adversarial security boundary.
- Interactive VS Code or desktop agents still require an external resume action.
- Advisory permissions do not enforce operating-system access.
- The relay is sequential by design — exactly one writer at a time (degree-1 mutex).
- Core `m8shift.py` does not provide concurrent writes in one shared working tree. The
  optional `m8shift-worktree.py` companion provides branch/worktree isolation and still
  serializes integration.
- M8Shift records tasks, but it is not a dependency scheduler.
- M8Shift does not launch models or manage provider credentials.
- Logged tests, commits, and pushes must be verified by the agent or host that ran them.
