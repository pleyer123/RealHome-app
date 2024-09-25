import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Hero.css";

function Hero() {
  const navigate = useNavigate(); 

  const propertySection = () => {
    navigate("/Listings"); 
  };

  const signUP = () => {
    navigate("/signUP"); 
  };

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="hero-container">
      <nav className="navbar">
        <img src="./RealHomesWHITE.png" alt="Logo" />
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li><a href="#">Home</a></li>
          <li><a href="#fprop-container">Property Listings</a></li>
          <li><a href="#Agents">Agents</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contactUs">Contact Us</a></li>
          <li><a className="login-signup" onClick={() => navigate("/login")}>Login</a></li>
          <li><a className="login-signup" onClick={signUP}>Sign-Up</a></li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
        <div className="login-signup-container">
          <button className="sign-up" onClick={signUP}>Sign Up</button>
          <button className="login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>

      <h1 className="heading">Welcome To RealHome</h1>
      <h2 className="sub-heading">Find Your Dream Home With Us</h2>
      <button className="cta-button" onClick={propertySection}>Get Started</button>

      <div className="background">
        <img src="/Hero.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default Hero;
