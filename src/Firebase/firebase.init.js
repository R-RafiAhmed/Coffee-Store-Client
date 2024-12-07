// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6PhfvP_2lU4L3yvhCxcoUELaXmaihPI",
  authDomain: "coffee-store-86da2.firebaseapp.com",
  projectId: "coffee-store-86da2",
  storageBucket: "coffee-store-86da2.firebasestorage.app",
  messagingSenderId: "515095569108",
  appId: "1:515095569108:web:cb30b65c3630c1536ed141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;