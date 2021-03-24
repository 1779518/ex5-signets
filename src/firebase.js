import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyAPWgfU_eSPhNQQf2Gyncew2kgo-OMUNIQ",
  authDomain: "ex3-panier.firebaseapp.com",
  databaseURL: "https://ex3-panier-default-rtdb.firebaseio.com",
  projectId: "ex3-panier",
  storageBucket: "ex3-panier.appspot.com",
  messagingSenderId: "110586098504",
  appId: "1:110586098504:web:d6c1fdd0d3a43d783bf97d"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
