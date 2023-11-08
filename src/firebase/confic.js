// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1GDd9jIaCvXlBsDpWNRwh2mGAKYGn2Ck",
  authDomain: "shopistore-58523.firebaseapp.com",
  projectId: "shopistore-58523",
  storageBucket: "shopistore-58523.appspot.com",
  messagingSenderId: "8707337782",
  appId: "1:8707337782:web:3c1c6c631598d2de613297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);