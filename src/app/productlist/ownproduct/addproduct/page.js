'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import usersadd from '@/style/usersadd.module.css';

const AddProducts = () => {
  const router = useRouter()
  const navigation = (item) => {
    router.push(item)
  }
  const initialFormData = {
    name: '',
    category: '',
    price: '',
    color: '',
    company: '',
    file: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const { name, category, price, color, company, file } = formData;

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    }
  }, [successMessage]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file" && files.length > 0) {
      // Handle file upload
      const selectedFile = files[0];
      setFormData({ ...formData, [name]: selectedFile });
      setSelectedImage(URL.createObjectURL(selectedFile));
    } else {
      // Handle other input fields
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("color", color);
      formData.append("company", company);
      formData.append("file", file);

      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        body: formData, // Use FormData instead of JSON.stringify
      });

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      setIsLoading(false);
      setSuccessMessage('Product created successfully.');
      setFormData(initialFormData); // Reset the form
      setSelectedImage(null); 
      navigation("/productlist/ownproduct");
    } catch (error) {
      setError('Failed to create the product.');
      setIsLoading(false);
    }
  };


  return (
    <div className={usersadd.add_user}>
      {/* <button className="btn btn-primary "
             onClick={() => navigate("/productlist/ownproduct/addproduct")}
             >Add Product</button> */}
      <h1>Add New Product</h1>

      {error && <div className={usersadd.error}>{error}</div>}
      {successMessage && <div className={usersadd.success}>{successMessage}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className={usersadd.input_field}
          value={name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Category"
          name="category"
          className={usersadd.input_field}
          value={category}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          className={usersadd.input_field}
          value={price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Color"
          name="color"
          className={usersadd.input_field}
          value={color}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Company"
          name="company"
          className={usersadd.input_field}
          value={company}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="file"
          className={usersadd.input_field}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className={usersadd.btnadd} disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Submit'}
        </button>
       
        
      </form>
    {/* Show the selected file on UI only Image */}
      {/* {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Image"
            width={100}
            height={100}
            // className={usersadd.selected_image}
          />

        )} */}
    </div>
  );
};

export default AddProducts;
