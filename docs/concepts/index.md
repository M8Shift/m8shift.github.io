# <i class="fa-solid fa-diagram-project m8-heading-icon" aria-hidden="true"></i> Concepts

M8Shift separates concepts that agent frameworks often blend together. Some are shipped
today; others are a specified direction. Use this section when an agent, a script, or a
human reviewer needs the same vocabulary.

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-lock" aria-hidden="true"></i>
  <div>
    <strong>Invariant</strong>
    <p>The rule that ties every concept together is simple: never modify the repository before a successful <code>claim</code>.</p>
  </div>
</div>

<div class="m8-path">
  <span><i class="fa-solid fa-pen-nib" aria-hidden="true"></i> Pen</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-users-gear" aria-hidden="true"></i> Roster</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-file-signature" aria-hidden="true"></i> Handoff</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-check-double" aria-hidden="true"></i> Validation</span>
</div>

## <i class="fa-solid fa-book-open m8-heading-icon" aria-hidden="true"></i> Core ideas

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./pen">
    <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    <strong>The pen</strong>
    <span>Who may write right now, how ownership moves, and why degree-1 coordination matters.</span>
  </a>
  <a class="m8-doc-card" href="./agents-roles">
    <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    <strong>Agents and roster</strong>
    <span>Which agents can participate, where they read instructions, and how roles stay advisory.</span>
  </a>
  <a class="m8-doc-card" href="./handoff-contracts">
    <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
    <strong>Handoff contracts</strong>
    <span>What was done, what is requested next, and which fields make a turn grep-able.</span>
  </a>
  <a class="m8-doc-card" href="./relations">
    <i class="fa-solid fa-people-arrows" aria-hidden="true"></i>
    <strong>Relations</strong>
    <span>Why the pen is moving: handoff, review request, review result, escalation, or custom context.</span>
  </a>
  <a class="m8-doc-card" href="./validation">
    <i class="fa-solid fa-check-double" aria-hidden="true"></i>
    <strong>Validation</strong>
    <span>Separate hard input/state checks from read-only contract validation and human review.</span>
  </a>
  <a class="m8-doc-card" href="/roadmap">
    <i class="fa-solid fa-route" aria-hidden="true"></i>
    <strong>Roadmap stages</strong>
    <span>See which concepts are available now and which are protocol direction.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-robot" aria-hidden="true"></i>
  <div>
    <strong>For AI agents</strong>
    <p>Concept pages are short on purpose: agents should be able to read them before operating the CLI, then switch to the reference for exact command syntax.</p>
  </div>
</div>
