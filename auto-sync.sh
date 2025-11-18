#!/bin/bash

# Script de surveillance automatique des fichiers
# Synchronise automatiquement à chaque modification

echo "🔍 Surveillance automatique activée..."
echo "Appuyez sur Ctrl+C pour arrêter"

# Fonction de synchronisation
sync_changes() {
    echo "📝 Changement détecté - Synchronisation..."
    ./sync-github.sh "Auto-sync: $(date '+%H:%M:%S')"
}

# Surveiller les changements dans le dossier public et les fichiers principaux
while true; do
    # Attendre 5 secondes entre chaque vérification
    sleep 5
    
    # Vérifier s'il y a des changements non commitées
    if ! git diff --quiet || ! git diff --staged --quiet; then
        sync_changes
    fi
done