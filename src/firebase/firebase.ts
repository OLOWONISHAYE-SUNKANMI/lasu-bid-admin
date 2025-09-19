// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0H3o3xCIsJqiROaLZ4OUKR9xybC7j5YM",
  authDomain: "lasu-bid-bash.firebaseapp.com",
  projectId: "lasu-bid-bash",
  storageBucket: "lasu-bid-bash.firebasestorage.app",
  messagingSenderId: "505149146337",
  appId: "1:505149146337:web:6adea4e3788a21e4c963a0",
  measurementId: "G-D9GSRCK7Q5",
};

const app = initializeApp(firebaseConfig);

// Firebase Auth instance
export const auth = getAuth(app);
