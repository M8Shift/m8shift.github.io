# Validation

Validation makes approval explicit.

```yaml
validation:
  required: true
  independence_required: true
  validator: { agent: gemini, role: reviewer }
  on_approved: { relation: integrate }
  on_changes_requested: { relation: revise }
```

Recommended statuses:

- `pending`;
- `approved`;
- `changes_requested`;
- `rejected`;
- `waived` with justification.

When independence is required, the producer and validator must differ.
