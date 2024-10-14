import React from 'react';
import './ListingCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const PropertieCard = ({ properties, openModal, onUpdate, onDelete }) => {
  return (
    <div className="property-item" onClick={() => openModal(properties)}>
      <img src={properties.image_url} alt={properties.title} />
      <div className="property-info">
        <div className="text">
          <h2>{properties.title}</h2>
          <p><strong>Description:</strong> {properties.description}</p>
          <p><strong>Location:</strong> {properties.location}</p>
          <p><strong>Price:</strong> ${properties.price.toLocaleString()}</p>
          <p><strong>Bedrooms:</strong> {properties.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {properties.bathrooms}</p>
          <p><strong>Type:</strong> {properties.type}</p>
        </div>
        <div className="buttons-icons">
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="update-icon"
            onClick={(e) => {
              e.stopPropagation();
              onUpdate(properties);
            }}
            title="Update Property"
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(properties.id); // Pass property ID to delete
            }}
            title="Delete Property"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertieCard;
