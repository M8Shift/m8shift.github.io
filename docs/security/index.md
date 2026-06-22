# Security model

M8Shift reduces accidental agent conflicts. It is not a sandbox.

Security depends on layers:

1. strict parsing and injection-safe journal fields;
2. atomic state writes and ownership tokens;
3. host-enforced filesystem, branch, and secret permissions;
4. isolated worktrees for concurrent tasks;
5. independent validation for sensitive changes;
6. human approval where the risk warrants it.

Permissions must declare whether they are `advisory`, `host`, or `mixed`. The site must
never describe advisory metadata as a real enforcement boundary.
