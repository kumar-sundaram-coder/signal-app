// import firebase from "firebase";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAseA6BkNUeSnjLP2i8DUoEVD4xS5Op4OE",
  authDomain: "signal-app-clone-f6b96.firebaseapp.com",
  databaseURL: "https://signal-app-clone-f6b96-default-rtdb.firebaseio.com",
  projectId: "signal-app-clone-f6b96",
  storageBucket: "signal-app-clone-f6b96.appspot.com",
  messagingSenderId: "1039295039802",
  appId: "1:1039295039802:web:d7df24e71ffdbe362a6803",
  measurementId: "G-GR7VYHGPTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
