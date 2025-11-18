// Firebase configuration - Use environment variables in production
const firebaseConfig = {
  apiKey: "AIzaSyDIws2UWw4lJr-OueYaT8iy7aIH8b0_J3g",
  authDomain: "automatisation-e8348.firebaseapp.com",
  projectId: "automatisation-e8348",
  storageBucket: "automatisation-e8348.firebasestorage.app",
  messagingSenderId: "573101013062",
  appId: "1:573101013062:web:a711bd15f015b42b46b247",
  measurementId: "G-JB56EDKFQB"
};

try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}