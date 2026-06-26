---
layout: home

title: M8Shift
titleTemplate: Des agents IA, travaillant par roulements.

hero:
  name: ""
  text: <img src="/logo-wordmark.png" alt="Logo texte M8Shift" id="m8shift-title" />Des agents IA,<br/>travaillant en roulements.
  tagline: "À prononcer mate-shift — des coéquipiers IA qui travaillent en roulements. Libre et open source. Coordonnez vos coéquipiers IA — Claude, Codex, Gemini, Vibe et d'autres agents de codage — sur un même dépôt : un seul écrit à la fois, et chaque passation reste enregistrée."
  image:
    src: /logo.png
    alt: Logo M8Shift
  actions:
    - theme: brand
      text: Démarrer
      link: /fr/guide/quickstart
    - theme: alt
      text: Lire la documentation
      link: /fr/guide/
    - theme: alt
      text: Voir le code source
      link: https://github.com/M8Shift/M8Shift

features:
  - icon: <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    title: Un seul rédacteur à la fois
    details: Un unique « stylo » exclusif garde le dépôt. Un agent doit le réclamer avant de toucher aux fichiers ; un second claim attend simplement. Un mutex coopératif, pas une mêlée générale.
  - icon: <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
    title: Des passations structurées
    details: Chaque tour est un contrat numéroté et immuable — qui a écrit, ce qui a été fait, ce qui est demandé ensuite, et quels fichiers ont changé — ajouté à un journal exploitable par grep.
  - icon: <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    title: Roster configurable
    details: Déclarez les agents autorisés à prendre un tour (claude, codex, gemini, vibe…). Tout membre actif peut recevoir le stylo ; le cœur reste un strict relais de degré 1.
  - icon: <i class="fa-solid fa-plug-circle-check" aria-hidden="true"></i>
    title: Neutre vis-à-vis des fournisseurs
    details: Fonctionne avec n'importe quel coéquipier doté d'une CLI. Le cœur ne devient jamais le fournisseur de modèle ni un plan de contrôle hébergé ; les compagnons optionnels restent locaux et indicatifs.
  - icon: <i class="fa-solid fa-file-code" aria-hidden="true"></i>
    title: Un seul fichier, zéro dépendance
    details: Un script Python libre et open source, bibliothèque standard uniquement. Pas de compte, pas de serveur, pas de clé API. L'état vit dans le dépôt et est versionné avec lui.
  - icon: <i class="fa-solid fa-clipboard-check" aria-hidden="true"></i>
    title: Auditable par conception
    details: Tours en ajout seul, mémoire, tâches, historique de sessions, sidecars runtime et statut en heure locale préfixé par le fuseau gardent le relais inspectable sans service.

---

## Démarrage rapide

<div class="m8-quickstart">
  <input class="m8-quickstart__radio" type="radio" name="m8-quickstart-fr" id="m8-quickstart-fr-macos" checked>
  <input class="m8-quickstart__radio" type="radio" name="m8-quickstart-fr" id="m8-quickstart-fr-linux">
  <input class="m8-quickstart__radio" type="radio" name="m8-quickstart-fr" id="m8-quickstart-fr-windows">
  <div class="m8-quickstart__bar">
    <div class="m8-quickstart__lights" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <div class="m8-quickstart__tabs">
      <label for="m8-quickstart-fr-macos">macOS</label>
      <label for="m8-quickstart-fr-linux">Linux</label>
      <label for="m8-quickstart-fr-windows">Windows</label>
    </div>
    <div class="m8-quickstart__badge">install local</div>
  </div>
  <div class="m8-quickstart__body">
    <div class="m8-quickstart__panel m8-quickstart__panel--macos">
      <p class="m8-quickstart__comment"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Installation Terminal pour macOS. Vérifie les fichiers, installe localement, puis lance init.</p>
      <pre><code><span class="m8-prompt">$</span> cd /path/to/project
<span class="m8-prompt">$</span> curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex</code></pre>
    </div>
    <div class="m8-quickstart__panel m8-quickstart__panel--linux">
      <p class="m8-quickstart__comment"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Installation shell pour Linux, WSL ou Git Bash. Pas de sudo, pas de PATH global.</p>
      <pre><code><span class="m8-prompt">$</span> cd /path/to/project
