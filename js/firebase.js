// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"; // Importa Firestore
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js"; // Importa Storage
// Your web app's Firebase configuration
const firebaseConfig = {



?



  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Inicializa Firestore
const storage = getStorage(app); // Inicializa Storage
// Export the auth object and functions
export {
  auth,
  db, // Exporta Firestore
  storage, // Exporta Storage
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
