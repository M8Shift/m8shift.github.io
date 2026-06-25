# Concepts

M8Shift separates concepts that agent frameworks often blend together. Some are shipped
today; others are a specified direction (see the [roadmap](/roadmap)).

| Concept | Question answered | Status |
| --- | --- | --- |
| [The pen](./pen) | Who may write right now? | Available |
| [Agents & roster](./agents-roles) | Which agents relay, and via which anchors? | Available |
| [Handoff contracts](./handoff-contracts) | What was done, and what is asked next? | Available |
| [Relations](./relations) | Why is the pen moving between agents? | `ask` plus Stage-4 relation vocabulary |
| [Validation](./validation) | Is the journal trustworthy, and is the work reviewed? | Input/state checks plus read-only contract validation |

The one rule that ties them together: **never modify the repository before a successful
`claim`.**
