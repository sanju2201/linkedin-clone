import firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCUHP_58c2Tw6QV-MdRl27TtO6yjL8Xxwk",
    authDomain: "linkedin-clone-6444c.firebaseapp.com",
    projectId: "linkedin-clone-6444c",
    storageBucket: "linkedin-clone-6444c.appspot.com",
    messagingSenderId: "633026920089",
    appId: "1:633026920089:web:4c7843e6b9431942c3c208"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }
