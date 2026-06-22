# Comparison

## M8Shift and agent orchestrators

| | M8Shift | Full agent runtime / orchestrator |
|---|---|---|
| Primary job | coordinate repository work | run and route agents |
| Runtime | passive local CLI | long-lived service or host runtime |
| Credentials | none for M8Shift itself | provider and integration credentials |
| State | local readable journal | sessions, databases, runtime state |
| Repository ownership | explicit locks and workspaces | depends on runtime/tool design |
| Roles and validation | workflow contracts | usually runtime-specific |
| Model launching | no | yes |
| Complementary? | yes | yes |

OpenClaw, for example, is a self-hosted gateway with sessions, tools, memory, channels,
and multi-agent routing. M8Shift can sit lower in the stack as a repository coordination
protocol for agents launched by such a runtime.