<span class="m8-prompt">$</span> curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex</code></pre>
    </div>
    <div class="m8-quickstart__panel m8-quickstart__panel--windows">
      <p class="m8-quickstart__comment"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Installation PowerShell native pour Windows. La vérification est activée par défaut.</p>
      <pre><code><span class="m8-prompt">PS&gt;</span> cd C:\path\to\project
<span class="m8-prompt">PS&gt;</span> irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex</code></pre>
    </div>
  </div>
  <div class="m8-quickstart__foot">
    <span><i class="fa-solid fa-fingerprint" aria-hidden="true"></i> Vérifié SHA256 sur la ref choisie. Pas de sudo. Pas de PATH global.</span>
    <span class="m8-quickstart__links"><a href="/fr/guide/macos">macOS</a><a href="/fr/guide/linux">Linux</a><a href="/fr/guide/windows">Windows</a></span>
  </div>
</div>

## Pourquoi le multi-agent

<p class="m8-section-lead">Les assistants isolés sont forts sur les tâches ponctuelles. Le travail long sur dépôt a besoin d'une petite forme d'équipe : planifier, produire, relire, corriger, documenter et arbitrer sans perdre le contexte.</p>

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="/fr/guide/why#pourquoi-le-multi-agent-aide">
    <i class="fa-solid fa-sitemap" aria-hidden="true"></i>
    <strong>Le travail long a besoin de structure</strong>
    <span>Les projets complexes dérapent quand planification, implémentation, tests et documentation restent dans un seul prompt généraliste.</span>
  </a>
  <a class="m8-doc-card" href="/fr/concepts/agents-roles">
    <i class="fa-solid fa-user-gear" aria-hidden="true"></i>
    <strong>Les rôles réduisent le flou</strong>
    <span>Un planificateur, codeur, relecteur, testeur ou éditeur peut optimiser une responsabilité plutôt qu'une réponse générique.</span>
  </a>
  <a class="m8-doc-card" href="/fr/concepts/handoff-contracts">
    <i class="fa-solid fa-people-arrows" aria-hidden="true"></i>
    <strong>Les passations évitent la dérive</strong>
    <span>Chaque agent doit savoir ce qui a changé, quelles preuves existent et ce que le prochain tour doit faire.</span>
  </a>
  <a class="m8-doc-card" href="/fr/concepts/validation">
    <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
    <strong>L'humain arbitre toujours</strong>
    <span>Plus d'agents peut ajouter coût et bavardage. M8Shift garde une trace lisible pour relire et décider.</span>
  </a>
</div>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-book-open" aria-hidden="true"></i>
  <div>
    <strong>Motif plus large</strong>
    <p>L'article Liora sur <a href="https://liora.io/crew-ai-tout-savoir">CrewAI et les workflows multi-agents</a> décrit le même passage de l'assistant ponctuel vers des agents spécialisés, du contexte partagé, de la coordination et un arbitrage humain.</p>
  </div>
</div>

## Cas d'usage pratiques

<p class="m8-section-lead">M8Shift aide quand un seul assistant ne suffit pas et que le travail gagne à être séparé en rôles, passations et revues explicites.</p>

<div class="m8-usecase-grid">
  <a class="m8-usecase-card" href="/fr/use-cases#construire-du-logiciel">
    <img class="m8-usecase-card__image" src="/use-cases/build-software.svg" alt="">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Construire du logiciel</strong>
    <span>Séparez planification, implémentation, revue, tests, documentation et notes de release entre agents spécialisés.</span>
  </a>
  <a class="m8-usecase-card" href="/fr/use-cases#ecrire-un-livre">
    <img class="m8-usecase-card__image" src="/use-cases/write-book.svg" alt="">
    <i class="fa-solid fa-pen-fancy" aria-hidden="true"></i>
    <strong>Écrire des contenus longs</strong>
    <span>Utilisez des rôles de coordination, rédaction, revue et édition pour produire des chapitres sans perdre structure ni ton.</span>
  </a>
  <a class="m8-usecase-card" href="/fr/use-cases#concevoir-un-site-web">
    <img class="m8-usecase-card__image" src="/use-cases/website.svg" alt="">
    <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
    <strong>Concevoir un site web</strong>
    <span>Coordonnez architecture d'information, landing page, documentation, FAQ et contenus prêts à intégrer.</span>
  </a>
  <a class="m8-usecase-card" href="/fr/use-cases#revue-et-controle-qualite">
    <img class="m8-usecase-card__image" src="/use-cases/review.svg" alt="">
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    <strong>Relire et valider</strong>
    <span>Séparez production et validation pour éviter que l'agent qui produit soit le seul à approuver.</span>
  </a>
