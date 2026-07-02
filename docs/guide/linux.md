# Install M8Shift on Linux

M8Shift is plain Python and uses only the standard library. A normal Linux install
needs Python 3, Git for normal repository workflows, and one downloader.

## Prerequisites

```bash
python3 --version
git --version
curl --version
```

Python 3.8+ is enough. Verification uses `sha256sum`, `shasum`, or Python
`hashlib`. Git is required for `m8shift-worktree.py`; the core relay works without
it.

## Install locally

```bash
cd /path/to/project
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
```

The installer downloads the core relay, worktree toolbox, runtime companion, and
context companion, verifies them with `checksums.sha256`, and runs `init`. If you
adopt manually, copy `m8shift.py` into the project and copy
[`m8shift-worktree.py`](./worktree-toolbox) next to it only when you need isolated
parallel work.

Optional token adapters:

```bash
# verified RTK release asset, local .m8shift/bin install, telemetry off
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | \
  bash -s -- --agents claude,codex --with-rtk

# experimental headroom-ai venv; may need Rust/Cargo for source builds
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | \
  bash -s -- --agents claude,codex --with-headroom
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
