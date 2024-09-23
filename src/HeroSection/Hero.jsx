import React, { useState } from "react"
import "./Hero.css"



function Hero(){

    const propertySection = () => {
        window.open("/Listings","_blank")
    }
    const [isMobile, setIsMobile] = useState(false)
    const [isLogin, setIslogin] = useState(false)


    return(

        
        <div className="hero-container">

            <nav className="navbar">
                <img src="./RealHomesWHITE.png" alt="" />
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#fprop-container">Proporty Listings</a></li>
                    <li><a href="#Agents">Agents</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                    <li><a className="login-signup" href="#Login">Login</a></li>
                    <li><a className="login-signup" href="#Sign-Up">Sign-Up</a></li>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)} >
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>
                <div className="login-signup-container">
                    <button className="sign-up">Sign Up</button>
                    <button className="login">Login</button>
                </div>            
            </nav>
            
            <h1 className="heading">Welcome To RealHome</h1>
            <h2 className="sub-heading">Find Your Dream Home With Us</h2>
            <button className="cta-button" onClick={propertySection}>Get Started</button>


            <div className="background">
                <img src="/Hero.jpg" alt="" />
            </div>

        </div>



    )
}

export default Hero