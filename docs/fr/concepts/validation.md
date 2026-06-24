# Validation

« Validation » désigne deux choses différentes dans M8Shift. L'une est livrée aujourd'hui ;
l'autre est spécifiée.

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

## Revue indicative

La revue indépendante se modélise aujourd'hui en passant le stylo à un autre membre du
roster et en consignant l'attente dans `--ask`, `--next`, les tâches ou les champs
personnalisés. M8Shift enregistre ce contrat, mais n'applique pas encore de chemins
d'approbation ni de validation de schéma.
