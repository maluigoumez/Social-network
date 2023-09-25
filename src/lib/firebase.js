// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBvoBLRF2CGwuVer7B-jtQe_mdBHDOsOtw',
  authDomain: 'red-social-5d8c1.firebaseapp.com',
  projectId: 'red-social-5d8c1',
  storageBucket: 'red-social-5d8c1.appspot.com',
  messagingSenderId: '328254001594',
  appId: '1:328254001594:web:17d9cc356ce8fcbd0d0d83',
  measurementId: 'G-99W3G3QCJ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}