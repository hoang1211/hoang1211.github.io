import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDchxLrtWGCfcloTMLt2WknIBCezTy9Puw",
  authDomain: "animeworld-54a1c.firebaseapp.com",
  databaseURL:
    "https://animeworld-54a1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "animeworld-54a1c",
  storageBucket: "animeworld-54a1c.appspot.com",
  messagingSenderId: "607896658979",
  appId: "1:607896658979:web:237291b90147ec07943d96",
  measurementId: "G-28G0R0ZJ6W",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const getF = (alias) => {
  let findItem;
  const dataRef = ref(db, "films");
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    findItem = data.find((item) => item.alias == alias);
  });
  return findItem;
};

export { db, getF };
