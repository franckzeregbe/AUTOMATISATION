// Gestionnaire de synchronisation pour AUTOMATISATION
class SyncManager {
  constructor() {
    this.isOnline = navigator.onLine;
    this.syncQueue = [];
    this.lastSync = localStorage.getItem('lastSync') || null;
    this.init();
  }

  init() {
    // Écouter les changements de connexion
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.processSyncQueue();
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Synchronisation automatique toutes les 5 minutes
    setInterval(() => {
      if (this.isOnline) this.syncUserData();
    }, 5 * 60 * 1000);
  }

  // Ajouter une action à la queue de synchronisation
  addToSyncQueue(action) {
    this.syncQueue.push({
      ...action,
      timestamp: Date.now(),
      id: Math.random().toString(36).substr(2, 9)
    });
    
    if (this.isOnline) {
      this.processSyncQueue();
    }
  }

  // Traiter la queue de synchronisation
  async processSyncQueue() {
    if (this.syncQueue.length === 0) return;

    const actions = [...this.syncQueue];
    this.syncQueue = [];

    for (const action of actions) {
      try {
        await this.processAction(action);
      } catch (error) {
        console.error('Erreur sync:', error);
        // Remettre en queue si échec
        this.syncQueue.push(action);
      }
    }
  }

  // Traiter une action spécifique
  async processAction(action) {
    switch (action.type) {
      case 'bible_favorite':
        await this.syncBibleFavorite(action.data);
        break;
      case 'bible_note':
        await this.syncBibleNote(action.data);
        break;
      case 'reading_progress':
        await this.syncReadingProgress(action.data);
        break;
      case 'user_stats':
        await this.syncUserStats(action.data);
        break;
    }
  }

  // Synchroniser les données utilisateur
  async syncUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;

    const userData = {
      user: currentUser,
      favorites: JSON.parse(localStorage.getItem(`bibleFavorites_${currentUser.phone}`)) || [],
      notes: JSON.parse(localStorage.getItem(`bibleNotes_${currentUser.phone}`)) || [],
      history: JSON.parse(localStorage.getItem(`bibleHistory_${currentUser.phone}`)) || [],
      stats: JSON.parse(localStorage.getItem(`userStats_${currentUser.phone}`)) || {},
      lastSync: new Date().toISOString()
    };

    // Simuler l'envoi vers un serveur (remplacer par vraie API)
    console.log('📤 Synchronisation des données:', userData);
    localStorage.setItem('lastSync', userData.lastSync);
  }

  // Méthodes spécifiques de synchronisation
  async syncBibleFavorite(data) {
    console.log('Sync favorite:', data);
  }

  async syncBibleNote(data) {
    console.log('Sync note:', data);
  }

  async syncReadingProgress(data) {
    console.log('Sync progress:', data);
  }

  async syncUserStats(data) {
    console.log('Sync stats:', data);
  }

  // Sauvegarder les données localement avec sync
  saveWithSync(key, data, syncType = null) {
    localStorage.setItem(key, JSON.stringify(data));
    
    if (syncType && this.isOnline) {
      this.addToSyncQueue({
        type: syncType,
        data: data,
        key: key
      });
    }
  }

  // Obtenir le statut de synchronisation
  getSyncStatus() {
    return {
      isOnline: this.isOnline,
      lastSync: this.lastSync,
      queueLength: this.syncQueue.length
    };
  }
}

// Instance globale
window.syncManager = new SyncManager();

// Fonctions utilitaires pour l'application
window.saveUserData = function(key, data, syncType = null) {
  window.syncManager.saveWithSync(key, data, syncType);
};

window.getSyncStatus = function() {
  return window.syncManager.getSyncStatus();
};