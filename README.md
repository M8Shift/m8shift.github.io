# M8Shift website proposal

A Markdown-first website and documentation structure for **M8Shift**, built with
[VitePress](https://vitepress.dev/) and deployable to Cloudflare Pages.

## Positioning

> **M8Shift coordinates AI teammates across turns, roles, reviews, and isolated workspaces.**

Suggested primary tagline:

> **AI agents, working in shifts.**

Suggested supporting line:

> Coordinate Claude, Codex, Gemini, and other coding agents without letting them
> overwrite each other or lose the handoff.

## Why VitePress

VitePress is the recommended first framework because the project is primarily:

- Markdown documentation;
- a developer-facing landing page;
- CLI references and examples;
- architecture and protocol explanations;
- bilingual-ready content;
- statically deployable to Cloudflare Pages.

It keeps content easy to edit in VS Code and avoids introducing a full application
framework merely to display headings and code blocks, one of web development's more
popular forms of recreational complexity.

## Local development

```bash
npm install
npm run docs:dev
```

Build:

```bash
npm run docs:build
```

Preview:

```bash
npm run docs:preview
```

## Cloudflare Pages

Recommended settings:

```text
Framework preset: VitePress
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
Node.js: 22 or 24
```

The site is fully static. No Worker, database, API key, or server runtime is required.

## Included content

- product homepage;
- why M8Shift;
- five-minute quickstart;
- core concepts;
- roles and relations;
- handoff contracts;
- multi-agent workflows;
- worktree concurrency;
- image-generation workflow;
- CLI overview;
- architecture;
- security model;
- comparisons;
- FAQ;
- roadmap;
- contributing and license placeholders.

## Important editorial rule

Pages distinguish clearly between:

- **available now**;
- **specified / planned**;
- **future RFC**.

Do not market a Markdown specification as shipped software. The industry already has
plenty of roadmaps wearing feature-shaped hats.
