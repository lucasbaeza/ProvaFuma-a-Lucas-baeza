import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "A48D4D8S4F4EWFFWEDSF",
    authDomain: "lucas-4541aa.firebaseapp.com",
    databaseURL: "https://prova-c36da.firebaseio.com",
    projectId: "lucas-123",
    storageBucket: "prova-4541aa.appspot.com",
    messagingSenderId: "1095774557497",
    appId: "1:35434535339867:web:c567658768d2957330e04e8",
    measurementId: "G-BJSCFT8XP9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
