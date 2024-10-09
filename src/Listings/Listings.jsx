import React, { useState, useEffect } from 'react';
import PropertyModal from './PropertyModal'; 
import "./Listings.css";
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom"; 
import supabase from '../CONFIG/supabaseClients';
import PropertieCard from './ListingCard/ListingCard'; 

const Listings = () => {
  const [fetchError, setFetchError] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
  });

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from('Properties').select();

      if (error) {
        setFetchError('Could not fetch properties');
        console.log(error);
      } else {
        setProperties(data);
        setFetchError(null);
      }
    };

    fetchProperties();
  }, []);

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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (!filters.type || property.type === filters.type) &&
      (!filters.priceRange || property.price <= parseInt(filters.priceRange))
    );
  });

  return (
    <>
      <nav className="navbar">
        <img src="./RealHomesWHITE.png" alt="Logo" />
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li><a href="/">Back Home</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#contactUs">Contact Us</a></li>
          <li><a className="login-signup" onClick={() => navigate("/login")}>Login</a></li>
          <li><a className="login-signup" onClick={signUP}>Sign-Up</a></li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
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
          <select name="type" onChange={handleFilterChange}>
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
          <select name="priceRange" onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="100000">Up to $100,000</option>
            <option value="200000">Up to $200,000</option>
          </select>
        </div>

        <Map center={{ lat: 40.1215, lng: -100.4504 }} />
        
        <h1 className='heading-for-properties'>Properties for Sale</h1>

        <div id="properties" className="properties-list">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertieCard 
                key={property.id} 
                properties={property} 
                openModal={openModal} // Ensure the modal opens on click
              />
            ))
          ) : (
            <p>No properties available at the moment.</p>
          )}
        </div>
      </div>

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={closeModal} />
      )}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Listings;
