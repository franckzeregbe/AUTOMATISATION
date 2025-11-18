const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "automatisation-e8348.firebasestorage.app"
});

const bucket = admin.storage().bucket();

async function uploadQuizQuestions() {
  try {
    const quizData = fs.readFileSync('./public/quiz-questions.js', 'utf8');
    
    const file = bucket.file('quiz-questions.js');
    await file.save(quizData, {
      metadata: {
        contentType: 'application/javascript',
        cacheControl: 'public, max-age=3600'
      }
    });
    
    console.log('✅ Quiz questions uploaded to Firebase Storage');
    
    // Get download URL
    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: '03-09-2491'
    });
    
    console.log('📁 Download URL:', url);
    
  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
}

uploadQuizQuestions();