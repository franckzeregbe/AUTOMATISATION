#!/bin/bash

echo "🚀 Démarrage de la prévisualisation AUTOMATISATION..."
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé."
    echo "📥 Installez Node.js depuis https://nodejs.org"
    exit 1
fi

# Vérifier si le dossier public existe
if [ ! -d "public" ]; then
    echo "❌ Dossier 'public' non trouvé."
    echo "📁 Assurez-vous d'être dans le bon répertoire."
    exit 1
fi

echo "✅ Node.js détecté : $(node --version)"
echo "📁 Dossier public trouvé"
echo ""

# Démarrer le serveur
echo "🌐 Démarrage du serveur local..."
node preview-server.js