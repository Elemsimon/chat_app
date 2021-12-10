// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcCMlQksDGANpOPNNdvN5jDo-X_76woBQ",
  authDomain: "chat-app-463bb.firebaseapp.com",
  projectId: "chat-app-463bb",
  storageBucket: "chat-app-463bb.appspot.com",
  messagingSenderId: "689274359357",
  appId: "1:689274359357:web:daca937b99d098ad16a454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };