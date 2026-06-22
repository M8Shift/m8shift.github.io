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
- **Neutralisation du corps** — les faux marqueurs `M8SHIFT:*` / `COWORK:*` dans un corps en
  texte libre sont neutralisés.
- **Vérifications du roster** — une passation `--to` un agent hors du roster est refusée.
- **Tours immuables** — un tour clos n'est jamais réécrit.

Ce sont des garde-fous de correction, pas une frontière de sécurité — voir le
[modèle de menaces](/fr/security/threat-model).

## Spécifié : revue indépendante

::: tip Spécifié, pas encore livré
Un flux de revue explicite — un validateur indépendant et obligatoire pouvant approuver,
demander des changements, rejeter ou dispenser un tour avant l'intégration — fait partie de
la [roadmap](/fr/roadmap) multi-agents. Lorsque l'indépendance est requise, le producteur et
le validateur doivent différer. Rien de tout cela n'est dans le relais actuel.
:::
