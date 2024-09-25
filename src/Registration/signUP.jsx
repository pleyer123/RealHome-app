import React from 'react'


const signUP = () => {
  return (
    <form className='register-form'>
      <div className='heading'>
          <h1>Register</h1>
      </div>

      <div className='inputs'>
          <input type="text" placeholder='Name' required/>
          <input type="text" placeholder='Surname' required/>
          <input type="email" placeholder='Email' required/>
      </div>


    </form>
  )
}

export default signUP