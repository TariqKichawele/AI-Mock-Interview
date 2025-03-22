
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUehKkiFmm18v_VIiqvVWEY-WkHPXb3co",
  authDomain: "prepwise-ae026.firebaseapp.com",
  projectId: "prepwise-ae026",
  storageBucket: "prepwise-ae026.firebasestorage.app",
  messagingSenderId: "239737627868",
  appId: "1:239737627868:web:c022758d410470ffda0019",
  measurementId: "G-NF4BG7NX27"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);