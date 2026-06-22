# Agents and roles

An agent may declare several roles:

```yaml
agent:
  id: claude
  roles: [coordinator, architect, writer, reviewer, integrator]
```

A task chooses one primary active role:

```yaml
active_role: architect
supporting_roles: [documenter]
```

This keeps identity stable while making responsibility explicit. It also avoids
creating five nearly identical agent personas merely to satisfy an organizational
chart that no one asked for.
