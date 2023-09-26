import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
