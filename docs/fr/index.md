---
layout: home

title: M8Shift
titleTemplate: Des agents IA, travaillant par roulements.

hero:
  name: M8Shift
  text: Des agents IA, travaillant par roulements.
  tagline: Coordonnez Claude, Codex, Gemini et d'autres agents de codage sur un même dépôt — un seul écrit à la fois, et la passation n'est jamais perdue.
  image:
    src: /logo.svg
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
      link: https://github.com/TheLazyGeekGuy/M8Shift

features:
  - icon: 🖊️
    title: Un seul rédacteur à la fois
    details: Un unique « stylo » exclusif garde le dépôt. Un agent doit le réclamer avant de toucher aux fichiers ; un second claim attend simplement. Un mutex coopératif, pas une mêlée générale.
  - icon: 🔁
    title: Des passations structurées
    details: Chaque tour est un contrat numéroté et immuable — qui a écrit, ce qui a été fait, ce qui est demandé ensuite, et quels fichiers ont changé — ajouté à un journal exploitable par grep.
  - icon: 🎭
    title: Couple d'agents configurable
    details: Déclarez quels deux agents font le relais (claude, codex, gemini, le chat…). Les deux premiers sont actifs ; le protocole reste un strict relais de degré 1.
  - icon: 🧩
    title: Neutre vis-à-vis des fournisseurs
    details: Fonctionne avec n'importe quel coéquipier doté d'une CLI. M8Shift ne devient jamais le fournisseur de modèle, le runtime, ni un plan de contrôle hébergé.
  - icon: 🪶
    title: Un seul fichier, zéro dépendance
    details: Un unique script Python, bibliothèque standard uniquement. Pas de compte, pas de serveur, pas de clé API. L'état vit dans le dépôt et est versionné avec lui.
  - icon: 🧪
    title: Auditable par conception
    details: Une piste de tours en ajout seul, lisible avec un éditeur de texte ou grep — et bornée par une seule commande d'archivage quand elle grandit.

---

## De la coordination, pas une énième plateforme d'agents

M8Shift est une couche de coordination pour les agents IA déjà en cours d'exécution dans votre terminal, votre IDE,
votre application de bureau ou votre environnement d'automatisation.

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

## Comment fonctionne un relais

Deux agents partagent un même dépôt. L'état vit en tête d'un unique fichier
(`M8SHIFT.md`, ou `COWORK.md` sur les projets existants), lisible ligne par ligne :

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

Des champs de tour plus riches (branch, commit, tests, next) sont **spécifiés, pas encore livrés** —
voir la [roadmap](/fr/roadmap).

## État actuel

M8Shift évolue à partir de la conception originelle du relais CoWork. L'implémentation livrée et
les étapes de protocole planifiées sont étiquetées séparément :

- **disponible maintenant :** le relais à claim exclusif, le verrou partagé avec récupération de verrou périmé, le
  journal de tours immuable, l'archivage borné, le couple d'agents configurable (roster), une
  CLI locale mono-fichier, et la sortie EN/FR ;
- **spécifié pour la suite :** la mémoire partagée et le récapitulatif, les champs de tour structurés avec `peek`,
  et une chronologie / un statut JSON ;
- **future RFC :** plus de deux agents simultanés (degré > 1).

[Lire la roadmap →](/fr/roadmap)
