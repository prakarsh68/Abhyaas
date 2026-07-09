
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "abhyaas-cd8dc.firebaseapp.com",
  projectId: "abhyaas-cd8dc",
  storageBucket: "abhyaas-cd8dc.firebasestorage.app",
  messagingSenderId: "838047015655",
  appId: "1:838047015655:web:6d67615790505d97473842"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}