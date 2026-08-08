import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsp8yFCiRUxY1tuSYg-eXgNj1QyCBoGo0",
  authDomain: "invitationcard-523c1.firebaseapp.com",
  projectId: "invitationcard-523c1",
  storageBucket: "invitationcard-523c1.firebasestorage.app",
  messagingSenderId: "826969809855",
  appId: "1:826969809855:web:98fc31ffa49210ba5ff70a",
  measurementId: "G-SX9SCJTDKQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

