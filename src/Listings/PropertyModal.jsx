
import React from 'react';
import './PropertyModal.css';

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-slider">
          <img src={property.image} alt={property.title} className="property-image" />
        </div>
        <div className="property-details">
          <h2>{property.title}</h2>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Type:</strong> {property.type}</p>
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
