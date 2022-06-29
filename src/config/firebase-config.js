import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfRab5Vs4LGrWDkW3lYF4P0fSbTZ1H4kY",
  authDomain: "anonymatus-9e1db.firebaseapp.com",
  projectId: "anonymatus-9e1db",
  storageBucket: "anonymatus-9e1db.appspot.com",
  messagingSenderId: "747954547354",
  appId: "1:747954547354:web:2cd0dd559bf9a30707cd23",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
