import React from 'react'
import { Container } from 'react-bootstrap';
import Signup from "./Signup.component"

const App = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" 
    style={{minHeight:'70vh'}}
    >
      <div className="w-100" style={{maxWidth : '400px'}}>
        <Signup />
      </div>

    </Container>

  )
}

export default App;
