# Installer M8Shift sous macOS

M8Shift fonctionne sous macOS avec le shell système et Python 3. Il n'a aucune dépendance
de paquet.

## Prérequis

```bash
python3 --version
git --version
```

Si `python3` ou `git` manque, installez les Xcode Command Line Tools :

```bash
xcode-select --install
```

## Installer localement

```bash
cd /chemin/du/projet
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --verify --agents claude,codex
```

L'installateur télécharge le relais cœur et la boîte à outils worktree optionnelle,
les vérifie avec `checksums.sha256`, puis lance `init`. Pour une adoption manuelle,
copiez `m8shift.py` dans le projet et ajoutez
[`m8shift-worktree.py`](./worktree-toolbox) à côté seulement si vous utilisez le
travail parallèle isolé.

`claude,codex` est le roster d'exemple par défaut. Utilisez `gemini,vibe` ou tout
nom d'agent coopératif correspondant aux outils que vous lancez réellement.

## Lancer les commandes explicitement

```bash
python3 m8shift.py status --for claude
python3 m8shift.py next claude
```

Gardez le relais sur un disque local. Évitez les dossiers partagés ou réseau pour les
fichiers de relais actifs.
