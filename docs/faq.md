# FAQ

## Is M8Shift an orchestrator?

No. It coordinates ownership, handoffs, tasks, and validation. It does not need to run
the agents or own their provider credentials.

## Can agents work concurrently?

In one shared working tree, no: M8Shift remains a degree-one relay and exactly one
agent writes at a time. For isolated parallel feature work, use the shipped
`m8shift-worktree.py` companion, which creates git worktrees and serializes integration.

## Can one agent have several roles?

Yes as a convention. The core relay records roster identities; roles such as architect,
implementer, reviewer, or coordinator are expressed in `--ask`, `--next`, tasks, or
custom fields, not enforced by the CLI.

## Can an agent generate images?

M8Shift only coordinates the handoff; whether an agent can generate images depends on
its host. There is no image-specific feature in the tool itself.

## Does M8Shift enforce permissions?

Only host-enforced permissions are real security boundaries. Advisory permissions are
protocol instructions and must be labelled accordingly.

## Does M8Shift wake agents in VS Code?

No. Interactive UIs require a human or host integration to resume the next agent.

## Why the name M8Shift?

“M8” reads as “mate”, while “shift” describes work moving between AI teammates. The
name covers sequential turns and parallel specialist shifts without reusing the now
crowded “cowork” terminology.
