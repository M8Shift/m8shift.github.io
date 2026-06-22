# Deploy the site to Cloudflare Pages

The documentation site is static and requires no Cloudflare Worker.

## Pages settings

```text
Framework preset: VitePress
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
```

## Git deployment

1. Push this site to GitHub or GitLab.
2. In Cloudflare, create a Pages project from the repository.
3. Select the VitePress preset or enter the settings above.
4. Add the custom domain.
5. Push future Markdown changes to trigger new deployments.

## Free-plan discipline

Keep generated media compressed and avoid committing large binaries. The documentation
site itself should remain far below Cloudflare Pages limits; put large demos, release
archives, or generated media in Cloudflare R2 when appropriate.
