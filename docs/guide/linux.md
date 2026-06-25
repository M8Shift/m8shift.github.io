# Install M8Shift on Linux

M8Shift is plain Python and uses only the standard library. A normal Linux install only
needs Python 3 and, if you use the worktree toolbox, Git.

## Prerequisites

```bash
python3 --version
git --version
```

Python 3.8+ is enough. Git is required for `m8shift-worktree.py`; the core relay works
without it.

## Install locally

```bash
cd /path/to/project
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --verify --agents claude,codex
```

The installer downloads the core relay and the optional worktree toolbox, verifies
them with `checksums.sha256`, and runs `init`. If you adopt manually, copy
`m8shift.py` into the project and copy `m8shift-worktree.py` next to it only when
you need isolated parallel work.

`claude,codex` is the default example roster. Use `gemini,vibe` or any cooperative
agent names that match the tools you actually run.

## Run commands explicitly

```bash
python3 m8shift.py status --for claude
python3 m8shift.py next claude
```

Use a local disk for the relay file. Network filesystems can make advisory locking and
atomic rename less reliable.
