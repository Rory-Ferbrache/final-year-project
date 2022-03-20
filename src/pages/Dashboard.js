import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { auth } from '../logic/firebase'
import { Form, Button, Card, Alert } from "react-bootstrap"
import "@fontsource/sora";



function DashboardPage() {

  const [user, setUser] = useState({});
  const navigation = useNavigate();
  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  });


  const logout = async () => {
      const user = await signOut(auth);
  }

  return (
    <>
    <h1>{ user ? user?.uid : "Sign in"}</h1>
    <Card>
        <Card.Body>

            <Button className="w-100" type="button" onClick={() => {navigation("/sign-up")}}>
              Sign up
            </Button>
            <Button className="w-100" type="button" onClick={() => {navigation("/log-in")}}>
              Log in
            </Button>
            <Button className="w-100" type="button" onClick={logout}>
              Log out
            </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default DashboardPage
