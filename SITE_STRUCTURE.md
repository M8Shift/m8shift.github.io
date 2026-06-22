# Proposed information architecture

```text
docs/
├── index.md                         Landing page
├── guide/
│   ├── index.md                     Guide overview
│   ├── why.md                       Problem and positioning
│   ├── quickstart.md                Five-minute setup
│   ├── vscode.md                    IDE workflow
│   ├── cloudflare.md                Website deployment
│   ├── two-agent-relay.md           Existing basic workflow
│   ├── multi-agent.md               Roles and dependencies
│   └── content-image-review.md      Concurrent specialist example
├── concepts/
│   ├── index.md
│   ├── pen.md
│   ├── agents-roles.md
│   ├── relations.md
│   ├── handoff-contracts.md
│   ├── validation.md
│   └── worktrees.md
├── reference/
│   ├── index.md
│   ├── cli.md
│   ├── state-model.md
│   ├── contract-schema.md
│   ├── generated-files.md
│   ├── exit-codes.md
│   └── limitations.md
├── security/
│   ├── index.md
│   ├── threat-model.md
│   └── permissions.md
├── comparison.md
├── faq.md
├── roadmap.md
├── contributing.md
└── license.md
```

## Top navigation

```text
Guide | Concepts | Reference | Security | Roadmap | GitHub
```

## Homepage message hierarchy

1. Name: M8Shift
2. Promise: AI agents, working in shifts.
3. Problem: agents overwrite work and lose context.
4. Mechanism: ownership, handoffs, roles, validation, isolated workspaces.
5. Differentiation: coordination layer, not another hosted runtime.
6. Proof: readable protocol, tests, local CLI, examples.
7. Call to action: quickstart and GitHub.

## Suggested future additions

- interactive workflow diagram;
- generated CLI reference;
- changelog and release notes;
- compatibility matrix by agent host;
- examples gallery;
- downloadable VS Code kit;
- architecture decision records;
- bilingual French pages under `/fr/`.
