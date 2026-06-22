# Threat model

M8Shift should consider:

- two processes claiming the same pen;
- stale-lock recovery while a holder is still active;
- journal marker injection;
- newline injection in single-line fields;
- path traversal through generated files;
- a target outside the roster;
- a disabled validator;
- self-validation when independence is required;
- concurrent integration attempts;
- a generated asset writing outside its permitted workspace;
- false claims about tests, commits, or pushes.

The protocol mitigates coordination errors. Host sandboxing mitigates malicious or
compromised agents.
