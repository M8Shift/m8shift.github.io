# Relations

Une **relation** répond à la question « pourquoi le stylo passe-t-il de cet agent à
celui-là ? »

## Livré : le `ask`

Aujourd'hui, la relation est portée par le champ `ask` en texte libre de la passation — ce
que l'agent suivant est censé faire :

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract." \
  --ask "Implement the parser and keep legacy behaviour."
```

Cette unique instruction, lisible par un humain, *est* la relation. Elle est attachée au
tour, et non de façon permanente à l'un ou l'autre des agents.

## Spécifié : un vocabulaire de relations

::: tip Spécifié, pas encore livré
Un vocabulaire contrôlé (`delegate`, `consult`, `implement`, `review`, `revise`,
`verify`, `integrate`, `unblock`, `document`, `continue`…) fait partie de la
[roadmap](/fr/roadmap) multi-agents. Il permettrait aux outils de raisonner sur les
passations sans analyser de la prose — mais il ne fait pas partie du relais actuel.
:::
