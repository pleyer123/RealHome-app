import React from 'react';
import './ListingCard.css';

const PropertieCard = ({ properties, openModal }) => {
  return (
    <div className="property-item" onClick={() => openModal(properties)}>
      <img src={properties.image_url} alt={properties.title} />
      <h2>{properties.title}</h2>
      <p><strong>Location:</strong> {properties.location}</p>
      <p><strong>Price:</strong> ${properties.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {properties.bedrooms}</p>
      <p><strong>Bathrooms:</strong> {properties.bathrooms}</p>
      <p><strong>Type:</strong> {properties.type}</p>
      <p><strong>Description:</strong> {properties.description}</p>
    </div>
  );
};

export default PropertieCard;
