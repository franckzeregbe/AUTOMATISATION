#!/bin/bash

echo "🔑 AJOUT TOKEN GITHUB"
echo "===================="
echo ""

read -p "Collez votre token GitHub: " TOKEN

# Créer le fichier credentials
echo "https://franckzeregbe36:$TOKEN@github.com" > ~/.git-credentials

echo "✅ Token ajouté!"
echo ""
echo "Test push..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ GitHub configuré avec succès!"
else
    echo "❌ Erreur - vérifiez votre token"
fi