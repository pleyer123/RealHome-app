import React, { useState } from "react"
import "./Hero.css"



function Hero(){


    const [isMobile, setIsMobile] = useState(false)
    const [isLogin, setIslogin] = useState(false)


    return(

        
        <div className="hero-container">

            <nav className="navbar">
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <img src="app.logomakr.com/1JCVAQ" alt="" />
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Proporty Listings</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
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
            <button className="cta-button">Get Started</button>


            <div className="background">
                <img src="/Hero.jpg" alt="" />
            </div>

        </div>



    )
}

export default Hero