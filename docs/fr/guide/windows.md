# Exécuter M8Shift sous Windows

M8Shift est un unique fichier Python n'utilisant que la bibliothèque standard ; il n'y a donc rien à
`pip install`. Il s'exécute sous Windows de trois façons.

## Option A — WSL (recommandée)

Utilisez une distribution WSL et traitez-la exactement comme Linux :

```bash
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
python3 m8shift.py status
```

L'installateur télécharge `m8shift.py` et `m8shift-worktree.py`, les vérifie avec
`checksums.sha256`, puis lance `init`.

`claude,codex` est le roster d'exemple par défaut. Utilisez `gemini,vibe` ou tout
nom d'agent coopératif correspondant aux outils que vous lancez réellement.

## Option B — Git Bash

Fonctionne de la même manière, en invoquant Python explicitement :

```bash
curl -fsSL https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.sh | bash -s -- --agents claude,codex
python m8shift.py status
```

## Option C — PowerShell / cmd natifs

Dans PowerShell :

```powershell
irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex
python m8shift.py status
```

Depuis `cmd.exe` :

```bat
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/M8Shift/M8Shift/main/install.ps1 | iex"
python m8shift.py status
```

L'installateur PowerShell télécharge `m8shift.py` et `m8shift-worktree.py`, les
vérifie par défaut avec `checksums.sha256`, puis lance `init`.

Alternative manuelle :

```powershell
py m8shift.py init --agents claude,codex
```

Si vous n'utilisez pas l'installateur, téléchargez ou copiez d'abord `m8shift.py` ;
ajoutez [`m8shift-worktree.py`](./worktree-toolbox) à côté seulement si vous utilisez
le travail parallèle isolé.

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
