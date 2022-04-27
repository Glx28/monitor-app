import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0y6DBzKla5FOZqXyKsIL7y1bCnxA0ouk",
  authDomain: "monitor-app-12a6e.firebaseapp.com",
  projectId: "monitor-app-12a6e",
  storageBucket: "monitor-app-12a6e.appspot.com",
  messagingSenderId: "794172046908",
  appId: "1:794172046908:web:b803b327e5f2a3fe8d8d39",
  measurementId: "G-GQDY8WT1SX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
