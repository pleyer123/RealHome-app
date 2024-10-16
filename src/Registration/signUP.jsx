import React from 'react';
import LoginButton from './COMPONENTS/LoginButton'; // Adjust this path if needed
import LogOutButton from './COMPONENTS/LogOutButton'; // Adjust this path if needed
import './SignUp.css'; // Optional, if you have a separate CSS file for styling the sign-up page

function SignUp() {
  return (
    <div className="signup-container">
      <h1>Sign Up / Login Page</h1>
      {/* Login and Logout buttons */}
      <LoginButton />
      <LogOutButton />
    </div>
  );
}

export default SignUp;
