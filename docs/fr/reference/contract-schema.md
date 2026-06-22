# Schéma de tour (passation)

Une passation est un **tour** : un bloc numéroté ajouté à `M8SHIFT.md` et encadré par des
commentaires HTML. Une fois son marqueur `END` écrit, le tour est immuable par convention —
l'outil ne réécrit jamais un tour clos.

```text
<!-- M8SHIFT:TURN 4 claude BEGIN -->
from: claude
to: codex
ask: Implement the parser and keep legacy behaviour.
done: Defined the parser contract and added tests.
files: docs/spec.md, tests/test_parser.py
handoff: codex

(optional free-text body, written with --body)
<!-- M8SHIFT:TURN 4 claude END -->
```

## Champs

| Champ | Source | Signification |
| --- | --- | --- |
| `from` | l'agent en action | qui a écrit ce tour |
| `to` | `--to` | l'agent qui reçoit le stylo (ou `none`) |
| `ask` | `--ask` | ce que l'agent suivant doit faire — doit être actionnable (`—` si rien) |
| `done` | `--done` | ce qui a été achevé dans ce tour |
| `files` | `--files` | fichiers touchés, séparés par des virgules |
| `handoff` | dérivé de `--to` | délibérément redondant avec `to`, pour faciliter le grep |

La ligne d'en-tête et chaque champ tiennent sur **une seule ligne** : les sauts de ligne et
les marqueurs réservés (`M8SHIFT:TURN`, `M8SHIFT:LOCK`, `M8SHIFT:STANZA`, ainsi que les
équivalents `COWORK:*`) sont rejetés. Le contenu multi-lignes va dans le corps en texte
libre via `--body PATH` ou `--body -` (stdin), où tout faux marqueur est neutralisé.

::: tip Spécifié, pas encore livré
Des champs structurés tels que `branch`, `commit`, `tests` et `next`, ainsi qu'une commande
`peek` pour lire le prochain contrat sans réclamer, figurent dans la
[feuille de route](/fr/roadmap). Il n'existe aujourd'hui aucun document de contrat
YAML/JSON — le bloc de tour ci-dessus constitue l'intégralité du schéma.
:::
