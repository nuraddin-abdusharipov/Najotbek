import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js";

// Firebase konfiguratsiyangizni shu yerga qo'ying
const firebaseConfig = {
  apiKey: "AIzaSyA_cDEn86AbIjYawA6f-fK_ac9kURjoIIk",
  authDomain: "najotbek-57050.firebaseapp.com",
  projectId: "najotbek-57050",
  storageBucket: "najotbek-57050.firebasestorage.app",
  messagingSenderId: "642212440585",
  appId: "1:642212440585:web:8040635fb95d477397a6d8"
};

// Firebase ni ishga tushirish
const app = initializeApp(firebaseConfig);

// Authentication va Firestore ni eksport qilish
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);