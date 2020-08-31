import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAp3oW6gSSIPjbMB2EaZriF1vQ1iON4n4",
  authDomain: "instagram-clone-3705a.firebaseapp.com",
  databaseURL: "https://instagram-clone-3705a.firebaseio.com",
  projectId: "instagram-clone-3705a",
  storageBucket: "instagram-clone-3705a.appspot.com",
  messagingSenderId: "246805502098",
  appId: "1:246805502098:web:f6583319e32fb32a002e4b",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
