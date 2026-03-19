// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUncMgmG6g3Xl7drWotu2v4zPaf8fCLP0",
  authDomain: "aero-compition.firebaseapp.com",
  projectId: "aero-compition",
  storageBucket: "aero-compition.firebasestorage.app",
  messagingSenderId: "717421617215",
  appId: "1:717421617215:web:64d54ebb8bba5a52a6d88a",
  measurementId: "G-QV1C0JHGP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
