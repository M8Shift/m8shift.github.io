# Releases / Roadmap

Cette page distingue le comportement livré des spécifications. La civilisation
survivra peut-être à cet acte radical d'honnêteté.

## <i class="fa-solid fa-box-open m8-heading-icon" aria-hidden="true"></i> Releases

De la plus récente à la plus ancienne. La version courante est indiquée par un badge.

### <i class="fa-solid fa-tags m8-heading-icon" aria-hidden="true"></i> Pourquoi la première version publique n'est pas `v0.1` ou `v1.0`

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
  <div>
    <strong>La publication publique ne remet pas l'historique à zéro.</strong>
    <p>M8Shift a déjà traversé des mois de versions cumulées en étant utilisé pour coordonner son propre travail. La première version publique est donc la version réellement disponible et stabilisée au moment de la publication, pas un <code>v0.1</code> artificiel ni un <code>v1.0</code> marketing.</p>
  </div>
</div>

La numérotation suit l'artefact de travail : comportement du relais livré, scripts
d'installation, checksums, documentation et fonctions de validation. Publier le projet
rend cet état accumulé visible ; cela ne fait pas repartir le logiciel de zéro.

| Version | Statut | Contenu livré |
|---------|--------|---------------|
| `v3.26.0` | <Badge type="tip" text="courant" /> | Rétention bornée des sidecars runtime avec `m8shift-runtime.py retention prune --keep N` ; archive les anciennes lignes JSONL par défaut sans toucher au relais cœur. |
| `v3.25.0` | | Plans de run headless immuables et vérification post-run du `LOCK`. |
| `v3.24.0` | | Détection d'absence de progrès pour les boucles du compagnon runtime. |
| `v3.23.0` | | Propriété de lane runtime : un runtime frais par identité d'agent, reprise périmée explicite. |
| `v3.22.0` | | Sidecars runtime pour présence, cycle de vie des runs, progression, inbox opérateur, idempotence, approbations, rapports et diagnostics. |
| `v3.21.0` | | Diagnostics `doctor --lint` sûrs pour le cœur : validité relais/LOCK, ancres, dérive protocole, sessions, sessions ouvertes dupliquées et indicateurs de livelock. |
| `v3.19.0` | | Réduction de l'empreinte token : cœur de protocole obligatoire plus petit et référence à la demande. |
| `v3.18.3` | | Rapports de session et relevés de décisions générés depuis les tours existants. |
| `v3.17.0` | | État stable `PAUSED` pour les sessions ouvertes sans travail actif, avec `resume` explicite. |
| `v3.16.0` | | Registre fournisseurs, échafaudage runtime et surfaces durcies du runner headless. |
| `v3.15.0` | | Compagnon runtime v1 et commandes coopératives de demande/pilotage du tour. |
| `v3.13.0` | | Validation des contrats Stage 4 : `contract validate`, `doctor --contracts`, flags contrat dédiés sur `append`, IDs/events du runner headless, checksums mis à jour et documentation alignée. |
| `v3.12.1` | | Horodatages humains préfixés par le fuseau (`CEST 2026-…`, fallback `local`), installateur PowerShell Windows, checksums mis à jour, FAQ enrichie, docs release/install, liens vers la boîte à outils worktree, et rafraîchissement du site. |
| `v3.9.0` | | Garde-fous de boucle : `next`, `status --for`, `append --wait`, plus le refus de live-lock sur `next --force` avec verrou actif. |
| `v3.8.0` | | Historique de sessions et affichage de l'heure locale humaine à côté de l'UTC. |
| `v3.7.0` | | `doctor`, socle de l'historique de sessions, version lockstep sur les scripts distribués, renommage des tests, RFC runtime/session, et hygiène documentaire. |
| `v3.5.0` | | Compagnon opt-in `m8shift-worktree.py` : worktrees git isolés pour le travail parallèle et stylo d'intégration sérialisé. |
| `v3.4.x` | | Registre de tâches, version stamp / `--version`, corrections de revue sur runner et `claim --check`, et nettoyage d'audit autour de la doc N-agent. |
| `v3.3.0` | | `claim --check`, sonde consultative en lecture seule pour les chevauchements de fichiers touchés par d'autres agents. |
| `v3.2.0` | | Mémoire partagée via `remember`, notes durables et titres de mémoire dans `recap`. |
| `v3.1.0` | | Champs indicatifs sur `append` : branch, commit, tests, next, blocked-on, et champs personnalisés `x_*`. |
| `v3.0.0` | | Renommage M8Shift-only, cœur anglais, packs de langues injectables et outillage de build localisé. |
| `v2.4.0` | | Relais N-agent de l'étape 2 : roster configurable et passations dirigées vers tout agent actif. |
| `v2.3.0` | | Surfaces de lecture : `recap`, `peek`, `log` et `status --json`. |
| `v2.2.x` / `v2.1.x` / `v2.0.0` | | Phases de rebrand M8Shift, renommage technique, transition rétrocompatible, i18n EN/FR et structure de dépôt public. |
| `v1.x` | | Protocole de relais initial : claim-before-work, stylo exclusif, ancrages canoniques, fichiers ponts et premières docs VS Code/utilisateur. |

## <i class="fa-solid fa-route m8-heading-icon" aria-hidden="true"></i> Étapes de roadmap

