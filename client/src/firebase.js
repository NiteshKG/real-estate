// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "realestate-34c1d.firebaseapp.com",
  projectId: "realestate-34c1d",
  storageBucket: "realestate-34c1d.appspot.com",
  messagingSenderId: "801266369390",
  appId: "1:801266369390:web:e06269cea7d3f54c3bf77f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);