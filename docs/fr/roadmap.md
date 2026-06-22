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

## Étape 2 — Renommage M8Shift et compatibilité

<span class="m8-badge">Disponible</span>

- CLI renommée `cowork.py` → `m8shift.py` ;
- `cowork.py` conservé comme fine couche de compatibilité ;
- fichiers générés `COWORK.*` → `M8SHIFT.*`, les anciens `COWORK.*` restant lus ;
- fichiers d'ancrage, documentation et tests mis à jour ;
- ce site web.

## Étape 3 — Relais dirigé à N agents

<span class="m8-badge">Spécifié</span>

- roster de N agents ;
- plusieurs rôles par agent ;
- un seul rôle actif par tour ;
- passations dirigées ;
- vocabulaire de relations ;
- sorties structurées ;
- récapitulatif et journal ciblés.

## Étape 4 — Contrats et validation

<span class="m8-badge">Spécifié</span>

- rôles source et cible explicites ;
- permissions indicatives/hôte/mixtes ;
- sorties requises ;
- relecteur indépendant ;
- chemins d'approbation, de révision, de rejet et de dérogation ;
- validation de schéma.

## Étape 5 — Concurrence isolée

<span class="m8-badge">Future RFC</span>

- graphe de tâches et dépendances ;
- branches/worktrees par tâche ;
- stylos d'espace de travail ;
- stylo d'intégration exclusif ;
- rôles de coordinateur et d'intégrateur ;
- workflows parallèles de rédaction/image/test/recherche.

## Étape 6 — Intégrations

<span class="m8-badge">Exploratoire</span>

- exécuteurs headless ;
- panneau de statut dans l'IDE ;
- adaptateur MCP ;
- intégration d'orchestrateur ;
- notifications locales optionnelles ;
- artefacts de release et distribution par paquets.
