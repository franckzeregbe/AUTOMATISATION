# 🚀 Guide de Démarrage - AUTOMATISATION

## Prévisualisation Locale

### Option 1 : Serveur Python (Recommandé)
```bash
cd AUTOMATISATION
./start-server.sh
```
Puis ouvrez : http://localhost:8080

### Option 2 : Serveur Python manuel
```bash
cd AUTOMATISATION/public
python3 -m http.server 8080
```

### Option 3 : Serveur Node.js
```bash
cd AUTOMATISATION
npx http-server public -p 8080
```

## Bugs Corrigés

1. ✅ Configuration de prévisualisation activée
2. ✅ Serveur HTTP configuré pour le dossier public
3. ✅ Scripts de démarrage créés
4. ✅ Configuration Nix mise à jour

## Structure du Projet

```
AUTOMATISATION/
├── public/           # Fichiers web
│   ├── index.html   # Page principale
│   ├── script.js    # Scripts JS
│   ├── style.css    # Styles CSS
│   ├── firebase.js  # Config Firebase
│   └── sections/    # Pages des sections
├── .idx/            # Configuration IDX
└── start-server.sh  # Script de démarrage
```

## Prochaines Étapes

1. Démarrer le serveur avec `./start-server.sh`
2. Tester toutes les fonctionnalités
3. Vérifier la connexion Firebase
4. Tester sur mobile (responsive)

✨ **Jésus revient bientôt** ✨
