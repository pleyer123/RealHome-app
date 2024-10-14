import React from 'react';
import './PropertyModal.css';
import Map from '../Map/Map';


const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  const handleOverlayClick = (e) => {
    // Close the modal if the overlay is clicked (not the modal content)
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-slider">
          <img src={property.image_url} alt={property.title} className="property-image" />
        </div>
        <Map/>
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
    </div>
  );
};

export default PropertyModal;
