# <i class="fa-solid fa-book m8-heading-icon" aria-hidden="true"></i> Reference

This section documents shipped behavior precisely. Planned commands must remain marked
as planned until code and tests exist.

<div class="m8-callout m8-callout--pink">
  <i class="fa-solid fa-terminal" aria-hidden="true"></i>
  <div>
    <strong>For automation</strong>
    <p>Use this section when writing scripts, headless loops, or agent instructions. It favors exact command behavior over marketing language.</p>
  </div>
</div>

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./cli">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>CLI</strong>
    <span>Commands, options, read/write behavior, JSON output, contracts, and wait loops.</span>
  </a>
  <a class="m8-doc-card" href="./state-model">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>State model</strong>
    <span>The lock block, holder, state transitions, TTLs, roster, and session fields.</span>
  </a>
  <a class="m8-doc-card" href="./contract-schema">
    <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
    <strong>Turn schema</strong>
    <span>Handoff fields, Stage-4 contract vocabulary, relation metadata, and validation commands.</span>
  </a>
  <a class="m8-doc-card" href="./generated-files">
    <i class="fa-solid fa-file-code" aria-hidden="true"></i>
    <strong>Generated files</strong>
    <span>Files created by init, protocol anchors, local state, and agent-facing instructions.</span>
  </a>
  <a class="m8-doc-card" href="./exit-codes">
    <i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>
    <strong>Exit codes</strong>
    <span>Machine-readable outcomes for success, refusal, waiting, invalid state, and automation branches.</span>
  </a>
  <a class="m8-doc-card" href="./limitations">
    <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
    <strong>Limitations</strong>
    <span>What M8Shift deliberately does not enforce, host boundaries, and advisory metadata limits.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
  <div>
    <strong>Reference discipline</strong>
    <p>If the CLI does not implement a behavior, the reference must not describe it as available. Link to the roadmap for staged or companion work.</p>
  </div>
</div>
