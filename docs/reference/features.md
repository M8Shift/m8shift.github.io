# <i class="fa-solid fa-table-list m8-heading-icon" aria-hidden="true"></i> Feature matrix

<p class="m8-section-lead">A complete, practical list of the shipped M8Shift capabilities and what each one does.</p>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
  <div>
    <strong>Scope rule</strong>
    <p>This table describes available behavior: the local relay, generated files, validation, automation hooks, and the optional worktree companion. Planned protocol work stays in the roadmap until it ships.</p>
  </div>
</div>

## <i class="fa-solid fa-gauge-high m8-heading-icon" aria-hidden="true"></i> Token adapters: RTK and Headroom

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-plug-circle-bolt" aria-hidden="true"></i>
  <div>
    <strong>Optional token-usage optimizers, not requirements.</strong>
    <p><a href="https://github.com/rtk-ai/rtk">RTK</a> is an external open-source shell-output compression tool. M8Shift can use it through the RFC 034 identity-pinned argv runner for shell and tool output, primarily to reduce the amount of command output agents need to read.</p>
    <p><a href="https://github.com/chopratejas/headroom">Headroom</a> / <a href="https://pypi.org/project/headroom-ai/">headroom-ai</a> is an external open-source context-compression library and CLI. M8Shift can plug an adapter-compatible local <code>headroom_ext</code> command into the same identity-pinned runner for broad context records.</p>
    <p>Both are local, optional, and fail closed to builtin behavior when absent, unpinned, invalid, or errored. They exist to optimize token usage, not to change the core relay. M8Shift measurements recorded ~97% savings on referenced context packs and ~54–68% on real shell output with RTK; Headroom is treated as a near-lossless broad-context experiment. See the <a href="https://github.com/M8Shift/M8Shift/blob/main/docs/en/context-pack-measurements.md">context-pack measurements</a>.</p>
  </div>
</div>

