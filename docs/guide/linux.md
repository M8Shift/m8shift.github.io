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

## Copy the toolbox

```bash
cp m8shift.py /path/to/project/
cp m8shift-worktree.py /path/to/project/   # optional, for isolated parallel work
cd /path/to/project
python3 m8shift.py init --agents claude,codex
```

`claude,codex` is the default example roster. Use `gemini,vibe` or any cooperative
agent names that match the tools you actually run.

## Run commands explicitly

```bash
python3 m8shift.py status --for claude
python3 m8shift.py next claude
```

Use a local disk for the relay file. Network filesystems can make advisory locking and
atomic rename less reliable.
