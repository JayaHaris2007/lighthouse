
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJEbe8PXQXDBjCXnseN-bJ5kYNbzLqHsI",
    authDomain: "light-house-b8fca.firebaseapp.com",
    projectId: "light-house-b8fca",
    storageBucket: "light-house-b8fca.firebasestorage.app",
    messagingSenderId: "14725274842",
    appId: "1:14725274842:web:891c568960e92fd74fd9e3",
    measurementId: "G-8LHZ8N4SR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Exporting auth if needed for admin tool later
