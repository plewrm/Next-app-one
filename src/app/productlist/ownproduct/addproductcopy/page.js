'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import usersadd from '@/style/usersadd.module.css';

const AddProductsCopy = () => {
  const router=useRouter()
  const navigation =(item)=>{
    router.push(item)
  }
  const initialFormData = {
    name: '',
    category: '',
    price: '',
    color: '',
    company: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const { name, category, price, color, company } = formData;

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    }
  }, [successMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      setIsLoading(false);
      setSuccessMessage('Product created successfully.');
      setFormData(initialFormData); // Reset the form
      navigation("/productlist/ownproduct")
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
      <form onSubmit={handleSubmit}>
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
       
        <button type="submit" className={usersadd.btnadd} disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddProductsCopy;
