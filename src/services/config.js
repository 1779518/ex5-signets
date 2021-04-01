/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyAPWgfU_eSPhNQQf2Gyncew2kgo-OMUNIQ",
  authDomain: "ex3-panier.firebaseapp.com",
  databaseURL: "https://ex3-panier-default-rtdb.firebaseio.com",
  projectId: "ex3-panier",
  storageBucket: "ex3-panier.appspot.com",
  messagingSenderId: "110586098504",
  appId: "1:110586098504:web:d6c1fdd0d3a43d783bf97d"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";