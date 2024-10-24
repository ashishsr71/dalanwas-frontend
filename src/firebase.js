// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API,
  authDomain: "dalanwas-610db.firebaseapp.com",
  databaseURL: "https://dalanwas-610db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dalanwas-610db",
  storageBucket: "dalanwas-610db.appspot.com",
  messagingSenderId: "523552335439",
  appId: "1:523552335439:web:01b722b69774cd16986c3a",
  measurementId: "G-SGH8MK2TXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage=getStorage(app);

