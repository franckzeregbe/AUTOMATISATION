#!/bin/bash

echo "🚀 CONFIGURATION RAPIDE"
echo "======================"
echo ""
echo "1. Allez sur: https://github.com/settings/tokens"
echo "2. Cliquez 'Generate new token (classic)'"
echo "3. Nom: AUTOMATISATION"
echo "4. Cochez: repo"
echo "5. Generate token"
echo "6. COPIEZ le token"
echo ""
read -p "Collez votre token ici: " -s TOKEN
echo ""

git config credential.helper store
echo "https://franckzeregbe36:$TOKEN@github.com" > ~/.git-credentials

echo "✅ Token configuré!"
echo ""
echo "Test..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ GitHub OK!"
    echo ""
    echo "🔄 Automatisation complète:"
    echo "./full-automation.sh"
else
    echo "❌ Erreur token"
fi