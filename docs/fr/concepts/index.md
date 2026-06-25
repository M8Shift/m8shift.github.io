# Concepts

M8Shift sépare des concepts que les frameworks d'agents confondent souvent. Certains sont
livrés aujourd'hui ; d'autres constituent une direction spécifiée (voir la [roadmap](/fr/roadmap)).

| Concept | Question traitée | Statut |
| --- | --- | --- |
| [Le stylo](./pen) | Qui peut écrire en ce moment ? | Disponible |
| [Agents et roster](./agents-roles) | Quels agents font le relais, et via quels fichiers d'ancrage ? | Disponible |
| [Contrats de passation](./handoff-contracts) | Qu'a-t-on fait, et qu'est-ce qui est demandé ensuite ? | Disponible |
| [Relations](./relations) | Pourquoi le stylo passe-t-il d'un agent à l'autre ? | `ask` plus vocabulaire de relation Stage 4 |
| [Validation](./validation) | Le journal est-il fiable, et le travail est-il relu ? | Vérifications entrée/état plus validation contrat read-only |

La règle unique qui les relie : **ne jamais modifier le dépôt avant un `claim` réussi.**
