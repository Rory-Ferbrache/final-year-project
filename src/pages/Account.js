import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { auth } from '../logic/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';



const Account = () => {
  const test = "test";
  const [user, setUser] = useState({});
  const navigation = useNavigate();

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
    console.log(currentUser)
  });


  const logout = async () => {
      const user = await signOut(auth);
      navigation("/")
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Account</h1>
      <p>Name: { user ? user?.displayName : ""}</p>
      <Button className="w-100" type="button" onClick={() => {logout()}}>
              Log out
      </Button>
    </div>
  );
};

export default Account;