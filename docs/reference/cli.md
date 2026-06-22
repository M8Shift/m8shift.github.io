# CLI reference

The CLI is a single file, `m8shift.py` (Python 3.8+, standard library only). Run it from
a project root. On projects created before the rename, `cowork.py` is a thin shim that
execs the same code.

All commands return [exit code](./exit-codes) `0` on success, `1` on a refusal or error,
`2` on an argument error, and `wait --once` returns `3` when it is not your turn.

## Shipped commands

### `init`

Generate (or regenerate) the kit in the current folder.

```bash
python3 m8shift.py init [--name NAME] [--agents a,b] [--lang en|fr] [--force]
```

| Flag | Default | Meaning |
| --- | --- | --- |
| `--name` | folder name | project name written into generated files |
| `--agents` | `claude,codex` | the relay roster; the **first two** are the active pair |
| `--lang` | `en` | language of generated files (`en` or `fr`) |
| `--force` | off | also reset the relay file (otherwise an existing one is kept) |

`init` is idempotent and never changes a file's brand — see [`migrate-brand`](#migrate-brand).

### `status`

Print the current lock: holder, state, turn, roster, and timing.

```bash
python3 m8shift.py status
```

### `wait`

Block until it is `<agent>`'s turn.

```bash
python3 m8shift.py wait <agent> [--once] [--interval N]
```

| Flag | Default | Meaning |
| --- | --- | --- |
| `--once` | off | check once and exit — `rc 0` if you may acquire, `rc 3` if not yet |
| `--interval` | `60` | seconds between polls in blocking mode |

`wait` blocks a *process*; it does not wake an interactive UI. See the
[VS Code guide](/guide/vscode).

### `claim`

Acquire the pen exclusively. This is the only way to start writing.

```bash
python3 m8shift.py claim <agent> [--force]
```

Re-claiming a lock you already hold refreshes its 30-minute TTL. `--force` reclaims a
**stale** lock only (one past its `expires`); it is refused on a live lock.

### `append`

Close your turn and hand the pen to another agent. Requires that you currently hold the
pen (`state == WORKING_<you>`).

```bash
python3 m8shift.py append <agent> --to <other> \
  [--ask "what the next agent should do"] \
  [--done "what you completed"] \
  [--files "a.py,b.md"] \
  [--body PATH|-]
```

`--to` is required and must be the **other** agent (no self-handoff). `--body -` reads
the free-text turn body from stdin; `--body file.md` reads it from a file.

### `release`

Hand off without recording a numbered turn (does not increment `turn`).

```bash
python3 m8shift.py release <agent> --to <other> [--force]
```

### `done`

Mark the relay finished (`state: DONE`).

```bash
python3 m8shift.py done <agent> [--force]
```

### `archive`

Move older turns to `M8SHIFT.archive.md`, keeping the lock and the most recent turns.

```bash
python3 m8shift.py archive [--keep N]
```

`--keep` defaults to `6`. Turn #0 is never archived.

### `migrate-brand`

One-time, opt-in conversion of an existing project from the `COWORK.*` names to the
`M8SHIFT.*` names. `init` never does this automatically.

```bash
python3 m8shift.py migrate-brand [--dry-run] [--no-backup]
```

`--dry-run` reports what would change without writing; `--no-backup` skips the backup
copies. Legacy `COWORK.*` files keep working without migrating.

## Specified — not yet shipped

These appear in the [roadmap](/roadmap) and are **not** operational commands today:

```text
remember / recap        # shared memory
peek                    # read the next turn's contract without claiming
log / status --json     # timeline and machine-readable status
claim --check <globs>   # advisory file-overlap probe
```
