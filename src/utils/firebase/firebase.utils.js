// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhY2GHd3bSfNxKTMQUKwYHCP1LiZHgb9A",
  authDomain: "adel-recipes.firebaseapp.com",
  projectId: "adel-recipes",
  storageBucket: "adel-recipes.appspot.com",
  messagingSenderId: "947551583890",
  appId: "1:947551583890:web:9a5820c71a8c82d343b04b",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data not exist:
  // create/set the document with the data from userAuth im my collection
  if (!userSnapshot.exists()) {
    const{displayName,email}=userAuth;
    const createdDate=new Date();
    try {
        await setDoc(userDocRef,{displayName,email,createdDate});

    } catch (error) {
        console.log("fail create user",error);
    }
  }

  //if user data exist
  return userDocRef;

};
