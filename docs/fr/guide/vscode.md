# Utiliser M8Shift dans VS Code

M8Shift peut coordonner Claude et Codex exécutés sous forme de panneaux à l'intérieur de VS Code — les
panneaux *sont* les agents. La seule chose à bien intégrer : une interface de conversation interactive
n'est **pas** un processus en arrière-plan. `wait` bloque un shell ; il ne peut pas réveiller une
conversation endormie. Un humain (ou une intégration hôte) relance l'agent suivant après chaque passation.

## Mise en place

1. Ouvrez le dépôt dans VS Code **à sa racine** — une fenêtre par dépôt.
2. Ajoutez la CLI et initialisez :

   ```bash
   cp m8shift.py .
   python3 m8shift.py init --agents claude,codex
   ```

3. Exécutez **Developer: Reload Window**, puis démarrez de **nouvelles** conversations afin que chaque
   agent récupère son fichier d'ancrage fraîchement injecté (`CLAUDE.md`, `AGENTS.md`).
4. Ouvrez les deux panneaux dans la même fenêtre. Pour l'autonomie, mettez Codex en **Agent mode** et
   Claude en **auto-accept**.

## Amorçage de la boucle

Donnez à chaque agent une courte invite de boucle, Claude en premier :

> Exécute `python3 m8shift.py status`. Si c'est ton tour, `claim claude`, effectue l'étape suivante,
> puis `append claude --to codex` avec un `--ask` clair. Sinon, arrête-toi et préviens-moi.

Puis Codex, de manière symétrique (`claim codex`, `append codex --to claude`).

## Maintenir le mouvement

- Après chaque passation, **relancez le panneau cible** : « Reprends la boucle M8Shift à partir de
  `python3 m8shift.py status`. »
- Gardez `M8SHIFT.md` ouvert à côté de la source — le bloc de verrou indique à qui est le tour.
- Si un panneau a planté en plein tour et a laissé un verrou périmé, récupérez avec
  `python3 m8shift.py claim <agent> --force` (ne fonctionne qu'une fois le verrou au-delà de son
  TTL de 30 minutes).

Pour des exécutions sans surveillance, utilisez le [runner headless](./headless) plutôt que l'IDE.
M8Shift reste la primitive de coordination — il ne fait pas passer en douce un démon sous un nom
à la mode.
