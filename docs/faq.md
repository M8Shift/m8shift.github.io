# FAQ

## Is M8Shift an orchestrator?

No. It coordinates ownership, handoffs, tasks, and validation. It does not need to run
the agents or own their provider credentials.

## Can agents work concurrently?

No. M8Shift is a strict degree-one relay: exactly one agent writes at a time, in
alternation. Task graphs, branch isolation and concurrent writers are a **future RFC**,
not a shipped feature — see the [roadmap](/roadmap).

## Can one agent have several roles?

In the shipped relay, an agent is simply one of the two declared in the pair. A richer
role vocabulary (architect, implementer, reviewer, coordinator…) is **specified, not yet
shipped**.

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
