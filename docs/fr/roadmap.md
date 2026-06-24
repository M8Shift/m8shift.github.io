# Roadmap

La roadmap distingue le comportement livré des spécifications. La civilisation survivra peut-être
à cet acte radical d'honnêteté.

## Étape 1 — Fondation du relais

<span class="m8-badge">Disponible / hérité</span>

- CLI locale passive ;
- stylo partagé unique ;
- « réclamer avant d'écrire » ;
- journal de tours immuable ;
- écritures atomiques et verrou inter-processus ;
- récupération de verrou périmé ;
- couple d'agents configurable ;
- fichiers d'ancrage et protocole générés.

## Étape 2 — Cœur M8Shift

<span class="m8-badge">Disponible</span>

- CLI `m8shift.py` ;
- fichiers générés `M8SHIFT.*` ;
- fichiers d'ancrage, documentation et tests ;
- ce site web.

## Étape 3 — Relais dirigé à N agents

<span class="m8-badge">Disponible</span>

- roster de N agents ;
- passation dirigée vers tout autre membre du roster ;
- champs de tour structurés et indicatifs ;
- mémoire partagée, registre de tâches, récapitulatif, peek, log, statut JSON et historique de sessions ;
- garde-fous de boucle : `next`, `status --for` et `append --wait`.

## Étape 4 — Contrats et validation

<span class="m8-badge">Partiellement disponible / partiellement spécifié</span>

- disponible : champs indicatifs branch/commit/tests/next/blocked et champs personnalisés `x_*` ;
- disponible : sonde indicative `claim --check` pour les chevauchements de fichiers ;
- spécifié : rôles source/cible appliqués, sorties requises, chemins approve/revise/reject
  et validation de schéma.

## Étape 5 — Concurrence isolée

<span class="m8-badge">Disponible via compagnon</span>

- `m8shift-worktree.py` pour branches/worktrees par tâche ;
- stylo d'intégration sérialisé ;
- opérations status, claim, done, integrate et drop ;
- future RFC spécifiée : le vrai degré > 1 dans un même working tree reste rejeté
  pour le cœur ; les worktrees isolés restent le modèle de parallélisme supporté.

## Étape 6 — Intégrations

<span class="m8-badge">Exploratoire</span>

- exécuteurs headless ;
- panneau de statut dans l'IDE ;
- adaptateur MCP ;
- intégration d'orchestrateur ;
- notifications locales optionnelles ;
- future RFCs spécifiées : plan de contrôle runtime/hébergé et gestion des fournisseurs
  comme compagnons optionnels hors du cœur passif ;
- artefacts de release et distribution par paquets.
