// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp3t5jUaOxFYuyJmN1t828_EVKfAIx8Js",
  authDomain: "myfirstfirebase-96af8.firebaseapp.com",
  projectId: "myfirstfirebase-96af8",
  storageBucket: "myfirstfirebase-96af8.appspot.com",
  messagingSenderId: "26768528312",
  appId: "1:26768528312:web:14897c80c404877326354d",
  measurementId: "G-9CW266FWF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
