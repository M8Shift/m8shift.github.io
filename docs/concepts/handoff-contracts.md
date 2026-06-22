# Handoff contracts

A handoff contract turns an informal request into a verifiable unit of work.

```yaml
handoff:
  source: { agent: claude, role: coordinator }
  target: { agent: codex, role: implementer }
  relation: implement
  permissions:
    enforcement: advisory
    allow: [repository.read, workspace.write, tests.run]
    deny: [default_branch.write, secrets.read]
  expected_output:
    required: [summary, changed_files, test_results]
```

Contracts remain data. M8Shift must not execute a path, test command, branch name, or
commit field merely because it appears in the journal.
