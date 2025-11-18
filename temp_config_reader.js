c// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIws2UWw4lJr-OueYaT8iy7aIH8b0_J3g",
  authDomain: "automatisation-e8348.firebaseapp.com",
  projectId: "automatisation-e8348",
  storageBucket: "automatisation-e8348.firebasestorage.app",
  messagingSenderId: "573101013062",
  appId: "1:573101013062:web:a711bd15f015b42b46b247",
  measurementId: "G-JB56EDKFQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);onst firebaseConfig = {};