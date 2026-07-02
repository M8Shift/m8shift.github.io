---
layout: home

title: M8Shift
titleTemplate: AI agents, working in shifts.

hero:
  name: ""
  text: <img src="/logo-wordmark.png" alt="M8Shift wordmark" id="m8shift-title" />AI agents,<br>Working in shifts.
  tagline: "Pronounced mate-shift — AI team mates working in shifts. Free and open source. Coordinate your AI teammates — Claude, Codex, Gemini, Vibe, and other coding agents — on one repository: exactly one writes at a time, and every handoff stays recorded."
  image:
    src: /logo-2.webp
    alt: M8Shift logo
  actions:
    - theme: brand
      text: Get started
      link: /guide/quickstart
    - theme: alt
      text: Read the docs
      link: /guide/
    - theme: alt
      text: View the source
      link: https://github.com/M8Shift/M8Shift

features:
  - icon: <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    title: One writer at a time
    details: A single exclusive "pen" guards the repository. An agent must claim it before touching files; a second claim simply waits. A cooperative mutex, not a free-for-all.
  - icon: <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
    title: Structured handoffs
    details: Every turn is a numbered, immutable contract — who wrote, what was done, what is asked next, and which files changed — appended to a grep-able journal.
  - icon: <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    title: Configurable roster
    details: Declare the agents that may take turns (claude, codex, gemini, vibe…). Any active member can receive the pen; the core stays a strict degree-1 relay.
  - icon: <i class="fa-solid fa-plug-circle-check" aria-hidden="true"></i>
    title: Provider-neutral
    details: Works with any CLI-capable teammate. The core never becomes the model provider or a hosted control plane; optional companions stay local and advisory.
  - icon: <i class="fa-solid fa-file-code" aria-hidden="true"></i>
    title: One file, zero dependencies
    details: A free and open-source Python script, standard library only. No account, no server, no API key. State lives in the repo and is versioned with it.
  - icon: <i class="fa-solid fa-clipboard-check" aria-hidden="true"></i>
    title: Auditable by design
    details: Append-only turns, memory notes, tasks, session history, runtime sidecars, and timezone-prefixed local-time status keep the relay inspectable without a service.

---

## Quick Start

<div class="m8-quickstart">
  <input class="m8-quickstart__radio" type="radio" name="m8-quickstart-en" id="m8-quickstart-en-macos" checked>
  <input class="m8-quickstart__radio" type="radio" name="m8-quickstart-en" id="m8-quickstart-en-linux">
  <input class="m8-quickstart__radio" type="radio" name="m8-quickstart-en" id="m8-quickstart-en-windows">
  <div class="m8-quickstart__bar">
    <div class="m8-quickstart__lights" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <div class="m8-quickstart__tabs">
      <label for="m8-quickstart-en-macos">macOS</label>
      <label for="m8-quickstart-en-linux">Linux</label>
      <label for="m8-quickstart-en-windows">Windows</label>
    </div>
    <div class="m8-quickstart__badge">local install</div>
  </div>
  <div class="m8-quickstart__body">
    <div class="m8-quickstart__panel m8-quickstart__panel--macos">
      <p class="m8-quickstart__comment"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Terminal install for macOS. Verifies files, installs locally, then runs init. Add <code>--with-rtk</code> only with consent.</p>
      <pre><code><span class="m8-prompt">$</span> cd /path/to/project
<span class="m8-prompt">$</span> curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex</code></pre>
    </div>
    <div class="m8-quickstart__panel m8-quickstart__panel--linux">
      <p class="m8-quickstart__comment"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Shell install for Linux, WSL, or Git Bash. No sudo and no global PATH change; optional RTK is local and verified.</p>
      <pre><code><span class="m8-prompt">$</span> cd /path/to/project
<span class="m8-prompt">$</span> curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex</code></pre>
    </div>
    <div class="m8-quickstart__panel m8-quickstart__panel--windows">
      <p class="m8-quickstart__comment"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Native PowerShell install for Windows. Verification is enabled by default.</p>
      <pre><code><span class="m8-prompt">PS&gt;</span> cd C:\path\to\project
<span class="m8-prompt">PS&gt;</span> irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex</code></pre>
    </div>
  </div>
  <div class="m8-quickstart__foot">
    <span><i class="fa-solid fa-fingerprint" aria-hidden="true"></i> SHA256-checked against the selected ref. Downloads core, worktree, runtime, and context scripts. Optional RTK/Headroom stay explicit.</span>
    <span class="m8-quickstart__links"><a href="/guide/macos">macOS</a><a href="/guide/linux">Linux</a><a href="/guide/windows">Windows</a></span>
  </div>
