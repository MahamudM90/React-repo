// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBy-tMjsjWyVpxQi9KrbzSCBVAxKh4ISA",
  authDomain: "auth-3b88b.firebaseapp.com",
  projectId: "auth-3b88b",
  storageBucket: "auth-3b88b.appspot.com",
  messagingSenderId: "347405224411",
  appId: "1:347405224411:web:1cf894deaef3faf4533ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;