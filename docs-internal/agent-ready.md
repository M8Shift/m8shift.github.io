# Agent-ready discovery notes

This repository ships static agent discovery files under `docs/public/`:

- `/llms.txt`
- `/.well-known/agent-skills/index.json`
- `/.well-known/agent-skills/read-m8shift-docs/SKILL.md`

It also prepares a `Link` response header in `docs/public/_headers`.

## Current production caveat

The production site is deployed through GitHub Pages behind Cloudflare. GitHub Pages does **not** apply `docs/public/_headers`; the file is only effective if the static site is deployed through Cloudflare Pages or Cloudflare Workers Static Assets.

For the current production architecture, add the same header with a Cloudflare Transform Rule.

## Free Cloudflare rule

Create a Response Header Modification rule:

```text
Rules > Transform Rules > Response Header Modification
```

Expression:

```text
http.host eq "m8shift.ai"
```

Header operation:

```text
Set static
Header name: Link
```

Header value:

```text
</llms.txt>; rel="alternate"; type="text/plain"; title="M8Shift LLM guide", </.well-known/agent-skills/index.json>; rel="service-meta"; type="application/json"; title="M8Shift agent skills", </sitemap.xml>; rel="sitemap"; type="application/xml", </robots.txt>; rel="robots"; type="text/plain", </guide/>; rel="service-doc"; type="text/html"; title="M8Shift guide", </reference/>; rel="service-doc"; type="text/html"; title="M8Shift reference"
```

## Do not fake unavailable protocols

Do not publish OAuth/OIDC metadata, OAuth Protected Resource metadata, an API catalog, a public MCP server card, or commerce discovery documents unless M8Shift actually exposes those public services. At the moment, `m8shift.ai` is documentation for a local open-source tool, not a hosted runtime.
