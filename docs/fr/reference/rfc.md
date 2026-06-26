# <i class="fa-solid fa-file-lines m8-heading-icon" aria-hidden="true"></i> Référence RFC

Cette page reflète le tableau RFC enrichi du README du dépôt M8Shift. Le README de la
branche `main` publiée reste la source de données : les numéros RFC sont permanents,
et les statuts ne changent qu'après merge et publication du code et de la documentation.

::: tip Discipline de numérotation
Les numéros RFC suivent l'ordre de création, pas l'ordre d'implémentation. Par exemple,
la RFC 010 a été rédigée avant des RFC runtime ultérieures, mais ses motifs retenus ont
été livrés entre `v3.21` et `v3.26`.
:::

::: warning Les drafts ne sont pas des releases livrées
Un travail non mergé ne compte pas comme implémenté. Les RFC 024 et RFC 025 restent
`draft` ici jusqu'au merge et à la publication de la release qui les implémente.
:::

| N° | RFC | Description | Statut | Implémenté | Comment |
|----:|-----|-------------|--------|-------------|---------|
| 001 | [Roster](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/001-rfc-roster.md) | Roster d'agents configurable (conception initiale) | historique / remplacée | v2.1.0 · 2026-06-22 | remplacée par RFC 002 |
| 002 | [N agents](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/002-rfc-n-agents.md) | Relais N agents avec un seul stylo partagé | historique / implémentée | v2.4.0 · 2026-06-23 | routage à stylo unique (`append --to`) |
| 003 | [I18n packs](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/003-rfc-i18n-packs.md) | Packs de langue au build (coeur EN + 8) | livrée | v3.0.0 · 2026-06-23 | injecteur AST `m8shift-i18n.py` |
| 004 | [Memory](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/004-rfc-memory.md) | Journal de mémoire partagé en ajout seul | livrée | v3.2.0 · 2026-06-23 | `remember` / `recap`, sans stylo |
| 005 | [Claim check](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/005-rfc-claim-check.md) | Vérification indicative de chevauchement avant claim | livrée | v3.3.0 · 2026-06-23 | `claim --check`, lecture seule |
| 006 | [Tasks](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/006-rfc-tasks.md) | Tableau de tâches partagé en ajout seul | livrée | v3.4.0 · 2026-06-23 | journal d'événements `task`, sans stylo |
| 007 | [Subturn](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/007-rfc-subturn.md) | Proposition de streaming en sous-tour | rejetée | — | rejetée par panel contradictoire |
| 008 | [Worktree companion](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/008-rfc-worktree-companion.md) | Parallélisme worktree degré 2 + intégration sérialisée | implémentée v1 | v3.5.0 · 2026-06-24 | `m8shift-worktree.py`; `LOCK` coeur comme stylo d'intégration |
| 009 | [Runtime companion](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/009-rfc-runtime-companion.md) | Présence / inbox / progression / diagnostics locaux | implémentée v1 | v3.15.0 · 2026-06-25 | compagnon `m8shift-runtime.py` |
| 010 | [Runtime patterns](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/010-rfc-runtime-patterns.md) | Filtre de motifs : retenus / rejetés / différés | acceptée (filtre) | v3.21–v3.26 · 2026-06-26 | 6 retenus livrés ; 13 rejetés ; 6 différés → RFC 024–029 |
| 011 | [Session history](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/011-rfc-session-history.md) | Journal d'historique de sessions + `history` | implémentée | v3.7.0 · 2026-06-24 | `M8SHIFT.sessions.jsonl` |
| 012 | [Contracts validation](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/012-rfc-contracts-validation.md) | Contrats Stage 4 + validation en lecture seule | implémentée | v3.13.0 · 2026-06-25 | surface de validation en lecture seule |
| 013 | [Hosted runtime control plane](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/013-rfc-hosted-runtime-control-plane.md) | Futur plan de contrôle hébergé / runtime | futur / non impl. | — | couche optionnelle hors du coeur passif |
| 014 | [Provider management](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/014-rfc-provider-management.md) | Registre local de providers / adaptateurs | implémentée v1 | v3.16.0 · 2026-06-25 | providers `m8shift-runtime.py` |
| 015 | [Shared tree degree gt1](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/015-rfc-shared-tree-degree-gt1.md) | Écritures réelles degré > 1 dans un même arbre | rejetée (recherche) | — | rejetée pour le coeur |
| 016 | [Cooperative turn request](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/016-rfc-cooperative-turn-request.md) | Demande coopérative de bâton + pilotage opérateur | implémentée | v3.15.0 · 2026-06-25 | demande de bâton dans le coeur |
| 017 | [Stage6 integrations](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/017-rfc-stage6-integrations.md) | Clôture Stage 6 : couche d'intégration locale | implémentée | Stage 6 · 2026-06-25 | couche locale ; intégrations lourdes différées |
| 018 | [Agent runtime architecture](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/018-rfc-agent-runtime-architecture.md) | Scaffold local : rôles / workflows / approvals / rapports | implémentée v1 | v3.16.0 · 2026-06-25 | scaffold `m8shift-runtime.py` |
| 019 | [Input neutral patterns](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/019-rfc-input-neutral-patterns.md) | Inventaire neutre des motifs runtime | entrée curée / non impl. | — | référence pour de futures RFC |
| 020 | [Headless runner hardening](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/020-rfc-headless-runner-hardening.md) | Runner de référence : validation / dry-run / timeout / audit | implémentée v1 | v3.16.0 · 2026-06-25 | `examples/headless_runner.py` |
| 021 | [Pause resume](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/021-rfc-pause-resume.md) | État `PAUSED` stable pour sessions inactives | implémentée v1 | v3.17.0 · 2026-06-25 | `PAUSED` coeur + `pause` / `resume` |
| 022 | [Session reports](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/022-rfc-session-reports.md) | Rapports de session + journal de décisions | implémentée v1 | v3.18.3 · 2026-06-26 | `report` généré depuis les tours existants |
| 023 | [Agent token footprint](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/023-rfc-agent-token-footprint.md) | Réduire la lecture obligatoire du protocole | implémentée (Phase 1) | v3.19.0 · 2026-06-26 | séparation `protocol.md` / `protocol-reference.md` |
| 024 | [Doctor split](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/024-rfc-doctor-split.md) | Séparer doctor coeur et diagnostics compagnon | draft | — | différée depuis RFC 010 |
| 025 | [Runtime status composition](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/025-rfc-status-runtime.md) | Statut runtime sur coeur + sidecars | draft | — | différée depuis RFC 010 |
| 026 | [Sidecar retention](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/026-rfc-sidecar-retention.md) | Borner / purger les journaux sidecar runtime | baseline impl. · draft de politique | v3.26.0 · 2026-06-26 | baseline `retention prune --keep N` ; politique encore draft |
| 027 | [Notifications](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/027-rfc-notifications.md) | Notifications locales pour passations / tours stale | draft | — | différée depuis RFC 010 |
| 028 | [Headless command templates](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/028-rfc-headless-command-templates.md) | Modèles sûrs de commandes headless | draft | — | différée depuis RFC 010 |
| 029 | [Companion workboard](https://github.com/M8Shift/M8Shift/blob/main/docs/en/rfc/029-rfc-m8shift-board.md) | Tableau compagnon plus riche hors coeur | draft | — | différée depuis RFC 010 |

