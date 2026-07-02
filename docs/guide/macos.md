# Install M8Shift on macOS

M8Shift runs on macOS with the system shell and Python 3. The core has no package
dependency.

## Prerequisites

```bash
python3 --version
git --version
curl --version
```

If `python3` or `git` is missing, install the Xcode Command Line Tools:

```bash
xcode-select --install
```

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

Keep the relay on a local disk. Avoid shared/network folders for active relay files.
