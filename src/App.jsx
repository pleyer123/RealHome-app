import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./HeroSection/Hero"; 
import SignupPage from "./Registration/signUP";
import LoginPage from "./Registration/Login"; 
import ListingsPage from "./Listings/Listings"; 
import './App.css'; 
import Properties from "./Properties/FeaturedProperties";
import Agents from "./Agents/Agents";
import FeaturedProperties from "./Properties/FeaturedProperties";
import AboutUs from "./AboutUs/AboutUs"
import Footer from "./Footer/Footer"
import ContactUs from "./ContactUs/ContactUs"
// import 'bootstrap/dist/css/bootstrap.min.css'

function HomePage(){
  return(
    <div>
      <Hero />
      <FeaturedProperties />
      <Agents />
      <AboutUs />
      <ContactUs/>
      <Footer />
    </div>
  )
}



function App() {
  return (<>
   
    <Router>
      <Routes>
        {/* Main Hero Section */}
        <Route path="/" element={<HomePage />} />
      

        
        {/* Sign-Up Page */}
        <Route path="/signUP" element={<SignupPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Property Listings Page */}
        <Route path="/Listings" element={<ListingsPage />} />
      </Routes>
    </Router>
  

    </> );
}

export default App;
