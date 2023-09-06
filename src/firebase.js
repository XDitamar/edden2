// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD5R_QaBZfkPSoQ2w8H35Ux-4LaE8JfXrs",
  authDomain: "project-eden-c8750.firebaseapp.com",
  projectId: "project-eden-c8750",
  storageBucket: "project-eden-c8750.appspot.com",
  messagingSenderId: "954934526891",
  appId: "1:954934526891:web:b59eefd0e46def85e1c8ee"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
