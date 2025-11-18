# Guide de Synchronisation GitHub

## 🚀 Synchronisation Automatique Configurée

### Scripts disponibles :

#### 1. **sync-github.sh** - Synchronisation manuelle
```bash
./sync-github.sh                    # Sync avec message automatique
./sync-github.sh "Mon message"      # Sync avec message personnalisé
```

#### 2. **auto-sync.sh** - Surveillance automatique
```bash
./auto-sync.sh                      # Lance la surveillance continue
```

### 🔧 Configuration requise :

Pour que la synchronisation fonctionne, configurez votre authentification :

#### Option 1: Token GitHub (Recommandé)
```bash
git config credential.helper store
git push origin main  # Entrez votre token à la première fois
```

#### Option 2: SSH
```bash
git remote set-url origin git@github.com:franckzeregbe/AUTOMATISATION.git
```

### 📋 Utilisation quotidienne :

1. **Sync manuelle** : `./sync-github.sh "Description des changements"`
2. **Sync automatique** : `./auto-sync.sh` (surveille en continu)
3. **Arrêter la surveillance** : `Ctrl+C`

### ✅ Statut actuel :
- ✅ Projet connecté à GitHub
- ✅ Scripts de synchronisation créés
- ⚠️ Authentification à configurer