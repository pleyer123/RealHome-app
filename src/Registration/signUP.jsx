import React from 'react'
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const SignUp = () => {

  const navigate = useNavigate(); 

  const loginClick = () => {
    navigate("/login");
  }

  const backClick = () => {
    navigate("/")
  }

   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5173/register',{name,email,password})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
   }

  return (
    <div className="signup-container">
    <h2>Sign Up</h2>
    <form  className="signup-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={(e) => setName(e.target.value)} 
          required
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>
      
      <button type="submit" className="signup-button">Sign Up</button>

      <p className='p-tag'>Already Have an Account</p>
    
    </form>
    <button type='submit' className='login-button' onClick={loginClick}>Login</button>
    <button type='submit' className='back-button' onClick={backClick}>Back Home</button>
  </div>
  )
}

export default SignUp