// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmMLaV9uF4EZsdPmr7jNaCm-h_ygdQOGU",
  authDomain: "roamsolo-382ea.firebaseapp.com",
  projectId: "roamsolo-382ea",
  storageBucket: "roamsolo-382ea.appspot.com",
  messagingSenderId: "52864747361",
  appId: "1:52864747361:web:719b2018bef81e4f646720",
  measurementId: "G-X9EV22JG8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {app , auth};