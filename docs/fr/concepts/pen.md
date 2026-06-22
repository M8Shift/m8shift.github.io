# Le stylo

Le stylo représente la propriété exclusive de l'écriture. Il existe exactement un stylo, et
il protège l'ensemble de l'arbre de travail partagé : à tout moment, au plus un agent le
détient, et seul le détenteur peut modifier le dépôt.

Prendre le stylo, c'est la commande `claim`. Elle est exclusive — si deux agents réclament
en même temps, exactement un l'emporte ; l'autre attend. C'est un mutex coopératif de
**degré un** (un mutex, pas un sémaphore) : alternance stricte, jamais deux rédacteurs.

```mermaid
flowchart LR
    C1["claude<br/>claim"] --> G{{"stylo libre ?<br/>(exclusif)"}}
    C2["codex<br/>claim"] --> G
    G -->|"gagnant"| WIN["détient le stylo<br/>WORKING_holder · seul rédacteur"]
    G -->|"perdant"| WAIT["attend son tour"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef wait fill:#94a3b822,stroke:#64748b;
    class C1,C2 agent
    class G pen
    class WIN ok
    class WAIT wait
```

*🟣 agents · 🩷 le stylo · 🟢 ok · ⚪ attente*

Le stylo est **coopératif et indicatif**. Il prévient les conflits uniquement lorsque les
agents suivent le protocole ; il ne peut pas arrêter un processus qui l'ignore ou qui édite
les fichiers directement.
