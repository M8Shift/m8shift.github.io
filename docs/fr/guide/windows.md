# Exécuter M8Shift sous Windows

M8Shift est un unique fichier Python n'utilisant que la bibliothèque standard ; il n'y a donc rien à
`pip install`. Il s'exécute sous Windows de trois façons.

## Option A — WSL (recommandée)

Utilisez une distribution WSL et traitez-la exactement comme Linux :

```bash
python3 m8shift.py init --agents claude,codex
python3 m8shift.py status
```

## Option B — Git Bash

Fonctionne de la même manière, en invoquant Python explicitement :

```bash
python m8shift.py init --agents claude,codex
```

## Option C — PowerShell / cmd natifs

```powershell
py m8shift.py init --agents claude,codex
```

Invoquez via l'interpréteur (`python m8shift.py …` / `py m8shift.py …`) ; ne vous reposez **pas**
sur `./m8shift.py`.

## Fins de ligne

Conservez le fichier de relais en **LF**. Une entrée `.gitattributes` ou `git config core.autocrlf
input` évite le bruit CRLF dans `M8SHIFT.md`. Le parseur tolère le CRLF, mais un fichier LF propre
produit de meilleurs diffs.

## Ce qui nécessite Git pour Windows

Une seule fonctionnalité optionnelle : renommer la casse d'un fichier d'ancrage (`git mv`). Tout le
reste fonctionne sans Git installé. Le verrou inter-processus cible le disque local ; évitez de
travailler sur un partage réseau, où `O_EXCL` et le renommage atomique sont moins fiables.
