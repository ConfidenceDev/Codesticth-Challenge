import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Replace firebaseConig with your project config
//https://console.firebase.google.com/
export const firebaseConfig = {
  apiKey: "<Your API Key>",
  authDomain: "<Your Auth Domain>",
  projectId: "<Your Project ID>",
  storageBucket: "<Your Storage Bucket>",
  messagingSenderId: "<Your Sender ID>",
  appId: "<Your APP ID>",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
