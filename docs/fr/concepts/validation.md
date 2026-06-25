# Validation

« Validation » désigne deux choses différentes dans M8Shift : contrôles forts d'entrée/état
et contrôles read-only des contrats.

## Livré : validation des entrées et de l'état

Avant toute écriture, `m8shift.py` applique des garde-fous qui maintiennent la fiabilité du
journal :

- **« réclamer avant d'écrire »** — un `append` n'est accepté que depuis `WORKING_<self>`.
- **Champs sur une seule ligne** — `from`/`to`/`ask`/`done`/`files` rejettent les retours à
  la ligne et les marqueurs réservés, de sorte qu'un tour ne peut pas forger un verrou ou un
  autre tour.
- **Neutralisation du corps** — les faux marqueurs `M8SHIFT:*` dans un corps en
  texte libre sont neutralisés.
- **Vérifications du roster** — une passation `--to` un agent hors du roster est refusée.
- **Tours immuables** — un tour clos n'est jamais réécrit.

Ce sont des garde-fous de correction, pas une frontière de sécurité — voir le
[modèle de menaces](/fr/security/threat-model).

## Validation read-only des contrats

La revue indépendante se modélise aujourd'hui en passant le stylo à un autre membre du
roster et en consignant l'attente dans `--ask`, `--next`, les tâches, les champs personnalisés
ou les champs de contrat Stage 4 comme `schema=stage4.v1`, `relation`, `requires`,
`expected_output`, `evidence` et `decision`.

`contract validate` et `doctor --contracts` vérifient ces contrats explicitement et en
lecture seule. Ils peuvent signaler des avertissements ou erreurs strictes, mais ils
n'imposent toujours pas de chemins d'approbation, ne donnent pas de permissions, ne lancent
pas de tests et ne routent pas le travail.
