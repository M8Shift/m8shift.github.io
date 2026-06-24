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

## Advisory review

Independent review is modeled today by routing the pen to a different roster member and
recording the expectation in `--ask`, `--next`, tasks, or custom fields. M8Shift records
that contract, but does not enforce approval paths or schema-level validation yet.
