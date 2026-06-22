# Contributing

Keep changes focused, tested, and compatible with the project's local-first design.

Before submitting:

```bash
npm run docs:build
python3 -m unittest discover -s tests
git diff --check
```

For protocol or concurrency changes, request an independent review. For changes to the
single source of truth, regenerate derived protocol and anchor files before commit.

Commit and push only after the full diff and generated files have been checked.
