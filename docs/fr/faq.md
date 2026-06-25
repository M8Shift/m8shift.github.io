# Questions fréquentes

Questions courantes sur M8Shift et son fonctionnement.

## M8Shift est-il agnostique niveau modèles ?

Oui. M8Shift coordonne des **agents**, pas des modèles. Il fonctionne avec Claude,
Codex, Gemini, Vibe, des outils de modèles locaux, ou n'importe quel autre
agent de codage coopératif capable de lire ses instructions, lancer une commande
shell et respecter la boucle `claim → travail → append`.

Vous apportez votre propre accès aux agents : application desktop, panneau IDE, CLI
dans un terminal, interface web hébergée, runtime local ou workflow basé sur API.
M8Shift lui-même ne stocke aucun identifiant fournisseur, ne fait aucun appel modèle
et ne relaie aucune requête.

Les coûts, la vie privée, la rétention et les conditions de compte dépendent donc des
surfaces d'agents et des fournisseurs que vous choisissez. M8Shift ne contourne ni
les conditions d'utilisation des fournisseurs, ni les politiques de votre organisation.

## M8Shift a-t-il besoin de clés API ?

Non. La CLI cœur est un script Python local qui utilise uniquement la bibliothèque
standard. Elle n'a besoin d'aucune clé API, d'aucun jeton, d'aucun compte, d'aucun
daemon, d'aucun serveur et d'aucun plan de contrôle cloud.

Si l'un de vos agents nécessite une clé API, un abonnement, un serveur de modèle local
ou une connexion navigateur, cela appartient à l'hôte de l'agent — pas à M8Shift.

## M8Shift est-il un orchestrateur ?

Non. Il coordonne la propriété du stylo, les passations, les tâches, la mémoire et la
validation. Il ne lance pas les modèles, ne choisit pas les fournisseurs, ne gère pas
les identifiants et n'exécute pas l'action suivante à la place d'un agent.

La frontière pratique est simple : M8Shift enregistre le contrat de tour ; l'agent
destinataire décide comment agir avec ses propres outils et permissions.

## Les agents peuvent-ils travailler en parallèle ?

Dans un même répertoire de travail partagé, non : M8Shift reste un relais de degré 1
et un seul agent écrit à la fois.

Pour du travail parallèle isolé, utilisez le
[compagnon livré `m8shift-worktree.py`](/fr/guide/worktree-toolbox). Il crée des
worktrees git séparés pour les workers concurrents et garde l'intégration sérialisée
par un seul stylo partagé.

## M8Shift garantit-il qu'aucune passation n'est jamais perdue ?

Il garantit que chaque passation coopérative est écrite dans un journal local en ajout
seul avant que le stylo ne change de main. C'est le mécanisme de sécurité.

Il ne peut pas forcer un agent ou un humain non coopératif à lire le journal, garder
un panneau UI actif ou éviter d'éditer les fichiers hors protocole. Le contrat est
explicite, traçable et récupérable ; ce n'est pas un verrouillage complet du système
de fichiers.

## M8Shift réveille-t-il les agents dans VS Code ou les applications desktop ?

Pas tout seul. Les interfaces interactives nécessitent un humain ou une intégration
hôte pour reprendre l'agent suivant. En automatisation, utilisez un wrapper ou une
boucle headless qui lance `next`, effectue le travail, puis `append --wait`.

## M8Shift remplace-t-il Git ?

Non. Git reste le système de versionnement. M8Shift coordonne qui peut écrire et ce
qui a été transmis entre agents. Git garde les commits, branches, revues, merges et
l'historique.

## M8Shift impose-t-il des permissions ?

Seules les permissions imposées par l'hôte sont de vraies frontières de sécurité.
M8Shift peut enregistrer des attentes de permissions indicatives dans les tâches, les
passations ou le protocole, mais le système d'exploitation, l'IDE, les permissions du
dépôt et l'hôte de l'agent restent la couche d'application.

## Que se passe-t-il si un agent bloque ?

Utilisez `status`, `log`, `recap` ou `history` pour inspecter le relais. Si un agent
travaille encore mais reste silencieux, il peut prolonger son TTL en réclamant à
nouveau son propre stylo avant expiration. Si le détenteur s'arrête réellement, la
récupération de verrou périmé permet d'avancer une fois le TTL expiré.

L'escalade coopérative de demande de tour est spécifiée séparément pour les cas où un
humain interagit avec un autre agent pendant que le détenteur du stylo est inactif.

## Un agent peut-il avoir plusieurs rôles ?

Oui, comme convention. Le relais cœur enregistre les identités du roster. Les rôles
comme architecte, implémenteur, relecteur, coordinateur ou relecteur juridique
s'expriment dans `--ask`, `--next`, les tâches ou les champs personnalisés, sans être
imposés par la CLI.

## Un agent peut-il générer des images ?

M8Shift coordonne uniquement la passation. La capacité d'un agent à générer des
images, inspecter un navigateur, éditer des documents ou lancer des tests dépend de
son hôte et de ses outils. Le cœur n'a aucune fonctionnalité spécifique aux images.

## Pourquoi le nom M8Shift ?

« M8 » se lit comme « mate », tandis que « shift » décrit le travail qui passe d'un
coéquipier IA à l'autre. Le nom couvre les tours séquentiels et les roulements de
spécialistes sans transformer M8Shift en plateforme d'agents.
