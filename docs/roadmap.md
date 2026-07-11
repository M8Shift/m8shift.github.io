# Releases / Roadmap

The page separates shipped behavior from specifications. Civilization may survive
this radical act of honesty.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Releases

Newest first. The current version is marked with a badge.

### <i class="fa-solid fa-tags m8-heading-icon" aria-hidden="true"></i> Why the first public release is not `v0.1` or `v1.0`

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
  <div>
    <strong>The public release does not reset the project history.</strong>
    <p>M8Shift was bootstrapped on <strong>2026-06-21</strong> as a weekend prototype and built in days, not months — developed using M8Shift itself to coordinate its own work. Two AI agents work as buddies: they implement in turns and cross-review every change to catch regressions before they land. That contradiction-driven peer review compresses what would take a team months into hours. The first public release is therefore not an artificial <code>v0.1</code> or a marketing <code>v1.0</code>: it is the version actually available and stabilized at publication time — already iterated to a state-of-the-art tool and shared openly.</p>
  </div>
</div>

Version numbers follow the working artifact: shipped relay behavior, install scripts,
checksums, documentation, and validation features. Publishing the project publicly makes
that accumulated state visible; it does not make the software begin from zero.

## <i class="fa-solid fa-flask-vial m8-heading-icon" aria-hidden="true"></i> Proven by building itself

::: tip Dogfooded and proven by itself
M8Shift is used to coordinate its own development — M8Shift writing M8Shift — and to deploy itself. In its first days it has also coordinated other kinds of work: video-clip pipelines, book writing, legal drafting, and more. The relay's implement-then-adversarially-review loop is what makes the speed safe. It is still early, think late-alpha, and hardening continues; reaching v3.26 in under a week is itself the proof of the method.
:::

### <i class="fa-solid fa-chart-line m8-heading-icon" aria-hidden="true"></i> In numbers — first 5 days

From **2026-06-21** to **2026-06-26**, for about **$120 of paid AI**:

| Evidence | Snapshot |
|----------|----------|
| Tooling | ~6,900 lines of tool code + ~3,550 lines of tests (255 tests **at v3.26.0**; **384 at v3.41.1** — count ≠ coverage) |
| Knowledge base | 29 RFCs · ~10,000 lines of docs · bilingual site (70 pages, 9 languages) |
| Release pace | 165 commits across 25 releases (`v1.0.0` → `v3.26.0`) |

::: warning Human-equivalent estimate
This is an illustrative order-of-magnitude estimate, not a hard benchmark. Under the assumption that equivalent work would need to be tested, documented, reviewed, and internationalized to a comparable standard, it represents roughly **1–2 person-years** of skilled engineering — a **4–5 person team for several months** — compressed into 5 days.

At the same level of approximation, **~$120 of paid AI** versus **~$150k–300k of equivalent loaded labor** suggests cost efficiency on the order of **~1,000×**. The real cost of AI is higher than the price paid; this is a scale illustration, not an absolute fact.
:::

M8Shift is shared openly so anyone can benefit from the method, not just from this specific codebase.

## <i class="fa-solid fa-star m8-heading-icon" aria-hidden="true"></i> Feature focus — the headline advances

