#!/bin/bash

echo "🔧 Configuration Git avec token"
echo "==============================="
echo ""

# Configurer le credential helper
git config credential.helper store

echo "✅ Credential helper configuré"
echo ""
echo "Maintenant, testez la synchronisation:"
echo "./sync-github.sh 'Test authentification'"
echo ""
echo "💡 Au premier push, entrez:"
echo "Username: franckzeregbe36"
echo "Password: [VOTRE_TOKEN_GITHUB]"