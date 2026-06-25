# <i class="fa-solid fa-compass m8-heading-icon" aria-hidden="true"></i> Guide

M8Shift helps AI coding agents cooperate on one project without treating the repository
as a shared whiteboard. Start here when you want a working relay, not the protocol
details.

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
  <div>
    <strong>One operational rule</strong>
    <p>Never edit the repository before a successful <code>claim</code>. Everything else in the guide explains how humans and agents keep that rule visible.</p>
  </div>
</div>

<div class="m8-path">
  <span><i class="fa-solid fa-circle-question" aria-hidden="true"></i> Why</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-download" aria-hidden="true"></i> Install</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-rocket" aria-hidden="true"></i> Quickstart</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-people-arrows" aria-hidden="true"></i> Relay</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-check-double" aria-hidden="true"></i> Review</span>
</div>

## <i class="fa-solid fa-bolt m8-heading-icon" aria-hidden="true"></i> Fast path

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./why">
    <i class="fa-solid fa-circle-question" aria-hidden="true"></i>
    <strong>Why M8Shift</strong>
    <span>Understand the repository conflict M8Shift is built to prevent before you install anything.</span>
  </a>
  <a class="m8-doc-card" href="./quickstart">
    <i class="fa-solid fa-rocket" aria-hidden="true"></i>
    <strong>Quickstart</strong>
    <span>Install locally, initialize <code>M8SHIFT.md</code>, and complete the first handoff.</span>
  </a>
  <a class="m8-doc-card" href="./vscode">
    <i class="fa-solid fa-code" aria-hidden="true"></i>
    <strong>VS Code loop</strong>
    <span>Run the relay from editor panels and resume the next agent at each turn.</span>
  </a>
</div>

## <i class="fa-solid fa-download m8-heading-icon" aria-hidden="true"></i> Install by platform

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./macos">
    <i class="fa-solid fa-laptop" aria-hidden="true"></i>
    <strong>macOS</strong>
    <span>Use the shell installer, local project files, checksum verification, and no global PATH mutation.</span>
  </a>
  <a class="m8-doc-card" href="./linux">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Linux / WSL</strong>
    <span>Install from a POSIX shell, including WSL and Git Bash style environments.</span>
  </a>
  <a class="m8-doc-card" href="./windows">
    <i class="fa-solid fa-window-maximize" aria-hidden="true"></i>
    <strong>Windows</strong>
    <span>Use native PowerShell with verification enabled by default.</span>
  </a>
</div>

## <i class="fa-solid fa-diagram-project m8-heading-icon" aria-hidden="true"></i> Choose a workflow

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./two-agent-relay">
    <i class="fa-solid fa-right-left" aria-hidden="true"></i>
    <strong>Two-agent relay</strong>
    <span>The simplest shipped workflow: strict alternation between two cooperative agents.</span>
  </a>
  <a class="m8-doc-card" href="./multi-agent">
    <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    <strong>Multi-agent roster</strong>
    <span>Declare more agents and hand off to any active member while keeping one shared pen.</span>
  </a>
  <a class="m8-doc-card" href="./worktree-toolbox">
    <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
    <strong>Worktree toolbox</strong>
    <span>Use isolated feature worktrees for parallel work, then serialize integration.</span>
  </a>
  <a class="m8-doc-card" href="./headless">
    <i class="fa-solid fa-robot" aria-hidden="true"></i>
    <strong>Headless runner</strong>
    <span>Drive repeated <code>next → work → append</code> cycles from automation.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-route" aria-hidden="true"></i>
  <div>
    <strong>Where to go next</strong>
    <p>Use the guide for operation, the <a href="/concepts/">concepts</a> section for protocol vocabulary, and the <a href="/reference/cli">CLI reference</a> for exact command behavior.</p>
  </div>
</div>
