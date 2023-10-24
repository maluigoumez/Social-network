// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, Timestamp, deleteDoc, doc, getDocs,
  getDoc, updateDoc, query, orderBy,
} from 'firebase/firestore';

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

// Initialize FirebaseS
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);

export const saveTask = (title, content) => addDoc(collection(db, 'post'), {
  title, content, date: Timestamp.now(), email: auth.currentUser.email,
});

export const getTasks = () => getDocs(collection(db, 'post'));

export const onGetTask = () => query(collection(db, 'post'), orderBy('date', 'desc'));
// ELIMINAR POST //

export const deleteTask = (id) => deleteDoc(doc(db, 'post', id));

// EDITAR POST//
export const getTask = (id) => getDoc(doc(db, 'post', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'post', id), newFields);
