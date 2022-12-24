import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBcEZY0AeJJ-pH-392GeeSondEVwKxjQIs",
  authDomain: "fir-87328.firebaseapp.com",
  projectId: "fir-87328",
  storageBucket: "fir-87328.appspot.com",
  messagingSenderId: "490110549007",
  appId: "1:490110549007:web:fa250f7c922445fdd1377a",
  measurementId: "G-D734ZDWYPQ"
  };


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};