import { initializeApp } from 'firebase/app';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvP5vq7OGFe7FiQ5Ha6-Cu2C8m-wV7ocI",
  authDomain: "final-year-project-35d90.firebaseapp.com",
  projectId: "final-year-project-35d90",
  storageBucket: "final-year-project-35d90.appspot.com",
  messagingSenderId: "756342370178",
  appId: "1:756342370178:web:4949bdd09190612257a99b"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export function AuthCreateUserWithEmailAndPassword(email,password,confirmPassword){
    if(password === confirmPassword){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
}

export function AuthSignInWithEmailAndPassword(email,password){

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage)
    });
    
}


export function AuthSignOut(){
console.log('logging out')
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}


export function AuthOnAuthStateChanged(){
    useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("true")
          return true
        } else {
          // User is signed out
          // ...
          <h1>bye</h1>
          console.log("false")
          return false
        }
      });
    },[])
}

export function AuthState(){
    const user = auth.currentUser
    if (user) {

        const uid = user.uid;

        return true
      } else {

        return false
      }
}
export default app