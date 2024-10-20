import React, { useState, useEffect } from 'react';
import PropertyModal from './PropertyModal';
import './Listings.css';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import supabase from '../CONFIG/supabaseClients';
import PropertieCard from './ListingCard/ListingCard';
import CreatePropertyForm from './CreatePropertyForm';
import EditPropertyForm from './EditPropertyForm'; 

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [editProperty, setEditProperty] = useState(null); 
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
  });
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from('Properties').select();
      if (error) {
        console.error('Could not fetch properties', error);
      } else {
        setProperties(data);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((property) => {
    const priceRangeValue = parseInt(filters.priceRange);
    return (
      (!filters.type || property.type === filters.type) &&
      (!filters.priceRange || property.price <= priceRangeValue)
    );
  });

  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };



  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const onDelete = async (propertyId) => {
    const { error } = await supabase.from('Properties').delete().eq('id', propertyId);
    if (error) {
      console.error('Error deleting property:', error);
    } else {
      setProperties((prevProperties) => prevProperties.filter((property) => property.id !== propertyId));
    }
  };

  const onUpdate = (property) => {
    setEditProperty(property); // Set the property to be edited
  };

  const handleUpdateSuccess = () => {
    
    fetchProperties(); 
  };

  return (
    <>
      <nav className="navbar">
        <img src="./RealHomesWHITE.png" alt="Logo" className="logo" />
        <ul className={isMobile ? 'nav-links-mobile open' : 'nav-links'} onClick={() => setIsMobile(false)}>
          <li>
            <a href="/">Back Home</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="#contactUs">Contact Us</a>
          </li>
        
        
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
        {/* <div className="login-signup-container">
          <button className="sign-up" onClick={signUP}>
            Sign Up
          </button>
     
        </div> */}
      </nav>

      <div className="listings-page">
        <h1 className="heading-listings">Find Your Dream Home</h1>

        <div className="filter-section">
          <select name="type" onChange={handleFilterChange}>
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="ranch">Ranch</option>
          </select>
          <select name="priceRange" onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="100000">Up to $100,000</option>
            <option value="200000">Up to $200,000</option>
            <option value="300000">Up to $300,000</option>
            <option value="400000">Up to $400,000</option>
            <option value="500000">Up to $500,000</option>
            <option value="1000000">Up to $1,000,000</option>
          </select>
        </div>

        <h1 className="heading-for-properties">Properties for Sale</h1>
        <div id="properties" className="properties-list">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertieCard
                key={property.id}
                properties={property}
                openModal={openModal}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p>No properties available at the moment.</p>
          )}
        </div>
        
        {selectedProperty && (
          <PropertyModal property={selectedProperty} onClose={closeModal} />
        )}

        {editProperty && (
          <EditPropertyForm
            property={editProperty}
            onClose={() => setEditProperty(null)} 
            onUpdateSuccess={handleUpdateSuccess} 
          />
        )}

        <button onClick={toggleForm} className='button-add'>
          {showForm ? 'Close Property Form' : 'Add New Property'}
        </button>

        {showForm && <CreatePropertyForm />}

      </div>

      <ContactUs />
      <Footer />
    </>
  );
};

export default Listings;
