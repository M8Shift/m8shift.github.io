# Run M8Shift on Windows

M8Shift is a single Python file using only the standard library, so the core has
nothing to `pip install`. It runs on Windows in three ways.

## Option A — WSL (recommended)

Use a WSL distribution and treat it exactly like Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
python3 m8shift.py status
```

The installer downloads `m8shift.py` plus `m8shift-worktree.py`,
`m8shift-runtime.py`, and `m8shift-context.py`, verifies them with
`checksums.sha256`, and runs `init`.

`claude,codex` is the default example roster. Use `gemini,vibe` or any cooperative
agent names that match the tools you actually run.

## Option B — Git Bash

Works the same, invoking Python explicitly:

```bash
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
python m8shift.py status
```

Optional RTK install also works from Git Bash:

```bash
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | \
  bash -s -- --agents claude,codex --with-rtk
```

It downloads the Windows RTK `.zip` asset, verifies it against RTK's
`checksums.txt` from the same GitHub release tag, installs `rtk.exe` in
`.m8shift/bin`, records provenance, disables telemetry, and identity-pins the
adapter manifest. Cargo/Rust source builds are disabled unless
`--allow-source-build` is explicit. Experimental `--with-headroom` creates a
local venv and installs a **pinned** stack (`headroom-ai==0.28.0` +
`onnxruntime` + `transformers`), fail-closed: any failed step removes the venv
and reports clearly. Since v3.52.0 an opted-in helper failure never aborts the
core install — it degrades to a prominent warning, `init` still runs, and the
installer exits 0 with a summary of failed helpers.

## Option C — native PowerShell / cmd

In PowerShell:

```powershell
irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex
python m8shift.py status
```

From `cmd.exe`:

```bat
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex"
python m8shift.py status
```

The PowerShell installer downloads `m8shift.py` plus `m8shift-worktree.py`,
`m8shift-runtime.py`, and `m8shift-context.py`, verifies them with
`checksums.sha256` by default, and runs `init`. It is kept in lockstep with
`install.sh` for the core components (verified by static parity tests;
executed end-to-end where `pwsh` is available) — same flags, same
verify-by-default, `-Checksums` implies verification, and `-DryRun` prints
the plan and prerequisites without writing (no Python needed for the plan).
RTK/Headroom are POSIX-only helpers: PowerShell reports them honestly
(an `rtk` already on PATH is detected and gets its telemetry disabled,
mirroring `install.sh`) but never installs them — use WSL or Git Bash for
`--with-rtk` / `--with-headroom`. After any install, verify with:

```powershell
python m8shift.py doctor --install
```

Manual fallback:

```powershell
py m8shift.py init --agents claude,codex
```

If you do not use the installer, download or copy `m8shift.py` first; add
[`m8shift-worktree.py`](./worktree-toolbox) next to it only if you need isolated
parallel work.

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
