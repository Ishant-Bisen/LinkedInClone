// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {Firestore, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ok84zUfKGueAjvnLOS32xKapEqCZQOI",
  authDomain: "linkedin-clone-7d48d.firebaseapp.com",
  projectId: "linkedin-clone-7d48d",
  storageBucket: "linkedin-clone-7d48d.appspot.com",
  messagingSenderId: "1047578163477",
  appId: "1:1047578163477:web:7d6a486db642012314111c",
  measurementId: "G-DCK8F8SPTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth  = getAuth(app);
let firestore = getFirestore(app)
const analytics = getAnalytics(app);
export{firestore ,auth ,app};