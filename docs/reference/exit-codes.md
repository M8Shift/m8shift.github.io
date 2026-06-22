# Exit codes

Document stable exit codes here once the renamed CLI is finalized.

Recommended categories:

| Code | Meaning |
|---:|---|
| `0` | success |
| `2` | invalid command or arguments |
| `3` | not ready / not your turn |
| `4` | lock held or claim rejected |
| `5` | invalid or corrupted state |
| `6` | authorization or contract violation |

Do not change established codes during the rename without a compatibility note.
