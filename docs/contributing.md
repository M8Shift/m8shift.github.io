# Contributing

There are two repositories: this **website** and the **M8Shift CLI** itself. The CLI
source repository is [M8Shift/M8Shift](https://github.com/M8Shift/M8Shift). Send
changes to the right one.

## This website

```bash
npm install
npm run docs:build      # must succeed (catches dead links)
```

Keep the editorial rule: clearly distinguish **available now** from **specified** and
**future RFC**. Do not present a specification as shipped software.

## The M8Shift CLI

The CLI is a single file with a standard-library-only test suite:

```bash
python3 -m unittest discover -s tests
```

The protocol document and per-agent anchors are **generated** from the CLI source, and a
test enforces that they stay byte-identical. For protocol or concurrency changes,
regenerate the derived files and request an independent review before committing.
