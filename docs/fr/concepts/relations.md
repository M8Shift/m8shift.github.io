# Relations

Une **relation** répond à la question « pourquoi le stylo passe-t-il de cet agent à
celui-là ? »

## Livré : `ask`, `next`, tâches et champs indicatifs

La relation principale est portée par le champ `ask` en texte libre de la passation — ce
que l'agent suivant est censé faire. Vous pouvez la préciser avec `--next`,
`--blocked-on`, des métadonnées personnalisées `--field key=value`, et le registre de
tâches en ajout seul.

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract." \
  --ask "Implement the parser and keep legacy behaviour." \
  --next "Return to claude for review." \
  --field x_relation=implement
```

Ces champs restent des données. M8Shift les enregistre pour les humains et les outils,
mais n'en déduit pas et n'applique pas un workflow contrôlé.
