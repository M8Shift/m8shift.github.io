# Site impact study — what to update when the product changes (#80)

Maintainer document (not published). Purpose: make every release site refresh
**exhaustive and systematic** — for each kind of product change, the exact
pages that must be updated, plus the page-by-page trigger inventory. Built
from the real v3.57.0 / v3.58.0 release passes.

## A. Change-kind → impacted pages

| Product change | Pages that MUST be checked/updated |
|---|---|
| **Release (new tag)** | **First: grep the site for the OLD version and any CURRENT-version descriptor** (`reference/cli.md` says "m8shift.py X.Y.Z", RFC-range claims like "All RFCs 001-0NN" in `reference/index.md` + `roadmap.md`, test/feature counts) — these are NOT dated history and must move to the new version. Then: `roadmap.md` — new row at the TOP of release history (one-feature-per-line `<br>•` format, `<Badge type="tip" text="current" />` moved from the previous row) + the "On the design board" narrative bullet; `reference/rfc.md` — status/version columns of every RFC the release touched; `manifesto/technical-companion.md` — shipped-status rows; `security/audits.md` — if the release contained a security-relevant change or audit. |
| **RFC newly implemented / amended** | `reference/rfc.md` (status, version, notes); `roadmap.md` narrative; `manifesto/technical-companion.md` row; if it adds a user-visible concept: the matching `concepts/` page or a new one (then see "New page"). |
| **New CLI verb / flag on an existing verb** | `reference/cli.md`; `reference/features.md` (feature matrix); `guide/quickstart.md` + `guide/two-agent-relay.md` if the verb belongs to the core loop; `reference/exit-codes.md` if it adds exit codes. |
| **New module / companion script** | `reference/modules.md`; `reference/architecture.md` (Mermaid diagram + legend); `reference/cli.md` (its verbs); `reference/generated-files.md` if it writes sidecars; installers section of `guide/` platform pages if shipped by install. |
| **Protocol / state-machine change** | `reference/state-model.md`; `reference/contract-schema.md` (turn schema); `concepts/pen.md` / `concepts/handoff-contracts.md`; `reference/exit-codes.md`. |
| **Generated-file change (pack, stanza, anchors, protocol.md)** | `reference/generated-files.md`; `concepts/validation.md` if doctor findings change; `reference/cli.md` (doctor section). |
| **New doctor finding family** | `reference/cli.md` (doctor); `reference/features.md`; `concepts/validation.md`. |
| **Security-relevant change / audit / incident** | `security/audits.md` (entry with date + scope); `security/threat-model.md` if the boundary moved; `security/permissions.md` if permissions semantics changed. |
| **Install path change** | `guide/macos.md` / `guide/linux.md` / `guide/windows.md` / `guide/vscode.md`; `llms.txt` install block; `beginners/m8shift-simply.md` if the one-liner changed. |
| **New examples/ content in the product repo** | `guide/headless.md` (runner) or the matching guide page; `roadmap.md` row; README badges only if a new access surface. |
| **New site page** | BOTH sidebars in `docs/.vitepress/config.mts` (two nav trees) + `pageMeta` SEO block; `llms.txt` if it is a primary doc; it gets a markdown mirror automatically (build) — verify `dist/_markdown/<path>.md` exists after build. |
| **Agent-access surface change (llms.txt, mirrors, .well-known skill)** | `reference/agents-access.md`; `docs/public/llms.txt`; README badges; `docs/public/.well-known/agent-skills/read-m8shift-docs/SKILL.md` if the reading contract changed. |
| **Version number anywhere in prose** | grep the site for the OLD version string before pushing: `grep -rn "vX.Y.Z" docs/ --include="*.md"` — the roadmap narrative and technical-companion are the usual stragglers. |

## B. Page-by-page trigger inventory (all 45 pages)

| Page | Update triggers |
|---|---|
| `index.md` (home) | messaging/positioning change; new headline feature; hero version if shown |
| `roadmap.md` | EVERY release; design-board status moves; RFC completion |
| `reference/rfc.md` | EVERY release touching an RFC; new RFC drafted/amended |
| `manifesto/technical-companion.md` | release shipping a system listed in its table |
| `manifesto/m8shift-comparia-dna.md` | positioning/DNA narrative changes only |
| `reference/cli.md` | new/changed verbs, flags, doctor findings, exit semantics |
| `reference/features.md` | any new user-visible capability |
| `reference/architecture.md` | new module/companion/channel; diagram + color legend |
| `reference/modules.md` | new/changed shipped module |
| `reference/state-model.md` | lock/state semantics |
| `reference/contract-schema.md` | turn/contract schema |
| `reference/exit-codes.md` | exit vocabulary |
| `reference/generated-files.md` | generated artifacts (pack/stanza/anchors/sidecars) |
| `reference/limitations.md` | honesty boundary moves (new enforcement OR new non-goal) |
| `reference/agents-access.md` | llms.txt / mirrors / .well-known skill / robots signals |
| `reference/index.md` | new reference page (link hub) |
| `guide/quickstart.md`, `guide/two-agent-relay.md` | core-loop UX changes |
| `guide/multi-agent.md` | roster/N-agent semantics |
| `guide/headless.md` | runner/listener changes |
| `guide/worktree-toolbox.md` | worktree companion changes |
| `guide/macos.md` / `linux.md` / `windows.md` / `vscode.md` | install/platform changes |
| `guide/why.md`, `guide/index.md` | positioning |
| `concepts/*` (6 pages) | conceptual-model changes (pen, contracts, roles, validation, relations) |
| `beginners/m8shift-simply.md` | anything the simple story tells (install line, core loop) |
| `security/audits.md` | every audit/incident/security-relevant release |
| `security/threat-model.md` | boundary/authority changes |
| `security/permissions.md` | permission semantics |
| `security/index.md` | new security page |
| `faq.md` | recurring questions; stale answers after big changes |
| `comparison.md` | competitor/positioning changes |
| `use-cases.md` | new demonstrated use case (e.g. shift demos) |
| `story.md`, `accessibility.md`, `license.md`, `contributing.md` | rare; self-explanatory |
| `public/.well-known/agent-skills/read-m8shift-docs/SKILL.md` | site reading contract changes |

## C. Release-pass checklist (condensed, from v3.57/v3.58 experience)

1. `roadmap.md`: new bulleted row + badge move + narrative.
2. `reference/rfc.md`: every touched RFC row.
3. `manifesto/technical-companion.md`: shipped rows.
4. Grep the old version string across `docs/`.
5. Anything in section A triggered by the release content? Walk the table.
6. `npm run docs:build` — must be clean; verify new pages got mirrors.
7. Raw leak scan on the diff (compartmentalization).
8. Push `origin` (forge) AND `github-pages`; verify head equality.
9. Report updated AND deliberately-not-updated pages (operator visibility rule).
