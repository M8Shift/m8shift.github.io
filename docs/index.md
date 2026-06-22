---
layout: home

title: M8Shift
titleTemplate: AI agents, working in shifts.

hero:
  name: M8Shift
  text: AI agents, working in shifts.
  tagline: Coordinate AI teammates across turns, roles, reviews, and isolated workspaces — without letting them overwrite each other or lose the handoff.
  image:
    src: /logo-placeholder.svg
    alt: M8Shift logo
  actions:
    - theme: brand
      text: Get started
      link: /guide/quickstart
    - theme: alt
      text: Explore the concepts
      link: /concepts/
    - theme: alt
      text: View on GitHub
      link: https://github.com/OWNER/m8shift

features:
  - icon: 🔒
    title: Controlled ownership
    details: One agent owns a shared workspace at a time. Parallel work uses isolated worktrees and a single integration pen.
  - icon: 🔁
    title: Structured handoffs
    details: Every turn can state who worked, what changed, who acts next, what outputs are required, and whether validation is mandatory.
  - icon: 🎭
    title: Multiple roles per agent
    details: An agent may be architect, implementer, reviewer, image generator, or integrator — with one primary active role per task.
  - icon: 🧩
    title: Provider-neutral
    details: Coordinate Claude, Codex, Gemini, local agents, or any CLI-capable teammate without tying the protocol to one vendor.
  - icon: 🪶
    title: Local and lightweight
    details: Human-readable state, versioned alongside the repository, with no M8Shift API account or hosted control plane required.
  - icon: 🧪
    title: Reviewable by design
    details: Separate production from validation, preserve an append-only trail, and make approvals or requested revisions explicit.
---

## Coordination, not another agent platform

M8Shift is a coordination layer for AI agents already running in your terminal, IDE,
desktop application, or automation environment.

It does not need to become the model provider, the agent runtime, the project manager,
the chat application, and the coffee machine. It focuses on a narrower problem:
**making cooperative work explicit, serialized where necessary, and reviewable.**

```text
User goal
   |
   v
Coordinator role
   |--------------------------|
   v                          v
Writer                    Image generator
isolated worktree         isolated worktree
   |                          |
   +------------+-------------+
                v
             Integrator
        exclusive integration pen
                |
                v
         Independent reviewer
```

## Two operating modes

### Relay mode

Use one shared working tree and one global pen. Agents take strict turns.

Best for:

- a simple Claude ↔ Codex loop;
- one-file installation;
- interactive IDE sessions;
- changes where parallelism would add more ceremony than value.

### Worktree mode

Run independent tasks in isolated branches or worktrees, then serialize integration.

Best for:

- code and documentation produced concurrently;
- text and generated images developed in parallel;
- specialist agents with non-overlapping responsibilities;
- independent review before final integration.

## What M8Shift records

A handoff can carry more than “done” and “next”:

```yaml
handoff:
  source: { agent: claude, role: coordinator }
  target: { agent: codex, role: implementer }
  relation: implement
  permissions:
    enforcement: advisory
    allow: [repository.read, workspace.write, tests.run]
  expected_output:
    required: [summary, changed_files, test_results]
  validation:
    required: true
    independence_required: true
    validator: { agent: gemini, role: reviewer }
```

## Current status

M8Shift evolves from the original CoWork relay design. The current implementation and
future protocol stages must be labelled separately:

- **available now:** cooperative relay, shared lock, turn journal, local CLI;
- **specified next:** N-agent roles, structured handoffs, explicit validation;
- **future RFC:** concurrent isolated worktrees and integration coordination.

[Read the roadmap →](/roadmap)
