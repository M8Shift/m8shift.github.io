# Agent access — reading this site programmatically

M8Shift coordinates AI agents, so its documentation is built to be **readable
by agents too**. This page states exactly what is exposed — and what is not.

## What an agent can use today

| Surface | Where | What it is |
|---------|-------|------------|
| `llms.txt` | [`https://m8shift.ai/llms.txt`](https://m8shift.ai/llms.txt) | The [llms.txt](https://llmstxt.org/) discovery file: a curated, plain-text map of the primary docs with one-line context and install commands. Start here. |
| Markdown mirrors | `https://m8shift.ai/_markdown/<path>.md` | Every built page ships a plain-markdown mirror generated at build time (45 pages at this writing). The same source content as the page in plain Markdown — none of the site chrome (diagrams stay as ```mermaid``` source, components as their source form), which is more parseable for an agent than rendered HTML. Example: [`/_markdown/reference/cli.md`](https://m8shift.ai/_markdown/reference/cli.md) mirrors [`/reference/cli`](/reference/cli). |
| Content signals | `robots.txt` (Cloudflare-managed) | The intended public signal: search indexing **allowed**, AI training **disallowed**, reference use **allowed**. |
| Agent Skill | [`/.well-known/agent-skills/read-m8shift-docs/SKILL.md`](https://m8shift.ai/.well-known/agent-skills/read-m8shift-docs/SKILL.md) | An open-format [Agent Skill](https://agentskills.io/) any skills-capable agent can load: how to read this site, what M8Shift is, where the boundaries are. |
| Source of truth | [github.com/M8Shift/M8Shift](https://github.com/M8Shift/M8Shift) | The product repository: specification, RFCs, module reference, protocol docs — all markdown, all public. |

The mirror path rule is mechanical: take the page path, prefix `/_markdown/`,
append `.md` (the home page is `/_markdown/index.md`).

## What is deliberately NOT exposed

- **No MCP server, no API, no query endpoint** — this is a static site; agent
  access means fetching text, nothing more.
- **No dynamic content negotiation** — the mirrors are static build artifacts,
  regenerated on every deploy, not per-request transformations.
- **No telemetry on agent reads** — a fetch is a fetch.

Honesty note: "agent-compatible" here means *discoverable and parseable*
(llms.txt + markdown mirrors + explicit content signals). It does not mean
interactive tooling. If a future MCP/tooling surface ships, it will be listed
on this page.
