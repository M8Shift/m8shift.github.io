# Comparison

<div class="m8-doc-grid">
  <a class="m8-doc-card" href="/comparison">
    <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    <strong>M8Shift</strong>
    <span>Local repository coordination, one explicit writer, append-only handoffs, no model credentials.</span>
  </a>
  <a class="m8-doc-card" href="/comparison">
    <i class="fa-solid fa-server" aria-hidden="true"></i>
    <strong>Agent runtime</strong>
    <span>Sessions, tools, model routing, memory, credentials, and long-lived host state.</span>
  </a>
  <a class="m8-doc-card" href="/guide/worktree-toolbox">
    <i class="fa-solid fa-code-branch" aria-hidden="true"></i>
    <strong>Complementary</strong>
    <span>Use runtimes to launch agents and M8Shift to guard shared repository ownership.</span>
  </a>
</div>

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
  <div>
    <strong>Decision rule</strong>
    <p>If the question is “who may write to this repository right now?”, M8Shift is in scope. If the question is “which model should run next?”, use an agent runtime.</p>
  </div>
</div>

## M8Shift and agent orchestrators

| | M8Shift | Full agent runtime / orchestrator |
| --- | --- | --- |
| Primary job | coordinate repository work | run and route agents |
| Runtime | passive local CLI | long-lived service or host runtime |
| Credentials | none for M8Shift itself | provider and integration credentials |
| State | local readable journal | sessions, databases, runtime state |
| Repository ownership | one explicit pen (degree-1 mutex) | depends on runtime/tool design |
| Handoffs | immutable turn journal | usually runtime-specific |
| Model launching | <i class="fa-solid fa-xmark m8-no" aria-label="No"></i> | <i class="fa-solid fa-check m8-ok" aria-label="Yes"></i> |
| Complementary? | <i class="fa-solid fa-check m8-ok" aria-label="Yes"></i> | <i class="fa-solid fa-check m8-ok" aria-label="Yes"></i> |

A full agent runtime is typically a self-hosted gateway with sessions, tools, memory,
channels, and multi-agent routing. M8Shift sits lower in the stack as a repository
coordination layer for agents launched by such a runtime — not a replacement for it.

```mermaid
flowchart TD
    RT["full agent runtime / orchestrator<br/>sessions · tools · routing"] -->|launches| AG1["agent A"]
    RT -->|launches| AG2["agent B"]
    AG1 --> M8["M8Shift<br/>repository coordination (degree-1 pen)"]
    AG2 --> M8
    M8 --> REPO["one repo<br/>(guarded)"]

    classDef store fill:#ff7a1822,stroke:#fb923c;
    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    class RT store
    class AG1,AG2 agent
    class M8 pen
    class REPO ok
```

*🟠 runtime · 🟣 agents · 🩷 M8Shift · 🟢 guarded repo*
