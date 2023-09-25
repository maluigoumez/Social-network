// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA6wNwKkAk6Keq12M_Hj4IqdWP--hGiDjA',
  authDomain: 'social-e997e.firebaseapp.com',
  projectId: 'social-e997e',
  storageBucket: 'social-e997e.appspot.com',
  messagingSenderId: '1070528329980',
  appId: '1:1070528329980:web:cd0200f376d4cf1010ff79',
  measurementId: 'G-Y5RCZWEDKW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

