# Démarrage rapide

::: warning Statut
Les commandes ci-dessous correspondent au relais à deux agents livré. Les contrats multi-agents plus
riches restent des objectifs de spécification jusqu'à leur implémentation et leur test — voir la
[roadmap](/fr/roadmap).
:::

::: tip Nommage
La CLI est `m8shift.py`. Sur les projets créés avant le renommage, `cowork.py` continue de fonctionner
comme une fine couche de compatibilité et les fichiers `COWORK.*` existants sont toujours lus.
:::

Copiez la CLI dans un projet :

```bash
cp m8shift.py /path/to/project/
cd /path/to/project
python3 m8shift.py init --agents claude,codex
```

Vérifiez l'état :

```bash
python3 m8shift.py status
```

Réclamez le stylo avant de travailler :

```bash
python3 m8shift.py claim claude
```

Clôturez le tour et passez la main :

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract and added tests." \
  --ask "Implement the parser and preserve legacy behavior." \
  --files "docs/spec.md,tests/test_parser.py"
```

L'agent suivant exécute alors :

```bash
python3 m8shift.py wait codex --once
python3 m8shift.py claim codex
```

## Règle d'or

> Ne modifiez jamais le dépôt partagé avant un claim réussi.