</div>

[Explorer tous les cas d'usage →](/fr/use-cases)

## Documentation pour humains et agents

<p class="m8-section-lead">La page d'accueil explique le produit. Le reste du site sert de manuel opératoire pour les humains et les agents IA qui ont besoin d'une façon commune de communiquer, passer le relais et inspecter l'état.</p>

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="/fr/guide/quickstart">
    <i class="fa-solid fa-rocket" aria-hidden="true"></i>
    <strong>Démarrer un relais</strong>
    <span>Installez localement, initialisez un dépôt et lancez une première passation entre agents de codage.</span>
  </a>
  <a class="m8-doc-card" href="/fr/reference/features">
    <i class="fa-solid fa-table-list" aria-hidden="true"></i>
    <strong>Matrice fonctionnelle</strong>
    <span>Parcourez la liste complète des fonctionnalités livrées et ce que chacune apporte.</span>
  </a>
  <a class="m8-doc-card" href="/fr/concepts/">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>Comprendre le protocole</strong>
    <span>Lisez les concepts autour du stylo, des rôles, relations, validations et passations immuables.</span>
  </a>
  <a class="m8-doc-card" href="/fr/reference/cli">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Automatiser avec la CLI</strong>
    <span>Utilisez commandes, codes de sortie, statut JSON, contrats et fichiers générés depuis scripts ou agents.</span>
  </a>
</div>

M8Shift reste volontairement étroit : il n'héberge pas les modèles, ne remplace pas
votre IDE et ne devient pas le chef de projet. Il donne aux coéquipiers — humains ou IA —
un relais local et inspectable.

## Questions fréquentes

<p class="m8-section-lead">Questions courantes sur M8Shift et son fonctionnement.</p>

<div class="m8-faq-strip">
  <a class="m8-faq-card" href="/fr/faq#m8shift-est-il-agnostique-niveau-modeles">
    <i class="fa-solid fa-robot" aria-hidden="true"></i>
    <strong>Agnostique niveau modèles</strong>
    <span>Claude, Codex, Gemini, Vibe, outils locaux — tout agent coopératif capable de suivre la boucle du relais.</span>
  </a>
  <a class="m8-faq-card" href="/fr/faq#m8shift-a-t-il-besoin-de-cles-api">
    <i class="fa-solid fa-key" aria-hidden="true"></i>
    <strong>Aucune clé API M8Shift</strong>
    <span>Le cœur ne fait aucun appel modèle et ne stocke aucun identifiant fournisseur. Chaque hôte d'agent garde sa propre auth.</span>
  </a>
  <a class="m8-faq-card" href="/fr/guide/worktree-toolbox">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>Parallélisme via worktrees</strong>
    <span>Un même working tree reste en degré 1 ; le travail isolé utilise la boîte à outils worktree livrée.</span>
  </a>
</div>

[Lire la FAQ complète →](/fr/faq)

## État du projet

<p class="m8-section-lead">M8Shift est une CLI locale, libre et open source. La roadmap sépare ce qui est livré aujourd'hui des étapes de protocole encore en cours de spécification.</p>

<div class="m8-faq-strip">
  <a class="m8-faq-card" href="/fr/roadmap">
    <i class="fa-solid fa-route" aria-hidden="true"></i>
    <strong>Releases et roadmap</strong>
    <span>Consultez la version courante, les étapes livrées, les travaux prévus et la direction du protocole.</span>
  </a>
  <a class="m8-faq-card" href="/fr/comparison">
    <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
    <strong>Pourquoi pas une plateforme ?</strong>
    <span>Comparez un relais local avec runtimes hébergés, bases de données, files et systèmes d'orchestration.</span>
  </a>
  <a class="m8-faq-card" href="https://github.com/M8Shift/M8Shift">
    <i class="fa-solid fa-code" aria-hidden="true"></i>
    <strong>Code source</strong>
    <span>Inspectez l'implémentation, les scripts d'installation, les fichiers de protocole générés et l'historique.</span>
  </a>
</div>
