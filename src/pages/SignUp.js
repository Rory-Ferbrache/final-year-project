import React, { useState, useRef } from 'react'
import app, {AuthState, AuthSignOut, AuthCreateUserWithEmailAndPassword, AuthSignInWithEmailAndPassword, AuthOnAuthStateChanged} from "../logic/firebase"
import { Form, Button, Card, Alert } from "react-bootstrap"

const SignUpPage = () => {
  const [currState, setcurrState] = useState(false) 
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

    return (
      <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={() =>{
            if (currState) {
              AuthSignOut(); 
              setcurrState(false)
            }else{
              AuthSignInWithEmailAndPassword("a@b.com","1234567"); 
              setcurrState(true)}
          }}>
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