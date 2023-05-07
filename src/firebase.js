// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyDYAW9F1kP29j38dfZuZxK4lppUkSLD25c",
// //   authDomain: "react-portfolio-abhishek.firebaseapp.com",
// //   projectId: "react-portfolio-abhishek",
// //   storageBucket: "react-portfolio-abhishek.appspot.com",
// //   messagingSenderId: "278164302078",
// //   appId: "1:278164302078:web:797fe5960bb12b5fca1daf",
// // };

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbiMd01z5rOiBxyz5J06AbiSRPh8nYs-o",
//   authDomain: "portfolio-2a8e7.firebaseapp.com",
//   projectId: "portfolio-2a8e7",
//   storageBucket: "portfolio-2a8e7.appspot.com",
//   messagingSenderId: "499778744343",
//   appId: "1:499778744343:web:29a3139a1364553ea82c52",

// };


// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore();

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