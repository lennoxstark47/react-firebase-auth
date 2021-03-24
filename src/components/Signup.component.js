import React, { useRef } from 'react'
import { Card, Form, Button } from "react-bootstrap"

const Signup = () => {
    const { emailRef, passwordRef, passwordConfirmRef } = useRef();

    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb4">Sign Up</h2>
                  <Form>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                      </Form.Group>
                      <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                      </Form.Group>
                      <Button  className="w-100" type="submit">Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt2">
            Already have an account? Login
          </div>  
        </>
    )
}

export default Signup;