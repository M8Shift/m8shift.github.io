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

## Named tools and where they fit

<div class="m8-callout m8-callout--orange">
  <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
  <div>
    <strong>Not a benchmark</strong>
    <p>This is a positioning table, not a quality ranking. Most tools below solve a different layer of the stack: they build, host, run, route, or automate agents. M8Shift only answers repository coordination and handoff ownership.</p>
  </div>
</div>

<div class="m8-feature-table">
<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>What it is</th>
      <th>Comparable to M8Shift?</th>
      <th>How to use with M8Shift</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://openclaw.ai/">OpenClaw</a></td>
      <td>Personal AI assistant and local gateway for actions across channels such as chat apps, inbox, calendar, device apps, and skills.</td>
      <td><strong>No.</strong> It is an assistant product/control plane. M8Shift is a repository-local relay.</td>
      <td>Use OpenClaw to run or expose an assistant; use M8Shift inside a code repository when that assistant must coordinate with coding agents.</td>
    </tr>
    <tr>
      <td><a href="https://docs.langchain.com/oss/python/langgraph/overview">LangGraph</a></td>
      <td>Low-level orchestration runtime for long-running, stateful agents with durable execution, persistence, streaming, and human-in-the-loop support.</td>
      <td><strong>Partly, but at another layer.</strong> LangGraph orchestrates agent execution; M8Shift serializes repository write ownership.</td>
      <td>Use LangGraph to decide which agent step runs next, then make repository-writing steps acquire and hand off through M8Shift.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/microsoft/autogen">AutoGen</a></td>
      <td>Microsoft multi-agent framework for autonomous or human-assisted AI applications. The GitHub project is now marked maintenance mode.</td>
      <td><strong>Historical/partial.</strong> AutoGen models agent conversations and runtimes; it does not replace a repo-level pen.</td>
      <td>Existing AutoGen agents can call M8Shift before touching a shared repository. For new Microsoft work, also compare <a href="https://learn.microsoft.com/en-us/agent-framework/overview/">Microsoft Agent Framework</a>.</td>
    </tr>
    <tr>
      <td><a href="https://learn.microsoft.com/en-us/agent-framework/overview/">Microsoft Agent Framework</a></td>
      <td>Successor direction for Microsoft agent orchestration, with .NET/Python agents, workflows, state management, telemetry, and multi-agent patterns.</td>
      <td><strong>Complementary.</strong> It is an application/runtime framework; M8Shift is a repository coordination primitive.</td>
      <td>Use Agent Framework for workflow orchestration and M8Shift as the local contract for who may write to a repo at a given moment.</td>
    </tr>
    <tr>
      <td><a href="https://docs.crewai.com/">CrewAI</a></td>
      <td>Framework/platform for agents, crews, flows, tools, memory, knowledge, guardrails, observability, and automations.</td>
      <td><strong>Partly, but broader.</strong> CrewAI coordinates agent work; M8Shift coordinates write access and handoff records for one repository.</td>
      <td>Let CrewAI manage roles and tasks; require any crew member that changes the repo to claim, append, and record evidence through M8Shift.</td>
    </tr>
    <tr>
      <td><a href="https://www.openhands.dev/">OpenHands</a></td>
      <td>Software-development agent platform that runs autonomous coding agents, often in isolated local, VM, cloud, or enterprise environments.</td>
      <td><strong>Closest domain overlap.</strong> It targets end-to-end coding work; M8Shift is smaller and only guards shared repository coordination.</td>
      <td>Use OpenHands when you want a full coding-agent platform. Use M8Shift when multiple agents, including OpenHands-style agents, need a simple shared-repo mutex and audit trail.</td>
    </tr>
    <tr>
      <td><a href="https://developers.openai.com/api/docs/guides/agents">OpenAI Agents SDK</a></td>
      <td>SDK for applications that own agent orchestration, tool execution, approvals, state, and multi-agent collaboration.</td>
      <td><strong>Complementary.</strong> It builds agent applications; M8Shift keeps repository handoffs explicit and local.</td>
      <td>Use the SDK for model/tool orchestration. Add M8Shift commands around filesystem mutations when several agents share a repository.</td>
    </tr>
    <tr>
      <td><a href="https://docs.dify.ai/en/home">Dify</a></td>
      <td>Open-source platform for AI applications, agents, agentic workflows, chatbots, data-backed apps, and API publishing.</td>
      <td><strong>No, except as adjacent workflow infrastructure.</strong> Dify builds and serves AI apps; M8Shift coordinates repository work.</td>
      <td>Use Dify for product-facing AI workflows. If a Dify-triggered agent edits a repo, have that execution respect M8Shift.</td>
    </tr>
    <tr>
      <td><a href="https://docs.n8n.io/advanced-ai/">n8n AI workflows</a></td>
      <td>Workflow automation platform with AI workflow, chatbot, LangChain, and integration nodes.</td>
      <td><strong>No.</strong> n8n is deterministic/automation infrastructure; M8Shift is a local protocol for coding-agent turn-taking.</td>
      <td>Use n8n to trigger jobs, notifications, and integrations. Use M8Shift only when those jobs enter a shared code repository.</td>
    </tr>
  </tbody>
</table>
</div>

## Short version

<div class="m8-doc-grid m8-doc-grid--four">
  <a class="m8-doc-card" href="/reference/features">
    <i class="fa-solid fa-pen-nib" aria-hidden="true"></i>
    <strong>M8Shift</strong>
    <span>Best when the hard question is who owns repository writes and how the handoff is recorded.</span>
  </a>
  <a class="m8-doc-card" href="https://docs.langchain.com/oss/python/langgraph/overview">
    <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
    <strong>LangGraph / MAF</strong>
    <span>Best when the hard question is durable graph/workflow orchestration.</span>
  </a>
  <a class="m8-doc-card" href="https://docs.crewai.com/">
    <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
    <strong>CrewAI / AutoGen</strong>
    <span>Best when the hard question is how agents, roles, tools, and conversations collaborate.</span>
  </a>
  <a class="m8-doc-card" href="https://www.openhands.dev/">
    <i class="fa-solid fa-code" aria-hidden="true"></i>
    <strong>OpenHands</strong>
    <span>Best when the hard question is running autonomous coding agents as a platform.</span>
  </a>
</div>
