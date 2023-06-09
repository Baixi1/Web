import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Form } from 'react-bootstrap';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, email, password)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto col-sm-9 offset-sm-1 col-md-7 offset-md-2 col-lg-5 offset-lg-3">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="text-center mb-5 fw-light fs-5">Sign up</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <input type="text" className="form-control" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <input type="email" className="form-control" name="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" disabled={isLoading}>
                  Register
                </button>
                {error && <div className="error">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Signup

{/* <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form> */}