---
layout: home

title: M8Shift
titleTemplate: Official site coming soon

hero:
  name: M8Shift
  text: The official site is coming soon.
  tagline: "A free, open-source local relay for coordinating multiple AI agents on the same repository: one writer at a time, explicit handoffs, a readable turn journal, and no server or M8Shift API key."
  image:
    src: /logo.png
    alt: M8Shift logo
  actions:
    - theme: brand
      text: View the GitHub project
      link: https://github.com/M8Shift/M8Shift
    - theme: alt
      text: Follow the site launch
      link: https://github.com/M8Shift/m8shift.github.io

features:
  - icon: <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    title: One shared pen
    details: M8Shift acts as a cooperative repository mutex. One agent claims the pen, works, then hands it off explicitly.
  - icon: <i class="fa-solid fa-people-arrows" aria-hidden="true"></i>
    title: Structured handoffs
    details: Every turn records what changed, what is needed next, which files were touched, and which agent receives the next turn.
  - icon: <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
    title: Readable state
    details: Coordination lives in versionable text files. Maintainers can inspect, audit, and arbitrate without an opaque dashboard.
  - icon: <i class="fa-solid fa-plug-circle-check" aria-hidden="true"></i>
    title: Provider-neutral
    details: Claude, Codex, Gemini, Vibe, or another cooperative agent can participate if it can read instructions and run the CLI.
  - icon: <i class="fa-solid fa-lock-open" aria-hidden="true"></i>
    title: Local-first
    details: The core makes no network calls, requires no account, and stores no provider secrets.
  - icon: <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
    title: Extensible without runtime ownership
    details: Optional companions cover worktrees, presence, reports, and headless runs without becoming the relay authority.
---

## Opening Soon

The full M8Shift website is being prepared. This temporary homepage is the public
entry point while the GitHub Pages repository, domain, and final documentation
are being connected.

M8Shift solves a simple problem: when several AI agents work inside the same
repository, they can overwrite each other. The project introduces one clear,
inspectable rule: **only one agent writes at a time**. Other agents wait for
their turn, then resume from an explicit handoff with the context they need.

<div class="m8-doc-grid m8-doc-grid--three">
  <div class="m8-doc-card">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>A coordination tool</strong>
    <span>M8Shift does not host models or replace your IDE. It coordinates agents around a repository and a shared turn journal.</span>
  </div>
  <div class="m8-doc-card">
    <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
    <strong>Useful disagreement</strong>
    <span>Different agents can plan, code, review, document, or challenge an approach while the human maintainer keeps final arbitration.</span>
  </div>
  <div class="m8-doc-card">
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    <strong>A durable trail</strong>
    <span>The relay keeps turns, requests, decisions, and touched files in a format that can be inspected from Git and plain text.</span>
  </div>
</div>

## What M8Shift Does

- It installs a local relay into a project.
- It creates a `M8SHIFT.md` file containing the lock and the turn journal.
- It enforces the `claim -> work -> append` sequence to avoid simultaneous writers.
- It lets one agent hand off explicitly to another member of the roster.
- It keeps coordination state in the repository, in plain files, without a resident service.
- It works with CLI, IDE, desktop, and headless workflows.

## What M8Shift Does Not Do

- It does not run a model for you.
- It does not become an agent orchestrator.
- It does not replace Git, tests, or human review.
- It does not require an API key for its own operation.

## Status

The product is already available as open source. The complete public website will
follow with documentation, installation guides, use cases, CLI references, and
architecture notes.

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
  <div>
    <strong>Temporary launch page</strong>
    <p>This page tests the <code>m8shift.github.io</code> repository, the VitePress build, GitHub Pages publishing, and the future <code>m8shift.ai</code> domain.</p>
  </div>
</div>
