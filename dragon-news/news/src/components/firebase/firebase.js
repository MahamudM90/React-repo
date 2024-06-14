// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNx8pbUam7XfkSREeDtkD7ntd2-pWAIA8",
  authDomain: "dragonnews-41e19.firebaseapp.com",
  projectId: "dragonnews-41e19",
  storageBucket: "dragonnews-41e19.appspot.com",
  messagingSenderId: "858028581161",
  appId: "1:858028581161:web:326a74f2684f0aa3339738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default (auth);