import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from ".firebase.js";

export const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}