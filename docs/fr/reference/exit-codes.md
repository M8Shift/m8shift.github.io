# Codes de sortie

`m8shift.py` utilise un petit ensemble stable de codes de sortie de processus.

| Code | Signification |
| --- | --- |
| `0` | succès |
| `1` | refus ou erreur — un garde-fou, un état invalide ou une entrée invalide |
| `2` | erreur d'argument (usage argparse) |
| `3` | contrôle de disponibilité : pas votre tour / pas encore de passation pour vous |

La distinction `0` / `3` rend les contrôles de disponibilité scriptables dans une boucle headless :

```bash
if python3 m8shift.py next codex --once; then
  # … do the work, then append the handoff …
fi
```

Il n'existe pas d'autres codes définis. Les refus (réclamer un verrou actif, faire un
`append` sans détenir le stylo, une auto-passation, un agent hors du roster, un champ
malformé) sortent tous avec `1` et un message sur stderr.
