import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_cDEn86AbIjYawA6f-fK_ac9kURjoIIk",
  authDomain: "najotbek-57050.firebaseapp.com",
  projectId: "najotbek-57050",
  storageBucket: "najotbek-57050.firebasestorage.app",
  messagingSenderId: "642212440585",
  appId: "1:642212440585:web:8040635fb95d477397a6d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);