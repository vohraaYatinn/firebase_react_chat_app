import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM77dchHEK_zhWYgPAgODSs2LoMk8Jhz0",
  authDomain: "chatapp-cefc5.firebaseapp.com",
  projectId: "chatapp-cefc5",
  storageBucket: "chatapp-cefc5.appspot.com",
  messagingSenderId: "185216943854",
  appId: "1:185216943854:web:39d2cfd67b1fa66b4615ff",
  measurementId: "G-E90J6ZKGGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore()
