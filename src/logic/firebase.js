import { initializeApp } from 'firebase/app';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
          console.log("success")
        })
        .catch((error) => {
          console.log("failed")
        });
    }
}

export const AuthSignInWithEmailAndPassword = async (email,password) => {

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage)
    });
    
}


export function AuthSignOut(){
signOut(auth).then(() => {
  // Sign-out successful.
  
console.log('logging out')
}).catch((error) => {
  // An error happened.
  console.log(error.message)
});
}


export function AuthOnAuthStateChanged(){
  const navigation = useNavigate();
    useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          user.getIdToken().then(function (token){
            console.log(token)
            document.cookie = "token=" + user.uid;
            navigation("/")
          })
          
        } else {
          // User is signed out
          // ...
            document.cookie = "token=";
        }
      });
    },[])
}

export function AuthState(){
    const user = auth.currentUser
    if (user) {
        return true
      } else {

        return false
      }
}
export default app