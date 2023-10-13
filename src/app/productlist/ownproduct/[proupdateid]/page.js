'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import usersadd from '@/style/usersadd.module.css';

const UpdateUser = ({ params }) => {
  const router = useRouter()

  const navigate =(item)=>{
    router.push(item)
  }
  // console.log(params);
  const id = params.proupdateid
  console.log("Access", id);
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
    // Fetch the product data you want to update and populate the form
    async function fetchData() {
      try {
        const data = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!data.ok) {
          throw new Error(`Request failed with status ${data.status}`);
        }
        const productData = await data.json();
        setFormData(productData?.result);
        console.log("Product Data", productData);
      } catch (error) {
        setError(`Failed to fetch product data: ${error.message}`);
      }
    }
    fetchData();

    // (async () => {
    //     let res = await fetch(`http://localhost:3000/api/products/${id}`)
    //     res = await res.json()
    //     console.log("see res here hjgj", res.result);
    //     setFormData(res?.result)
    //   })();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        // Replace {PRODUCT_ID} with the ID of the product you want to update
        method: 'PUT', // Use the appropriate HTTP method for updating (e.g., PUT)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      setIsLoading(false);
      setSuccessMessage('Product updated successfully.');
      navigate("/productlist/ownproduct")
    } catch (error) {
      setError('Failed to update the product.');
      setIsLoading(false);
    }
  };

  return (
    <div className={usersadd.add_user}>
      <h1>Update Product</h1>

      {error && <div className={usersadd.error}>{error}</div>}
      {successMessage && <div className={usersadd.success}>{successMessage}</div>}
      <form
        onSubmit={handleSubmit}
      >
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
          {isLoading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
