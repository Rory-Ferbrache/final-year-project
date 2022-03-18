import React, { useState } from 'react'
import app, {AuthState, AuthSignOut, AuthCreateUserWithEmailAndPassword, AuthSignInWithEmailAndPassword, AuthOnAuthStateChanged} from "../logic/firebase"

const AccountPage = () => {
  const [currState, setcurrState] = useState(false) 


    return (
    <div>
        <div>{currState ? <button onClick={() => {AuthSignOut(); setcurrState(false)}}>sign out!</button> : <button onClick={() => {AuthSignInWithEmailAndPassword("a@b.com","1234567"); setcurrState(true)}}>sign in!</button>}</div>
        <button onClick={() => AuthCreateUserWithEmailAndPassword("a@b.com","1234567", "1234567")}>sign up!</button>
        
    </div>
  )
}

export default AccountPage;