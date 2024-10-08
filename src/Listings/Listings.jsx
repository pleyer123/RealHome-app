import React, { useState } from 'react';
import propertiesData from '../RealHome-Properties.json'; 
import PropertyModal from './PropertyModal'; 
import "./Listings.css";
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';
import Footer from "../Footer/Footer"
import { useNavigate } from "react-router-dom"; 


const Listings = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 40.1215, lng: -100.4504 });
  const [filteredProperties, setFilteredProperties] = useState(propertiesData); 
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    let filtered = propertiesData;

    // Filter by location
    if (name === 'Location' && value) {
      filtered = filtered.filter(property => property.location.toLowerCase() === value.toLowerCase());
    }

    // Filter by type
    if (name === 'PropertyType' && value) {
      filtered = filtered.filter(property => property.type.toLowerCase() === value.toLowerCase());
    }

    // Filter by bedrooms
    if (name === 'Bedrooms' && value) {
      filtered = filtered.filter(property => property.bedrooms.toString() === value);
    }

    // Filter by price range
    if (name === 'PriceRange' && value) {
      const [min, max] = value.split('-').map(Number);
      filtered = filtered.filter(property => property.price >= min && property.price <= max);
    }

    setFilteredProperties(filtered);
  };

  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const navigate = useNavigate(); 
  const [isMobile, setIsMobile] = useState(false);

  const signUP = () => {
    navigate("/signUP"); 
  };

  return (
    <>

      <nav className="navbar">
        <img src="./RealHomesWHITE.png" alt="Logo" />
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li><a href="/">Back Home</a></li>
          <li><a href="#properties">Properties</a></li>
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

      <div className="listings-page">
        <h1 className="heading-listings">Find Your Dream Home</h1>

        <div className="filter-section">

          <select name="PropertyType" onChange={handleFilterChange}>
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>

          <select name="Bedrooms" onChange={handleFilterChange}>
            <option value="">Select Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>

          <select name="PriceRange" onChange={handleFilterChange}>
            <option value="">Select Price Range</option>
            <option value="0-500000">$0 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1,000,000</option>
            <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
          </select>
        </div>

        <Map center={mapCenter} containerStyle={{ width: '100%', height: '400px' }} />

        <h1 className='heading-for-properties'>Properties for Sale</h1>

        <div id ="properties" className="properties-list">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-item" onClick={() => openModal(property)}>
              <img src={property.image} alt={property.title} />
              <h2>{property.title}</h2>
              <p>Location: {property.location}</p>
              <p>Price: ${property.price.toLocaleString()}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Type: {property.type}</p>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={closeModal} />
      )}
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default Listings;
