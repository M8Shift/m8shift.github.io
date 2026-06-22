# Référence CLI

La CLI est un fichier unique, `m8shift.py` (Python 3.8+, bibliothèque standard
uniquement). Lancez-la depuis la racine d'un projet. Sur les projets créés avant le
renommage, `cowork.py` est un fin shim qui exécute le même code.

Toutes les commandes renvoient le [code de sortie](./exit-codes) `0` en cas de succès, `1`
en cas de refus ou d'erreur, `2` en cas d'erreur d'argument, et `wait --once` renvoie `3`
lorsque ce n'est pas votre tour.

## Commandes livrées

### `init`

Génère (ou régénère) le kit dans le dossier courant.

```bash
python3 m8shift.py init [--name NAME] [--agents a,b] [--lang en|fr] [--force]
```

| Drapeau | Défaut | Signification |
| --- | --- | --- |
| `--name` | nom du dossier | nom du projet inscrit dans les fichiers générés |
| `--agents` | `claude,codex` | le roster du relais ; les **deux premiers** forment la paire active |
| `--lang` | `en` | langue des fichiers générés (`en` ou `fr`) |
| `--force` | off | réinitialise aussi le fichier de relais (sinon un fichier existant est conservé) |

`init` est idempotent et ne change jamais la marque d'un fichier — voir [`migrate-brand`](#migrate-brand).

### `status`

Affiche le verrou courant : holder, state, turn, roster et minutage.

```bash
python3 m8shift.py status
```

### `wait`

Bloque jusqu'à ce que ce soit le tour de `<agent>`.

```bash
python3 m8shift.py wait <agent> [--once] [--interval N]
```

| Drapeau | Défaut | Signification |
| --- | --- | --- |
| `--once` | off | vérifie une seule fois puis sort — `rc 0` si vous pouvez prendre le stylo, `rc 3` sinon |
| `--interval` | `60` | secondes entre deux sondages en mode bloquant |

`wait` bloque un *processus* ; il ne réveille pas une interface interactive. Voir le
[guide VS Code](/fr/guide/vscode).

### `claim`

Prend le stylo de manière exclusive. C'est le seul moyen de commencer à écrire.

```bash
python3 m8shift.py claim <agent> [--force]
```

Re-réclamer un verrou que vous détenez déjà rafraîchit son TTL de 30 minutes. `--force` ne
réclame qu'un verrou **périmé** (un verrou ayant dépassé son `expires`) ; il est refusé sur
un verrou actif.

### `append`

Clôt votre tour et passe le stylo à un autre agent. Exige que vous déteniez actuellement le
stylo (`state == WORKING_<you>`).

```bash
python3 m8shift.py append <agent> --to <other> \
  [--ask "what the next agent should do"] \
  [--done "what you completed"] \
  [--files "a.py,b.md"] \
  [--body PATH|-]
```

`--to` est requis et doit désigner l'**autre** agent (pas d'auto-passation). `--body -` lit
le corps de tour en texte libre depuis stdin ; `--body file.md` le lit depuis un fichier.

### `release`

Passe la main sans enregistrer de tour numéroté (n'incrémente pas `turn`).

```bash
python3 m8shift.py release <agent> --to <other> [--force]
```

### `done`

Marque le relais comme terminé (`state: DONE`).

```bash
python3 m8shift.py done <agent> [--force]
```

### `archive`

Déplace les tours plus anciens vers `M8SHIFT.archive.md`, en conservant le verrou et les
tours les plus récents.

```bash
python3 m8shift.py archive [--keep N]
```

`--keep` vaut `6` par défaut. Le tour #0 n'est jamais archivé.

### `migrate-brand`

Conversion ponctuelle et explicite d'un projet existant des noms `COWORK.*` vers les noms
`M8SHIFT.*`. `init` ne le fait jamais automatiquement.

```bash
python3 m8shift.py migrate-brand [--dry-run] [--no-backup]
```

`--dry-run` indique ce qui changerait sans rien écrire ; `--no-backup` saute les copies de
sauvegarde. Les fichiers `COWORK.*` hérités continuent de fonctionner sans migration.

## Spécifié — pas encore livré

Ces éléments figurent dans la [feuille de route](/fr/roadmap) et ne sont **pas** des
commandes opérationnelles aujourd'hui :

```text
remember / recap        # shared memory
peek                    # read the next turn's contract without claiming
log / status --json     # timeline and machine-readable status
claim --check <globs>   # advisory file-overlap probe
```
