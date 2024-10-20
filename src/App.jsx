import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./HeroSection/Hero"; 
import ListingsPage from "./Listings/Listings"; 
import './App.css'; 
import Agents from "./Agents/Agents";
import FeaturedProperties from "./Properties/FeaturedProperties";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";


function HomePage(){
  return(
    <div>
      <Hero />
      <FeaturedProperties />
      <Agents />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Hero Section */}
        <Route path="/" element={<HomePage />} />
        
   
        {/* Property Listings Page */}
        <Route path="/Listings" element={<ListingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
