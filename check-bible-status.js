const fs = require('fs');

const bible = JSON.parse(fs.readFileSync('public/bible-lsg-complete.json', 'utf8'));

// Livres avec contenu réel vs placeholder
const realContent = [];
const placeholders = [];

Object.keys(bible).forEach(book => {
  const chapters = bible[book];
  let hasRealContent = false;
  
  Object.keys(chapters).forEach(chapter => {
    const verses = chapters[chapter];
    if (verses.some(v => !v.text.includes('Contenu en cours d\'ajout'))) {
      hasRealContent = true;
    }
  });
  
  if (hasRealContent) {
    realContent.push(book);
  } else {
    placeholders.push(book);
  }
});

console.log('📊 ÉTAT DE LA BIBLE');
console.log('==================');
console.log(`Total: ${Object.keys(bible).length}/66 livres`);
console.log(`Avec contenu réel: ${realContent.length}`);
console.log(`Placeholders: ${placeholders.length}`);
console.log('');
console.log('✅ Livres avec contenu:', realContent.join(', '));
console.log('');
console.log('⚠️  Livres à compléter:', placeholders.join(', '));