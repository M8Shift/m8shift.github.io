# Modèle d'état

Tout l'état du relais réside au même endroit : le **bloc de verrou** en tête de
`M8SHIFT.md` (`COWORK.md` sur les projets hérités), entre `<!-- M8SHIFT:LOCK:BEGIN -->` et
`<!-- M8SHIFT:LOCK:END -->`. Ce sont de simples lignes `key: value`, une par champ, ce qui
le maintient greppable et diffable.

```text
<!-- M8SHIFT:LOCK:BEGIN -->
holder: claude
state: WORKING_CLAUDE
agents: claude,codex
turn: 3
since: 2026-06-22T18:00:00Z
expires: 2026-06-22T18:30:00Z
note: -
lang: en
<!-- M8SHIFT:LOCK:END -->
```

## Champs du verrou

| Champ | Valeurs | Signification |
| --- | --- | --- |
| `holder` | un agent actif \| `none` | qui détient actuellement le stylo |
| `state` | `IDLE` \| `WORKING_<X>` \| `AWAITING_<X>` \| `DONE` | l'état du relais |
| `agents` | CSV, p. ex. `claude,codex,gemini` | roster actif ; tout agent listé peut recevoir le stylo de degré 1 |
| `turn` | entier | numéro du dernier tour clos |
| `since` | ISO-8601 UTC | début de l'état courant |
| `expires` | ISO-8601 UTC \| `-` | échéance TTL ; porte une date **uniquement** pendant `WORKING_*` (30 min) |
| `note` | texte \| `-` | courte note facultative |
| `lang` | `en` \| `fr` | langue de la sortie générée |

## États

- **`IDLE`** — le stylo est libre ; tout membre du roster peut le réclamer.
- **`WORKING_<X>`** — l'agent X détient le stylo et est le seul autorisé à écrire.
- **`AWAITING_<X>`** — le stylo a été passé à X, qui est censé le réclamer et poursuivre.
- **`DONE`** — le relais est terminé.

## Transitions

```mermaid
stateDiagram-v2
    [*] --> IDLE
    IDLE --> WORKING_X: claim X
    WORKING_X --> AWAITING_Y: append X --to Y
    AWAITING_Y --> WORKING_Y: claim Y
    WORKING_Y --> AWAITING_Z: append Y --to Z
    AWAITING_Z --> WORKING_Z: claim Z
    WORKING_X --> WORKING_X: re-claim X · rafraîchit le TTL (+30 min)
    WORKING_X --> WORKING_Y: claim Y --force · seulement si X est périmé
    WORKING_X --> DONE: done X
    DONE --> [*]

    classDef working fill:#7c3aed22,stroke:#7c3aed;
    classDef awaiting fill:#f0509c22,stroke:#f0509c;
    classDef wait fill:#94a3b822,stroke:#64748b;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    class IDLE wait
    class WORKING_X,WORKING_Y,WORKING_Z working
    class AWAITING_Y,AWAITING_Z awaiting
    class DONE ok
```

*🟣 en cours · 🩷 en attente · ⚪ inactif · 🟢 fin*

- `claim` est la seule acquisition et elle est **exclusive** : deux réclamations
  simultanées donnent exactement un gagnant.
- `append` n'est accepté **que** depuis `WORKING_<self>`, et `--to` doit désigner un
  autre membre du roster.
- `claim --force` ne réclame un verrou **qu'**une fois qu'il a dépassé `expires` (périmé) ;
  il est refusé sur un verrou actif.
- Les timestamps sont stockés en UTC. Les commandes humaines affichent aussi un libellé
  en heure locale ; le JSON conserve les valeurs UTC.

::: tip Degré 1 par défaut
Le relais cœur accepte un roster N agents, mais conserve un seul stylo partagé. Le
travail parallèle de fonctionnalités passe par le compagnon worktree optionnel, pas par
des écritures simultanées dans le même répertoire de travail.
:::
