
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOQ2CCBmu5K5yAPcXgFKamIBaI664Y8Tw",
  authDomain: "fir-projeto1-frontend.firebaseapp.com",
  projectId: "fir-projeto1-frontend",
  storageBucket: "fir-projeto1-frontend.appspot.com",
  messagingSenderId: "582532845726",
  appId: "1:582532845726:web:8a7885f74c6341b9eb6b8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)