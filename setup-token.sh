#!/bin/bash

echo "🔐 Configuration du token GitHub"
echo "================================"
echo ""

# Configurer credential helper
git config credential.helper store

echo "✅ Credential helper configuré"
echo ""
echo "Testez maintenant la synchronisation:"
echo "./sync-github.sh 'Test token'"
echo ""
echo "💡 Lors du premier push, entrez:"
echo "Username: franckzeregbe36"
echo "Password: [VOTRE_TOKEN_GITHUB]"