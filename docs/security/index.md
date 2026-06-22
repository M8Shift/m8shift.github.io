# Security model

M8Shift reduces accidental agent conflicts. It is not a sandbox.

Security depends on layers:

1. strict parsing and injection-safe journal fields;
2. atomic state writes and ownership tokens;
3. an exclusive inter-process lock (`O_EXCL`) serializing every mutation;
4. host-enforced filesystem, branch, and secret permissions;
5. human approval where the risk warrants it.

Permissions must declare whether they are `advisory`, `host`, or `mixed`. The site must
never describe advisory metadata as a real enforcement boundary.
