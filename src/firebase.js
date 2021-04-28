import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCWyjZMhgR2CzKRM1HLABIpN3MCTwymDdA",
    authDomain: "clone-5f326.firebaseapp.com",
    projectId: "clone-5f326",
    storageBucket: "clone-5f326.appspot.com",
    messagingSenderId: "431741857165",
    appId: "1:431741857165:web:9ad2d49b9b2ed336ea61c4",
    measurementId: "G-PCJWSVZTLS"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
