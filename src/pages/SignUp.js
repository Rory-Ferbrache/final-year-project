import React, { useState, useRef } from 'react'
import app, {AuthState, AuthSignOut, AuthCreateUserWithEmailAndPassword, AuthSignInWithEmailAndPassword, AuthOnAuthStateChanged} from "../logic/firebase"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const navigation = useNavigate();


  async function HandleSubmit(e) {
    e.preventDefault()
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      await AuthCreateUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      navigation("/")
    } catch {
      setError("Failed to create an account")
    }

  }

    return (
      <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={HandleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>

    </>
  )
}

export default SignUpPage;