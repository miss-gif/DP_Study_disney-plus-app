// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUCIMSaAKUtgSf1r_3L4SR_OaK7MJg-JI",
  authDomain: "react-disney-plus-app-ee1c2.firebaseapp.com",
  projectId: "react-disney-plus-app-ee1c2",
  storageBucket: "react-disney-plus-app-ee1c2.appspot.com",
  messagingSenderId: "435150051708",
  appId: "1:435150051708:web:e08267ff813968329c2cf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
