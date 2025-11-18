#!/bin/bash

echo "🔍 VÉRIFICATION AUTOMATISATION"
echo "=============================="
echo ""

# 1. Vérifier Git
echo "1️⃣ État Git:"
git status --porcelain
echo ""

# 2. Vérifier Firebase
echo "2️⃣ Firebase connecté:"
firebase use --current
echo ""

# 3. Test déploiement Firebase seul
echo "3️⃣ Test déploiement Firebase:"
firebase deploy --only hosting --dry-run

echo ""
echo "✅ Vérification terminée"