# Exit codes

`m8shift.py` uses a small, stable set of process exit codes.

| Code | Meaning |
| --- | --- |
| `0` | success |
| `1` | refusal or error — a guardrail, an invalid state, or invalid input |
| `2` | argument error (argparse usage) |
| `3` | readiness check: not your turn / no handoff for you yet |

The `0` / `3` split is what makes readiness checks scriptable in a headless loop:

```bash
if python3 m8shift.py next codex --once; then
  # … do the work, then append the handoff …
fi
```

There are no other defined codes. Refusals (claiming a live lock, appending without the
pen, a self-handoff, an agent outside the roster, a malformed field) all exit `1` with a
message on stderr.

## Headless runner (`examples/headless_runner.py`, v3.46+)

The reference runner classifies each provider turn **after** re-reading the relay
(authorship-primary, RFC 047 Phase A) and maps the verdict to its own exit codes:

| Code | Verdict |
|------|---------|
| `0` | `completed` / `advanced` / `not_required` — the relay is `DONE` or this agent authored a turn above the pre-run turn |
| `1` | `non_completion` / `stuck_working` / `invalid_relay` — provider failure (counted toward `--max-retries`) |
| `2` | infrastructure: launch failure, run-plan collision, turn timeout |
| `3` | `external_transition` — a peer/operator moved the relay; not a provider failure |
| `4` | `suspended` — the relay is `PAUSED` (operator pause or usage cooldown); neutral, never burns retries |

A provider process exiting `0` is **not** success on its own: if the relay is still open
and the agent still owes the turn, the run is `non_completion`.
