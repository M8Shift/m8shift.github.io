# Contract schema

A full contract may contain:

```yaml
handoff:
  id: H-0042
  source: { agent: claude, role: coordinator }
  target: { agent: codex, role: implementer }
  relation: implement
  input: {}
  permissions:
    enforcement: advisory
    allow: []
    deny: []
  expected_output:
    required: []
    optional: []
  validation:
    required: false
```

The canonical JSON Schema should live in the project repository and be reused by VS
Code YAML validation and CLI validation tests.
