// src/fire.js
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
var fire = firebase.initializeApp(firebaseConfig);
export default fire;