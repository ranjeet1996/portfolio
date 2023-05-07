

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIB2XFeiDjgovtyIsxkp-dhqyUfIz-IJU",
  authDomain: "portfolio2-f5a32.firebaseapp.com",
  projectId: "portfolio2-f5a32",
  storageBucket: "portfolio2-f5a32.appspot.com",
  messagingSenderId: "302203895028",
  appId: "1:302203895028:web:6bce7ce0f1ed2916beb2a1",
  measurementId: "G-3ELPCZLXML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();