<div class="m8-feature-table m8-feature-table--fit">
<table>
  <thead>
    <tr>
      <th>Area</th>
      <th>Feature</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-pen-nib" aria-hidden="true"></i> Exclusive pen</span></td>
      <td>Allows exactly one roster agent to write in the shared repository at a time. An agent must <code>claim</code> the pen before changing files.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-users-gear" aria-hidden="true"></i> Agent roster</span></td>
      <td>Defines which agents may participate, for example <code>claude,codex,gemini,vibe</code>. Any listed agent can receive the pen.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-lock" aria-hidden="true"></i> Lock block</span></td>
      <td>Stores holder, state, roster, turn number, timestamps, TTL, note, and language in plain text at the top of <code>M8SHIFT.md</code>.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-diagram-project" aria-hidden="true"></i> State machine</span></td>
      <td>Tracks <code>IDLE</code>, <code>WORKING_&lt;agent&gt;</code>, <code>AWAITING_&lt;agent&gt;</code>, <code>PAUSED</code>, and <code>DONE</code> so every participant knows the safe next action.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> Manual heartbeat</span></td>
      <td>Refreshes a long <code>WORKING_&lt;agent&gt;</code> turn by re-running <code>claim &lt;agent&gt;</code>, extending the 30-minute TTL without a daemon.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-unlock-keyhole" aria-hidden="true"></i> Stale recovery</span></td>
      <td>Lets another agent recover with <code>claim --force</code> only after the current lock has expired.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-right-left" aria-hidden="true"></i> Release</span></td>
      <td>Hands the pen to another agent without recording a numbered turn and without incrementing <code>turn</code>.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-flag-checkered" aria-hidden="true"></i> Done state</span></td>
      <td>Marks the relay finished with <code>done</code>, allowing humans and automation to stop cleanly.</td>
    </tr>
    <tr>
      <td>Core relay</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-pause" aria-hidden="true"></i> Pause / resume</span></td>
      <td>Parks an open session with <code>PAUSED</code> and <code>holder=none</code>, then resumes only on explicit new user scope.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code-branch" aria-hidden="true"></i> Numbered turns</span></td>
      <td>Appends each completed handoff as an immutable, numbered block in <code>M8SHIFT.md</code>.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i> <code>append --to</code></span></td>
      <td>Closes the current agent turn, records what was done, and routes the next turn to another roster member.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-hourglass-half" aria-hidden="true"></i> <code>append --wait</code></span></td>
      <td>Keeps the sender blocked after handoff until its next turn or <code>DONE</code>, reducing premature exits in shells or automation.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> Free-text body</span></td>
      <td>Accepts longer handoff notes from a file or stdin with <code>--body PATH|-</code>, while protecting reserved relay markers.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-list-check" aria-hidden="true"></i> Work metadata</span></td>
      <td>Records fields such as <code>ask</code>, <code>done</code>, <code>files</code>, <code>branch</code>, <code>commit</code>, <code>tests</code>, <code>next</code>, and <code>blocked_on</code>.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file-signature" aria-hidden="true"></i> Stage-4 contract fields</span></td>
      <td>Adds structured advisory fields such as role, relation, requirements, expected output, evidence, decision, waiver reason, and permissions.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code-compare" aria-hidden="true"></i> Relation vocabulary</span></td>
      <td>Labels the handoff as <code>handoff</code>, <code>review_request</code>, <code>review_result</code>, or <code>escalation</code>.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-stamp" aria-hidden="true"></i> Review decisions</span></td>
      <td>Records review outcomes with <code>approve</code>, <code>revise</code>, <code>reject</code>, or <code>waive</code>.</td>
    </tr>
    <tr>
      <td>Handoffs</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-tags" aria-hidden="true"></i> Custom fields</span></td>
      <td>Accepts namespaced advisory metadata through <code>--field key=value</code>, including <code>x_*</code> fields for local conventions.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-gauge-high" aria-hidden="true"></i> Status</span></td>
      <td>Prints the current holder, state, turn, roster, session, UTC timestamps, and human-facing local time.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-route" aria-hidden="true"></i> Safe next action</span></td>
      <td>Uses <code>status --for &lt;agent&gt;</code> to tell an agent whether to claim, wait, resume, recover, or stop.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code" aria-hidden="true"></i> JSON status</span></td>
      <td>Emits machine-readable state with <code>status --json</code> for scripts, tools, dashboards, and headless wrappers.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-eye" aria-hidden="true"></i> Watch</span></td>
      <td>Continuously displays relay state without writing, claiming, or mutating anything.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-id-badge" aria-hidden="true"></i> Project identity</span></td>
      <td>Shows the project name, working directory, and relay root in <code>status</code>, <code>status --json</code>, and the <code>watch</code> banner so multiple open terminals or tabs stay distinguishable. The label prefers <code>init --name</code> and falls back to the folder name, and the generated protocol now carries the status-guard rule: never claim the pen or <code>DONE</code> from memory — re-run <code>status</code> before ending a turn.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-hourglass-start" aria-hidden="true"></i> Wait</span></td>
      <td>Blocks a process until it is an agent's turn, with <code>--once</code> for non-blocking readiness checks.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-forward-step" aria-hidden="true"></i> Next</span></td>
      <td>Combines wait, claim, and latest handoff output so an agent can resume safely from one command.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-binoculars" aria-hidden="true"></i> Peek</span></td>
      <td>Reads the latest handoff addressed to an agent without claiming the pen.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-timeline" aria-hidden="true"></i> Log</span></td>
      <td>Shows the relay timeline, including an oneline mode and optional archived turns.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clipboard-list" aria-hidden="true"></i> Recap</span></td>
      <td>Builds a current-session briefing from the lock, recent turns, memory headlines, and open tasks.</td>
    </tr>
    <tr>
      <td>Read views</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> History</span></td>
      <td>Reads prior session start, reset, and done events from <code>M8SHIFT.sessions.jsonl</code>.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-box-archive" aria-hidden="true"></i> Archive</span></td>
      <td>Moves older turns to <code>M8SHIFT.archive.md</code> while keeping the lock and recent turns in the main relay file.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-brain" aria-hidden="true"></i> Memory notes</span></td>
      <td>Appends durable shared-memory notes with <code>remember</code> without requiring the pen.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-square-check" aria-hidden="true"></i> Task ledger</span></td>
      <td>Adds, lists, shows, completes, or drops task events in an append-only ledger without requiring the pen.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file-code" aria-hidden="true"></i> Generated files</span></td>
      <td>Keeps relay state, protocol, archive, memory, tasks, sessions, and temporary lock files in the repository or local workspace.</td>
    </tr>
    <tr>
      <td>Adoption</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-book-open-reader" aria-hidden="true"></i> Agent pack</span></td>
      <td><code>init</code> generates <code>M8SHIFT.agent-pack.md</code>, a first-read discipline pack for agents with claim-before-write, no-parking, prompt-security, stale-lock, and delivery-complete rules.</td>
    </tr>
    <tr>
      <td>Adoption</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-anchor-circle-check" aria-hidden="true"></i> Compact anchor floor</span></td>
      <td>Agent anchors keep a compact inline safety floor and point to the generated pack plus the protocol, reducing repeated prompt weight without dropping critical guardrails.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-stethoscope" aria-hidden="true"></i> Doctor</span></td>
      <td>Runs read-only health and lint checks, with JSON output and severity filtering.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clipboard-check" aria-hidden="true"></i> Adoption health</span></td>
      <td><code>doctor</code> reports missing, stale, or invalid agent packs and stale anchor floors. Pre-v3.49 projects receive informational adoption findings until <code>init</code> refreshes them.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-list-check" aria-hidden="true"></i> <code>doctor --lint</code></span></td>
      <td>Adds core-safe lint findings for relay/LOCK validity, anchors, protocol drift, sessions, duplicate open sessions, and livelock indicators.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Security checks</span></td>
      <td>Adds local security-oriented checks with <code>doctor --security</code>. It reports findings; it is not a sandbox.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-check-double" aria-hidden="true"></i> Contract validation</span></td>
      <td>Validates <code>schema=stage4.v1</code> handoff fields with <code>contract validate</code> or <code>doctor --contracts</code>.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Strict mode</span></td>
      <td>Lets validation commands exit non-zero when findings meet the selected severity threshold.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Init kit</span></td>
      <td>Generates or regenerates <code>M8SHIFT.md</code>, <code>M8SHIFT.protocol.md</code>, and agent-facing anchor files.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-boxes-stacked" aria-hidden="true"></i> Companion kit install</span></td>
      <td>Copies selected companion scripts into the kit, version-locked to the core, with <code>init --companions runtime,context,...</code>, <code>--with-runtime</code> and friends, or <code>--full</code>: idempotent, no-clobber (never downgrades, refuses edited or newer files), atomic, and preflighted before any mutation. Records a merged <code>.m8shift/kit.json</code> manifest checked by read-only <code>doctor</code> kit findings; <code>--companion-source &lt;dir&gt;</code> copies from a release or checkout directory.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-language" aria-hidden="true"></i> EN/FR generation</span></td>
      <td>Writes generated protocol and anchor content in English or French with <code>init --lang en|fr</code>.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-anchor" aria-hidden="true"></i> Agent anchors</span></td>
      <td>Injects idempotent protocol stanzas into files such as <code>CLAUDE.md</code>, <code>AGENTS.md</code>, and <code>GEMINI.md</code>.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file" aria-hidden="true"></i> Single-file core</span></td>
      <td>Runs as <code>m8shift.py</code>, a Python 3.8+ script using the standard library only.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-download" aria-hidden="true"></i> Install scripts</span></td>
      <td>Provides shell and PowerShell installers for macOS, Linux, WSL, Git Bash, and Windows, with checksum verification, dry-run planning, explicit optional RTK setup from same-tag-checksummed release assets, and experimental Headroom setup.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-fingerprint" aria-hidden="true"></i> Checksum verification</span></td>
      <td>Verifies downloaded scripts against <code>checksums.sha256</code> during installer-based adoption.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i> Exit codes</span></td>
      <td>Returns distinct codes for success, refusal/runtime error, argument error, and not-ready states.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-terminal" aria-hidden="true"></i> Headless runner</span></td>
      <td>Ships a reference loop for unattended CLI agents that claims, launches one agent turn, observes crashes, writes immutable run plans, verifies the post-run <code>LOCK</code>, and stops on <code>DONE</code>.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-id-badge" aria-hidden="true"></i> Runtime run IDs</span></td>
      <td>Sets <code>M8SHIFT_RUN_ID</code> and writes <code>.m8shift/runtime/runs.jsonl</code> so process runs can be correlated with turns.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-satellite-dish" aria-hidden="true"></i> Runtime companion</span></td>
      <td>Adds advisory local sidecars for presence, runs, progress, operator inbox, idempotency, approvals, reports, runtime status, and diagnostics.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-compress" aria-hidden="true"></i> Context compression records</span></td>
      <td><code>m8shift-context.py compress/retrieve</code> stores redacted raw references, compact digests, backend metadata, and bounded retrieval paths without touching the core relay.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-brain" aria-hidden="true"></i> Optional compression backends</span></td>
      <td><code>--backend auto</code> uses identity-pinned <a href="#token-adapters-rtk-and-headroom">RTK</a> for shell/tool output; broad context records stay on builtin unless <code>backends.headroom_ext.auto_enabled</code> explicitly opts into the optional <a href="#token-adapters-rtk-and-headroom"><code>headroom_ext</code></a> experiment.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-road-barrier" aria-hidden="true"></i> Lane ownership</span></td>
      <td>Allows one fresh managed runtime per agent identity and requires explicit stale takeover before a second runtime uses the same lane.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-heart-pulse" aria-hidden="true"></i> No-progress detection</span></td>
      <td>Reports runtime no-progress findings when a companion loop stops seeing newer run or progress events.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-box-archive" aria-hidden="true"></i> Sidecar retention</span></td>
      <td>Prunes runtime JSONL sidecars to a fixed row cap and archives older rows under <code>.m8shift/runtime/archive/</code> by default.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-window-restore" aria-hidden="true"></i> VS Code workflow</span></td>
      <td>Documents a practical loop for interactive Claude, Codex, Gemini, Vibe, or other agent panels inside an editor.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code-fork" aria-hidden="true"></i> Worktree toolbox</span></td>
      <td>Adds optional isolated parallel feature work with one git worktree per task.</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-arrows-to-circle" aria-hidden="true"></i> Serialized integration</span></td>
      <td>Merges worktree results through one integration pen so two integrations cannot run at the same time.</td>
    </tr>
    <tr>
      <td>Boundary</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-plug-circle-check" aria-hidden="true"></i> Provider neutrality</span></td>
      <td>Coordinates any cooperative CLI-capable agent. M8Shift does not call models, host a runtime, or require a project API key.</td>
    </tr>
    <tr>
      <td>Boundary</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-hand" aria-hidden="true"></i> Companion advisory boundary</span></td>
      <td>Runtime companions never own the pen, never edit <code>M8SHIFT.md</code> directly, never require network access, and never auto-force.</td>
    </tr>
    <tr>
      <td>Boundary</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-user-shield" aria-hidden="true"></i> Permission vocabulary</span></td>
      <td>Records advisory permission intent while making clear that real enforcement belongs to the OS, IDE, repository, or provider host.</td>
    </tr>
  </tbody>
</table>
</div>

## Related reference

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="./cli">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>CLI reference</strong>
    <span>Exact commands, flags, read/write behavior, and examples.</span>
  </a>
  <a class="m8-doc-card" href="./state-model">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>State model</strong>
    <span>Lock fields, states, transitions, TTL, and degree-1 behavior.</span>
  </a>
  <a class="m8-doc-card" href="./contract-schema">
    <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
    <strong>Turn schema</strong>
    <span>Handoff fields, contract metadata, relations, and validation.</span>
  </a>
  <a class="m8-doc-card" href="/guide/worktree-toolbox">
    <i class="fa-solid fa-code-fork" aria-hidden="true"></i>
    <strong>Worktree toolbox</strong>
    <span>Optional parallel feature work with serialized integration.</span>
  </a>
</div>