::: tip 🚀 Token compression, on by default ([RTK](/reference/features#token-adapters-rtk-and-headroom))
The context companion can run **[RTK](/reference/features#token-adapters-rtk-and-headroom)** as an **identity-pinned,
telemetry-off, argv-only** shell-output **filter** — a lossy semantic filter (it extracts the signal: errors, test
results, log lines) that reduces what an agent reads. In our own measurements the referenced
context pack cut the hand-off context by **~97%**, and [RTK](/reference/features#token-adapters-rtk-and-headroom) on real shell output by
**~54–68%** by dropping non-signal lines (a filter drop-rate, **not** lossless compression). Since **v3.34.0** it is the
**default when [RTK](/reference/features#token-adapters-rtk-and-headroom) is present and pinned**, and **fully-degrading** otherwise: absent, unpinned, or
corrupt → native packing, no error. Telemetry is disabled on setup; the core stays stdlib-only.
Since **v3.36.0** you can *see* the state at a glance — `status-runtime`, `doctor`, and
`m8shift-context.py status` print **`RTK: ON (pinned, compressing packs)`** or **`RTK: OFF (native)`**
with the last-pack ratio, so a shift always knows whether it is actually saving tokens.
:::

::: tip 🧠 Broad-context compression, opt-in only ([Headroom adapter](/reference/features#token-adapters-rtk-and-headroom))
Since **v3.40.0**, `m8shift-context.py compress --backend auto` keeps broad records such as
`conversation`, `history`, `file`, `report`, `diff`, and `large-context` on the builtin digest
unless an operator explicitly sets `backends.headroom_ext.auto_enabled: true` and identity-pins the bundled
[`m8shift-headroom` launcher](/reference/features#token-adapters-rtk-and-headroom) (`install.sh --with-headroom`, pinned `headroom-ai==0.28.0`, requires `--allow-project-local-adapters`). Explicit `--backend headroom_ext` gives ~45–55% on prose (it errors on shell content). The reason is architectural: M8Shift's default handoff is a tiny lossy digest plus
always-retrievable raw evidence, while [Headroom](/reference/features#token-adapters-rtk-and-headroom) targets a more near-lossless conversation
compression problem. M8Shift never starts [Headroom](/reference/features#token-adapters-rtk-and-headroom) proxy/MCP/server modes; the shipped `m8shift-headroom` wrapper forces offline/cache-only execution (socket-blocked, model from cache). Since **v3.41.0**, records also carry `--access-mode` and
`--whole-content` routing signals for the later evidence gate, while `retrieve` hash-checks raw and
compact evidence before serving it.
:::

Other advances users feel:

- **⚡ Parallelism** — the degree-2 worktree companion runs several agents on isolated branches and
  serialises the merge-back through one integration pen (the core stays strictly one-pen).
- **💸 An economic view of usage** — the core `cooldown` parks the relay before a rolling
  usage-window limit is hit (RFC 040 Phase B), so a shift never blindly burns a session cap.
- **🧾 Provenance & traceability** — every commit can carry *which model* produced it
  (`Agent-Model`), and decisions are recorded in a structured, tool-independent trace (RFC 031).
- **🗺️ On the design board** — parallel multi-session (RFC 038) remains future work;
  model/task **cost routing** (RFC 039) has shipped its **Phase 1** advisory
  `route recommend` (v3.35.0), with delegation/launch still under review; **usage
  monitoring** (RFC 040) shipped Phase 2 in `v3.48.0`, Phase 3 in `v3.53.0` and
  Phase 4 scaffolds in `v3.56.0`, then live-verified Claude/Codex adapters and a
  unified multi-window display in `v3.57.0`; **adoption discipline and
  local update** (RFC 048) shipped across `v3.49.0` and `v3.50.0`; **project
  compartmentalization** (RFC 052) shipped its first slice in `v3.56.0` and was
  completed in `v3.57.0`; **holder liveness and stale-claim hardening** (RFC 049)
  is complete in `v3.57.0`; **agent skills & manual specialists** (RFC 041 /
  RFC 050) shipped their open-format Phase 1+1b in `v3.58.0`.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Release history

| Version | Status | What shipped |
|---------|--------|--------------|
| **v3.58.0** <Badge type="tip" text="current" /> | 2026-07-12 | **Open-format Agent Skills + operational hardening** (RFC 050 · RFC 041 · #108 #102 #103):<br>• **Agent Skills, open format** — specialist/competency definitions are agentskills.io skills (`skills/<name>/SKILL.md`, `name`/`description` frontmatter, M8Shift lane properties under namespaced `metadata:` keys); two seed specialists ship — an advisory security reviewer with a bundled report template and a mutating worktree implementer carrying an explicit foreign-loader safety contract — with no executable payloads.<br>• **Advisory skills validation** — `doctor` gains bounded fail-open `skills.*` findings over a conservative stdlib frontmatter subset; valid-but-unsupported YAML degrades to one whole-file `unvalidated` info finding, and skills findings never gate `--lint`.<br>• **Host wake-up guard** — born from a live stalled-handoff incident: the generated stanza floor and agent pack now state that waiters detect but never launch, teach the poll / waiter / listener / chat-wait vocabulary, require a listener-status check before any autonomy claim, and mandate disclosing when a human must reactivate the agent.<br>• **Deterministic shift demos** — four tiny two-agent exercises with pinned oracles (checksum, exactly-one-red test, spec-to-test, adversarial refutation) runnable in minutes, with an executed-quickstart anti-rot pin.<br>• **Opt-in tokscale spend adapter** — local spend aggregation through a bounded tri-state token reader (a known zero is data; summary-plus-breakdown never double-counts), `local_estimate` provenance, no invented windows, and a hard never-submit boundary so usage data never leaves the machine through M8Shift.<br>• **Release gate** — 886 tests pass (1 skipped), checksums 14/14, generated docs no drift, adversarial RC review performed from an isolated copy, dogfood relay promoted to the tagged engine. |
| **v3.57.0** | 2026-07-11 | **RFC 049 + RFC 052 complete; live usage path hardened** (#101 #104 #105 #106):<br>• **Holder liveness** — protective `heartbeat` beats are separate from audit-only TTL refreshes; stale recovery is two-phase and refuses a fresh live holder unless a human-authorized override is audited.<br>• **Managed listener liveness** — a live child gets protective beats and an early `claim --refresh`, without direct relay writes, plain claims, or force-steals.<br>• **Worktree ownership guard** — ownership sidecars, explicit audited takeover, per-id locks, generation nonces against ABA, and a durable takeover ledger complete RFC 049 PR C while keeping the guard honestly advisory.<br>• **Unified multi-window usage** — `status` / `watch` show every plausible provider window with consumed percentage and reset, field-level degradation, deterministic caps, and the unchanged single-window fallback.<br>• **Live-hardened provider adapters** — Claude accepts the verified `five_hour` / `seven_day` used-percent shape with aware reset normalization; Codex keeps app-server stdin open and reads through a bounded daemon-thread deadline, including silent-live-child protection.<br>• **Project compartmentalization complete** — confidential out-of-repo denylist + scrub hooks, opt-in anchor hygiene, and mechanical one-project session binding ship RFC 052 PR2–PR4.<br>• **Release gate** — 853 tests pass (1 skipped), checksums 14/14, generated docs have no drift, and the dogfood relay itself was upgraded through `m8shift.py update`. |
| **v3.56.0** | 2026-07-08 | **RFC 040 Phase 4 + RFC 052 PR1** (#100 #101) — usage-provider adapters and project compartmentalization:<br>• **Default usage-adapter scaffolds** — `usage init` now ships four **disabled-by-default** provider adapters (`claude-jsonl-scan`, `claude-quota-keychain`, `codex-jsonl-scan`, `codex-ratelimits`): inert until explicitly enabled, no-clobber, identity-pinned.<br>• **Claude Keychain OAuth reference adapter** — reads the Claude Code OAuth token from the macOS Keychain (or an explicit file override) **entirely in memory** and emits only an official fixture (`used_ratio` / `resets_at`) — never the access/refresh token, account identity, or raw response body; no plaintext credential default on non-macOS; **fail-open on every error path** (malformed response, broken stdout, arbitrary-precision overflow, any exception → empty official fixture, never a crash or a leak); per-window resilient, so one malformed window never discards good readings.<br>• **Validation & contract tests** — a test-hardening slice pins the Phase-4 privacy / fail-open / disabled-by-default guarantees; the merge gate used **mutation testing** — every contract test proven to fail when its behavior is broken.<br>• **`doctor --hygiene` / `--hygiene-only`** (RFC 052 PR1) — a raw-read lint flags real home paths in tracked docs and examples (placeholder-aware; high-confidence hits gate under `--lint`), and the agent-guidance floor gains a **compartmentalization rule**: a fact learned in one project keeps its identity there; cross-project reference is deny-by-default.<br>At this release point, `codex-ratelimits` was still a disabled scaffold; its verified implementation followed in v3.57.0. |
| **v3.55.0** | 2026-07-08 | Two features land together. **#59 — token consumption in the RFC 051 usage line**: the read-only core usage advisory now shows raw consumption (`used <count>/<window>`, humanized P/T/B/M/k, bounded window count) alongside or in place of the ratio — still echo-only, byte-identical when no usage sidecar is present. **#60 — `update` refreshes installed runner artifacts** (RFC 048): a new default `runner` component refreshes already-installed `scripts/watch-status.sh` / `examples/headless_runner.py` from a newer source, gated by `.m8shift/kit.json` runner metadata (sha256-proven) — never creating absent runners, never blind-overwriting edited/untracked ones, refusing symlinked/non-regular targets or targets whose real path escapes the project root. `doctor --source` emits read-only `runner.stale` / `runner.manual_review_required` preflight findings, and `watch-status.sh` carries a lockstep-tested `M8SHIFT_RUNNER_VERSION` marker. Implemented by Codex, adversarially reviewed by Claude — five findings (HIGH target path-confinement, MEDIUM non-UTF-8 backup crash, three LOW) fixed before merge. |
| **v3.54.0** | 2026-07-07 | **RFC 051 — usage advisory in the core display** (#55): a read-only usage line now renders in the core `status` and `watch` output (and so in `watch-status.sh`, which forwards to core `watch`), fed by the companion's local usage sidecar. The core **computes nothing** — it echoes the last recorded snapshot per agent — so the remaining-quota picture is visible where a human watches, without the core running an adapter, opening a socket, or spawning the companion. The companion additively records `decision_window`; the core reader is TOCTOU-safe (`os.open` with `O_NOFOLLOW`/`O_NONBLOCK` + `fstat`), bounded, agent-validated, output-sanitized (no ANSI/control escapes, never a non-finite number), and **byte-identical when there is no usable snapshot**. Design + implementation adversarial review caught real bad-shape/security defects (non-string timestamps, huge-integer ratio overflow, a sidecar-swap TOCTOU) before merge. |
| **v3.53.0** | 2026-07-05 | **RFC 040 Phase 3 — real, opt-in usage adapters** (#47): the Phase 2 framework shipped in v3.48.0; this makes the data real, with no core change. **Slice 1** adds an additive per-window `used_ratio` so a remaining-percent source is never encoded as tokens. **Slice 2** adds a built-in opt-in `jsonl_scan` of local agent-session logs — **aggregate-only** (never reads message content), bounded (files/candidates/bytes/mtime/wall-clock), version-tolerant, symlink-safe; a spent/reporting source that never gates. **Slice 3** ships an argv-only operator OAuth example that maps a remaining-percent endpoint to `used_ratio` (M8Shift never opens the socket; fail-open; credential never printed) + a disabled `claude-quota` scaffold. **Slice 4** adds an opt-in `budget.json` bridge so a spent scan can gate as `local_estimate` (never official, never overrides, fail-safe on malformed input). Adversarially reviewed per slice; real bad-shape defects (NaN, content-recursion, unbounded scan, malformed credential, malformed-budget crash, ratio overflow) fixed before merge. |
| **v3.52.0** | 2026-07-05 | **Multi-OS core install** (#24 #42 #43): `install.sh` (macOS/Linux/WSL/Git Bash) and `install.ps1` (native Windows) kept in lockstep for core components (structural static parity tests, executed where `pwsh` exists); core install needs only Python 3.8+, a download path, write permission, and SHA-256 — no sudo, no PATH mutation, no daemon; capability detection prints one honest line per optional helper, and **opted-in helper failures never abort the core install** (contained, warned, init runs, exit 0); `--dry-run` prints the plan even without Python; new read-only **`doctor --install`** post-install verification (Python floor, core presence, manifest validity/drift, companion status, helper states — optional-absent is info); the checksum manifest now covers every shipped companion, and mixed companion-update outcomes fold to **`partial`** with per-companion JSON rows and a fixed audit gate (partial runs that wrote files now record their audit row). |
| **v3.51.0** | 2026-07-05 | **Guidance batch — evidence & shared-state disciplines** (#22 #23 #25): the protocol core gains a **raw-proof rule** (compressed or filtered views — digests, packs, adapter output, summaries — are *orientation, not proof*; verify proof-bearing claims against raw originals) and a **shared-checkout rule** (destructive git ops like `reset --hard` need explicit human authorization; a refused checkout is a signal, not an obstacle), both within the hard 2000-proxy-token core budget; the protocol reference details proof-bearing content and honest adapter roles; `doctor --source` adds an info-level `workspace.dirty_worktree` advisory before updates land generated writes; the agents-guide adds the recurring **memory-parasite audit** contributor process (workarounds memorized by operating agents mask product gaps — audit, classify, convert to issues). |
| **v3.50.1** | 2026-07-04 | Hotfix for v3.50.0 dogfooding: long-lived relays can preserve an old `M8SHIFT.md` banner while their installed script is current. `update` now uses the best provable baseline among kit metadata, banner, and target script, so a stale banner no longer vetoes a supported manually promoted relay; truly pre-3.41 targets still refuse. |
| **v3.50.0** | 2026-07-04 | RFC 048 PR B — **source-driven local update**: run the new source copy with `update --target DIR --source DIR`; it refreshes protocol, agent pack, anchors, installed companions, then the core last, preserves `M8SHIFT.md` byte-for-byte, verifies source checksums when present, refuses downgrade / unsupported baseline / active `WORKING_*` by default, records bounded update audit rows, and exposes `doctor --source` update recommendations. |
| **v3.49.0** | 2026-07-04 | RFC 048 PR A — **adoption discipline pack + health diagnostics**: `init` now generates `M8SHIFT.agent-pack.md`, anchors keep a compact mandatory safety floor, `doctor` reports missing/stale/invalid packs and stale stanzas, and `init --force-generated` repairs only corrupted generated pack blocks without resetting the relay. |
| **v3.48.0** | 2026-07-04 | RFC 040 Phase 2 — **AI session usage monitoring**: read-only `usage` snapshots (argv-only bounded adapters, append-only ledger, fail-open unknown) + cooperative `guard/watch/wait/resume` (holds only through the core cooldown with the provider's own `resets_at`, own-WORKING advisory, peer-WORKING advice-only, explicit-only resume). An unattended lane can now hold through a quota window instead of dying silently. |
| **v3.47.0** | 2026-07-04 | RFC 047 complete — **listener lifecycle companion**: a supervised headless lane in one command (`listener start`), zero model spend while polling, one bounded turn per wake, `--resume-working` gated stuck-retry, launchd/systemd/schtasks backends with safe local fallbacks (macOS protected-folder detection), persistent `halted` honored across service managers, writer-side log rotation, 9 `listener.*` doctor findings. |
| **v3.46.0** | 2026-07-04 | RFC 047 Phase A — headless runner **final-state enforcement**: authorship-primary total post-run classification (a provider turn ending while the relay is open = non-completion, not success), `claim --refresh` refresh-only heartbeat guard (TOCTOU closed), exit map 0/1/2/3/4, `run.non_completion` events; detailed `--help` on every parameter (v3.45.1, AST coverage guard). |
| `v3.45.0` | | **RFC 046 part 1 — execution modes & project identity:** `status` and `watch` now surface the **project name, cwd, and relay root** (human output, `--json`, and the watch banner), so multiple open terminals or tabs stay distinguishable; the label prefers the operator's `init --name` (persisted on the session start event) with a folder-name fallback, `cwd` is the real working directory and `root` the relay root; the **status-guard** rule moves into the generated protocol core (every anchor + `M8SHIFT.protocol.md`): never claim you hold the pen or reached `DONE` from memory — re-run `status` before ending a turn; the agents-guide adds the interactive-vs-headless distinction and the interactive honesty message. |
| `v3.44.0` | | **RFC 044 companion install + RFC 045 module reference:** `init` gains a version-locked companion-install phase (`--companions runtime,context,...`, `--with-runtime` and friends, `--full`, `--companion-source <dir>`) that copies companion scripts version-locked to the core — idempotent, no-clobber (never downgrades, refuses edited or newer files), atomic, preflighted before any mutation — with a merged `.m8shift/kit.json` manifest and read-only `doctor` kit findings; `docs/en/modules/` adds one reference page per shipped script (7 modules) with color Mermaid ownership diagrams, command tables, tagged safe examples, and a version-literal drift test. |
| `v3.43.0` | | **RFC 037 Phase D — Headroom/Kompress adapter now bundled + active:** `install.sh --with-headroom` builds a pinned native-arch venv (`headroom-ai==0.28.0` + `onnxruntime==1.27.0` + `transformers==5.12.1`), preloads `chopratejas/kompress-v2-base`, and identity-pins the `m8shift-headroom` launcher; `compress --backend headroom_ext` yields ~45–55% real offline Kompress reduction on prose (errors on shell); `auto` stays on the builtin digest until the Phase D gate. |
| `v3.42.0` | | **Security hardening:** case-insensitive-FS fix so a case-variant of a project-local adapter bin dir on `PATH` can no longer bypass the `--allow-project-local-adapters` opt-in (#94); CodeQL host-parse fix; RTK telemetry hardening; agents-guide coordination discipline (stale-lock / force-claim / worktree isolation). |
| `v3.41.0` | | **RFC 042 Phase B + #91:** compression records now store `access_mode` / `whole_content` advisory routing signals without opening signal-driven [Headroom](/reference/features#token-adapters-rtk-and-headroom) routing; the v3.40 manual `headroom_ext` opt-in is preserved; `retrieve` verifies raw and compact hashes before serving evidence; architecture/spec docs add color communication and agent-flow diagrams. |
| `v3.40.0` | | **RFC 037 [Headroom](/reference/features#token-adapters-rtk-and-headroom) follow-up:** broad contexts now stay on builtin in `auto` unless `backends.headroom_ext.auto_enabled: true`; explicit `--backend headroom_ext` remains available as a different, opt-in [compression experiment](/reference/features#token-adapters-rtk-and-headroom). |
| `v3.39.0` | | **RFC 037 Phase D — optional Headroom backend hook:** added the identity-pinned [`headroom_ext`](/reference/features#token-adapters-rtk-and-headroom) adapter contract and safe degradation for absent, unpinned, failed, or drifted backends. |
| `v3.38.0` | | **RFC 037 Phase C — backend dispatch + RTK:** `m8shift-context.py compress` records requested/actual backend/version, uses identity-pinned [`rtk-shell-output`](/reference/features#token-adapters-rtk-and-headroom) for shell/tool content types, and fail-closes explicit backend errors to reference-only. |
| `v3.37.0` | | **RFC 037 Phase B — local compression records:** redacted raw refs, compact digests, builtin stdlib compressor, bounded `retrieve`, secret-pattern hardening, and reference-only fail-safe for bad config/backend paths. |
| `v3.36.0` | | **[RTK](/reference/features#token-adapters-rtk-and-headroom) visibility (#79):** you can now *see* whether token compression is active — per-agent self-declared `M8SHIFT_RTK` in `status-runtime`, and the context adapter's pinned/native state (**`RTK: ON (pinned, compressing packs)`** / **`RTK: OFF (native)`**) with the last-pack ratio in `status-runtime`, `doctor`, and the new `m8shift-context.py status`. Read-only, advisory, **fail-closed to OFF**; no network, no telemetry re-enable, self-declared only. |
| `v3.35.0` | | **RFC 039 Phase 1 — model/task routing (#59):** an advisory `route recommend` that picks the cheapest **capability-eligible** model for a task (tier floor + required capabilities + context window), fail-safe when the self-model is unknown — recommendation only, never launches anything. |
| `v3.34.2` | | Retention path hardening (backslash-normalised denylist + `O_NOFOLLOW`/symlink refusal on runtime writes) and the full **colour module map** of core + companions in the architecture docs. |
| `v3.34.1` | | [RTK](/reference/features#token-adapters-rtk-and-headroom) corrupt-manifest auto-fallback: a broken/non-object adapter manifest degrades a default pack to native packing instead of aborting — fully-degrading by design. |
| `v3.34.0` | | **[RTK](/reference/features#token-adapters-rtk-and-headroom) is the default context-pack filter when identity-pinned** (never on `PATH` alone), with an install offer (consent) and `rtk telemetry disable` on setup — **token compression on by default, safely** (RFC 034). Mandatory agent rules: RTK token-economy, the decision template, and the issue templates. |
| `v3.33.0` | | **RFC 028** headless command templates: curated argv-only provider examples, a run-plan validator, an env allowlist, and post-run `LOCK` verification — a curation layer over RFC 014/020, no new launcher. |
| `v3.32.0` | | **RFC 027** local notifications companion: tiers 0–4 (stdout · prompt file · TTY bell · OS presets · argv-only operator hook), dedup window, and an audit log — advisory, no daemon, no network. |
| `v3.31.0` | | **RFC 031** tool-independent decision traceability: forge / GitHub / git or a markdown **ADR fallback**, `decisions target/scaffold`, and an advisory `append --stance` — decisions are never lost, whatever the tooling. |
| `v3.30.0` | | `init` manages the host project **`.gitignore`** with a marker block (consent + `--gitignore`/`--no-gitignore`) — relay state stays local, and the agent anchors are left for the operator to decide. |
| `v3.29.0` | | **RFC 026** configurable retention policy: per-ledger fixed-count / age / combined-union strategies, archive + audit index, fail-safe on undatable rows — opt-in and fully-degrading. |
| `v3.28.1` | | Self-declared **`Agent-Model` provenance**: `M8SHIFT_AGENT_MODEL` → a commit trailer stamped alongside `Coordinated-With`, fail-open and independent of the relay version — the forge history shows *which model* produced each commit. Non-UTF-8 commit-message fail-open fix. |
| `v3.28.0` | | Native context companion (`m8shift-context.py`): referenced context packs, receipts and metrics, plus an **identity-pinned** [RTK](/reference/features#token-adapters-rtk-and-headroom) `shell_output_filter` adapter — verified fail-closed against renamed/wrapper/PATH-hijack execution (RFC 034). `PAUSED`-aware `wait`: the listener stays armed, quiet, and wakes on resume (RFC 035). Runtime headroom guard `m8shift-runtime.py headroom` with tiered proxy signals (RFC 036; unrelated to the external Headroom adapter). Bounded `git()` collector timeout. |
| `v3.27.0` | | Doctor/status split: core-safe `doctor` versus runtime companion diagnostics (RFC 024); runtime `status` composed over presence/progress/inbox/run sidecars (RFC 025). |
| `v3.26.0` | | Bounded runtime sidecar retention with `m8shift-runtime.py retention prune --keep N`; archives older JSONL rows by default while leaving the core relay untouched. |
| `v3.25.0` | | Immutable headless run plans and post-run `LOCK` verification. |
| `v3.24.0` | | Runtime no-progress detection for companion loops. |
| `v3.23.0` | | Runtime lane ownership: one fresh managed runtime per agent identity, explicit stale takeover. |
| `v3.22.0` | | Runtime sidecars for presence, run lifecycle, progress, operator inbox, idempotency, approvals, reports, and diagnostics. |
| `v3.21.0` | | `doctor --lint` core-safe diagnostics, including relay/LOCK validity, anchors, protocol drift, sessions, duplicate open sessions, and livelock indicators. |
| `v3.19.0` | | Token-footprint split: small mandatory protocol core plus on-demand reference. |
| `v3.18.3` | | Session reports and decision ledgers generated from existing turns. |
| `v3.17.0` | | Stable `PAUSED` state for open sessions with no active work, plus explicit `resume`. |
| `v3.16.0` | | Provider registry, runtime scaffold, and hardened headless runner surfaces. |
| `v3.15.0` | | Runtime companion v1 and cooperative turn request / steering commands. |
| `v3.13.0` | | Stage-4 contract validation: `contract validate`, `doctor --contracts`, dedicated contract flags on `append`, headless runner run IDs/lifecycle events, updated checksums, and documentation alignment. |
| `v3.12.1` | | Timezone-prefixed human timestamps (`CEST 2026-…`, fallback `local`), Windows PowerShell installer, checksum refresh, FAQ expansion, release/install docs, worktree toolbox links, and site documentation refresh. |
| `v3.9.0` | | Relay loop guardrails: `next`, `status --for`, `append --wait`, plus the `next --force` live-lock refusal fix. |
| `v3.8.0` | | Session history and human local-time display next to UTC. |
| `v3.7.0` | | `doctor`, session history groundwork, version lockstep across distributed scripts, test rename, runtime/session RFCs, and documentation hygiene. |
| `v3.5.0` | | Opt-in `m8shift-worktree.py` companion: isolated git worktrees for parallel feature work and one serialized integration pen. |
| `v3.4.x` | | Task ledger, version stamp / `--version`, runner and claim-check review fixes, and audit cleanup around N-agent documentation. |
| `v3.3.0` | | `claim --check`, a read-only advisory overlap probe for files touched by other agents. |
| `v3.2.0` | | Shared memory via `remember`, durable notes, and recap headlines. |
| `v3.1.0` | | Advisory turn fields on `append`: branch, commit, tests, next, blocked-on, and custom `x_*` fields. |
| `v3.0.0` | | M8Shift-only rename, English core, injectable language packs, and localized build tooling. |
| `v2.4.0` | | Stage-2 N-agent relay: configurable roster and directed handoffs to any active agent. |
| `v2.3.0` | | Read surfaces: `recap`, `peek`, `log`, and `status --json`. |
| `v2.2.x` / `v2.1.x` / `v2.0.0` | | M8Shift rebrand phases, technical rename, backwards-compatible transition, i18n EN/FR, and public repository layout. |
| `v1.x` | | Original relay protocol: claim-before-work, exclusive pen, canonical anchors, bridge files, and early VS Code/user documentation. |

## <i class="fa-solid fa-route m8-heading-icon" aria-hidden="true"></i> Roadmap stages

| Stage | Status | Delivered | Remaining / boundary |
|-------|--------|-----------|----------------------|
| <i class="fa-solid fa-flag-checkered m8-heading-icon" aria-hidden="true"></i> **Stage 1 — Relay foundation** | <Badge type="tip" text="available" /> | Local passive CLI; single shared pen; claim-before-work; immutable turn journal; atomic writes and inter-process lock; stale-lock recovery; configurable agent pair; generated anchors and protocol. | Core invariant: one writer at a time. |
| <i class="fa-solid fa-cube m8-heading-icon" aria-hidden="true"></i> **Stage 2 — M8Shift core** | <Badge type="tip" text="available" /> | `m8shift.py` CLI; generated files `M8SHIFT.*`; anchors; documentation; tests; this website. | The core remains a portable single-file relay. |
| <i class="fa-solid fa-people-arrows m8-heading-icon" aria-hidden="true"></i> **Stage 3 — N-agent directed relay** | <Badge type="tip" text="available" /> | N-agent roster; directed handoffs to any other roster member; structured advisory turn fields; shared memory; task ledger; recap; peek; log; status JSON; session history; loop guardrails via `next`, `status --for`, and `append --wait`. | Coordination is cooperative and advisory; agents still need to follow the protocol. |
| <i class="fa-solid fa-file-signature m8-heading-icon" aria-hidden="true"></i> **Stage 4 — Contracts and validation** | <Badge type="tip" text="available" /> | Advisory branch/commit/tests/next/blocked fields and custom `x_*` fields; `claim --check`; typed Stage-4 contract fields on `append`; read-only validation via `contract validate [--strict] [--json] [--all]` and `doctor --contracts`. | Validation never routes work, grants permissions, runs tools, or mutates the `LOCK`. |
| <i class="fa-solid fa-code-branch m8-heading-icon" aria-hidden="true"></i> **Stage 5 — Isolated concurrency** | <Badge type="tip" text="companion available" /> | `m8shift-worktree.py` for branches/worktrees per task; serialized integration pen; status, claim, done, integrate, and drop operations; RFC 049 PR C ownership sidecars, explicit audited takeover, per-id locks, generation nonces, and durable takeover ledger. | True degree > 1 writes in one shared working tree remain rejected for the core; isolated worktrees are the supported parallelism model, and ownership remains an advisory companion guard rather than a filesystem security boundary. |
| <i class="fa-solid fa-puzzle-piece m8-heading-icon" aria-hidden="true"></i> **Stage 6 — Integrations** | <Badge type="tip" text="shipped" /> | Local integration layer: install scripts; checksums; verify-by-default; `watch`; site/docs sync; reference headless runner with `--once`, `M8SHIFT_RUN_ID`, immutable run plans, post-run `LOCK` verification, and `.m8shift/runtime/runs.jsonl` lifecycle events. Runtime companion surfaces include providers, roles, workflows, approvals, reports, status-runtime, doctor, progress, operator inbox, lane ownership, bounded retention, managed listeners with protective liveness, and disabled-by-default live-verified usage adapters. | Companions are advisory: no second pen, no direct `M8SHIFT.md` edits, no network requirement in the core, and no auto-force or automatic resume. Release artifacts and package distribution remain convenience layers around the single-file core. |
| <i class="fa-solid fa-layer-group m8-heading-icon" aria-hidden="true"></i> **Post-Stage-6 / future companions** | <Badge type="info" text="deferred" /> | RFC-governed direction only; not part of the passive core today. | IDE recipes/panel; read-only MCP adapter; orchestrator recipes; optional local notifications; hosted/runtime control plane; headless command templates; richer companion workboard. |

::: tip RFC status discipline
RFC numbers are permanent creation-order identifiers. They do not track implementation order; for example RFC 010 shipped last because it is a retained/rejected/deferred pattern filter.
:::

## <i class="fa-solid fa-list-ol m8-heading-icon" aria-hidden="true"></i> RFC index

The full, current RFC catalogue — **001–043**, with per-RFC shipped/draft status and
the version each shipped in — lives in the **[RFC reference](/reference/rfc)** (single
source of truth). This roadmap previously duplicated the list and drifted out of date;
the duplicate has been removed to keep one authoritative table.
