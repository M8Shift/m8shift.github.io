# M8Shift website proposal

A Markdown-first, bilingual (English/French) website and documentation structure for
**M8Shift**, a free and open-source project built with
[VitePress](https://vitepress.dev/) and deployable to Cloudflare Pages or a
Cloudflare Worker.

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

Production SEO uses the `M8SHIFT_SITE_URL` environment variable for canonical
URLs, Open Graph images, `robots.txt`, and `sitemap.xml`.

```bash
M8SHIFT_SITE_URL=https://your-production-domain.example npm run docs:build
```

Preview:

```bash
npm run docs:preview
```

## Branching and release workflow

`main` is the stable public website: complete homepage, bilingual documentation,
reference pages, SEO metadata, and production social links.

Use dedicated branches for every site variant, experiment, launch page, or release
candidate. Do not replace the `main` homepage with a temporary page directly.

Current site branches:

| Branch | Purpose | Status |
| --- | --- | --- |
| `main` | Complete M8Shift website and documentation | Stable public baseline |
| `site/temporary-homepage` | Temporary GitHub Pages launch homepage | Archived branch for the temporary version |

Release rhythm:

- create a branch before changing the public site;
- merge back to `main` only after build validation and review;
- tag public versions from `main` after validation;
- keep shared navigation/social links on `main` before branching so agents do not
  overwrite them later.

## Cloudflare Pages

Recommended settings:

```text
Framework preset: VitePress
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
Node.js: 22 or 24
```

The site is fully static. It can be served by Cloudflare Pages or by a Worker — a
`wrangler.jsonc` is included (`npx wrangler dev` / `npx wrangler deploy`). No database,
API key, or server runtime is required.

## Included content

- product homepage;
- practical use cases;
- why M8Shift;
- five-minute quickstart;
- core concepts (pen, agents/roster, relations, handoff contracts, validation);
- two-agent relay and the specified multi-agent direction;
- VS Code, headless-runner, and Windows guides;
- CLI, state model, turn schema, generated files, exit codes, limitations;
- security and threat models;
- comparison, FAQ, roadmap;
- contributing and Apache-2.0 license;
- full French locale under `/fr/`.

## Important editorial rule

Pages distinguish clearly between:

- **available now**;
- **specified / planned**;
- **future RFC**.

Do not market a Markdown specification as shipped software. The industry already has
plenty of roadmaps wearing feature-shaped hats.
