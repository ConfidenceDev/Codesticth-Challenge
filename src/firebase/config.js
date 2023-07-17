import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDL3zV1YprJWNC3bmhtGYlm6bWNcm0I0is",
  authDomain: "eshop-18e66.firebaseapp.com",
  projectId: "eshop-18e66",
  storageBucket: "eshop-18e66.appspot.com",
  messagingSenderId: "385293478538",
  appId: "1:385293478538:web:7156bd7a420f819ed11b73",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
