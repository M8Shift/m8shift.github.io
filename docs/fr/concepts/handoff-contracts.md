# Contrats de passation

Une passation est un **tour** : un enregistrement numéroté et immuable de ce qui s'est
passé et de ce qui est demandé ensuite. Elle transforme un informel « à toi de jouer » en
une unité de travail durable et greppable.

Le tour livré porte les champs cœur (`from`, `to`, `ask`, `done`, `files`, `handoff`),
des champs indicatifs optionnels comme `branch`, `commit`, `tests`, `next`, `blocked_on`,
les champs personnalisés `x_*` et les champs de contrat Stage 4 comme `schema`,
`relation`, `requires`, `expected_output`, `evidence` et `decision`. Voir le
[schéma de tour](/fr/reference/contract-schema).

```text
<!-- M8SHIFT:TURN 4 claude BEGIN -->
from: claude
to: codex
ask: Implement the parser and keep legacy behaviour.
done: Defined the parser contract and added tests.
files: docs/spec.md, tests/test_parser.py
branch: parser-contract
tests: python3 -m unittest discover -s tests
schema: stage4.v1
relation: review_request
requires: read code and tests
expected_output: approve/revise/reject/waive
handoff: codex
<!-- M8SHIFT:TURN 4 claude END -->
```

```mermaid
flowchart LR
    O["ouvrir le tour<br/>(claim)"] --> F["remplir les champs<br/>ask/done/files/tests"]
    F --> A["append<br/>(marqueur END)"]
    A --> C["clos = immuable"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    class O,F,A agent
    class C ok
```

*🟣 étapes actives · 🟢 clos (immuable)*

Deux principes tiennent :

- **Un tour clos est immuable.** L'outil ne réécrit jamais un tour une fois son marqueur
  `END` posé, de sorte que le journal est un historique honnête, en ajout seul.
- **Les contrats sont des données, pas des commandes.** M8Shift n'exécute jamais un chemin,
  une commande de test, un nom de branche, un champ de commit ou un champ personnalisé du
  seul fait qu'il apparaît dans le journal.
- **La validation de contrat est read-only.** `contract validate` et `doctor --contracts`
  signalent les problèmes de forme/complétude sans router le travail ni donner de permissions.
