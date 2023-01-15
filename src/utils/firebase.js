import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCpbSI0pV17cyxZ_iu2U5XExAE0Oya1Vs0",
  authDomain: "testedecoisas-bce2e.firebaseapp.com",
  databaseURL: "https://testedecoisas-bce2e-default-rtdb.firebaseio.com",
  projectId: "testedecoisas-bce2e",
  storageBucket: "testedecoisas-bce2e.appspot.com",
  messagingSenderId: "401343672387",
  appId: "1:401343672387:web:b74070fdde758fb504e4f6",
  measurementId: "G-LZ2ZFEKFJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth =getAuth(app)