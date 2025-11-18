#!/bin/bash

# Automatisation complète : Sync GitHub + Deploy Firebase
# Usage: ./full-automation.sh [message]

MESSAGE=${1:-"Auto-update $(date '+%Y-%m-%d %H:%M:%S')"}

echo "🔄 AUTOMATISATION COMPLÈTE"
echo "=========================="
echo ""

# 1. Synchronisation GitHub
echo "1️⃣ Synchronisation GitHub..."
./sync-github.sh "$MESSAGE"

if [ $? -eq 0 ]; then
    echo ""
    # 2. Déploiement Firebase
    echo "2️⃣ Déploiement Firebase..."
    ./deploy.sh
    
    echo ""
    echo "✅ AUTOMATISATION TERMINÉE !"
    echo "🌐 Site: https://automatisation-e8348.web.app"
else
    echo "❌ Erreur lors de la synchronisation GitHub"
    exit 1
fi