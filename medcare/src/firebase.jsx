
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4373GSOWxaXrRVyQ5fAE3JRADjBvndhI",
  authDomain: "chatapp-5a5fc.firebaseapp.com",
  projectId: "chatapp-5a5fc",
  storageBucket: "chatapp-5a5fc.appspot.com",
  messagingSenderId: "606107620021",
  appId: "1:606107620021:web:e02c93d07fa887728824fc",
  measurementId: "G-CZ93LMGEE1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();