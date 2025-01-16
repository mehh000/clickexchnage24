// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBQif6LXCenw6S4t7xTPeii4yxHY2mbuG4",
  authDomain: "clickexchange24-13e25.firebaseapp.com",
  projectId: "clickexchange24-13e25",
  storageBucket: "clickexchange24-13e25.firebasestorage.app",
  messagingSenderId: "162148935457",
  appId: "1:162148935457:web:2f3481c7bf7e2b5aacc060",
  measurementId: "G-3RF4KYBCZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app); // Firestore initialization

export { auth, db,storage };