# <i class="fa-solid fa-compass m8-heading-icon" aria-hidden="true"></i> Guide

M8Shift aide les agents de code IA à coopérer sur un même projet sans traiter le dépôt
comme un tableau blanc partagé. Commencez ici pour obtenir un relais fonctionnel, avant
les détails de protocole.

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
  <div>
    <strong>Une règle opérationnelle</strong>
    <p>Ne modifiez jamais le dépôt avant un <code>claim</code> réussi. Le reste du guide explique comment humains et agents rendent cette règle visible.</p>
  </div>
</div>

<div class="m8-path">
  <span><i class="fa-solid fa-circle-question" aria-hidden="true"></i> Pourquoi</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-download" aria-hidden="true"></i> Installer</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-rocket" aria-hidden="true"></i> Démarrer</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-people-arrows" aria-hidden="true"></i> Relayer</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-check-double" aria-hidden="true"></i> Relire</span>
</div>

## <i class="fa-solid fa-bolt m8-heading-icon" aria-hidden="true"></i> Parcours rapide

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./why">
    <i class="fa-solid fa-circle-question" aria-hidden="true"></i>
    <strong>Pourquoi M8Shift</strong>
    <span>Comprendre le conflit de dépôt que M8Shift évite avant d'installer quoi que ce soit.</span>
  </a>
  <a class="m8-doc-card" href="./quickstart">
    <i class="fa-solid fa-rocket" aria-hidden="true"></i>
    <strong>Démarrage rapide</strong>
    <span>Installer localement, initialiser <code>M8SHIFT.md</code> et réaliser la première passation.</span>
  </a>
  <a class="m8-doc-card" href="./vscode">
    <i class="fa-solid fa-code" aria-hidden="true"></i>
    <strong>Boucle VS Code</strong>
    <span>Piloter le relais depuis les panneaux de l'éditeur et reprendre l'agent suivant à chaque tour.</span>
  </a>
</div>

## <i class="fa-solid fa-download m8-heading-icon" aria-hidden="true"></i> Installer par plateforme

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./macos">
    <i class="fa-solid fa-laptop" aria-hidden="true"></i>
    <strong>macOS</strong>
    <span>Utiliser l'installateur shell, des fichiers locaux au projet, la vérification checksum et aucun PATH global.</span>
  </a>
  <a class="m8-doc-card" href="./linux">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Linux / WSL</strong>
    <span>Installer depuis un shell POSIX, y compris WSL et les environnements de type Git Bash.</span>
  </a>
  <a class="m8-doc-card" href="./windows">
    <i class="fa-solid fa-window-maximize" aria-hidden="true"></i>
    <strong>Windows</strong>
    <span>Utiliser PowerShell natif avec vérification activée par défaut.</span>
  </a>
</div>

## <i class="fa-solid fa-diagram-project m8-heading-icon" aria-hidden="true"></i> Choisir un workflow

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./two-agent-relay">
    <i class="fa-solid fa-right-left" aria-hidden="true"></i>
    <strong>Relais à deux agents</strong>
    <span>Le workflow livré le plus simple : alternance stricte entre deux agents coopératifs.</span>
  </a>
  <a class="m8-doc-card" href="./multi-agent">
    <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    <strong>Roster multi-agents</strong>
    <span>Déclarer plus d'agents et passer la main à tout membre actif tout en gardant un seul stylo.</span>
  </a>
  <a class="m8-doc-card" href="./worktree-toolbox">
    <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
    <strong>Boîte à outils worktree</strong>
    <span>Utiliser des worktrees isolés pour le travail parallèle, puis sérialiser l'intégration.</span>
  </a>
  <a class="m8-doc-card" href="./headless">
    <i class="fa-solid fa-robot" aria-hidden="true"></i>
    <strong>Runner headless</strong>
    <span>Automatiser des cycles répétés <code>next → work → append</code>.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-route" aria-hidden="true"></i>
  <div>
    <strong>Suite logique</strong>
    <p>Utilisez le guide pour l'opérationnel, les <a href="/fr/concepts/">concepts</a> pour le vocabulaire de protocole, et la <a href="/fr/reference/cli">référence CLI</a> pour le comportement exact des commandes.</p>
  </div>
</div>
