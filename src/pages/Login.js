import React, { useState, useRef } from 'react'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { auth } from '../logic/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState();
  const [user, setUser] = useState({});
  const navigation = useNavigate();

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigation(-1)
    } catch (error) {
      setError(error)
    }
 }

    return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      width: '100vw'
    }}>
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={login}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="button" onClick={login}>
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LoginPage;