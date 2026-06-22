# Contribuer

Il existe deux dépôts : ce **site web** et la **CLI M8Shift** elle-même. Adressez vos modifications
au bon dépôt.

## Ce site web

```bash
npm install
npm run docs:build      # must succeed (catches dead links)
```

Conservez la règle éditoriale : distinguer clairement **disponible maintenant** de **spécifié** et
**future RFC**. Ne présentez pas une spécification comme un logiciel livré.

## La CLI M8Shift

La CLI est un fichier unique doté d'une suite de tests utilisant uniquement la bibliothèque standard :

```bash
python3 -m unittest discover -s tests
```

Le document de protocole et les fichiers d'ancrage par agent sont **générés** à partir du source de la CLI, et un
test impose qu'ils restent identiques au octet près. Pour toute modification de protocole ou de concurrence,
régénérez les fichiers dérivés et demandez une relecture indépendante avant de committer.
