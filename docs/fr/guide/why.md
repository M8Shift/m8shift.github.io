# Pourquoi M8Shift ?

Les agents IA sont efficaces individuellement, mais le travail partagé sur un dépôt crée des
modes de défaillance prévisibles :

- les modifications concurrentes s'écrasent ou s'invalident mutuellement ;
- un agent ne peut pas savoir si un autre est encore en train de travailler ;
- les passations perdent le contexte d'une session à l'autre ;
- les producteurs approuvent leur propre travail ;
- les tâches « parallèles » partagent discrètement les mêmes fichiers ;
- les commits et les résultats de tests sont décrits avec plus d'assurance qu'ils ne se sont déroulés.

M8Shift répond directement aux trois premiers points aujourd'hui : une propriété explicite et
exclusive (le stylo), un journal des tours immuable et une règle « réclamer avant d'écrire ». Des
réponses plus riches au reste — contrats structurés, tâches sensibles aux dépendances et validation
indépendante — constituent une direction spécifiée de la [roadmap](/fr/roadmap), pas encore livrée.

```mermaid
flowchart LR
    subgraph Without["Sans coordination"]
        direction TB
        a1["claude écrit"] --> f[("dépôt")]
        a2["codex écrit"] --> f
        f --> coll["écrasements · passation perdue"]
    end
    subgraph With["Avec M8Shift"]
        direction TB
        b1["claude · détient le stylo"] --> r[("dépôt")]
        r --> hb["append --to codex"]
        hb --> b2["codex · détient le stylo"] --> r
    end
    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef bad fill:#f43f5e22,stroke:#e11d48;
    classDef store fill:#ff7a1822,stroke:#fb923c;
    class a1,a2,b1,b2 agent;
    class f,r store;
    class coll bad;
    class hb ok;
```

*🟣 agents · 🟠 dépôt · 🔴 écrasements · 🟢 passation*

## Ce que ce n'est pas

M8Shift n'est ni un fournisseur de modèles, ni une passerelle hébergée, ni une plateforme de mémoire,
ni un runtime d'agents universel. Les runtimes et passerelles d'agents complets gèrent les sessions,
les canaux, les outils, les fournisseurs, la mémoire et le routage. M8Shift se concentre sur la
coordination au niveau du dépôt et peut compléter un tel runtime plutôt que de l'imiter.
