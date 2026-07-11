# Read M8Shift Documentation

Use this skill when an agent needs to understand M8Shift from its public website: what the project is, how the relay works, how to install it, which files and commands matter, and where the project boundaries are.

## What M8Shift Is

M8Shift is a local, free, open-source relay for coordinating CLI-capable AI coding agents on one repository. It gives the work an explicit turn structure:

- one agent owns the pen before editing;
- handoffs are written down;
- reviews and disagreements are recorded;
- a human keeps final judgment.

M8Shift is not a hosted model provider, not an API gateway, not an OAuth service, and not a public MCP endpoint on `m8shift.ai`.

## Recommended Reading Order

1. Read `https://m8shift.ai/llms.txt` for the compact agent overview.
2. Read `https://m8shift.ai/beginners/m8shift-simply` for the plain-language model.
3. Read `https://m8shift.ai/guide/why` for the reasoning behind multi-agent disagreement and human arbitration.
4. Read `https://m8shift.ai/reference/features` for the shipped capability list.
5. Read `https://m8shift.ai/reference/cli` for command syntax.
6. Read `https://m8shift.ai/reference/architecture` and `https://m8shift.ai/reference/state-model` for implementation details.
7. Read `https://m8shift.ai/security/audits` before making security claims.

## Guidance For Agents

- Treat the website as documentation, not as a runtime API.
- Do not invent a hosted service, OAuth issuer, payment flow, or MCP endpoint unless the documentation explicitly adds one later.
- Prefer direct links to the relevant reference page when answering questions.
- Preserve M8Shift's narrow positioning: local coordination, one writer at a time, auditable handoffs, provider-neutral agents, and human arbitration.
- When discussing multi-agent benefits, avoid claiming that "more agents are always better." The documented value is structured challenge plus traceability.

## Key Public URLs

- `https://m8shift.ai/`
- `https://m8shift.ai/llms.txt`
- `https://m8shift.ai/guide/why`
- `https://m8shift.ai/reference/features`
- `https://m8shift.ai/reference/cli`
- `https://m8shift.ai/reference/architecture`
- `https://m8shift.ai/reference/state-model`
- `https://m8shift.ai/roadmap`
- `https://github.com/M8Shift/M8Shift`
