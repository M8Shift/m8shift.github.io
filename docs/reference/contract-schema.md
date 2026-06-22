# Turn (handoff) schema

A handoff is a **turn**: a numbered block appended to `M8SHIFT.md` and framed by HTML
comments. Once its `END` marker is written, the turn is immutable by convention — the
tool never rewrites a closed turn.

```text
<!-- M8SHIFT:TURN 4 claude BEGIN -->
from: claude
to: codex
ask: Implement the parser and keep legacy behaviour.
done: Defined the parser contract and added tests.
files: docs/spec.md, tests/test_parser.py
handoff: codex

(optional free-text body, written with --body)
<!-- M8SHIFT:TURN 4 claude END -->
```

## Fields

| Field | Source | Meaning |
| --- | --- | --- |
| `from` | the acting agent | who wrote this turn |
| `to` | `--to` | the agent receiving the pen (or `none`) |
| `ask` | `--ask` | what the next agent should do — should be actionable (`—` if nothing) |
| `done` | `--done` | what was completed in this turn |
| `files` | `--files` | comma-separated files touched |
| `handoff` | derived from `--to` | deliberately redundant with `to`, for easy grep |

The header line and every field are **single-line**: line breaks and reserved markers
(`M8SHIFT:TURN`, `M8SHIFT:LOCK`, `M8SHIFT:STANZA`, and the `COWORK:*` equivalents) are
rejected. Multi-line content goes in the free-text body via `--body PATH` or `--body -`
(stdin), where any fake markers are neutralised.

::: tip Specified, not shipped
Structured fields such as `branch`, `commit`, `tests`, and `next`, plus a `peek` command
to read the next contract without claiming, are on the [roadmap](/roadmap). There is no
YAML/JSON contract document today — the turn block above is the whole schema.
:::
