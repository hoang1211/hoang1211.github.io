// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmGfALPJuhu6W01jqGc2LjlMkcOAI3yHM",
  authDomain: "quanlynhatro-57787.firebaseapp.com",
  databaseURL:
    "https://quanlynhatro-57787-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quanlynhatro-57787",
  storageBucket: "quanlynhatro-57787.appspot.com",
  messagingSenderId: "573356874341",
  appId: "1:573356874341:web:ac7a77f96b2e2a9bf0848c",
  measurementId: "G-9CZE09DZMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

export { db };
