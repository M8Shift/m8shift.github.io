# <i class="fa-solid fa-book m8-heading-icon" aria-hidden="true"></i> Référence

Cette section documente précisément le comportement livré. Les commandes prévues doivent
rester marquées comme prévues tant que le code et les tests n'existent pas.

<div class="m8-callout m8-callout--pink">
  <i class="fa-solid fa-terminal" aria-hidden="true"></i>
  <div>
    <strong>Pour l'automatisation</strong>
    <p>Utilisez cette section pour écrire des scripts, des boucles headless ou des instructions d'agent. Elle privilégie le comportement exact des commandes.</p>
  </div>
</div>

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./features">
    <i class="fa-solid fa-table-list" aria-hidden="true"></i>
    <strong>Matrice fonctionnelle</strong>
    <span>Un tableau complet des capacités livrées et de ce que chacune fait.</span>
  </a>
  <a class="m8-doc-card" href="./cli">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>CLI</strong>
    <span>Commandes, options, comportements lecture/écriture, sortie JSON, contrats et boucles d'attente.</span>
  </a>
  <a class="m8-doc-card" href="./state-model">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>Modèle d'état</strong>
    <span>Bloc de verrou, holder, transitions d'état, TTL, roster et champs de session.</span>
  </a>
  <a class="m8-doc-card" href="./contract-schema">
    <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
    <strong>Schéma de tour</strong>
    <span>Champs de passation, vocabulaire Stage 4, métadonnées de relation et commandes de validation.</span>
  </a>
  <a class="m8-doc-card" href="./generated-files">
    <i class="fa-solid fa-file-code" aria-hidden="true"></i>
    <strong>Fichiers générés</strong>
    <span>Fichiers créés par init, ancres de protocole, état local et consignes destinées aux agents.</span>
  </a>
  <a class="m8-doc-card" href="./exit-codes">
    <i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>
    <strong>Codes de sortie</strong>
    <span>Résultats lisibles machine pour succès, refus, attente, état invalide et branches d'automatisation.</span>
  </a>
  <a class="m8-doc-card" href="./limitations">
    <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
    <strong>Limites</strong>
    <span>Ce que M8Shift n'applique pas, les frontières de l'hôte et les limites des métadonnées indicatives.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
  <div>
    <strong>Discipline de référence</strong>
    <p>Si la CLI n'implémente pas un comportement, la référence ne doit pas le présenter comme disponible. La roadmap couvre le travail planifié ou compagnon.</p>
  </div>
</div>
