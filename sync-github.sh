#!/bin/bash

# Script de synchronisation automatique avec GitHub
# Usage: ./sync-github.sh [message]

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Message de commit par défaut
MESSAGE=${1:-"Synchronisation automatique - $(date '+%Y-%m-%d %H:%M:%S')"}

echo -e "${YELLOW}🔄 Synchronisation avec GitHub...${NC}"

# Vérifier si on est dans un repo git
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Erreur: Pas dans un dépôt Git${NC}"
    exit 1
fi

# Ajouter tous les fichiers
echo -e "${YELLOW}📁 Ajout des fichiers...${NC}"
git add .

# Vérifier s'il y a des changements
if git diff --staged --quiet; then
    echo -e "${GREEN}✅ Aucun changement à synchroniser${NC}"
    exit 0
fi

# Commiter les changements
echo -e "${YELLOW}💾 Commit des changements...${NC}"
git commit -m "$MESSAGE"

# Pousser vers GitHub (avec gestion d'erreur)
echo -e "${YELLOW}🚀 Push vers GitHub...${NC}"
if git push origin main 2>/dev/null; then
    echo -e "${GREEN}✅ Synchronisation réussie !${NC}"
else
    echo -e "${RED}❌ Erreur lors du push. Configurez votre authentification GitHub.${NC}"
    echo -e "${YELLOW}💡 Solutions:${NC}"
    echo "1. Configurez un token GitHub: git config credential.helper store"
    echo "2. Ou utilisez SSH: git remote set-url origin git@github.com:franckzeregbe/AUTOMATISATION.git"
    exit 1
fi