| Étape | Statut | Livré | Restant / limite |
|-------|--------|-------|------------------|
| <i class="fa-solid fa-flag-checkered m8-heading-icon" aria-hidden="true"></i> **Étape 1 — Fondation du relais** | <Badge type="tip" text="disponible" /> | CLI locale passive ; stylo partagé unique ; « réclamer avant d'écrire » ; journal de tours immuable ; écritures atomiques et verrou inter-processus ; récupération de verrou périmé ; couple d'agents configurable ; fichiers d'ancrage et protocole générés. | Invariant cœur : un seul rédacteur à la fois. |
| <i class="fa-solid fa-cube m8-heading-icon" aria-hidden="true"></i> **Étape 2 — Cœur M8Shift** | <Badge type="tip" text="disponible" /> | CLI `m8shift.py` ; fichiers générés `M8SHIFT.*` ; fichiers d'ancrage ; documentation ; tests ; ce site web. | Le cœur reste un relais mono-fichier portable. |
| <i class="fa-solid fa-people-arrows m8-heading-icon" aria-hidden="true"></i> **Étape 3 — Relais dirigé à N agents** | <Badge type="tip" text="disponible" /> | Roster de N agents ; passation dirigée vers tout autre membre du roster ; champs de tour structurés et indicatifs ; mémoire partagée ; registre de tâches ; récapitulatif ; peek ; log ; statut JSON ; historique de sessions ; garde-fous via `next`, `status --for` et `append --wait`. | La coordination reste coopérative et indicative ; les agents doivent suivre le protocole. |
| <i class="fa-solid fa-file-signature m8-heading-icon" aria-hidden="true"></i> **Étape 4 — Contrats et validation** | <Badge type="tip" text="disponible" /> | Champs indicatifs branch/commit/tests/next/blocked et champs personnalisés `x_*` ; `claim --check` ; champs de contrat Stage 4 typés sur `append` ; validation read-only via `contract validate [--strict] [--json] [--all]` et `doctor --contracts`. | La validation ne route jamais le travail, ne donne pas de permissions, ne lance pas d'outils et ne mute pas le `LOCK`. |
| <i class="fa-solid fa-code-branch m8-heading-icon" aria-hidden="true"></i> **Étape 5 — Concurrence isolée** | <Badge type="tip" text="compagnon disponible" /> | `m8shift-worktree.py` pour branches/worktrees par tâche ; stylo d'intégration sérialisé ; opérations status, claim, done, integrate et drop. | Le vrai degré > 1 dans un même working tree reste rejeté pour le cœur ; les worktrees isolés restent le modèle de parallélisme supporté. |
| <i class="fa-solid fa-puzzle-piece m8-heading-icon" aria-hidden="true"></i> **Étape 6 — Intégrations** | <Badge type="tip" text="livré" /> | Couche d'intégration locale : scripts d'installation ; checksums ; vérification par défaut ; `watch` ; synchronisation site/docs ; runner headless de référence avec `--once`, `M8SHIFT_RUN_ID`, heartbeat, plans de run immuables, vérification post-run du `LOCK` et événements `.m8shift/runtime/runs.jsonl`. Le compagnon runtime couvre fournisseurs, rôles, workflows, approbations, rapports, status-runtime, doctor, progression, inbox opérateur, propriété de lane, no-progress et rétention bornée. | Les compagnons restent indicatifs : pas de second stylo, pas d'édition directe de `M8SHIFT.md`, pas de réseau requis, pas d'auto-force. Les artefacts de release et la distribution restent des couches de commodité autour du cœur mono-fichier. |
| <i class="fa-solid fa-layer-group m8-heading-icon" aria-hidden="true"></i> **Post-Étape 6 / compagnons futurs** | <Badge type="info" text="différé" /> | Direction régie par RFC uniquement ; pas dans le cœur passif aujourd'hui. | Recettes/panneau IDE ; adaptateur MCP read-only ; recettes orchestrateurs ; notifications locales optionnelles ; plan de contrôle runtime/hébergé ; templates de commandes headless ; workboard compagnon enrichi. |

::: tip Discipline de statut RFC
Les numéros RFC sont des identifiants permanents d'ordre de création. Ils ne suivent pas l'ordre d'implémentation ; par exemple la RFC 010 a livré tard parce qu'elle filtre des motifs retenus, rejetés et différés.
:::

## <i class="fa-solid fa-list-ol m8-heading-icon" aria-hidden="true"></i> Index RFC

| № | RFC | Statut |
|----:|-----|--------|
| 001 | Roster | historique / remplacée |
| 002 | N agents | historique / implémentée |
| 003 | Packs i18n | livré |
| 004 | Mémoire | livré |
| 005 | Claim check | livré |
| 006 | Tâches | livré |
| 007 | Subturn | rejeté |
| 008 | Compagnon worktree | implémenté v1 |
| 009 | Compagnon runtime | implémenté v1 |
| 010 | Motifs runtime | filtre accepté ; 6 motifs retenus livrés en v3.21–v3.26 |
| 011 | Historique de sessions | implémenté |
| 012 | Validation des contrats | implémenté |
| 013 | Plan de contrôle runtime hébergé | futur / non implémenté |
| 014 | Gestion des fournisseurs | implémenté v1 |
| 015 | Shared tree degré > 1 | rejeté pour le cœur |
| 016 | Demande coopérative de tour | implémenté |
| 017 | Intégrations Stage 6 | implémenté |
| 018 | Architecture runtime agent | implémenté v1 |
| 019 | Motifs neutres d'entrée | entrée conservée / non implémentée |
| 020 | Durcissement runner headless | implémenté v1 |
| 021 | Pause / resume | implémenté v1 |
| 022 | Rapports de session | implémenté v1 |
| 023 | Empreinte token agent | Phase 1 implémentée |
| 024 | Split doctor | draft |
| 025 | Composition status runtime | draft |
| 026 | Rétention sidecar | baseline implémentée ; politique draft |
| 027 | Notifications | draft |
| 028 | Templates de commandes headless | draft |
| 029 | Workboard compagnon | draft |
