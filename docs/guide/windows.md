# Run M8Shift on Windows

M8Shift is a single Python file using only the standard library, so there is nothing to
`pip install`. It runs on Windows in three ways.

## Option A — WSL (recommended)

Use a WSL distribution and treat it exactly like Linux:

```bash
python3 m8shift.py init --agents claude,codex
python3 m8shift.py status
```

## Option B — Git Bash

Works the same, invoking Python explicitly:

```bash
python m8shift.py init --agents claude,codex
```

## Option C — native PowerShell / cmd

```powershell
py m8shift.py init --agents claude,codex
```

Invoke through the interpreter (`python m8shift.py …` / `py m8shift.py …`); do **not**
rely on `./m8shift.py`.

## Line endings

Keep the relay file as **LF**. A `.gitattributes` entry or `git config core.autocrlf
input` avoids CRLF noise in `M8SHIFT.md`. The parser tolerates CRLF, but a clean LF file
diffs better.

## What needs Git for Windows

Only one optional feature: renaming an anchor's case (`git mv`). Everything else works
without Git installed. The inter-process lock targets local disk; avoid running on a
network share, where `O_EXCL` and atomic rename are less reliable.
