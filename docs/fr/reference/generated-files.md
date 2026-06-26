# Fichiers générés

`m8shift.py init` écrit les fichiers cœur du relais à la racine du projet. Les autres
registres sont créés à la demande par la commande qui les utilise. Les fichiers générés
utilisent les noms `M8SHIFT.*`.

```mermaid
flowchart TD
    INIT["m8shift.py init"] --> RELAY["M8SHIFT.md<br/>(fichier de relais)"]
    INIT --> PROTO["M8SHIFT.protocol.md"]
    INIT --> ANCH["CLAUDE.md / AGENTS.md / GEMINI.md<br/>(ancres)"]
    CMD["remember / task / history"] --> LEDGER["M8SHIFT.memory.md<br/>M8SHIFT.tasks.md<br/>M8SHIFT.sessions.jsonl"]
    RT["m8shift-runtime.py / runner headless"] --> RUNTIME[".m8shift/runtime/*.jsonl<br/>.m8shift/runs/run-id/report.md"]
    MUT["commandes mutantes"] --> LOCK[".m8shift.lock<br/>(mutex temporaire)"]

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    classDef store fill:#ff7a1822,stroke:#fb923c;
    class INIT,CMD,MUT,RT agent
    class RELAY pen
    class PROTO,ANCH,LOCK,LEDGER,RUNTIME store
```

*🟣 init · 🩷 fichier de relais · 🟠 fichiers générés*

| Fichier | Rôle |
| --- | --- |
| `M8SHIFT.md` | verrou vivant, état du flux de travail et journal immuable des tours |
| `M8SHIFT.protocol.md` | le protocole partagé, généré depuis `m8shift.py` |
| `M8SHIFT.archive.md` | tours plus anciens déplacés ici par `archive` (créé à la demande) |
| `M8SHIFT.memory.md` | notes de mémoire partagée ajoutées par `remember` (créé à la demande) |
| `M8SHIFT.tasks.md` | événements de tâches en ajout seul ajoutés par `task` (créé à la demande) |
| `M8SHIFT.sessions.jsonl` | événements start/done de session utilisés par `history` (créé à la demande) |
| `.m8shift.lock` | verrou temporaire de mutation inter-processus (`O_EXCL`) |
| `.m8shift/runtime/` | sidecars runtime indicatifs : présence, runs, progression, inbox, idempotence, approbations, diagnostics et archive de rétention |
| `.m8shift/runs/` | rapports runtime optionnels et artefacts de run immuables |
| `CLAUDE.md` | ancre Claude (strophe de protocole injectée en tête) |
| `AGENTS.md` | ancre Codex et agents génériques ; `AGENTS.override.md` est synchronisé s'il est présent |
| `GEMINI.md` | ancre Gemini, lorsque `gemini` est dans le roster |

::: tip Ancres idempotentes
La strophe d'ancre est idempotente : le fichier précédent est sauvegardé dans
`<anchor>.m8shift.bak` avant injection.
:::

::: tip Registres à la demande
`init` ne crée pas les fichiers de mémoire, tâches, archive ou sessions tant que les
commandes concernées n'en ont pas besoin. Leur absence signifie « aucune entrée pour
l'instant », pas une erreur.
:::

::: warning Les sidecars runtime ne sont pas le relais cœur
Les fichiers sous `.m8shift/` sont l'état local des compagnons. Ils ne donnent jamais
le stylo et peuvent être supprimés sans corrompre `M8SHIFT.md`.
:::
