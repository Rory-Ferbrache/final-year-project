import React from 'react'
import { useNavigate } from "react-router-dom"
import { AuthSignOut, auth } from '../logic/firebase'
import { getAuth } from "firebase/auth"



function DashboardPage() {
  const navigation = useNavigate()
  const user = auth.currentUser
  return (
    <>
      <h1>Dashboard</h1>
      {user ? <button onClick={AuthSignOut}>log out</button> : <button onClick={() => navigation("/sign-up")}>login</button>}
    </>
  )
}

export default DashboardPage
