import React, { useEffect, useState } from 'react';
import './PropertyModal.css';
import Map from '../Map/Map'; // Import the Map component
import { getCoordinates } from '../Map/geocoding'; // Import the geocoding function

const PropertyModal = ({ property, onClose }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (property && property.location) {
        const coords = await getCoordinates(property.location);
        setCoordinates(coords); // Set the fetched coordinates
      }
    };

    fetchCoordinates();
  }, [property]);

  if (!property) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>X</button>
          <div className="modal-body">
            {/* Left Side: Property Details and Form */}
            <div className="property-details-container">
              <div className="modal-slider">
                <img src={property.image_url} alt={property.title} className="property-image" />
              </div>
              <div className="property-details">
                <h2>{property.title}</h2>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
                <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Description:</strong> {property.description}</p>
                <h3>Request More Information</h3>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit">Send Request</button>
                </form>
              </div>
            </div>
            
            {/* Right Side: Map */}
            <div className="map-container">
              {coordinates && <Map coordinates={coordinates} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyModal;