</div>

## Why Multi-Agent

<p class="m8-section-lead">Single assistants are strong on punctual tasks. Multi-step repository work needs a small team shape: plan, produce, review, correct, document, and arbitrate without losing context.</p>

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="/guide/why#why-multi-agent-work-helps">
    <i class="fa-solid fa-sitemap" aria-hidden="true"></i>
    <strong>Long work needs structure</strong>
    <span>Complex projects fail when planning, implementation, testing, and documentation stay inside one broad prompt.</span>
  </a>
  <a class="m8-doc-card" href="/concepts/agents-roles">
    <i class="fa-solid fa-user-gear" aria-hidden="true"></i>
    <strong>Roles reduce blur</strong>
    <span>A planner, coder, reviewer, tester, or editor can optimize for one responsibility instead of one generic answer.</span>
  </a>
  <a class="m8-doc-card" href="/concepts/handoff-contracts">
    <i class="fa-solid fa-people-arrows" aria-hidden="true"></i>
    <strong>Handoffs prevent drift</strong>
    <span>Every agent needs to know what changed, what evidence exists, and what the next turn is expected to do.</span>
  </a>
  <a class="m8-doc-card" href="/concepts/validation">
    <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
    <strong>Humans still arbitrate</strong>
    <span>More agents can add cost and chatter. M8Shift keeps the repo trail readable so humans can review and decide.</span>
  </a>
</div>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-book-open" aria-hidden="true"></i>
  <div>
    <strong>Broader pattern</strong>
    <p>Liora's article <a href="https://liora.io/en/all-about-crew-ai" target="_blank" rel="noopener noreferrer">Crew AI: the framework that transforms AIs into office colleagues</a> describes the same shift from one-off assistants toward specialized agents, shared context, coordination, and human arbitration.</p>
  </div>
</div>

## AIs have cognitive biases — just like us

<p class="m8-section-lead">A single AI agent has no check on its own biases. M8Shift doesn't debias the model — it structures the work so an <strong>independent, model-diverse</strong> turn, anchored in deterministic tests and a human arbiter, catches what one agent would wave through. Here is how far that actually goes, bias by bias.</p>

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="/security/audits#a-note-on-ai-cognitive-bias">
    <i class="fa-solid fa-face-smile-wink" aria-hidden="true"></i>
    <strong>Sycophancy</strong>
    <span>It tries to tell you what you want to hear. M8Shift's reviewer is a <em>different agent on a separate turn</em>, required to refute by default — not to please the author.</span>
  </a>
  <a class="m8-doc-card" href="/security/audits#a-note-on-ai-cognitive-bias">
    <i class="fa-solid fa-bullhorn" aria-hidden="true"></i>
    <strong>Overconfidence</strong>
    <span>It hallucinates with assurance, no warning. Claims are anchored to <em>deterministic ground truth</em> — tests, builds, byte diffs — that confidence can't fake.</span>
  </a>
  <a class="m8-doc-card" href="/security/audits#a-note-on-ai-cognitive-bias">
    <i class="fa-solid fa-anchor" aria-hidden="true"></i>
    <strong>Anchoring</strong>
    <span>It clings to its first answer. A <em>different model</em>, with different priors, brings a fresh take that isn't bound to the first agent's draft.</span>
  </a>
  <a class="m8-doc-card" href="/security/audits#a-note-on-ai-cognitive-bias">
    <i class="fa-solid fa-robot" aria-hidden="true"></i>
    <strong>Automation bias</strong>
    <span>We over-trust whatever it outputs. The <em>human arbitrates</em> and the append-only trail stays inspectable, so the human stays the decision point.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
  <div>
    <strong>How true is this? Honestly — structural, not magic.</strong>
    <p>M8Shift can't make an AI unbiased; the agents still have these biases. What it does is <strong>structure the process so the bias is checked, not trusted</strong>: an independent turn that must refute, ideally a different model family, a verdict anchored in tests a confident hallucination can't pass, and a human who arbitrates. The benefit holds <em>only when the contradiction is real</em> — two agreeing agents, especially the same model, form an echo chamber that <em>amplifies</em> the bias instead. Full analysis in the <a href="/security/audits#a-note-on-ai-cognitive-bias">security audit's bias note</a>.</p>
  </div>
</div>

## Practical Use Cases

<p class="m8-section-lead">M8Shift helps when one assistant is not enough and the work benefits from explicit roles, handoffs, and review.</p>

