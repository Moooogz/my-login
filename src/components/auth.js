
import { useState } from "react";
import {auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");

    console.log(auth?.currentUser?.email )

    const signIn = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    }

    const signInWithGoogleAccount = async() => {
        try {
            await signInWithPopup(auth,googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    const logOut = async() => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email....."/>
            <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password...."/>
            <button onClick={signIn}>Sign In</button>  
            <button onClick={signInWithGoogleAccount}>Sign In Google Account</button> 
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}