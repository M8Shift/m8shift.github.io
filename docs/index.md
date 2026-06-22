---
layout: home

title: M8Shift
titleTemplate: AI agents, working in shifts.

hero:
  name: M8Shift
  text: AI agents, working in shifts.
  tagline: Coordinate Claude, Codex, Gemini and other coding agents on one repository — exactly one writes at a time, and the handoff is never lost.
  image:
    src: /logo.svg
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
    title: Configurable agent pair
    details: Declare which two agents relay (claude, codex, gemini, le chat…). The first two are active; the protocol stays a strict degree-1 relay.
  - icon: 🧩
    title: Provider-neutral
    details: Works with any CLI-capable teammate. M8Shift never becomes the model provider, the runtime, or a hosted control plane.
  - icon: 🪶
    title: One file, zero dependencies
    details: A single Python script, standard library only. No account, no server, no API key. State lives in the repo and is versioned with it.
  - icon: 🧪
    title: Auditable by design
    details: An append-only turn trail you can read with a text editor or grep — and bound with one archive command when it grows.

---

## Coordination, not another agent platform

M8Shift is a coordination layer for AI agents already running in your terminal, IDE,
desktop application, or automation environment.

It does not need to become the model provider, the agent runtime, the project manager,
the chat application, and the coffee machine. It focuses on a narrower problem:
**making cooperative work explicit, serialized, and reviewable.**

```text
        ┌─────────────┐        claim (exclusive)
        │   the pen   │  ◄───────────────────────── claude
        └─────────────┘
              │ append --to codex   (turn closed, immutable)
              ▼
        ┌─────────────┐        claim (exclusive)
        │   the pen   │  ◄───────────────────────── codex
        └─────────────┘
              │ append --to claude
              ▼
            … strict alternation until `done` …
```

## How a relay works

Two agents share one repository. The state lives at the top of a single file
(`M8SHIFT.md`, or `COWORK.md` on existing projects), readable line by line:

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

Richer turn fields (branch, commit, tests, next) are **specified, not yet shipped** —
see the [roadmap](/roadmap).

## Current status

M8Shift evolves from the original CoWork relay design. The shipped implementation and
the planned protocol stages are labelled separately:

- **available now:** exclusive-claim relay, shared lock with stale-lock recovery, the
  immutable turn journal, bounded archiving, the configurable agent pair (roster), a
  local single-file CLI, and EN/FR output;
- **specified next:** shared memory and recap, structured turn fields with `peek`,
  and a timeline / JSON status;
- **future RFC:** more than two simultaneous agents (degree > 1).

[Read the roadmap →](/roadmap)
