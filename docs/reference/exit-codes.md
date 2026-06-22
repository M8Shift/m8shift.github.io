# Exit codes

`m8shift.py` uses a small, stable set of process exit codes.

| Code | Meaning |
| --- | --- |
| `0` | success |
| `1` | refusal or error — a guardrail, an invalid state, or invalid input |
| `2` | argument error (argparse usage) |
| `3` | `wait --once` only: it is not your turn yet |

The `0` / `3` split is what makes `wait --once` scriptable in a headless loop:

```bash
if python3 m8shift.py wait codex --once; then
  python3 m8shift.py claim codex
  # … do the work, then append the handoff …
fi
```

There are no other defined codes. Refusals (claiming a live lock, appending without the
pen, a self-handoff, an agent outside the roster, a malformed field) all exit `1` with a
message on stderr.
