# FAQ

## Is M8Shift an orchestrator?

No. It coordinates ownership, handoffs, tasks, and validation. It does not need to run
the agents or own their provider credentials.

## Can one agent have several roles?

Yes. One primary active role should be selected per task or turn.

## Can agents work concurrently?

Yes, when each task has an isolated branch or worktree. Integration remains exclusive.

## Can a coordinator create several tasks?

Yes. `coordinator` is an active role that can define targets, dependencies, permissions,
outputs, and validators.

## Can an agent generate images?

Yes, when its host exposes an image-generation capability. The handoff should constrain
where generated assets are written and require an asset manifest.

## Does M8Shift enforce permissions?

Only host-enforced permissions are real security boundaries. Advisory permissions are
protocol instructions and must be labelled accordingly.

## Does M8Shift wake agents in VS Code?

No. Interactive UIs require a human or host integration to resume the next agent.

## Why the name M8Shift?

“M8” reads as “mate”, while “shift” describes work moving between AI teammates. The
name covers sequential turns and parallel specialist shifts without reusing the now
crowded “cowork” terminology.
