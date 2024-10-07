import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Real Estate</div>
      <div className="toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} 
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#listings" onClick={toggleMenu}>Listings</a></li>
        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li><a href="" onClick={toggleMenu}>Back Home</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
