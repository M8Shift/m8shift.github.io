# Quickstart

::: warning Status
The commands below describe the existing relay-oriented workflow. Multi-agent contract
and worktree commands remain specification targets until implemented and tested.
:::

Copy the CLI into a project:

```bash
cp m8shift.py /path/to/project/
cd /path/to/project
python3 m8shift.py init --agents claude,codex
```

Check the state:

```bash
python3 m8shift.py status
```

Claim before working:

```bash
python3 m8shift.py claim claude
```

Close the turn and hand off:

```bash
python3 m8shift.py append claude --to codex \
  --done "Defined the parser contract and added tests." \
  --ask "Implement the parser and preserve legacy behavior." \
  --files "docs/spec.md,tests/test_parser.py"
```

The next agent then runs:

```bash
python3 m8shift.py wait codex --once
python3 m8shift.py claim codex
```

## Golden rule

> Never modify the shared repository before a successful claim.
