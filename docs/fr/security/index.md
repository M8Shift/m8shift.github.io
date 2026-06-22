# Modèle de sécurité

M8Shift réduit les conflits accidentels entre agents. Ce n'est pas un bac à sable (sandbox).

La sécurité repose sur plusieurs couches :

1. une analyse stricte et des champs de journal résistants à l'injection ;
2. des écritures d'état atomiques et des jetons de propriété ;
3. un verrou inter-processus exclusif (`O_EXCL`) qui sérialise chaque mutation ;
4. des permissions de système de fichiers, de branche et de secrets appliquées par l'hôte ;
5. une validation humaine lorsque le risque le justifie.

Les permissions doivent déclarer si elles sont `advisory`, `host` ou `mixed`. Le site ne
doit jamais décrire des métadonnées indicatives (`advisory`) comme une véritable frontière
d'application.
