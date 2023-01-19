import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbiMd01z5rOiBxyz5J06AbiSRPh8nYs-o",
  authDomain: "portfolio-2a8e7.firebaseapp.com",
  projectId: "portfolio-2a8e7",
  storageBucket: "portfolio-2a8e7.appspot.com",
  messagingSenderId: "499778744343",
  appId: "1:499778744343:web:29a3139a1364553ea82c52",
  measurementId: "G-3SHQTZ26JJ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();