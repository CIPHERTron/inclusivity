import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'
  import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyApl17amC6okJgsyXBsV0YBAj4mWosoI8c",
 authDomain: "inclusivity-d1c2a.firebaseapp.com",
 projectId: "inclusivity-d1c2a",
 storageBucket: "inclusivity-d1c2a.appspot.com",
 messagingSenderId: "1012762470343",
 appId: "1:1012762470343:web:adc3240418c41dfdba9be2"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;