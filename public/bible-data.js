// Bible Data Loader - Système hybride local + API
let bibleData = {};
let bibleAPI = {
  baseUrl: 'https://bible-api.com',
  cache: new Map()
};

// Fonction pour charger les données Bible depuis Firebase
async function loadBibleData() {
  try {
    const [lsgResponse, darbyResponse] = await Promise.all([
      fetch('https://automatisation-e8348-default-rtdb.firebaseio.com/bibles/lsg.json'),
      fetch('https://automatisation-e8348-default-rtdb.firebaseio.com/bibles/darby.json')
    ]);
    
    const [lsgData, darbyData] = await Promise.all([
      lsgResponse.json(),
      darbyResponse.json()
    ]);
    
    bibleData = { lsg: lsgData, darby: darbyData };
    console.log('✅ Bible Firebase chargée:', Object.keys(bibleData.lsg || {}).length, 'livres LSG');
    window.dispatchEvent(new CustomEvent('bibleDataLoaded')); // Dispatch event here
    return true;
  } catch (error) {
    console.error('❌ Erreur chargement Bible Firebase:', error);
    bibleData = {
      lsg: {},
      darby: {}
    };
    window.dispatchEvent(new CustomEvent('bibleDataLoaded')); // Also dispatch on error to unblock UI
    return false;
  }
}

// Fonction pour récupérer depuis l'API Bible
async function fetchFromBibleAPI(bookId, chapter, version) {
  const supportedVersions = ['lsg', 'darby'];
  const apiVersion = supportedVersions.includes(version) ? version : 'lsg'; // fallback to lsg for french
  const cacheKey = `${bookId}_${chapter}_${apiVersion}`;
  
  if (bibleAPI.cache.has(cacheKey)) {
    return bibleAPI.cache.get(cacheKey);
  }
  
  try {
    // bible-api.com uses 'lsg' for Louis Segond, and 'darby' for Darby French
    const response = await fetch(`${bibleAPI.baseUrl}/${bookId}+${chapter}?translation=${apiVersion}`);
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    
    const data = await response.json();
    // The API might return an error in the JSON body
    if (data.error) throw new Error(data.error);

    const verses = data.verses.map(v => ({
      verse: v.verse,
      text: v.text.trim()
    }));
    
    bibleAPI.cache.set(cacheKey, verses);
    return verses;
  } catch (error) {
    console.error(`API Bible non disponible pour ${bookId} ${chapter} [${version}]:`, error);
    return null;
  }
}

// Fonction hybride pour obtenir un chapitre
async function getBibleChapter(version, bookId, chapter) {
  // 1. Essayer les données locales chargées depuis Firebase
  if (window.bibleData && window.bibleData[version] && window.bibleData[version][bookId] && window.bibleData[version][bookId][chapter]) {
    return window.bibleData[version][bookId][chapter];
  }
  
  // 2. Si non trouvé, essayer l'API externe comme fallback
  console.log(`Données locales non trouvées pour ${version}/${bookId}/${chapter}. Tentative via API.`);
  const apiData = await fetchFromBibleAPI(bookId, chapter, version);
  if (apiData) {
      // Optionnel: Sauvegarder les données de l'API dans la structure locale pour la session
      if (window.bibleData && window.bibleData[version]) {
          if (!window.bibleData[version][bookId]) {
              window.bibleData[version][bookId] = {};
          }
          window.bibleData[version][bookId][chapter] = apiData;
      }
      return apiData;
  }
  
  // 3. Fallback ultime si tout échoue
  console.error(`Impossible de charger le chapitre ${bookId} ${chapter} pour la version ${version}`);
  return null;
}

// Charger automatiquement au démarrage
if (typeof window !== 'undefined') {
  if (!window.bibleData) { // check if already loaded
      window.bibleData = {};
      loadBibleData();
  }
  // Exposer la fonction au scope global
  window.getBibleChapter = getBibleChapter;
}
