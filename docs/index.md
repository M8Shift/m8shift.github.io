---
layout: home

title: M8Shift
titleTemplate: AI agents, working in shifts.

hero:
  name: M8Shift
  text: AI agents, working in shifts.
  tagline: Free and open source. Coordinate Claude, Codex, Gemini, Vibe and other coding agents on one repository — exactly one writes at a time, and the handoff is never lost (subject, naturally, to good agent cooperation).
  image:
    src: /logo.png
    alt: M8Shift logo
  actions:
    - theme: brand
      text: Get started
      link: /guide/quickstart
    - theme: alt
      text: Explore the concepts
      link: /concepts/
    - theme: alt
      text: View the source
      link: https://github.com/TheLazyGeekGuy/M8Shift

features:
  - icon: 🖊️
    title: One writer at a time
    details: A single exclusive "pen" guards the repository. An agent must claim it before touching files; a second claim simply waits. A cooperative mutex, not a free-for-all.
  - icon: 🔁
    title: Structured handoffs
    details: Every turn is a numbered, immutable contract — who wrote, what was done, what is asked next, and which files changed — appended to a grep-able journal.
  - icon: 🎭
    title: Configurable roster
    details: Declare the agents that may take turns (claude, codex, gemini, le chat…). Any active member can receive the pen; the core stays a strict degree-1 relay.
  - icon: 🧩
    title: Provider-neutral
    details: Works with any CLI-capable teammate. M8Shift never becomes the model provider, the runtime, or a hosted control plane.
  - icon: 🪶
    title: One file, zero dependencies
    details: A free and open-source Python script, standard library only. No account, no server, no API key. State lives in the repo and is versioned with it.
  - icon: 🧪
    title: Auditable by design
    details: Append-only turns, memory notes, tasks, session history, and readable local-time status keep the relay inspectable without a service.

---

## Coordination, not another agent platform

M8Shift is a coordination layer for AI agents already running in your terminal, IDE,
desktop application, or automation environment.

It is **free and open source**, released under the Apache License 2.0.

It does not need to become the model provider, the agent runtime, the project manager,
the chat application, and the coffee machine. It focuses on a narrower problem:
**making cooperative work explicit, serialized, and reviewable.**

```mermaid
sequenceDiagram
    participant C as claude
    participant Pen as 🖊️ the pen
    participant X as codex
    C->>Pen: claim (exclusive)
    Note over C: holds the pen — sole writer
    C->>X: append --to codex · turn closed & immutable
    X->>Pen: claim (exclusive)
    Note over X: holds the pen — sole writer
    X->>C: append --to claude
    Note over C,X: strict alternation until done
```

*🟣 agents · 🩷 the pen*

## How a relay works

The examples use `claude` and `codex` because they are familiar defaults. They are
not special: replace them with `gemini`, `vibe`, or any cooperative agent that can
read its instructions, run the CLI, and follow `claim → work → append`.

In the simplest relay, two agents share one repository. The state lives at the top of a single file
(`M8SHIFT.md`), readable line by line:

```text
<!-- M8SHIFT:LOCK:BEGIN -->
holder: claude
state: WORKING_CLAUDE
agents: claude,codex
turn: 3
since: 2026-06-22T18:00:00Z
expires: 2026-06-22T18:30:00Z
lang: en
<!-- M8SHIFT:LOCK:END -->
```

The rule that makes it safe is one sentence: **never modify the repository before a
successful `claim`.** When an agent is done with its turn, it `append`s a handoff and
passes the pen to the other agent.

## What a handoff records

Each turn is a numbered block — once closed, it is never rewritten:

```text
<!-- M8SHIFT:TURN 4 claude BEGIN -->
from: claude
to: codex
ask: Implement the parser and keep legacy behaviour.
done: Defined the parser contract and added tests.
files: docs/spec.md, tests/test_parser.py
handoff: codex
<!-- M8SHIFT:TURN 4 claude END -->
```

Richer turn fields (`branch`, `commit`, `tests`, `next`, `blocked_on`, custom
`x_*` fields) are advisory metadata: M8Shift records them, but does not execute or
enforce them.

## Current status

M8Shift's shipped implementation and the planned protocol stages are labelled separately:

- **available now:** exclusive-claim relay, shared lock with stale-lock recovery, the
  immutable turn journal, bounded archiving, configurable roster, structured handoffs,
  `peek`, `recap`, `log`, `history`, `status --json`, `status --for`, `next`,
  `append --wait`, shared memory notes, task ledger, local-time display, and EN/FR
  generated output;
- **available as an opt-in companion:** `m8shift-worktree.py` for isolated feature
  worktrees plus one serialized integration pen;
- **specified future RFCs:** hosted/runtime control plane and provider management as
  optional companions; true degree > 1 writes in one shared working tree as a research
  topic rejected for the core in favor of isolated worktrees.

[Read the roadmap →](/roadmap)
