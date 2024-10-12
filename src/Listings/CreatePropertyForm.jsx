import React, { useState } from 'react';
import supabase from '../CONFIG/supabaseClients'; 

const CreatePropertyForm = () => {
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
  
    if (!title || !price || !type || !description || !bedrooms || !bathrooms || !location || !image) {
      setFormError('Please fill in all the fields correctly');
      return;
    }
  
    setFormError(null);
  

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
  
    const imageUrl = publicURLData.publicUrl;  
  

    const { data: propertyData, error: propertyError } = await supabase
      .from('Properties')
      .insert([
        {
          title,
          price: parseFloat(price),
          type,
          description,
          bathrooms: parseInt(bathrooms),
          bedrooms: parseInt(bedrooms),
          location,
          image_url: imageUrl,  
        },
      ]);
  
    if (propertyError) {
      console.error('Failed to add property:', propertyError);
      setFormError('Failed to add property');
      return;
    }
  
   
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
  
    console.log('Property added successfully:', propertyData);
  };
  

    const handleSubmitClick = () => {
      setSubmit(true); 
      window.location.reload(); 
    };
  

  return (
    <div className="page-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" accept="image/*" onChange={handleImageUpload} />
        {previewImage && <img src={previewImage} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor="bedroom">Bedrooms:</label>
        <input type="number" id="bedroom" value={bedrooms} onChange={(e) => setBedroom(e.target.value)} />

        <label htmlFor="bathrooms">bathrooms:</label>
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

        <button type="submit" onClick={handleSubmitClick}>Add Property</button>
      </form>
    </div>
  );
};

export default CreatePropertyForm;
