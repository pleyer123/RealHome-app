import React, { useState, useEffect } from 'react';
import supabase from '../CONFIG/supabaseClients'; 
import { useNavigate } from 'react-router-dom';

const CreatePropertyForm = ({ propertyId }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [bathrooms, setBathroom] = useState('');
  const [bedrooms, setBedroom] = useState('');
  const [location, setLocation] = useState('');
  const [formError, setFormError] = useState(null);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  // Load property data for editing if propertyId is provided
  useEffect(() => {
    const fetchProperty = async () => {
      if (propertyId) {
        const { data, error } = await supabase
          .from('Properties')
          .select('*')
          .eq('id', propertyId)
          .single();
        
        if (error) {
          console.error('Error fetching property:', error);
          return;
        }
        
        // Set the state with fetched property data
        setTitle(data.title);
        setPrice(data.price);
        setType(data.type);
        setDescription(data.description);
        setBathroom(data.bathrooms);
        setBedroom(data.bedrooms);
        setLocation(data.location);
        setPreviewImage(data.image_url);
      }
    };
    
    fetchProperty();
  }, [propertyId]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !type || !description || !bedrooms || !bathrooms || !location || (!image && !previewImage)) {
      setFormError('Please fill in all the fields correctly');
      return;
    }

    setFormError(null);
    let imageUrl = previewImage;

    // Upload the image if a new one is selected
    if (image) {
      const uniqueFileName = `${Date.now()}_${image.name}`;
      const filePath = `public/${uniqueFileName}`;
      const { data: imageData, error: imageError } = await supabase.storage
        .from('Photos of properties')
        .upload(filePath, image);

      if (imageError) {
        console.error('Image upload failed:', imageError);
        setFormError('Failed to upload image');
        return;
      }

      const { data: publicURLData, error: urlError } = supabase.storage
        .from('Photos of properties')
        .getPublicUrl(filePath);

      if (urlError || !publicURLData.publicUrl) {
        console.error('Failed to retrieve image URL:', urlError);
        setFormError('Failed to retrieve image URL');
        return;
      }

      imageUrl = publicURLData.publicUrl;
    }

    // Create or update the property based on whether propertyId is present
    const propertyData = {
      title,
      price: parseFloat(price),
      type,
      description,
      bathrooms: parseInt(bathrooms),
      bedrooms: parseInt(bedrooms),
      location,
      image_url: imageUrl,
    };

    let result;
    if (propertyId) {
      const { data, error } = await supabase
        .from('Properties')
        .update(propertyData)
        .eq('id', propertyId)
        .select();

      result = { data, error };
    } else {
      const { data, error } = await supabase
        .from('Properties')
        .insert([propertyData]);

      result = { data, error };
    }

    if (result.error) {
      console.error('Failed to add/update property:', result.error);
      setFormError('Failed to add/update property');
      return;
    }

    // Reset form fields
    setTitle('');
    setPrice('');
    setType('');
    setDescription('');
    setBathroom('');
    setBedroom('');
    setLocation('');
    setImage(null);
    setPreviewImage(null);
    setFormError(null);

    console.log('Property added/updated successfully:', result.data);
    navigate('/'); // Redirect to the properties page
  };

  const handleDelete = async () => {
    if (!propertyId) return;

    const { data, error } = await supabase
      .from('Properties')
      .delete()
      .eq('id', propertyId)
      .select();

    if (error) {
      console.error('Failed to delete property:', error);
      setFormError('Failed to delete property');
      return;
    }

    console.log('Property deleted successfully:', data);
    navigate('/'); // Redirect after deletion
  };

  return (
    <div className="page-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" accept="image/*" onChange={handleImageUpload} />
        {previewImage && <img src={previewImage} alt="Preview" style={{ width: '100%', height: 'auto', marginTop: '10px', objectFit: 'cover' }} />}

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor="bedroom">Bedrooms:</label>
        <input type="number" id="bedroom" value={bedrooms} onChange={(e) => setBedroom(e.target.value)} />

        <label htmlFor="bathrooms">Bathrooms:</label>
        <input type="number" id="bathroom" value={bathrooms} onChange={(e) => setBathroom(e.target.value)} />

        <label htmlFor="type">Property Type:</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="villa">Villa</option>
          <option value="ranch">Ranch</option>
        </select>

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        {formError && <p style={{ color: 'red' }}>{formError}</p>}

        <button type="submit">Add/Update Property</button>
        {propertyId && <button type="button" onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete Property</button>}
      </form>
    </div>
  );
};

export default CreatePropertyForm;