<div class="m8-usecase-grid">
  <a class="m8-usecase-card" href="/use-cases#build-software">
    <img class="m8-usecase-card__image" src="/use-cases/build-software.svg" alt="">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Build software</strong>
    <span>Split planning, implementation, review, tests, documentation, and release notes between specialized agents.</span>
  </a>
  <a class="m8-usecase-card" href="/use-cases#write-a-book">
    <img class="m8-usecase-card__image" src="/use-cases/write-book.svg" alt="">
    <i class="fa-solid fa-pen-fancy" aria-hidden="true"></i>
    <strong>Write long-form content</strong>
    <span>Use coordinator, writer, reviewer, and editor roles to draft chapters without losing structure or tone.</span>
  </a>
  <a class="m8-usecase-card" href="/use-cases#design-a-website">
    <img class="m8-usecase-card__image" src="/use-cases/website.svg" alt="">
    <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
    <strong>Design a website</strong>
    <span>Coordinate information architecture, landing page copy, docs, FAQ, and implementation-ready content.</span>
  </a>
  <a class="m8-usecase-card" href="/use-cases#review-and-quality-control">
    <img class="m8-usecase-card__image" src="/use-cases/review.svg" alt="">
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    <strong>Review and validate</strong>
    <span>Separate production from validation so the agent that creates the work is not the only one approving it.</span>
  </a>
</div>

[Explore all use cases →](/use-cases)

## Documentation for humans and agents

<p class="m8-section-lead">The homepage explains the product. The rest of the site is the operating manual for humans and AI agents that need a shared way to communicate, hand off work, and inspect state.</p>

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="/guide/quickstart">
    <i class="fa-solid fa-rocket" aria-hidden="true"></i>
    <strong>Start a relay</strong>
    <span>Install locally, initialize a repository, and run a first handoff between coding agents.</span>
  </a>
  <a class="m8-doc-card" href="/reference/features">
    <i class="fa-solid fa-table-list" aria-hidden="true"></i>
    <strong>Feature matrix</strong>
    <span>Scan the complete list of shipped features and what each capability does.</span>
  </a>
  <a class="m8-doc-card" href="/concepts/">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>Understand the protocol</strong>
    <span>Read the concepts behind the pen, roles, relations, validation, and immutable handoffs.</span>
  </a>
  <a class="m8-doc-card" href="/reference/cli">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Automate from the CLI</strong>
    <span>Use commands, exit codes, JSON status, contracts, and generated files from scripts or agents.</span>
  </a>
</div>

M8Shift is deliberately narrow: it does not host models, replace your IDE, or become
the project manager. It gives teammates — human or AI — a local, inspectable relay.

## Frequently asked questions

<p class="m8-section-lead">Common questions about M8Shift and how it works.</p>

<div class="m8-faq-strip">
  <a class="m8-faq-card" href="/faq#is-m8shift-model-agnostic">
    <i class="fa-solid fa-robot" aria-hidden="true"></i>
    <strong>Model-agnostic</strong>
    <span>Claude, Codex, Gemini, Vibe, local tools — any cooperative agent that can run the relay loop.</span>
  </a>
  <a class="m8-faq-card" href="/faq#does-m8shift-need-api-keys">
    <i class="fa-solid fa-key" aria-hidden="true"></i>
    <strong>No M8Shift API key</strong>
    <span>The core makes no model calls and stores no provider credentials. Your agent hosts keep their own auth.</span>
  </a>
  <a class="m8-faq-card" href="/guide/worktree-toolbox">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>Parallelism via worktrees</strong>
    <span>One shared tree stays degree-1; isolated feature work uses the shipped worktree toolbox.</span>
  </a>
</div>

[Read the full FAQ →](/faq)

## Project status

<p class="m8-section-lead">M8Shift is a free and open-source local CLI. The roadmap separates what is shipped today from the protocol stages still being specified.</p>

<div class="m8-faq-strip">
  <a class="m8-faq-card" href="/roadmap">
    <i class="fa-solid fa-route" aria-hidden="true"></i>
    <strong>Releases and roadmap</strong>
    <span>See the current version, shipped stages, planned work, and protocol direction.</span>
  </a>
  <a class="m8-faq-card" href="/comparison">
    <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
    <strong>Why not an agent platform?</strong>
    <span>Compare a local relay with hosted runtimes, databases, queues, and orchestration systems.</span>
  </a>
  <a class="m8-faq-card" href="https://github.com/M8Shift/M8Shift">
    <i class="fa-solid fa-code" aria-hidden="true"></i>
    <strong>Source code</strong>
    <span>Inspect the implementation, install scripts, generated protocol files, and project history.</span>
  </a>
</div>
