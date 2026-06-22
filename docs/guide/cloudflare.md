# Deploy the site to Cloudflare

This documentation site is fully static (VitePress). It builds to
`docs/.vitepress/dist` and can be served two ways on Cloudflare: as **Pages**, or as a
**Worker** with static assets. Either works — pick one.

## Option A — Cloudflare Pages

```text
Framework preset: VitePress
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
```

1. Push this site to your Git host (this repository lives on the M8Shift forge).
2. In Cloudflare, create a Pages project from the repository.
3. Select the VitePress preset or enter the settings above.
4. Add the custom domain.
5. Push future Markdown changes to trigger new deployments.

## Option B — Cloudflare Worker (static assets)

This repository already ships a Worker config (`wrangler.jsonc`) that serves the build
as static assets — the modern Workers Static Assets approach. Run it locally:

```bash
npm run docs:build
npx wrangler dev
```

Deploy it:

```bash
npx wrangler deploy
```

The Worker serves `docs/.vitepress/dist` directly; no Pages project is required.

## Free-plan discipline

Keep generated media compressed and avoid committing large binaries. The documentation
site itself stays far below Cloudflare limits; put large demos, release archives, or
generated media in Cloudflare R2 when appropriate.
