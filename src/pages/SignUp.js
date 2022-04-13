import React, { useState, useRef } from 'react'
import { auth } from '../logic/firebase'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

const SignUpPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("")
  const nameRef = useRef("")
  const [error, setError] = useState();
  const [user, setUser] = useState(auth.currentUser);
  const navigation = useNavigate();

  onAuthStateChanged(auth, async (currentUser) =>{
    if(currentUser){
    setUser(currentUser);
    await updateProfile(currentUser, {displayName: nameRef.current.value})
      
    navigation("/")
  }
  });


  const register = async () => {
    try {
      console.log( emailRef.current.value)
      const user = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      

    } catch (error) {
     console.log(error)
    }
   
 }


    return (

    <>
    <Container
      className="w-100 d-flex align-items-center justify-content-center" style={{ maxWidth: "400px" }}
    >
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="button" onClick={register}>
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </Container>
    </>

  )
}

export default SignUpPage;