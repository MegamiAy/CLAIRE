import { getAuth, signOut } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAj6Fq3ke6hP51dwU_K9xgsHO5c-ZbIoVU",

  authDomain: "clairejuliani.firebaseapp.com",

  projectId: "clairejuliani",

  storageBucket: "clairejuliani.appspot.com",

  messagingSenderId: "705826399861",

  appId: "1:705826399861:web:fcf7aa41be3da088a1ba3c",

  measurementId: "G-86F525CS95"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(app);
