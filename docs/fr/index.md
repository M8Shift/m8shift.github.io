---
layout: home

title: M8Shift
titleTemplate: Des agents IA, travaillant par roulements.

hero:
  name: M8Shift
  text: Des agents IA, travaillant par roulements.
  tagline: Libre et open source. Coordonnez Claude, Codex, Gemini, Vibe et d'autres agents de codage sur un même dépôt — un seul écrit à la fois, et la passation n'est jamais perdue (sous réserve, bien sûr, de bonne coopération de l'agent).
  image:
    src: /logo.png
    alt: Logo M8Shift
  actions:
    - theme: brand
      text: Démarrer
      link: /fr/guide/quickstart
    - theme: alt
      text: Explorer les concepts
      link: /fr/concepts/
    - theme: alt
      text: Voir le code source
      link: https://github.com/M8Shift/M8Shift

features:
  - icon: 🖊️
    title: Un seul rédacteur à la fois
    details: Un unique « stylo » exclusif garde le dépôt. Un agent doit le réclamer avant de toucher aux fichiers ; un second claim attend simplement. Un mutex coopératif, pas une mêlée générale.
  - icon: 🔁
    title: Des passations structurées
    details: Chaque tour est un contrat numéroté et immuable — qui a écrit, ce qui a été fait, ce qui est demandé ensuite, et quels fichiers ont changé — ajouté à un journal exploitable par grep.
  - icon: 🎭
    title: Roster configurable
    details: Déclarez les agents autorisés à prendre un tour (claude, codex, gemini, le chat…). Tout membre actif peut recevoir le stylo ; le cœur reste un strict relais de degré 1.
  - icon: 🧩
    title: Neutre vis-à-vis des fournisseurs
    details: Fonctionne avec n'importe quel coéquipier doté d'une CLI. M8Shift ne devient jamais le fournisseur de modèle, le runtime, ni un plan de contrôle hébergé.
  - icon: 🪶
    title: Un seul fichier, zéro dépendance
    details: Un script Python libre et open source, bibliothèque standard uniquement. Pas de compte, pas de serveur, pas de clé API. L'état vit dans le dépôt et est versionné avec lui.
  - icon: 🧪
    title: Auditable par conception
    details: Tours en ajout seul, mémoire, tâches, historique de sessions et statut en heure locale gardent le relais inspectable sans service.

---

## Démarrage rapide

<div class="m8-quickstart">
  <div class="m8-quickstart__bar">
    <div class="m8-quickstart__lights" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <div class="m8-quickstart__tabs">
      <span class="is-active">One-liner</span>
      <span>macOS &amp; Linux</span>
    </div>
    <div class="m8-quickstart__badge">install local</div>
  </div>
  <div class="m8-quickstart__body">
    <p class="m8-quickstart__comment"># Vérifie la CLI + la boîte à outils worktree, les installe localement, puis lance init.</p>
    <pre><code><span class="m8-prompt">$</span> curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --verify --agents claude,codex</code></pre>
  </div>
  <div class="m8-quickstart__foot">
    <span>Vérifié SHA256. Pas de sudo. Pas de PATH global. Pas de runtime hébergé.</span>
    <a href="/fr/guide/windows">Guide Windows</a>
  </div>
</div>

## De la coordination, pas une énième plateforme d'agents

M8Shift est une couche de coordination pour les agents IA déjà en cours d'exécution dans votre terminal, votre IDE,
votre application de bureau ou votre environnement d'automatisation.

Il est **libre et open source**, publié sous licence Apache 2.0.

Il n'a pas besoin de devenir le fournisseur de modèle, le runtime des agents, le gestionnaire de projet,
l'application de discussion et la machine à café. Il se concentre sur un problème plus étroit :
**rendre le travail coopératif explicite, sérialisé et révisable.**

```mermaid
sequenceDiagram
    participant C as claude
    participant Pen as 🖊️ le stylo
    participant X as codex
    C->>Pen: claim (exclusif)
    Note over C: détient le stylo — seul rédacteur
    C->>X: append --to codex · tour clos & immuable
    X->>Pen: claim (exclusif)
    Note over X: détient le stylo — seul rédacteur
    X->>C: append --to claude
    Note over C,X: alternance stricte jusqu'à done
```

*🟣 agents · 🩷 le stylo*

## Comment fonctionne un relais

Les exemples utilisent `claude` et `codex` parce que ce sont des valeurs par défaut
familières. Ils n'ont rien de spécial : remplacez-les par `gemini`, `vibe` ou tout
agent coopératif capable de lire ses instructions, lancer la CLI et respecter
`claim → travail → append`.

Dans le relais le plus simple, deux agents partagent un même dépôt. L'état vit en tête d'un unique fichier
(`M8SHIFT.md`), lisible ligne par ligne :

```text
<!-- M8SHIFT:LOCK:BEGIN -->
holder: claude
state: WORKING_CLAUDE
agents: claude,codex
turn: 3
since: 2026-06-22T18:00:00Z
expires: 2026-06-22T18:30:00Z
lang: en
<!-- M8SHIFT:LOCK:END -->
```

La règle qui rend cela sûr tient en une phrase : **ne jamais modifier le dépôt avant un
`claim` réussi.** Lorsqu'un agent a terminé son tour, il `append` une passation et
passe le stylo à l'autre agent.

## Ce qu'enregistre une passation

Chaque tour est un bloc numéroté — une fois fermé, il n'est jamais réécrit :

```text
<!-- M8SHIFT:TURN 4 claude BEGIN -->
from: claude
to: codex
ask: Implement the parser and keep legacy behaviour.
done: Defined the parser contract and added tests.
files: docs/spec.md, tests/test_parser.py
handoff: codex
<!-- M8SHIFT:TURN 4 claude END -->
```

Des champs de tour plus riches (`branch`, `commit`, `tests`, `next`, `blocked_on`,
champs personnalisés `x_*`) sont des métadonnées indicatives : M8Shift les enregistre,
mais ne les exécute pas et ne les applique pas.

## État actuel

L'implémentation livrée de M8Shift et les étapes de protocole planifiées sont étiquetées séparément :

- **disponible maintenant :** relais à claim exclusif, verrou partagé avec récupération
  de verrou périmé, journal de tours immuable, archivage borné, roster configurable,
  passations structurées, `peek`, `recap`, `log`, `history`, `status --json`,
  `status --for`, `next`, `append --wait`, mémoire partagée, registre de tâches,
  affichage en heure locale, et sortie générée EN/FR ;
- **disponible via compagnon opt-in :** `m8shift-worktree.py` pour des worktrees de
  fonctionnalité isolés avec un stylo d'intégration sérialisé ;
- **future RFCs spécifiées :** plan de contrôle runtime/hébergé et gestion des fournisseurs
  comme compagnons optionnels ; véritables écritures de degré > 1 dans un même working tree
  comme sujet de recherche rejeté pour le cœur au profit des worktrees isolés.

[Lire la roadmap →](/fr/roadmap)
