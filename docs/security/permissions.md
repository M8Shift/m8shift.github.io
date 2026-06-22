# Permissions

Example:

```yaml
permissions:
  enforcement: host
  allow:
    - repository.read
    - assets.write
    - image.generate
  deny:
    - source_code.write
    - secrets.read
    - remote.push
```

`advisory` means the agent is instructed to comply. `host` means the environment
actually enforces the capability boundary. `mixed` requires each capability to state
which layer enforces it.

```mermaid
flowchart TD
    E{"enforcement"} --> ADV["advisory<br/>protocol instruction<br/>not enforced"]
    E --> HOST["host<br/>real OS / branch / secret<br/>boundary"]
    E --> MIX["mixed<br/>per-capability:<br/>which layer enforces"]

    classDef wait fill:#94a3b822,stroke:#64748b;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    class ADV wait
    class HOST ok
    class MIX pen
```

*⚪ advisory (not a real boundary) · 🟢 host (real boundary) · 🩷 mixed*
