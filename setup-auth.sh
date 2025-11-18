#!/bin/bash

echo "🔐 Configuration de l'authentification GitHub"
echo "=============================================="
echo ""
echo "1. Allez sur: https://github.com/settings/tokens"
echo "2. Cliquez sur 'Generate new token (classic)'"
echo "3. Donnez un nom: 'AUTOMATISATION-sync'"
echo "4. Sélectionnez les permissions: 'repo' (accès complet aux dépôts)"
echo "5. Cliquez 'Generate token'"
echo "6. COPIEZ le token (vous ne le reverrez plus !)"
echo ""
echo "Ensuite, revenez ici et exécutez:"
echo "./configure-git.sh"