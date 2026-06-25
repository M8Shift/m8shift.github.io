# Information architecture

English lives at the root; the French locale mirrors it under `docs/fr/`.

```text
docs/
├── index.md                         Landing page
├── guide/
│   ├── index.md                     Guide overview
│   ├── why.md                       Problem and positioning
│   ├── quickstart.md                Five-minute setup
│   ├── vscode.md                    IDE workflow
│   ├── headless.md                  Fully headless relay
│   ├── windows.md                   Windows (WSL / Git Bash / native)
│   ├── cloudflare.md                Pages or Worker deployment
│   ├── two-agent-relay.md           The shipped relay
│   └── multi-agent.md               Specified multi-agent direction
├── concepts/
│   ├── index.md
│   ├── pen.md
│   ├── agents-roles.md
│   ├── relations.md
│   ├── handoff-contracts.md
│   └── validation.md
├── reference/
│   ├── index.md
│   ├── cli.md
│   ├── state-model.md
│   ├── contract-schema.md           Turn (handoff) schema
│   ├── generated-files.md
│   ├── exit-codes.md
│   └── limitations.md
├── security/
│   ├── index.md
│   ├── threat-model.md
│   └── permissions.md
├── use-cases.md
├── comparison.md
├── faq.md
├── roadmap.md
├── contributing.md
├── license.md
└── fr/                              French locale mirroring the above
```

## Top navigation

```text
Guide | Concepts | Reference | Security | Roadmap | More ▾ | language ▾
```

`More ▾` holds Use cases, Comparison, FAQ, Contributing, License.

## Homepage message hierarchy

1. Name: M8Shift
2. Promise: AI agents, working in shifts.
3. Problem: agents overwrite work and lose context.
4. Mechanism: one exclusive pen, claim-before-write, immutable turn journal, roster.
5. Differentiation: a coordination layer, not another hosted runtime.
6. Proof: readable protocol, tests, single-file local CLI.
7. Call to action: quickstart and source.

## Editorial rule

Every page distinguishes **available now** from **specified / planned** and **future
RFC**. A Markdown specification is never marketed as shipped software.

## Possible future additions

- interactive workflow diagram;
- generated CLI reference from `m8shift.py --help`;
- changelog and release notes;
- compatibility matrix by agent host;
- downloadable VS Code kit.
