# Validation

"Validation" means two different things in M8Shift: hard input/state checks and
read-only contract checks.

## Shipped: input and state validation

Before any write, `m8shift.py` enforces guardrails that keep the journal trustworthy:

- **Claim-before-write** — an `append` is accepted only from `WORKING_<self>`.
- **Single-line fields** — `from`/`to`/`ask`/`done`/`files` reject newlines and reserved
  markers, so a turn cannot forge a lock or another turn.
- **Body neutralisation** — fake `M8SHIFT:*` markers in a free-text body are
  neutralised.
- **Roster checks** — a handoff `--to` an agent outside the roster is refused.
- **Immutable turns** — a closed turn is never rewritten.

These are correctness guardrails, not a security boundary — see the
[threat model](/security/threat-model).

## Read-only contract validation

Independent review is modeled today by routing the pen to a different roster member and
recording the expectation in `--ask`, `--next`, tasks, custom fields, or Stage-4 contract
fields such as `schema=stage4.v1`, `relation`, `requires`, `expected_output`,
`evidence`, and `decision`.

`contract validate` and `doctor --contracts` check those contracts explicitly and
read-only. They can report warnings or strict errors, but they still do not enforce
approval paths, grant permissions, run tests, or route work.
