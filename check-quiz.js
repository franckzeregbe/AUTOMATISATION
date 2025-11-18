const fs = require('fs');

// Lire le fichier quiz
const quizContent = fs.readFileSync('public/quiz-questions.js', 'utf8');

// Extraire les questions
const match = quizContent.match(/window\.quizQuestions=(\[.*\]);/s);
if (!match) {
  console.log('❌ Format invalide');
  process.exit(1);
}

const quizData = JSON.parse(match[1]);

console.log('📊 ANALYSE DU QUIZ');
console.log('==================');
console.log(`Niveaux de difficulté: ${quizData.length}`);

quizData.forEach((level, index) => {
  const levelName = ['Facile', 'Moyen', 'Vide', 'Difficile', 'Expert', 'Maître'][index] || `Niveau ${index + 1}`;
  console.log(`${levelName}: ${level.length} questions`);
  
  if (level.length > 0) {
    // Vérifier la structure des questions
    const firstQ = level[0];
    const hasValidStructure = firstQ.question && firstQ.options && Array.isArray(firstQ.options) && typeof firstQ.answer === 'number';
    console.log(`  Structure: ${hasValidStructure ? '✅' : '❌'}`);
    
    // Vérifier les réponses
    const validAnswers = level.every(q => q.answer >= 0 && q.answer < q.options.length);
    console.log(`  Réponses valides: ${validAnswers ? '✅' : '❌'}`);
  }
});

const totalQuestions = quizData.reduce((sum, level) => sum + level.length, 0);
console.log('');
console.log(`Total questions: ${totalQuestions}`);
console.log(`Niveau vide: ${quizData[2].length === 0 ? '⚠️  Niveau 3 vide' : '✅'}`);

// Vérifier les doublons
const allQuestions = quizData.flat().map(q => q.question);
const duplicates = allQuestions.filter((q, i) => allQuestions.indexOf(q) !== i);
console.log(`Doublons: ${duplicates.length > 0 ? '⚠️  ' + duplicates.length : '✅ Aucun'}`);

console.log('');
console.log('🎯 RECOMMANDATIONS:');
if (quizData[2].length === 0) {
  console.log('- Ajouter des questions au niveau 3');
}
if (totalQuestions < 300) {
  console.log('- Ajouter plus de questions pour enrichir le quiz');
}
console.log('- Quiz fonctionnel avec', totalQuestions, 'questions réparties sur', quizData.filter(l => l.length > 0).length, 'niveaux');