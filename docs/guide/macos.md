# Install M8Shift on macOS

M8Shift runs on macOS with the system shell and Python 3. It has no package dependency.

## Prerequisites

```bash
python3 --version
git --version
```

If `python3` or `git` is missing, install the Xcode Command Line Tools:

```bash
xcode-select --install
```

## Copy the toolbox

```bash
cp m8shift.py /path/to/project/
cp m8shift-worktree.py /path/to/project/   # optional, for isolated parallel work
cd /path/to/project
python3 m8shift.py init --agents claude,codex
```

## Run commands explicitly

```bash
python3 m8shift.py status --for claude
python3 m8shift.py next claude
```

Keep the relay on a local disk. Avoid shared/network folders for active relay files.
