# <i class="fa-solid fa-diagram-project m8-heading-icon" aria-hidden="true"></i> Concepts

M8Shift sépare des concepts que les frameworks d'agents confondent souvent. Certains
sont livrés aujourd'hui ; d'autres constituent une direction spécifiée. Utilisez cette
section quand un agent, un script ou un humain doit partager le même vocabulaire.

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-lock" aria-hidden="true"></i>
  <div>
    <strong>Invariant</strong>
    <p>La règle qui relie tous les concepts est simple : ne jamais modifier le dépôt avant un <code>claim</code> réussi.</p>
  </div>
</div>

<div class="m8-path">
  <span><i class="fa-solid fa-pen-nib" aria-hidden="true"></i> Stylo</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-users-gear" aria-hidden="true"></i> Roster</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-file-signature" aria-hidden="true"></i> Passation</span>
  <span class="m8-path__arrow">→</span>
  <span><i class="fa-solid fa-check-double" aria-hidden="true"></i> Validation</span>
</div>

## <i class="fa-solid fa-book-open m8-heading-icon" aria-hidden="true"></i> Idées clés

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./pen">
    <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    <strong>Le stylo</strong>
    <span>Qui peut écrire maintenant, comment la propriété bouge et pourquoi le degré 1 compte.</span>
  </a>
  <a class="m8-doc-card" href="./agents-roles">
    <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    <strong>Agents et roster</strong>
    <span>Quels agents participent, où ils lisent leurs consignes et pourquoi les rôles restent indicatifs.</span>
  </a>
  <a class="m8-doc-card" href="./handoff-contracts">
    <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
    <strong>Contrats de passation</strong>
    <span>Ce qui a été fait, ce qui est demandé ensuite et quels champs rendent un tour exploitable.</span>
  </a>
  <a class="m8-doc-card" href="./relations">
    <i class="fa-solid fa-people-arrows" aria-hidden="true"></i>
    <strong>Relations</strong>
    <span>Pourquoi le stylo bouge : passation, demande de revue, résultat de revue, escalade ou contexte.</span>
  </a>
  <a class="m8-doc-card" href="./validation">
    <i class="fa-solid fa-check-double" aria-hidden="true"></i>
    <strong>Validation</strong>
    <span>Séparer les contrôles entrée/état stricts de la validation read-only des contrats et de la revue humaine.</span>
  </a>
  <a class="m8-doc-card" href="/fr/roadmap">
    <i class="fa-solid fa-route" aria-hidden="true"></i>
    <strong>Étapes de roadmap</strong>
    <span>Voir quels concepts sont disponibles maintenant et lesquels relèvent de la direction protocolaire.</span>
  </a>
</div>

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-robot" aria-hidden="true"></i>
  <div>
    <strong>Pour les agents IA</strong>
    <p>Les pages conceptuelles restent courtes volontairement : un agent doit pouvoir les lire avant d'utiliser la CLI, puis passer à la référence pour la syntaxe exacte.</p>
  </div>
</div>
