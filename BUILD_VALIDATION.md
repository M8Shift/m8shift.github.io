# Build validation

Validated on 2026-06-26 with:

```bash
npm install
npm run validate:mermaid
npm run docs:build
```

Result:

```text
vitepress v2.0.0-alpha.17
34 Mermaid diagrams, 0 failed
client and server bundles built
all Markdown pages rendered
site map generated
build completed successfully
```

Cloudflare Pages output directory:

```text
docs/.vitepress/dist
```

## Sitemap & lastmod freshness

VitePress regenerates `sitemap.xml` on every build, with a per-page `<lastmod>` derived
from each page's last git commit time (`lastUpdated: true` in the config). For search
indexers to re-crawl a page when it changes, that `lastmod` must be accurate — which
requires the **full git history** at build time.

> [!IMPORTANT]
> The deploy workflow (`.github/workflows/pages.yml`) checks out with `fetch-depth: 0`.
> A shallow clone (the default `fetch-depth: 1`) makes `git log` return the same recent
> commit for every file, so every page would share one wrong `lastmod` and indexers would
> not see real updates.

On every site change, verify after the build:

- `docs/.vitepress/dist/sitemap.xml` exists and lists the current pages (no stale `/fr/`
  or removed routes);
- updated pages carry a `<lastmod>` matching their latest commit (not all identical);
- `robots.txt` is present and points to `sitemap.xml`.
