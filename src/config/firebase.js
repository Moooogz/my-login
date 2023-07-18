import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBn4sVDluWZFwGoIjC2yAPPiESgwuIESAE",
  authDomain: "reactjs-app-mooogz.firebaseapp.com",
  projectId: "reactjs-app-mooogz",
  storageBucket: "reactjs-app-mooogz.appspot.com",
  messagingSenderId: "231704466119",
  appId: "1:231704466119:web:207cded1528d97a349a4e2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider();

export const db=getFirestore(app);
