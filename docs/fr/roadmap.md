# Releases / Roadmap

Cette page distingue le comportement livré des spécifications. La civilisation
survivra peut-être à cet acte radical d'honnêteté.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Releases

De la plus récente à la plus ancienne. `tagged` signifie qu'un tag Git existe dans le
dépôt source ; `main` signifie que la version est présente sur la branche principale
actuelle et attend le prochain tag public.

| Version | Statut | Contenu livré |
|---------|--------|---------------|
| `v3.13.0` | `main` / tag en attente | Validation des contrats Stage 4 : `contract validate`, `doctor --contracts`, flags contrat dédiés sur `append`, IDs/events du runner headless, checksums mis à jour et documentation alignée. |
| `v3.12.1` | historique mainline | Horodatages humains préfixés par le fuseau (`CEST 2026-…`, fallback `local`), installateur PowerShell Windows, checksums mis à jour, FAQ enrichie, docs release/install, liens vers la boîte à outils worktree, et rafraîchissement du site. |
| `v3.9.0` | tagged | Garde-fous de boucle : `next`, `status --for`, `append --wait`, plus le refus de live-lock sur `next --force` avec verrou actif. |
| `v3.8.0` | tagged | Historique de sessions et affichage de l'heure locale humaine à côté de l'UTC. |
| `v3.7.0` | tagged | `doctor`, socle de l'historique de sessions, version lockstep sur les scripts distribués, renommage des tests, RFC runtime/session, et hygiène documentaire. |
| `v3.5.0` | tagged | Compagnon opt-in `m8shift-worktree.py` : worktrees git isolés pour le travail parallèle et stylo d'intégration sérialisé. |
| `v3.4.x` | tagged | Registre de tâches, version stamp / `--version`, corrections de revue sur runner et `claim --check`, et nettoyage d'audit autour de la doc N-agent. |
| `v3.3.0` | tagged | `claim --check`, sonde consultative en lecture seule pour les chevauchements de fichiers touchés par d'autres agents. |
| `v3.2.0` | tagged | Mémoire partagée via `remember`, notes durables et titres de mémoire dans `recap`. |
| `v3.1.0` | tagged | Champs indicatifs sur `append` : branch, commit, tests, next, blocked-on, et champs personnalisés `x_*`. |
| `v3.0.0` | tagged | Renommage M8Shift-only, cœur anglais, packs de langues injectables et outillage de build localisé. |
| `v2.4.0` | tagged | Relais N-agent de l'étape 2 : roster configurable et passations dirigées vers tout agent actif. |
| `v2.3.0` | tagged | Surfaces de lecture : `recap`, `peek`, `log` et `status --json`. |
| `v2.2.x` / `v2.1.x` / `v2.0.0` | tagged | Phases de rebrand M8Shift, renommage technique, transition rétrocompatible, i18n EN/FR et structure de dépôt public. |
| `v1.x` | tagged | Protocole de relais initial : claim-before-work, stylo exclusif, ancrages canoniques, fichiers ponts et premières docs VS Code/utilisateur. |

## <i class="fa-solid fa-route m8-heading-icon" aria-hidden="true"></i> Étapes de roadmap

## <i class="fa-solid fa-flag-checkered m8-heading-icon" aria-hidden="true"></i> Étape 1 — Fondation du relais <Badge type="tip" text="disponible" />

- CLI locale passive ;
- stylo partagé unique ;
- « réclamer avant d'écrire » ;
- journal de tours immuable ;
- écritures atomiques et verrou inter-processus ;
- récupération de verrou périmé ;
- couple d'agents configurable ;
- fichiers d'ancrage et protocole générés.

## <i class="fa-solid fa-cube m8-heading-icon" aria-hidden="true"></i> Étape 2 — Cœur M8Shift <Badge type="tip" text="disponible" />

- CLI `m8shift.py` ;
- fichiers générés `M8SHIFT.*` ;
- fichiers d'ancrage, documentation et tests ;
- ce site web.

## <i class="fa-solid fa-people-arrows m8-heading-icon" aria-hidden="true"></i> Étape 3 — Relais dirigé à N agents <Badge type="tip" text="disponible" />

- roster de N agents ;
- passation dirigée vers tout autre membre du roster ;
- champs de tour structurés et indicatifs ;
- mémoire partagée, registre de tâches, récapitulatif, peek, log, statut JSON et historique de sessions ;
- garde-fous de boucle : `next`, `status --for` et `append --wait`.

## <i class="fa-solid fa-file-signature m8-heading-icon" aria-hidden="true"></i> Étape 4 — Contrats et validation <Badge type="tip" text="disponible" />

- disponible : champs indicatifs branch/commit/tests/next/blocked et champs personnalisés `x_*` ;
- disponible : sonde indicative `claim --check` pour les chevauchements de fichiers ;
- disponible : champs de contrat Stage 4 typés sur `append`, dont schéma, rôles, relation,
  exigences, livrable attendu, preuves, permissions, décision et raison de dérogation ;
- disponible : validation read-only via `contract validate [--strict] [--json] [--all]`
  et `doctor --contracts` ;
- limite : la validation ne route jamais le travail, ne donne pas de permissions, ne lance pas
  d'outils et ne mute pas le `LOCK`.

## <i class="fa-solid fa-code-branch m8-heading-icon" aria-hidden="true"></i> Étape 5 — Concurrence isolée <Badge type="tip" text="compagnon disponible" />

- `m8shift-worktree.py` pour branches/worktrees par tâche ;
- stylo d'intégration sérialisé ;
- opérations status, claim, done, integrate et drop ;
- future RFC spécifiée : le vrai degré > 1 dans un même working tree reste rejeté
  pour le cœur ; les worktrees isolés restent le modèle de parallélisme supporté.

## <i class="fa-solid fa-puzzle-piece m8-heading-icon" aria-hidden="true"></i> Étape 6 — Intégrations <Badge type="tip" text="livré" />

La **couche d'intégration locale** de l'Étape 6, autour du cœur passif, est livrée :

- scripts d'installation, checksums, vérification par défaut, `watch`, synchronisation site/docs ;
- runner headless de référence avec `--once`, `M8SHIFT_RUN_ID`, heartbeat et
  événements de cycle de vie `.m8shift/runtime/runs.jsonl` ;
- artefacts de release et distribution par paquets restent des couches de commodité autour du
  cœur mono-fichier.

### Post-Étape 6 / compagnons futurs <Badge type="info" text="différé" />

Couches optionnelles côté hôte, hors du cœur passif, reprises seulement une fois la couche locale
éprouvée et régies par leurs RFCs :

- format stable de run-plan, registre de fournisseurs, recettes/panneau IDE, adaptateur MCP
  read-only, recettes orchestrateurs et notifications locales optionnelles ;
- plan de contrôle runtime/hébergé et gestion des fournisseurs.
