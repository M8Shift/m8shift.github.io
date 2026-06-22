# Codes de sortie

`m8shift.py` utilise un petit ensemble stable de codes de sortie de processus.

| Code | Signification |
| --- | --- |
| `0` | succès |
| `1` | refus ou erreur — un garde-fou, un état invalide ou une entrée invalide |
| `2` | erreur d'argument (usage argparse) |
| `3` | `wait --once` uniquement : ce n'est pas encore votre tour |

La distinction `0` / `3` est ce qui rend `wait --once` scriptable dans une boucle headless :

```bash
if python3 m8shift.py wait codex --once; then
  python3 m8shift.py claim codex
  # … do the work, then append the handoff …
fi
```

Il n'existe pas d'autres codes définis. Les refus (réclamer un verrou actif, faire un
`append` sans détenir le stylo, une auto-passation, un agent hors du roster, un champ
malformé) sortent tous avec `1` et un message sur stderr.
