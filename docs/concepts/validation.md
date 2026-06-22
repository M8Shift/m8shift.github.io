# Validation

"Validation" means two different things in M8Shift. One ships today; one is specified.

## Shipped: input and state validation

Before any write, `m8shift.py` enforces guardrails that keep the journal trustworthy:

- **Claim-before-write** — an `append` is accepted only from `WORKING_<self>`.
- **Single-line fields** — `from`/`to`/`ask`/`done`/`files` reject newlines and reserved
  markers, so a turn cannot forge a lock or another turn.
- **Body neutralisation** — fake `M8SHIFT:*` / `COWORK:*` markers in a free-text body are
  neutralised.
- **Roster checks** — a handoff `--to` an agent outside the roster is refused.
- **Immutable turns** — a closed turn is never rewritten.

These are correctness guardrails, not a security boundary — see the
[threat model](/security/threat-model).

## Specified: independent review

::: tip Specified, not shipped
An explicit review workflow — a required, independent validator that can approve, request
changes, reject, or waive a turn before integration — is part of the multi-agent
[roadmap](/roadmap). When independence is required, the producer and validator must
differ. None of this is in the current relay.
:::
