import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.js';

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const updateUserProfile = (name) => updateProfile(auth.currentUser, { displayName: name });
