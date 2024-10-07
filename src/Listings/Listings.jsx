import React, { useState, useEffect } from 'react';
import propertiesData from './RealHome-Properties.json'; 
import PropertyModal from './PropertyModal'; 
import "./Listings.css";
import Map from '../Map/Map';

const Listings = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 40.1215, lng: -100.4504 });
  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData); // Initialize with all properties
  const [selectedProperty, setSelectedProperty] = useState(null); // State for selected property

  // Generate image URLs for properties
  const generateImageUrls = () => {
    return properties.map((property, index) => ({
      ...property,
      image: `https://via.placeholder.com/300x200?text=Property+${index + 1}`
    }));
  };

  useEffect(() => {
    setProperties(generateImageUrls());
    setFilteredProperties(generateImageUrls());
  }, []);

  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    let filtered = properties;

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

  return (
    <>
      <div className="listings-page">
        <h1 className="heading-listings">Find Your Dream Home</h1>

        <div className="filter-section">
          <select name="Location" onChange={handleFilterChange}>
            <option value="">Select Location</option>
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="sanfrancisco">San Francisco</option>
          </select>

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

        <div className="properties-list">
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
      
      {/* Render the Property Modal */}
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={closeModal} />
      )}
    </>
  );
};

export default Listings;
