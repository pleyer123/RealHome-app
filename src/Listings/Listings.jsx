import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "./Listings.css";

const Listings = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 40.1215, lng: -100.4504 });
  const [properties, setProperties] = useState([]); // State for properties

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const handleLocationChange = (e) => {
    console.log("Location selected:", e.target.value);
    switch (e.target.value) {
      case 'newyork':
        setMapCenter({ lat: 40.7128, lng: -74.0060 });
        break;
      case 'losangeles':
        setMapCenter({ lat: 34.0522, lng: -118.2437 });
        break;
      case 'chicago':
        setMapCenter({ lat: 41.8781, lng: -87.6298 });
        break;
      case 'sanfrancisco':
        setMapCenter({ lat: 37.7749, lng: -122.4194 });
        break;
      default:
        setMapCenter({ lat: 40.1215, lng: -100.4504 });
    }
  };

  // Fetch properties from Mockaroo
  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('curl "https://api.mockaroo.com/api/19ee9590?count=100&key=c4f54250" > "RealHome-Properties.csv"'> "RealHome-Properties.csv"); 
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div className="listings-page">
    <h1 className="heading-listings">Find Your Dream Home</h1>

    <div className="filter-section">
      <select name="Location" onChange={handleLocationChange}>
        <option value="">Select Location</option>
        <option value="newyork">New York</option>
        <option value="losangeles">Los Angeles</option>
        <option value="chicago">Chicago</option>
        <option value="sanfrancisco">San Francisco</option>
      </select>

      <select name="PropertyType">
        <option value="">Select Property Type</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="condo">Condo</option>
      </select>

      <select name="Bedrooms">
        <option value="">Select Bedrooms</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4+ Bedrooms</option>
      </select>

      <select name="PriceRange">
        <option value="">Select Price Range</option>
        <option value="0-500000">$0 - $500,000</option>
        <option value="500000-1000000">$500,000 - $1,000,000</option>
        <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
      </select>
    </div>

      <LoadScript googleMapsApiKey="AIzaSyCfy82Qimm4s7e2jTXNZ51JrMiKLWyVxn4">
        <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={6}>
          <Marker position={mapCenter} title="Selected Location" />
        </GoogleMap>
      </LoadScript>

      <div className="properties-list">
        {properties.map(property => (
          <div key={property.id} className="property-item">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Type: {property.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
