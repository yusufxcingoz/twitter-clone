import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBC5BqrMpyZ457brmO8dc_Mya5D1RcCUyo",
  authDomain: "twitter-clone1-dc01b.firebaseapp.com",
  projectId: "twitter-clone1-dc01b",
  storageBucket: "twitter-clone1-dc01b.appspot.com",
  messagingSenderId: "839959143059",
  appId: "1:839959143059:web:843948150ef761125ca366",
  measurementId: "G-GJRJ6HQ6X0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
