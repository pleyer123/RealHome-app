import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./HeroSection/Hero"; 
import SignupPage from "./Registration/signUP";
import LoginPage from "./Registration/Login"; 
import ListingsPage from "./Listings/Listings"; 
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Hero Section */}
        <Route path="/" element={<Hero />} />

        {/* Sign-Up Page */}
        <Route path="/signUP" element={<SignupPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Property Listings Page */}
        <Route path="/Listings" element={<ListingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
