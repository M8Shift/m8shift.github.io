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

## Copier la boîte à outils

```bash
cp m8shift.py /chemin/du/projet/
cp m8shift-worktree.py /chemin/du/projet/   # optionnel, pour le parallèle isolé
cd /chemin/du/projet
python3 m8shift.py init --agents claude,codex
```

`claude,codex` est le roster d'exemple par défaut. Utilisez `gemini,vibe` ou tout
nom d'agent coopératif correspondant aux outils que vous lancez réellement.

## Lancer les commandes explicitement

```bash
python3 m8shift.py status --for claude
python3 m8shift.py next claude
```

Utilisez un disque local pour le fichier de relais. Les systèmes de fichiers réseau
peuvent rendre le verrou indicatif et le renommage atomique moins fiables.
