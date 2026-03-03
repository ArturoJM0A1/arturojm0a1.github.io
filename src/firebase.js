// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase (reemplázala con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef..."
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);