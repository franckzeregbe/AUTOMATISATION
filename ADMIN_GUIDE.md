# 🔐 Guide Administrateur - AUTOMATISATION

## 📋 Table des matières

1. [Accès Administrateur](#accès-administrateur)
2. [Tableau de bord](#tableau-de-bord)
3. [Gestion des rendez-vous](#gestion-des-rendez-vous)
4. [Gestion des utilisateurs](#gestion-des-utilisateurs)
5. [Sécurité](#sécurité)

---

## 🔑 Accès Administrateur

### Connexion

1. Connectez-vous d'abord avec votre compte utilisateur (téléphone + nom)
2. Allez dans le menu **🔐 Admin**
3. Entrez le mot de passe administrateur: `admin2024`
4. Cliquez sur "Se connecter"

### Première connexion

Lors de votre première connexion en tant qu'admin, votre compte utilisateur sera automatiquement marqué comme administrateur dans la base de données locale.

---

## 📊 Tableau de bord

Le tableau de bord affiche 3 statistiques principales:

### 👥 Utilisateurs inscrits
- Nombre total d'utilisateurs enregistrés dans l'application
- Mis à jour en temps réel

### 📅 Rendez-vous
- Nombre total de rendez-vous créés
- Inclut tous les statuts (en attente, confirmé, annulé, terminé)

### ⏳ En attente
- Nombre de rendez-vous en attente de confirmation
- Nécessite une action de votre part

---

## 📅 Gestion des rendez-vous

### Statuts des rendez-vous

| Statut | Icône | Description |
|--------|-------|-------------|
| En attente | ⏳ | Nouveau rendez-vous, nécessite confirmation |
| Confirmé | ✅ | Rendez-vous confirmé par l'admin |
| Annulé | ❌ | Rendez-vous annulé (par admin ou utilisateur) |
| Terminé | ✔️ | Rendez-vous effectué et terminé |

### Actions disponibles

#### Pour les rendez-vous "En attente"
- **✅ Confirmer**: Valide le rendez-vous et informe l'utilisateur
- **❌ Annuler**: Refuse le rendez-vous

#### Pour les rendez-vous "Confirmés"
- **✔️ Marquer comme terminé**: Après avoir effectué le rendez-vous

### Informations affichées

Pour chaque rendez-vous, vous verrez:
- Nom complet de l'utilisateur
- Numéro de téléphone (+225)
- Type de rendez-vous (consultation, prière, conseil, délivrance, autre)
- Date et heure souhaitées
- Message optionnel de l'utilisateur
- Date de création de la demande
- Statut actuel

### Workflow recommandé

1. **Vérifier les nouveaux rendez-vous** (statut "En attente")
2. **Contacter l'utilisateur** par téléphone pour confirmer
3. **Confirmer le rendez-vous** dans le système
4. **Après le rendez-vous**, marquer comme "Terminé"

---

## 👥 Gestion des utilisateurs

### Informations utilisateur

Pour chaque utilisateur, vous pouvez voir:
- **Nom complet**
- **Téléphone** (+225)
- **Email** (si fourni)
- **Date d'inscription**
- **Dernière connexion**
- **Points accumulés**
- **Badge Admin** (si applicable)

### Tri

Les utilisateurs sont triés par dernière connexion (les plus récents en premier).

### Utilisation

Ces informations vous permettent de:
- Contacter les utilisateurs pour les rendez-vous
- Suivre l'activité de la communauté
- Identifier les utilisateurs les plus actifs

---

## 🔒 Sécurité

### Mot de passe administrateur

**Mot de passe par défaut**: `admin2024`

⚠️ **IMPORTANT**: Pour changer le mot de passe:

1. Ouvrez le fichier `sections/admin.html`
2. Trouvez la ligne: `const ADMIN_PASSWORD = 'admin2024';`
3. Remplacez `'admin2024'` par votre nouveau mot de passe
4. Sauvegardez le fichier

Exemple:
```javascript
const ADMIN_PASSWORD = 'MonMotDePasseSecurise2024!';
```

### Bonnes pratiques

1. **Changez le mot de passe par défaut** dès la première utilisation
2. **Ne partagez pas** vos identifiants admin
3. **Déconnectez-vous** après chaque session admin
4. **Vérifiez régulièrement** les rendez-vous en attente
5. **Contactez les utilisateurs** avant de confirmer les rendez-vous

### Stockage des données

- Toutes les données sont stockées **localement** dans le navigateur (LocalStorage)
- Aucune donnée n'est envoyée à un serveur externe
- Les données persistent tant que le cache du navigateur n'est pas vidé
- Pour sauvegarder les données, exportez régulièrement le LocalStorage

---

## 📞 Support

Pour toute question ou problème:
- **Email**: pstfranck@automatisation.com
- **Téléphone**: +225 XX XX XX XX XX
- **Localisation**: Abidjan, Côte d'Ivoire

---

## 🔄 Mises à jour

L'application se met à jour automatiquement via GitHub Pages. Aucune action n'est requise de votre part.

---

**Version 1.0.0 - 2024**

✨ **Que Dieu vous bénisse dans votre service** ✨
