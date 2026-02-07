import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRALToOzlcBiaMWP-8Jo3L5BpJ2QvXlyM",
  authDomain: "inventory-dashboard-auth.firebaseapp.com",
  projectId: "inventory-dashboard-auth",
  storageBucket: "inventory-dashboard-auth.firebasestorage.app",
  messagingSenderId: "455637898832",
  appId: "1:455637898832:web:475c7ce1a6f55400176355",
  measurementId: "G-P345LT0N7H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
