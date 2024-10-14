// EditPropertyForm.jsx
import React, { useState, useEffect } from 'react';
import supabase from '../CONFIG/supabaseClients';
import './EditPropertyForm.css'; 

const EditPropertyForm = ({ property, onClose, onUpdateSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    type: '',
  });

  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title,
        description: property.description,
        location: property.location,
        price: property.price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        type: property.type,
      });
    }
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, ...dataToUpdate } = { id: property.id, ...formData }; 

    const { error } = await supabase.from('Properties').update(dataToUpdate).eq('id', id);
    if (error) {
      console.error('Error updating property:', error);
    } else {
      onUpdateSuccess(); 
      onClose(); 
    }
  };

  return (
    <div className="edit-property-modal">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
        <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="ranch">Ranch</option>
        </select>
        <button type="submit">Update Property</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditPropertyForm;
