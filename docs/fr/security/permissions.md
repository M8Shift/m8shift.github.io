# Permissions

Exemple :

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

`advisory` signifie que l'agent est invité à se conformer. `host` signifie que
l'environnement applique réellement la frontière de capacités. `mixed` exige que chaque
capacité précise quelle couche l'applique.

```mermaid
flowchart TD
    E{"enforcement"} --> ADV["indicatif<br/>instruction de protocole<br/>non imposée"]
    E --> HOST["hôte<br/>vraie frontière<br/>OS / branche / secret"]
    E --> MIX["mixte<br/>par capacité :<br/>quelle couche applique"]

    classDef wait fill:#94a3b822,stroke:#64748b;
    classDef ok fill:#22c55e22,stroke:#16a34a;
    classDef pen fill:#f0509c22,stroke:#f0509c;
    class ADV wait
    class HOST ok
    class MIX pen
```

*⚪ indicatif (pas une vraie frontière) · 🟢 hôte (vraie frontière) · 🩷 mixte*
