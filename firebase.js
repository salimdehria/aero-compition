// firebase.js - Configuration Firebase avec la bonne région
const firebaseConfig = {
    apiKey: "AIzaSyCUncMgmG6g3Xl7drWotu2v4zPaf8fCLP0",
    authDomain: "aero-compition.firebaseapp.com",
    databaseURL: "https://aero-compition-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aero-compition",
    storageBucket: "aero-compition.firebasestorage.app",
    messagingSenderId: "717421617215",
    appId: "1:717421617215:web:64d54ebb8bba5a52a6d88a",
    measurementId: "G-QV1C0JHGP9"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const scoresRef = database.ref('competition/scores');
