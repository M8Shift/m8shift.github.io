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
| `branch` | `--branch` | nom de branche indicatif |
| `commit` | `--commit` | référence de commit indicative |
| `tests` | `--tests` | commande/résultat de validation indicatif |
| `next` | `--next` | prochaine étape indicative |
| `blocked_on` | `--blocked-on` | blocage indicatif |
| `schema` | `--schema` / `--field schema=...` | marqueur de schéma ; `stage4.v1` active la validation |
| `role_from` | `--role-from` | rôle indicatif utilisé par l'émetteur |
| `role_to` | `--role-to` | rôle indicatif attendu du destinataire |
| `relation` | `--relation` | `handoff`, `review_request`, `review_result` ou `escalation` |
| `requires` | `--requires` | contrôles ou livrables attendus du destinataire |
| `expected_output` | `--expected-output` | livrable concret attendu du destinataire |
| `evidence` | `--evidence` | tests, commandes, commits ou vérifications manuelles |
| `decision` | `--decision` | décision de revue : `approve`, `revise`, `reject` ou `waive` |
| `waiver_reason` | `--waiver-reason` | requis quand `decision=waive` |
| `permissions` | `--permissions` | intention de permission indicative, jamais appliquée par le cœur |
| `x_*` | `--field key=value` | métadonnée personnalisée indicative |
| `handoff` | dérivé de `--to` | délibérément redondant avec `to`, pour faciliter le grep |

La ligne d'en-tête et chaque champ tiennent sur **une seule ligne** : les sauts de ligne et
les marqueurs réservés (`M8SHIFT:TURN`, `M8SHIFT:LOCK` et `M8SHIFT:STANZA`) sont rejetés.
Le contenu multi-lignes va dans le corps en texte
libre via `--body PATH` ou `--body -` (stdin), où tout faux marqueur est neutralisé.

`peek <agent>` lit la dernière passation adressée à cet agent sans prendre le stylo. Il
n'existe toujours pas de document de contrat YAML/JSON séparé : le bloc de tour ci-dessus
constitue le schéma.

La validation Stage 4 est explicite et read-only :

```bash
python3 m8shift.py contract validate [--strict] [--json] [--all]
python3 m8shift.py doctor --contracts
```

La validation peut signaler des champs de contrat manquants ou invalides, mais elle ne
route jamais le travail, ne donne pas de permissions, ne lance pas d'outils et ne mute pas
le `LOCK`.
