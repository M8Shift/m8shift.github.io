# <i class="fa-solid fa-shield-halved m8-heading-icon" aria-hidden="true"></i> Modèle de sécurité

M8Shift réduit les conflits accidentels entre agents. Ce n'est pas un bac à sable.

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
  <div>
    <strong>Frontière d'abord</strong>
    <p>M8Shift coordonne une propriété coopérative. L'accès aux fichiers, les règles de branche, les secrets, les comptes fournisseur et les permissions d'outils restent appliqués par l'environnement hôte.</p>
  </div>
</div>

## <i class="fa-solid fa-layer-group m8-heading-icon" aria-hidden="true"></i> Couches de défense

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="/fr/reference/contract-schema">
    <i class="fa-solid fa-filter" aria-hidden="true"></i>
    <strong>Parsing strict</strong>
    <span>Les champs de journal sont analysés et encadrés pour garder les passations inspectables.</span>
  </a>
  <a class="m8-doc-card" href="/fr/reference/state-model">
    <i class="fa-solid fa-lock" aria-hidden="true"></i>
    <strong>Jeton de propriété</strong>
    <span>Le bloc de verrou enregistre holder, état, tour, TTL et roster avant les mutations.</span>
  </a>
  <a class="m8-doc-card" href="/fr/concepts/pen">
    <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    <strong>Stylo exclusif</strong>
    <span>Un verrou inter-processus sérialise chaque mutation M8Shift et garde le dépôt partagé en degré 1.</span>
  </a>
  <a class="m8-doc-card" href="./permissions">
    <i class="fa-solid fa-user-shield" aria-hidden="true"></i>
    <strong>Permissions hôte</strong>
    <span>L'application réelle appartient à l'OS, l'IDE, le dépôt, les protections de branche et l'hôte agent.</span>
  </a>
  <a class="m8-doc-card" href="/fr/concepts/validation">
    <i class="fa-solid fa-check-double" aria-hidden="true"></i>
    <strong>Validation</strong>
    <span>Les contrôles entrée/état sont stricts ; la validation de contrats produit des rapports read-only.</span>
  </a>
  <a class="m8-doc-card" href="./threat-model">
    <i class="fa-solid fa-bug-slash" aria-hidden="true"></i>
    <strong>Modèle de menaces</strong>
    <span>Consulter actifs, frontières de confiance, attaquants attendus et mitigations au même endroit.</span>
  </a>
</div>

## <i class="fa-solid fa-scale-balanced m8-heading-icon" aria-hidden="true"></i> Vocabulaire de permissions

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="./permissions#advisory">
    <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
    <strong>Advisory</strong>
    <span>Attente enregistrée seulement. Utile pour agents et humains, mais pas une vraie frontière d'accès.</span>
  </a>
  <a class="m8-doc-card" href="./permissions#host">
    <i class="fa-solid fa-server" aria-hidden="true"></i>
    <strong>Host-enforced</strong>
    <span>Appliquée hors de M8Shift par fichiers, dépôt, IDE, OS ou contrôles fournisseur.</span>
  </a>
  <a class="m8-doc-card" href="./permissions#mixed">
    <i class="fa-solid fa-code-compare" aria-hidden="true"></i>
    <strong>Mixed</strong>
    <span>Partiellement indicative et partiellement appliquée. Chaque capacité doit préciser la couche réelle.</span>
  </a>
</div>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-eye" aria-hidden="true"></i>
  <div>
    <strong>Règle documentaire</strong>
    <p>Le site ne doit jamais présenter une métadonnée indicative comme une vraie frontière de sécurité. En cas de doute, nommez la couche hôte qui applique la règle.</p>
  </div>
</div>
