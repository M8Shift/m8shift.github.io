# Relais à deux agents

Le flux de travail M8Shift le plus simple — et le seul livré — utilise deux agents et un stylo global.
Il est délibérément séquentiel : sa valeur n'est pas le débit, mais une propriété prévisible et une
trace de passation durable.

```text
  claude: claim ──► work ──► append --to codex ──┐
                                                 ▼
  codex:  wait --once ──► claim ──► work ──► append --to claude ──┐
                                                                  ▼
  …strict alternation until one side runs `done`…
```

## La boucle complète

À configurer une fois :

```bash
cp m8shift.py /path/to/project/
cd /path/to/project
python3 m8shift.py init --agents claude,codex
```

Chaque agent répète le même cycle. Premier tour de Claude :

```bash
python3 m8shift.py claim claude        # acquire the pen (exclusive)
# … edit files, run tests …
python3 m8shift.py append claude --to codex \
  --done "Added the parser contract and tests." \
  --ask "Implement the parser; keep legacy behaviour." \
  --files "docs/spec.md,tests/test_parser.py"
```

Codex prend ensuite le relais :

```bash
python3 m8shift.py wait codex --once   # rc 0 = your turn, rc 3 = not yet
python3 m8shift.py claim codex
# … work …
python3 m8shift.py append codex --to claude --done "…" --ask "…"
```

Une fois le travail terminé, l'agent qui détient le stylo clôt le relais :

```bash
python3 m8shift.py done codex
```

## Règle d'or

> Ne modifiez jamais le dépôt partagé avant un `claim` réussi.

Cet unique invariant est ce qui rend le relais sûr. Consultez le [stylo](/fr/concepts/pen) et le
[modèle d'états](/fr/reference/state-model) pour comprendre ce qui se passe sous le capot.
