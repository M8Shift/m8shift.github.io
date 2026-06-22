# Use M8Shift in VS Code

M8Shift can coordinate agents running in VS Code, but an interactive chat UI is not a
background process. A local `wait` command cannot wake a sleeping agent conversation.
A human or an IDE integration must resume the next participant.

Recommended workflow:

1. Keep `M8SHIFT.md` visible beside the source tree.
2. Give each agent a canonical anchor such as `CLAUDE.md` or `AGENTS.md`.
3. Add VS Code tasks for status, recap, tests, and pre-commit checks.
4. Resume the target agent after each handoff.
5. Run independent review before merge.

For unattended execution, use headless agent CLIs or a separate host runner. M8Shift
should remain the coordination primitive, not smuggle in a daemon under a fashionable
name.
