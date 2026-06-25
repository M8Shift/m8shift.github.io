# <i class="fa-solid fa-table-list m8-heading-icon" aria-hidden="true"></i> Matrice fonctionnelle

<p class="m8-section-lead">La liste complète et pratique des fonctionnalités livrées par M8Shift, avec ce que chacune fait.</p>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
  <div>
    <strong>Règle de périmètre</strong>
    <p>Ce tableau décrit le comportement disponible : relais local, fichiers générés, validation, points d'automatisation et compagnon worktree optionnel. Le travail de protocole planifié reste dans la roadmap tant qu'il n'est pas livré.</p>
  </div>
</div>

<div class="m8-feature-table">
<table>
  <thead>
    <tr>
      <th>Zone</th>
      <th>Fonctionnalité</th>
      <th>Ce que ça fait</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-pen-nib" aria-hidden="true"></i> Stylo exclusif</span></td>
      <td>Autorise exactement un agent du roster à écrire dans le dépôt partagé à un instant donné. Un agent doit faire <code>claim</code> avant de modifier des fichiers.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-users-gear" aria-hidden="true"></i> Roster d'agents</span></td>
      <td>Définit quels agents peuvent participer, par exemple <code>claude,codex,gemini,vibe</code>. Tout agent listé peut recevoir le stylo.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-lock" aria-hidden="true"></i> Bloc de verrou</span></td>
      <td>Stocke holder, état, roster, numéro de tour, horodatages, TTL, note et langue en texte simple en haut de <code>M8SHIFT.md</code>.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-diagram-project" aria-hidden="true"></i> Machine d'état</span></td>
      <td>Suit <code>IDLE</code>, <code>WORKING_&lt;agent&gt;</code>, <code>AWAITING_&lt;agent&gt;</code> et <code>DONE</code> pour que chacun connaisse la prochaine action sûre.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> Heartbeat manuel</span></td>
      <td>Rafraîchit un long tour <code>WORKING_&lt;agent&gt;</code> en relançant <code>claim &lt;agent&gt;</code>, ce qui prolonge le TTL de 30 minutes sans daemon.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-unlock-keyhole" aria-hidden="true"></i> Récupération de verrou expiré</span></td>
      <td>Permet à un autre agent de récupérer avec <code>claim --force</code> uniquement quand le verrou courant a expiré.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-right-left" aria-hidden="true"></i> Release</span></td>
      <td>Passe le stylo à un autre agent sans enregistrer de tour numéroté et sans incrémenter <code>turn</code>.</td>
    </tr>
    <tr>
      <td>Relais cœur</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-flag-checkered" aria-hidden="true"></i> État terminé</span></td>
      <td>Marque le relais comme terminé avec <code>done</code>, pour que les humains et les automatisations puissent s'arrêter proprement.</td>
    </tr>

    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code-branch" aria-hidden="true"></i> Tours numérotés</span></td>
      <td>Ajoute chaque passation terminée comme bloc numéroté et immuable dans <code>M8SHIFT.md</code>.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i> <code>append --to</code></span></td>
      <td>Ferme le tour de l'agent courant, enregistre ce qui a été fait et route le tour suivant vers un autre membre du roster.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-hourglass-half" aria-hidden="true"></i> <code>append --wait</code></span></td>
      <td>Garde l'émetteur bloqué après la passation jusqu'à son prochain tour ou <code>DONE</code>, ce qui limite les sorties prématurées en shell ou automatisation.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> Corps libre</span></td>
      <td>Accepte des notes longues depuis un fichier ou stdin avec <code>--body PATH|-</code>, tout en protégeant les marqueurs réservés du relais.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-list-check" aria-hidden="true"></i> Métadonnées de travail</span></td>
      <td>Enregistre des champs comme <code>ask</code>, <code>done</code>, <code>files</code>, <code>branch</code>, <code>commit</code>, <code>tests</code>, <code>next</code> et <code>blocked_on</code>.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file-signature" aria-hidden="true"></i> Champs contrat Stage 4</span></td>
      <td>Ajoute des champs indicatifs structurés : rôle, relation, exigences, sortie attendue, preuves, décision, justification de waiver et permissions.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code-compare" aria-hidden="true"></i> Vocabulaire de relation</span></td>
      <td>Qualifie la passation avec <code>handoff</code>, <code>review_request</code>, <code>review_result</code> ou <code>escalation</code>.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-stamp" aria-hidden="true"></i> Décisions de revue</span></td>
      <td>Enregistre les résultats de revue avec <code>approve</code>, <code>revise</code>, <code>reject</code> ou <code>waive</code>.</td>
    </tr>
    <tr>
      <td>Passations</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-tags" aria-hidden="true"></i> Champs personnalisés</span></td>
      <td>Accepte des métadonnées indicatives via <code>--field key=value</code>, dont les champs <code>x_*</code> pour les conventions locales.</td>
    </tr>

    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-gauge-high" aria-hidden="true"></i> Status</span></td>
      <td>Affiche holder, état, tour, roster, session, horodatages UTC et heure locale lisible par humain.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-route" aria-hidden="true"></i> Action sûre suivante</span></td>
      <td>Utilise <code>status --for &lt;agent&gt;</code> pour dire à un agent s'il doit claim, attendre, reprendre, récupérer ou s'arrêter.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code" aria-hidden="true"></i> Status JSON</span></td>
      <td>Émet un état lisible machine avec <code>status --json</code> pour scripts, outils, tableaux de bord et wrappers headless.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-eye" aria-hidden="true"></i> Watch</span></td>
      <td>Affiche l'état du relais en continu sans écrire, claim, ni modifier quoi que ce soit.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-hourglass-start" aria-hidden="true"></i> Wait</span></td>
      <td>Bloque un processus jusqu'au tour d'un agent, avec <code>--once</code> pour les contrôles non bloquants.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-forward-step" aria-hidden="true"></i> Next</span></td>
      <td>Combine attente, claim et affichage de la dernière passation pour qu'un agent reprenne depuis une seule commande.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-binoculars" aria-hidden="true"></i> Peek</span></td>
      <td>Lit la dernière passation adressée à un agent sans prendre le stylo.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-timeline" aria-hidden="true"></i> Log</span></td>
      <td>Affiche la timeline du relais, avec un mode oneline et l'inclusion optionnelle des tours archivés.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clipboard-list" aria-hidden="true"></i> Recap</span></td>
      <td>Produit un briefing de session courante à partir du verrou, des tours récents, des notes mémoire et des tâches ouvertes.</td>
    </tr>
    <tr>
      <td>Vues lecture</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> History</span></td>
      <td>Lit les événements de sessions passées, démarrages, resets et fins depuis <code>M8SHIFT.sessions.jsonl</code>.</td>
    </tr>

    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-box-archive" aria-hidden="true"></i> Archive</span></td>
      <td>Déplace les anciens tours vers <code>M8SHIFT.archive.md</code> tout en gardant le verrou et les tours récents dans le fichier principal.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-brain" aria-hidden="true"></i> Notes mémoire</span></td>
      <td>Ajoute des notes de mémoire partagée durables avec <code>remember</code>, sans nécessiter le stylo.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-square-check" aria-hidden="true"></i> Journal de tâches</span></td>
      <td>Ajoute, liste, affiche, termine ou abandonne des événements de tâche dans un journal append-only sans nécessiter le stylo.</td>
    </tr>
    <tr>
      <td>Audit</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file-code" aria-hidden="true"></i> Fichiers générés</span></td>
      <td>Garde état du relais, protocole, archive, mémoire, tâches, sessions et verrou temporaire dans le dépôt ou l'espace local.</td>
    </tr>

    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-stethoscope" aria-hidden="true"></i> Doctor</span></td>
      <td>Lance des contrôles de santé et de lint en lecture seule, avec sortie JSON et filtrage par sévérité.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Contrôles sécurité</span></td>
      <td>Ajoute des contrôles locaux orientés sécurité avec <code>doctor --security</code>. Cela remonte des constats ; ce n'est pas une sandbox.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-check-double" aria-hidden="true"></i> Validation des contrats</span></td>
      <td>Valide les champs de passation <code>schema=stage4.v1</code> avec <code>contract validate</code> ou <code>doctor --contracts</code>.</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Mode strict</span></td>
      <td>Permet aux commandes de validation de sortir en erreur quand les constats atteignent le seuil de sévérité choisi.</td>
    </tr>

    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Kit init</span></td>
      <td>Génère ou régénère <code>M8SHIFT.md</code>, <code>M8SHIFT.protocol.md</code> et les fichiers d'ancrage destinés aux agents.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-language" aria-hidden="true"></i> Génération EN/FR</span></td>
      <td>Écrit le protocole et les ancres générés en anglais ou en français avec <code>init --lang en|fr</code>.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-anchor" aria-hidden="true"></i> Ancres d'agents</span></td>
      <td>Injecte des stanzas de protocole idempotentes dans des fichiers comme <code>CLAUDE.md</code>, <code>AGENTS.md</code> et <code>GEMINI.md</code>.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-file" aria-hidden="true"></i> Cœur en fichier unique</span></td>
      <td>Fonctionne comme <code>m8shift.py</code>, un script Python 3.8+ utilisant uniquement la bibliothèque standard.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-download" aria-hidden="true"></i> Scripts d'installation</span></td>
      <td>Fournit des installateurs shell et PowerShell pour macOS, Linux, WSL, Git Bash et Windows.</td>
    </tr>
    <tr>
      <td>Setup</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-fingerprint" aria-hidden="true"></i> Vérification checksum</span></td>
      <td>Vérifie les scripts téléchargés avec <code>checksums.sha256</code> lors de l'adoption via installateur.</td>
    </tr>

    <tr>
      <td>Automatisation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i> Codes de sortie</span></td>
      <td>Retourne des codes distincts pour succès, refus/erreur runtime, erreur d'arguments et états pas encore prêts.</td>
    </tr>
    <tr>
      <td>Automatisation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-terminal" aria-hidden="true"></i> Runner headless</span></td>
      <td>Fournit une boucle de référence pour agents CLI sans supervision : claim, lance un tour, observe les crashs et s'arrête sur <code>DONE</code>.</td>
    </tr>
    <tr>
      <td>Automatisation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-id-badge" aria-hidden="true"></i> IDs de run runtime</span></td>
      <td>Définit <code>M8SHIFT_RUN_ID</code> et écrit <code>.m8shift/runtime/runs.jsonl</code> pour corréler les processus avec les tours.</td>
    </tr>
    <tr>
      <td>Automatisation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-window-restore" aria-hidden="true"></i> Workflow VS Code</span></td>
      <td>Documente une boucle pratique pour Claude, Codex, Gemini, Vibe ou d'autres panneaux d'agents interactifs dans un éditeur.</td>
    </tr>
    <tr>
      <td>Automatisation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-code-fork" aria-hidden="true"></i> Boîte à outils worktree</span></td>
      <td>Ajoute un compagnon optionnel pour travailler en parallèle de façon isolée, avec un worktree git par tâche.</td>
    </tr>
    <tr>
      <td>Automatisation</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-arrows-to-circle" aria-hidden="true"></i> Intégration sérialisée</span></td>
      <td>Fusionne les résultats de worktree via un stylo d'intégration unique, pour empêcher deux intégrations simultanées.</td>
    </tr>
    <tr>
      <td>Frontière</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-plug-circle-check" aria-hidden="true"></i> Neutralité fournisseur</span></td>
      <td>Coordonne tout agent coopératif capable d'utiliser une CLI. M8Shift n'appelle pas de modèle, n'héberge pas de runtime et ne demande pas de clé API projet.</td>
    </tr>
    <tr>
      <td>Frontière</td>
      <td><span class="m8-feature-name"><i class="fa-solid fa-user-shield" aria-hidden="true"></i> Vocabulaire de permissions</span></td>
      <td>Enregistre l'intention de permission comme métadonnée indicative, tout en rappelant que l'application réelle dépend de l'OS, de l'IDE, du dépôt ou de l'hôte fournisseur.</td>
    </tr>
  </tbody>
</table>
</div>

## Référence liée

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="./cli">
    <i class="fa-solid fa-terminal" aria-hidden="true"></i>
    <strong>Référence CLI</strong>
    <span>Commandes exactes, flags, comportements lecture/écriture et exemples.</span>
  </a>
  <a class="m8-doc-card" href="./state-model">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>Modèle d'état</strong>
    <span>Champs du verrou, états, transitions, TTL et comportement degré 1.</span>
  </a>
  <a class="m8-doc-card" href="./contract-schema">
    <i class="fa-solid fa-file-signature" aria-hidden="true"></i>
    <strong>Schéma de tour</strong>
    <span>Champs de passation, métadonnées de contrat, relations et validation.</span>
  </a>
  <a class="m8-doc-card" href="/fr/guide/worktree-toolbox">
    <i class="fa-solid fa-code-fork" aria-hidden="true"></i>
    <strong>Boîte worktree</strong>
    <span>Travail parallèle optionnel avec intégration sérialisée.</span>
  </a>
</div>
