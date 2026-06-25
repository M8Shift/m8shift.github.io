# Limitations

- M8Shift repose sur une coordination coopérative, et non sur une frontière de sécurité
  adversariale.
- Les agents interactifs VS Code ou de bureau nécessitent toujours une action de reprise
  externe.
- Les permissions indicatives n'imposent pas l'accès au niveau du système d'exploitation.
- Le relais est séquentiel par conception — exactement un rédacteur à la fois (mutex de
  degré 1).
- Le cœur `m8shift.py` n'offre pas d'écritures concurrentes dans un même répertoire de
  travail partagé. Le [compagnon optionnel `m8shift-worktree.py`](/fr/guide/worktree-toolbox)
  fournit l'isolation par branches/worktrees et sérialise quand même l'intégration.
- M8Shift enregistre des tâches, mais ce n'est pas un ordonnanceur de dépendances.
- M8Shift ne lance pas de modèles et ne gère pas les identifiants de fournisseurs.
- Les tests, commits et pushes journalisés doivent être vérifiés par l'agent ou l'hôte qui
  les a exécutés.
