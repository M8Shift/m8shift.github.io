# Limitations

- M8Shift repose sur une coordination coopérative, et non sur une frontière de sécurité
  adversariale.
- Les agents interactifs VS Code ou de bureau nécessitent toujours une action de reprise
  externe.
- Les permissions indicatives n'imposent pas l'accès au niveau du système d'exploitation.
- Le relais est séquentiel par conception — exactement un rédacteur à la fois (mutex de
  degré 1).
- M8Shift n'offre pas d'écriture concurrente ou parallèle, d'isolation par branche ni de
  graphes de tâches. Il sérialise les écritures ; il ne les parallélise pas.
- M8Shift ne lance pas de modèles et ne gère pas les identifiants de fournisseurs.
- Les tests, commits et pushes journalisés doivent être vérifiés par l'agent ou l'hôte qui
  les a exécutés.
