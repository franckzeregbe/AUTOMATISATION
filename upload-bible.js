const admin = require('firebase-admin');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(require('./serviceAccountKey.json')),
  databaseURL: "https://automatisation-e8348-default-rtdb.firebaseio.com/"
});

const db = admin.database();

async function uploadBibles() {
  try {
    // Upload LSG Bible
    const lsgData = JSON.parse(fs.readFileSync('./public/bible-lsg-complete.json', 'utf8'));
    await db.ref('bibles/lsg').set(lsgData);
    console.log('✅ Bible LSG uploaded');

    // Upload Darby Bible
    const darbyData = JSON.parse(fs.readFileSync('./public/bible-darby-complete.json', 'utf8'));
    await db.ref('bibles/darby').set(darbyData);
    console.log('✅ Bible Darby uploaded');

    // Upload French Bible
    const frData = JSON.parse(fs.readFileSync('./public/bible-fr-complete.json', 'utf8'));
    await db.ref('bibles/french').set(frData);
    console.log('✅ Bible French uploaded');

    // Upload Quiz Questions
    const quizData = fs.readFileSync('./public/quiz-questions.js', 'utf8');
    const quizJson = quizData.replace('window.quizQuestions=', '').replace(/;$/, '');
    await db.ref('quiz/questions').set(JSON.parse(quizJson));
    console.log('✅ Quiz questions uploaded');

    console.log('🎉 All data uploaded to Firebase Database');
    process.exit(0);
  } catch (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  }
}

uploadBibles();