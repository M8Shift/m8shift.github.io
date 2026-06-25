# Frequently asked questions

Common questions about M8Shift and how it works.

## Is M8Shift model-agnostic?

Yes. M8Shift coordinates **agents**, not models. It works with Claude, Codex,
Gemini, Vibe, Le Chat, local model tools, or any other cooperative coding agent that
can read its instructions, run a shell command, and respect the `claim → work →
append` loop.

You bring your own agent access: desktop app, IDE panel, terminal CLI, hosted web UI,
local runtime, or API-backed workflow. M8Shift itself stores no provider credentials,
makes no model calls, and does not broker requests.

Costs, privacy, retention, and account terms are therefore controlled by the agent
surfaces and providers you choose. M8Shift does not bypass provider terms of service
or your organization's usage policies.

## Does M8Shift need API keys?

No. The core CLI is a local Python script using the standard library only. It does
not need an API key, token, account, daemon, server, or cloud control plane.

If one of your agents needs an API key, subscription, local model server, or browser
login, that belongs to the agent host — not to M8Shift.

## Is M8Shift an orchestrator?

No. It coordinates ownership, handoffs, tasks, memory notes, and validation. It does
not launch models, choose providers, manage credentials, or execute the next action
on behalf of an agent.

The practical boundary is simple: M8Shift records the turn contract; the receiving
agent decides how to act using its own tools and permissions.

## Can agents work concurrently?

In one shared working tree, no: M8Shift remains a degree-1 relay and exactly one
agent writes at a time.

For isolated parallel feature work, use the shipped
[`m8shift-worktree.py` companion](/guide/worktree-toolbox). It creates separate git
worktrees for concurrent workers and keeps integration serialized through one shared
pen.

## Does M8Shift guarantee that no handoff is ever lost?

It guarantees that every cooperative handoff is written to a local, append-only
journal before the pen moves. That is the safety mechanism.

It cannot force a non-cooperative agent or human to read the journal, keep a UI
panel alive, or avoid editing files outside the protocol. The contract is explicit,
traceable, and recoverable; it is not filesystem-wide enforcement.

## Does M8Shift wake agents in VS Code or desktop apps?

Not by itself. Interactive UIs require a human or host integration to resume the next
agent. In automation, use a wrapper or headless loop that runs `next`, performs work,
then `append --wait`.

## Does M8Shift replace Git?

No. Git remains the source control system. M8Shift coordinates who may write and what
was handed off between agents. Git still handles commits, branches, reviews, merges,
and history.

## Does M8Shift enforce permissions?

Only host-enforced permissions are real security boundaries. M8Shift can record
advisory permission expectations in tasks, handoffs, or protocol text, but the
operating system, IDE, repository permissions, and agent host remain the enforcement
layer.

## What happens if an agent gets stuck?

Use `status`, `log`, `recap`, or `history` to inspect the relay. If an agent is
working but silent, it can refresh its TTL by reclaiming its own pen before expiry.
If a holder truly stops, stale-lock recovery allows the workflow to move on after the
TTL expires.

Cooperative turn-request escalation is specified separately for cases where a human
interacts with a different agent while another one is idle but still holds the pen.

## Can one agent have several roles?

Yes, as a convention. The core relay records roster identities. Roles such as
architect, implementer, reviewer, coordinator, or legal reviewer are expressed in
`--ask`, `--next`, tasks, or custom fields, not enforced by the CLI.

## Can an agent generate images?

M8Shift only coordinates the handoff. Whether an agent can generate images, inspect a
browser, edit documents, or run tests depends on its host and tool access. There is
no image-specific feature in the core.

## Why the name M8Shift?

“M8” reads as “mate”, while “shift” describes work moving between AI teammates. The
name covers sequential turns and specialist shifts without turning M8Shift into an
agent platform.
