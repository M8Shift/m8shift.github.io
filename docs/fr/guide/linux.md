# Installer M8Shift sous Linux

M8Shift est du Python simple et n'utilise que la bibliothèque standard. Une installation
Linux normale demande seulement Python 3 et, si vous utilisez la boîte à outils worktree,
Git.

## Prérequis

```bash
python3 --version
git --version
```

Python 3.8+ suffit. Git est requis pour `m8shift-worktree.py` ; le relais cœur fonctionne
sans lui.

## Installer localement

```bash
cd /chemin/du/projet
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
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

Utilisez un disque local pour le fichier de relais. Les systèmes de fichiers réseau
peuvent rendre le verrou indicatif et le renommage atomique moins fiables.
