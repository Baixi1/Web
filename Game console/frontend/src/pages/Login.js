import React, { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    if (email === 'admin@example.com' && password === 'adminpassword') {
      // ถ้าตรงกับ admin ให้ทำการเข้าสู่ระบบ
      // เช่นเก็บค่าใน localStorage เป็นตัวบอกว่าเป็น admin
      localStorage.setItem('isAdmin', 'true');
      // หรือ redirect ไปยังหน้า admin page ที่คุณสร้าง
      window.location.href = '/admin';
    } else {
    e.preventDefault()

    await login(email, password)
  }
  };


  return (
    <Container>
        <Row>
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0"></div>
            <Col sm={{ span: 9, offset: 1 }} md={{ span: 7, offset: 2 }} lg={{ span: 5, offset: 3 }} className="mx-auto">
              <Card border="0" className="shadow rounded-3 my-5">
                <Card.Body className="p-4 p-sm-5">
                  <Card.Title className="text-center mb-5 fw-light fs-5">Log in</Card.Title>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com"  onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </Form.Group>

                    <Button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" disabled={isLoading}>Login</Button>
                    
                    </Form>
                    {error && <div className="error">{error}</div>}
                </Card.Body>
              </Card>
            </Col>
          </Row><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Container>
  )
}

export default Login

/* <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
</form> */