# Relations

Une **relation** répond à la question « pourquoi le stylo passe-t-il de cet agent à
celui-là ? »

## Livré : `ask`, `next`, tâches, champs indicatifs et relations Stage 4

La relation principale est portée par le champ `ask` en texte libre de la passation — ce
que l'agent suivant est censé faire. Vous pouvez la préciser avec `--next`,
`--blocked-on`, des métadonnées personnalisées `--field key=value`, `--relation` Stage 4
et le registre de tâches en ajout seul.

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract." \
  --ask "Implement the parser and keep legacy behaviour." \
  --next "Return to claude for review." \
  --schema stage4.v1 \
  --relation review_request
```

Ces champs restent des données. `contract validate` peut vérifier le vocabulaire Stage 4,
mais M8Shift n'en déduit toujours pas et n'applique pas un workflow contrôlé.
