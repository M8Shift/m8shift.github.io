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

## Copier la boîte à outils

```bash
cp m8shift.py /chemin/du/projet/
cp m8shift-worktree.py /chemin/du/projet/   # optionnel, pour le parallèle isolé
cd /chemin/du/projet
python3 m8shift.py init --agents claude,codex
```

## Lancer les commandes explicitement

```bash
python3 m8shift.py status --for claude
python3 m8shift.py next claude
```

Gardez le relais sur un disque local. Évitez les dossiers partagés ou réseau pour les
fichiers de relais actifs.
