<div align="center">

# M8Shift Website

_Public documentation site for M8Shift._

![M8Shift](docs/public/logo-wordmark.png)

**A VitePress website for the M8Shift project: landing page, bilingual docs,
reference material, roadmap, security notes, and contribution pages.**

[![website](https://img.shields.io/badge/website-m8shift.ai-blue.svg)](https://m8shift.ai)
[![llms.txt](https://img.shields.io/badge/llms.txt-available-brightgreen.svg)](https://m8shift.ai/llms.txt)
[![agent access](https://img.shields.io/badge/agent%20access-markdown%20mirrors-8A2BE2.svg)](https://m8shift.ai/reference/agents-access)

**Maintainers:** [SITE-IMPACT-STUDY.md](SITE-IMPACT-STUDY.md) maps each kind of product change to the site pages it impacts (#80).
[![VitePress](https://img.shields.io/badge/docs-VitePress-646cff.svg)](https://vitepress.dev/)
[![deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-success.svg)](.github/workflows/pages.yml)
[![Node](https://img.shields.io/badge/node-22%2B-green.svg)](package.json)
[![license](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](docs/license.md)

</div>

## What this repository is

This repository contains the **website and documentation source** for M8Shift. It is
not the M8Shift CLI implementation itself.

| Repository | Role |
|------------|------|
| [M8Shift/M8Shift](https://github.com/M8Shift/M8Shift) | CLI source, RFCs, tests, installers, release artifacts |
| [M8Shift/m8shift.github.io](https://github.com/M8Shift/m8shift.github.io) | Public VitePress website and GitHub Pages deployment target |

The site is Markdown-first and bilingual:

- English documentation at `docs/`;
- French documentation at `docs/fr/`;
- static build output at `docs/.vitepress/dist`;
- public assets under `docs/public`;
- deployment domain configured by `CNAME` (`m8shift.ai`).

## What the site documents

The site explains M8Shift for users and contributors:

- product homepage and positioning;
- why M8Shift exists and how multi-agent handoffs work;
- quickstart, IDE, headless, OS, and workflow guides;
- concepts: pen, agents, relations, handoff contracts, validation;
- reference pages: features, RFCs, CLI, state model, turn schema, generated files,
  exit codes, and limitations;
- security model, threat model, and permissions;
- use cases, comparison, FAQ, roadmap, license, and contributing notes.

## Local development

Install dependencies:

```bash
npm install
```

Run the VitePress dev server:

```bash
npm run docs:dev
```

Build the site:

```bash
npm run docs:build
```

Preview the production build locally:

```bash
npm run docs:preview
```

## Build validation

Before opening or merging a documentation change, run:

```bash
npm run validate:mermaid
npm run docs:build
```

`validate:mermaid` checks every Mermaid diagram before VitePress renders the site.
`docs:build` renders the full static site, generates the sitemap, and catches many
Markdown or route errors.

Production SEO uses `M8SHIFT_SITE_URL` for canonical URLs, Open Graph metadata,
`robots.txt`, and `sitemap.xml`:

```bash
M8SHIFT_SITE_URL=https://m8shift.ai npm run docs:build
```

## Deployment

The primary deployment target is **GitHub Pages**.

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml):

1. runs on pushes to `main`;
2. installs dependencies with `npm ci`;
3. builds with `npm run docs:build`;
4. uploads `docs/.vitepress/dist`;
5. deploys the static artifact to GitHub Pages.

The repository also includes [wrangler.jsonc](wrangler.jsonc) for serving the same
static build through a Cloudflare Worker if needed:

```bash
npm run docs:build
npx wrangler dev
```

No database, API key, or server runtime is required for the website.

## Repository layout

```text
docs/
├── index.md                  # English landing page
├── guide/                    # How-to and onboarding guides
├── concepts/                 # Conceptual explanations
├── reference/                # Exact reference material
├── security/                 # Security model and permissions
├── fr/                       # French locale mirror
└── public/                   # Static images and icons
scripts/
└── validate-mermaid.mjs      # Mermaid validation used before builds
.github/workflows/pages.yml   # GitHub Pages deployment
wrangler.jsonc                # Optional Cloudflare Worker static assets config
CNAME                         # Custom domain for GitHub Pages
```

The fuller information architecture is tracked in [SITE_STRUCTURE.md](SITE_STRUCTURE.md).

## Editorial rules

Pages must clearly distinguish:

- **available now**;
- **specified / planned**;
- **future RFC**.

Do not present a specification, branch, draft, or unmerged RFC as shipped behavior.
When in doubt, align with the published M8Shift README and the current site roadmap.

Keep English and French pages in parity when a change affects public documentation.

## Contributing

Use a dedicated branch for each site change. Keep changes scoped and run the validation
commands before opening a pull request.

```bash
git switch -c site/my-doc-change
npm run validate:mermaid
npm run docs:build
```

Send CLI, protocol, installer, or test-suite changes to
[M8Shift/M8Shift](https://github.com/M8Shift/M8Shift). Send website and documentation
changes to this repository.

## License

M8Shift is released under the Apache License 2.0. See [docs/license.md](docs/license.md)
for the site-facing license page and the canonical license reference.
