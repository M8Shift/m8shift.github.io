# Déployer le site sur Cloudflare

Ce site de documentation est entièrement statique (VitePress). Il se construit dans
`docs/.vitepress/dist` et peut être servi de deux manières sur Cloudflare : en tant que **Pages**, ou
en tant que **Worker** avec des ressources statiques. Les deux fonctionnent — choisissez-en une.

## Option A — Cloudflare Pages

```text
Framework preset: VitePress
Build command: npm run docs:build
Build output directory: docs/.vitepress/dist
Root directory: /
```

1. Poussez ce site sur votre hébergeur Git (ce dépôt réside sur la forge M8Shift).
2. Dans Cloudflare, créez un projet Pages à partir du dépôt.
3. Sélectionnez le préréglage VitePress ou saisissez les paramètres ci-dessus.
4. Ajoutez le domaine personnalisé.
5. Poussez les futures modifications Markdown pour déclencher de nouveaux déploiements.

## Option B — Cloudflare Worker (ressources statiques)

Ce dépôt fournit déjà une configuration de Worker (`wrangler.jsonc`) qui sert le build sous forme de
ressources statiques — l'approche moderne Workers Static Assets. Exécutez-le localement :

```bash
npm run docs:build
npx wrangler dev
```

Déployez-le :

```bash
npx wrangler deploy
```

Le Worker sert directement `docs/.vitepress/dist` ; aucun projet Pages n'est requis.

## Discipline du plan gratuit

Gardez les médias générés compressés et évitez de commiter de gros binaires. Le site de documentation
lui-même reste bien en dessous des limites de Cloudflare ; placez les grosses démos, les archives de
versions ou les médias générés dans Cloudflare R2 lorsque c'est approprié.
