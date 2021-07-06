import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAseA6BkNUeSnjLP2i8DUoEVD4xS5Op4OE",
  authDomain: "signal-app-clone-f6b96.firebaseapp.com",
  projectId: "signal-app-clone-f6b96",
  storageBucket: "signal-app-clone-f6b96.appspot.com",
  messagingSenderId: "1039295039802",
  appId: "1:1039295039802:web:d7df24e71ffdbe362a6803",
  measurementId: "G-GR7VYHGPTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
