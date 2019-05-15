import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA9tIBS5gmrkOktignuJAbjO5UGuoADpLY",
  authDomain: "personal-trainer-db.firebaseapp.com",
  databaseURL: "https://personal-trainer-db.firebaseio.com",
  projectId: "personal-trainer-db",
  storageBucket: "personal-trainer-db.appspot.com",
  messagingSenderId: "171534008342",
  appId: "1:171534008342:web:9c77343a3dac8311"
});

export default firebaseConfig;
