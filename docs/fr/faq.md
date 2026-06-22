# FAQ

## M8Shift est-il un orchestrateur ?

Non. Il coordonne la propriété, les passations, les tâches et la validation. Il n'a pas besoin d'exécuter
les agents ni de détenir leurs identifiants de fournisseur.

## Les agents peuvent-ils travailler en parallèle ?

Non. M8Shift est un strict relais de degré 1 : exactement un agent écrit à la fois, en
alternance. Les graphes de tâches, l'isolation par branche et les rédacteurs concurrents sont une **future RFC**,
pas une fonctionnalité livrée — voir la [roadmap](/fr/roadmap).

## Un agent peut-il avoir plusieurs rôles ?

Dans le relais livré, un agent est simplement l'un des deux déclarés dans le couple. Un vocabulaire de
rôles plus riche (architecte, implémenteur, relecteur, coordinateur…) est **spécifié, pas encore
livré**.

## Un agent peut-il générer des images ?

M8Shift coordonne uniquement la passation ; la capacité d'un agent à générer des images dépend de
son hôte. Il n'y a aucune fonctionnalité spécifique aux images dans l'outil lui-même.

## M8Shift impose-t-il des permissions ?

Seules les permissions imposées par l'hôte constituent de réelles frontières de sécurité. Les permissions indicatives sont
des instructions de protocole et doivent être étiquetées en conséquence.

## M8Shift réveille-t-il les agents dans VS Code ?

Non. Les interfaces interactives requièrent un humain ou une intégration hôte pour reprendre l'agent suivant.

## Pourquoi le nom M8Shift ?

« M8 » se lit comme « mate », tandis que « shift » décrit le travail qui passe d'un coéquipier IA à l'autre. Le
nom couvre les tours séquentiels et les roulements de spécialistes en parallèle sans réutiliser la
terminologie « cowork » désormais saturée.
