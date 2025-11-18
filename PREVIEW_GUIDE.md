# 📱 GUIDE DE PRÉVISUALISATION - AUTOMATISATION

## 🚀 DÉMARRAGE RAPIDE

### Option 1 : Script automatique
```bash
./start-preview.sh
```

### Option 2 : Manuel
```bash
node preview-server.js
```

### Option 3 : Python (alternative)
```bash
cd public
python3 -m http.server 8000
```

## 🌐 ACCÈS À L'APPLICATION

Une fois le serveur démarré :
- **URL locale** : http://localhost:3000
- **URL réseau** : http://[votre-ip]:3000

## 📱 TEST SUR MOBILE

1. **Même réseau WiFi** : Utilisez l'IP de votre ordinateur
2. **Trouver votre IP** :
   ```bash
   # Linux/Mac
   ifconfig | grep inet
   
   # Windows
   ipconfig
   ```
3. **Accéder depuis mobile** : http://192.168.x.x:3000

## 🧪 FONCTIONNALITÉS À TESTER

### ✅ Connexion
- [x] Créer un compte avec nom + téléphone
- [x] Se souvenir de moi
- [x] Déconnexion

### ✅ Navigation
- [x] Menu latéral responsive
- [x] Sections principales (Bible, Prières, etc.)
- [x] Bouton retour
- [x] Recherche globale

### ✅ Section Bible
- [x] Sélection de version (LSG/Darby)
- [x] Navigation par livre
- [x] Changement de chapitre
- [x] Lecture audio
- [x] Ajout aux favoris (⭐)
- [x] Ajout de notes (📝)
- [x] Partage de versets (📤)

### ✅ Plan de Lecture
- [x] Mes Favoris
- [x] Mes Notes
- [x] Historique de lecture
- [x] Plans de lecture

### ✅ Synchronisation
- [x] Indicateur de statut
- [x] Mode hors ligne
- [x] Sauvegarde automatique

## 🔧 DÉPANNAGE

### Port déjà utilisé
```bash
# Changer le port dans preview-server.js
const PORT = 3001; // ou autre port
```

### Erreur de permissions
```bash
chmod +x start-preview.sh
```

### Node.js non installé
- Télécharger depuis https://nodejs.org
- Ou utiliser Python : `python3 -m http.server 8000`

## 📊 TESTS DE PERFORMANCE

### Chargement initial
- ✅ < 3 secondes sur connexion normale
- ✅ Interface responsive immédiate

### Navigation
- ✅ Changement de section instantané
- ✅ Chargement Bible < 1 seconde

### Mode hors ligne
- ✅ Fonctionnement sans internet
- ✅ Synchronisation à la reconnexion

## 🎯 POINTS D'ATTENTION

1. **Première utilisation** : Créer un compte test
2. **Bible** : Tester les 2 versions (LSG/Darby)
3. **Mobile** : Vérifier la responsivité
4. **Favoris/Notes** : Tester ajout/suppression
5. **Audio** : Contrôles de lecture
6. **Partage** : WhatsApp et copie

## 📱 SIMULATION MOBILE

### Chrome DevTools
1. F12 → Toggle device toolbar
2. Choisir iPhone/Android
3. Tester les gestes tactiles

### Firefox
1. F12 → Responsive Design Mode
2. Sélectionner appareil mobile

## 🚀 DÉPLOIEMENT

Pour déployer en production :
1. **Firebase Hosting** : `firebase deploy`
2. **Netlify** : Glisser-déposer le dossier `public`
3. **Vercel** : `vercel --prod`

---

**🎉 Votre application AUTOMATISATION est prête à être testée !**