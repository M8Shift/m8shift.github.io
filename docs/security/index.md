# <i class="fa-solid fa-shield-halved m8-heading-icon" aria-hidden="true"></i> Security model

M8Shift reduces accidental agent conflicts. It is not a sandbox.

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
  <div>
    <strong>Boundary first</strong>
    <p>M8Shift coordinates cooperative ownership. Filesystem access, branch rules, secrets, provider accounts, and tool permissions remain enforced by the host environment.</p>
  </div>
</div>

## <i class="fa-solid fa-layer-group m8-heading-icon" aria-hidden="true"></i> Defense layers

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="/reference/contract-schema">
    <i class="fa-solid fa-filter" aria-hidden="true"></i>
    <strong>Strict parsing</strong>
    <span>Journal fields are parsed and framed so handoffs remain inspectable instead of free-form hidden state.</span>
  </a>
  <a class="m8-doc-card" href="/reference/state-model">
    <i class="fa-solid fa-lock" aria-hidden="true"></i>
    <strong>Ownership token</strong>
    <span>The lock block records the holder, state, turn, TTL, and roster before mutations happen.</span>
  </a>
  <a class="m8-doc-card" href="/concepts/pen">
    <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    <strong>Exclusive pen</strong>
    <span>An inter-process lock serializes every M8Shift mutation and keeps the shared tree degree-1.</span>
  </a>
  <a class="m8-doc-card" href="./permissions">
    <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
    <strong>Host permissions</strong>
    <span>Real enforcement belongs to the OS, IDE, repository, branch protection, and agent host.</span>
  </a>
  <a class="m8-doc-card" href="/concepts/validation">
    <i class="fa-solid fa-check-double" aria-hidden="true"></i>
    <strong>Validation</strong>
    <span>Input/state checks are hard guardrails; contract validation is read-only reporting.</span>
  </a>
  <a class="m8-doc-card" href="./threat-model">
    <i class="fa-solid fa-bug-slash" aria-hidden="true"></i>
    <strong>Threat model</strong>
    <span>Review assets, trust boundaries, expected attackers, and mitigations in one place.</span>
  </a>
</div>

## <i class="fa-solid fa-scale-balanced m8-heading-icon" aria-hidden="true"></i> Permission vocabulary

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./permissions#advisory">
    <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
    <strong>Advisory</strong>
    <span>Recorded expectation only. Useful for agents and humans, but not a real access boundary.</span>
  </a>
  <a class="m8-doc-card" href="./permissions#host">
    <i class="fa-solid fa-server" aria-hidden="true"></i>
    <strong>Host-enforced</strong>
    <span>Implemented outside M8Shift by filesystem, repository, IDE, OS, or provider controls.</span>
  </a>
  <a class="m8-doc-card" href="./permissions#mixed">
    <i class="fa-solid fa-code-compare" aria-hidden="true"></i>
    <strong>Mixed</strong>
    <span>Part advisory and part enforced. Each capability must state which layer actually applies it.</span>
  </a>
</div>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-eye" aria-hidden="true"></i>
  <div>
    <strong>Documentation rule</strong>
    <p>The site must never describe advisory metadata as a true security boundary. When in doubt, say which host layer enforces the rule.</p>
  </div>
</div>
