import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Hero.css";
import { useAuth0 } from "@auth0/auth0-react";
import '../Navbar.css';
import ProfileMenu from "../PROFILE/ProfileMenu";




function Hero() {
  const navigate = useNavigate(); 
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [isMobile, setIsMobile] = useState(false);

  const propertySection = () => {
    navigate("/Listings"); 
  };

  return (
    <div className="hero-container">
      <nav className="navbar">
        <img src="./RealHomesWHITE.png" alt="Logo" />
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li><a href="#">Home</a></li>
          <li><a href="#fprop-container">Property Listings</a></li>
          <li><a href="#Agents">Agents</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contactUs">Contact Us</a></li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>

        {/* Login */}
        {
          !isAuthenticated ? (
            <button className="sign-up" onClick={loginWithRedirect}>Sign Up</button>
          ) : (
            <ProfileMenu user={user} logout={logout}/>
          )
        }
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
