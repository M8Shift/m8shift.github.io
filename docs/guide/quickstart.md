# Quickstart

::: tip Status
The commands below are the shipped degree-1 relay: one shared pen, any configured
roster member, one writer at a time. Use the
[worktree companion](./worktree-toolbox) only when you need isolated parallel feature
work.
:::

::: tip Naming
The CLI is `m8shift.py`; project files use `M8SHIFT.md` and `.m8shift.lock`.
:::

::: tip Agent names in examples
`claude` and `codex` are placeholders for the default roster. Use `gemini`, `vibe`,
or any other cooperative agent name if that agent can read its anchor, run the CLI,
and follow `claim → work → append`.
:::

```mermaid
flowchart LR
    A["install.sh / install.ps1"] --> B["init --agents claude,codex"]
    B --> C["next claude"]
    C --> D["work"]
    D --> E["append --wait --to codex"]
    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    class A,B,C,D,E agent;
```

*🟣 setup → first handoff*

Install M8Shift into a project on macOS, Linux, WSL, or Git Bash:

```bash
cd /path/to/project
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
```

On native Windows PowerShell:

```powershell
cd C:\path\to\project
irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex
```

Prerequisites: Python 3.8+, Git for normal repository work, and one downloader
(`curl`, `wget`, or Python `urllib`). Verification uses `sha256sum`, `shasum`, or
Python `hashlib`.

The installers download `m8shift.py`, `m8shift-worktree.py`,
`m8shift-runtime.py`, and `m8shift-context.py` into the current directory, verify
them against `checksums.sha256`, then run `init`. They do not use `sudo`, do not
modify your global PATH, and do not start a background service.

For a pinned release, fetch the installer from the tag and pass the same ref:

```bash
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/vX.Y.Z/install.sh | \
  bash -s -- --ref vX.Y.Z --agents claude,codex
```

```powershell
$env:M8SHIFT_INSTALL_REF = "vX.Y.Z"
irm https://raw.githubusercontent.com/M8Shift/M8Shift/vX.Y.Z/install.ps1 | iex
```

Security boundary: Bash and PowerShell both verify downloaded files by default
(`--no-verify` opts out) against the manifest from the selected ref. It catches corruption
or mismatch. For out-of-band trust against a compromised origin, pin reviewed digests
with `--sha256 FILE:HEX` or use a signed release tag.

Optional RTK shell-output filtering is explicit:

```bash
bash install.sh --with-rtk
```

The Bash installer downloads the matching RTK release asset for macOS, Linux, or
Git Bash/Windows, verifies it against RTK's `checksums.txt`, installs it under
`.m8shift/bin`, disables telemetry, and identity-pins the adapter manifest.

Experimental Headroom-compatible compression remains opt-in:

```bash
bash install.sh --with-headroom
```

It attempts `pip install headroom-ai` in `.m8shift/venvs/headroom`; some platforms
need Rust/Cargo for source builds. Failure is reported but does not block the base
M8Shift install.

Review the install plan without writing files:

```bash
bash install.sh --dry-run --with-rtk --with-headroom
```

Prefer manual adoption? Copy `m8shift.py` into the project and run
`python3 m8shift.py init --agents claude,codex`.

Check the state:

```bash
python3 m8shift.py status --for claude
```

Claim before working. In real agent loops, prefer `next`: it waits if needed,
then performs the normal `claim` and prints the latest handoff.

```bash
python3 m8shift.py next claude
```

Close the turn and hand off:

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract and added tests." \
  --ask "Implement the parser and preserve legacy behavior." \
  --files "docs/spec.md,tests/test_parser.py" \
  --wait
```

The next agent then runs:

```bash
python3 m8shift.py next codex
```

Before stopping a panel or automation loop, run `status --for <agent>`. If the relay
is not `DONE`, the safe action is to keep waiting, claim, append, release, or close
explicitly.

## Golden rule

> Never modify the shared repository before a successful claim.
