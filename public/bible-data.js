// Bible Data Loader - Système hybride local + API
let bibleData = {};
let bibleAPI = {
  baseUrl: 'https://bible-api.com',
  cache: new Map()
};

// Fonction pour charger les données Bible depuis Firebase
async function loadBibleData() {
  try {
    const [lsgResponse, darbyResponse, frResponse] = await Promise.all([
      fetch('https://automatisation-e8348-default-rtdb.firebaseio.com/bibles/lsg.json'),
      fetch('https://automatisation-e8348-default-rtdb.firebaseio.com/bibles/darby.json'),
      fetch('https://automatisation-e8348-default-rtdb.firebaseio.com/bibles/french.json')
    ]);
    
    const [lsgData, darbyData, frData] = await Promise.all([
      lsgResponse.json(),
      darbyResponse.json(),
      frResponse.json()
    ]);
    
    bibleData = { lsg: lsgData, darby: darbyData, french: frData };
    console.log('✅ Bible Firebase chargée:', Object.keys(lsgData || {}).length, 'livres');
    return true;
  } catch (error) {
    console.error('❌ Erreur chargement Bible Firebase:', error);
    bibleData = {
      lsg: { GEN: { 1: [{ verse: 1, text: "Au commencement, Dieu créa les cieux et la terre." }] } },
      darby: { GEN: { 1: [{ verse: 1, text: "Au commencement Dieu créa les cieux et la terre." }] } }
    };
    return false;
  }
}

// Fonction pour récupérer depuis l'API Bible
async function fetchFromBibleAPI(bookId, chapter) {
  const cacheKey = `${bookId}_${chapter}`;
  if (bibleAPI.cache.has(cacheKey)) {
    return bibleAPI.cache.get(cacheKey);
  }
  
  try {
    const response = await fetch(`${bibleAPI.baseUrl}/${bookId}+${chapter}?translation=kjv`);
    if (!response.ok) throw new Error('API Error');
    
    const data = await response.json();
    const verses = data.verses.map(v => ({
      verse: v.verse,
      text: v.text
    }));
    
    bibleAPI.cache.set(cacheKey, verses);
    return verses;
  } catch (error) {
    console.log('API Bible non disponible pour', bookId, chapter);
    return null;
  }
}

// Fonction hybride pour obtenir un chapitre
async function getBibleChapter(version, bookId, chapter) {
  // 1. Essayer les données locales
  if (bibleData[version] && bibleData[version][bookId] && bibleData[version][bookId][chapter]) {
    return bibleData[version][bookId][chapter];
  }
  
  // 2. Essayer l'API (seulement pour LSG/KJV)
  if (version === 'lsg') {
    const apiData = await fetchFromBibleAPI(bookId, chapter);
    if (apiData) return apiData;
  }
  
  // 3. Fallback
  return [{ verse: 1, text: `Chapitre ${chapter} du livre ${bookId} - Contenu en cours de chargement.` }];
}

// Charger automatiquement au démarrage
if (typeof window !== 'undefined') {
  loadBibleData().then(() => {
    window.bibleData = bibleData;
    // Déclencher un événement pour notifier que les données sont prêtes
    window.dispatchEvent(new CustomEvent('bibleDataLoaded'));
  });
}

if (typeof window !== 'undefined') {
  window.bibleData = bibleData;
}
