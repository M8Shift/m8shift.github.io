# Limitations

- M8Shift uses cooperative coordination, not an adversarial security boundary.
- Interactive VS Code or desktop agents still require an external resume action.
- Advisory permissions do not enforce operating-system access.
- The relay is sequential by design — exactly one writer at a time (degree-1 mutex).
- M8Shift does not provide concurrent or parallel writing, branch isolation, or task
  graphs. It serializes writes; it does not parallelize them.
- M8Shift does not launch models or manage provider credentials.
- Logged tests, commits, and pushes must be verified by the agent or host that ran them.
