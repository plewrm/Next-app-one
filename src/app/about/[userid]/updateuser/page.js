"use client"
import usersadd from '@/style/usersadd.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

const Userupdate = ({ params }) => {
  const router = useRouter();

  const navigate = (item) => {
    router.push(item)
  }
  const id = params.userid
  console.log("Access", id);
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",

  })
  const { name, age, email, } = user;

  useEffect(() => {
    getUserDetail();
    // loadUser();
  }, []);

  // const loadUser = async () => {
  //   const result = await axios.get(`http://localhost:3000/api/users/${id}`);
  //   console.log("Here see ", result.data);
  //   setUser(result?.data)
  // }

  const getUserDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      if (!response.ok) {
        console.error(`HTTP Error: ${response.status}`);
        return;
      }
      const data = await response.json();
      setUser(data?.result)
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const onInputChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/users/${id}`, user);
    navigate('/')
  }

 

  return (
    <div>
      <div className={usersadd.add_user}>
        <h1>  Update users</h1>
        <label >Enter Name:</label>
        <input type="text" name="name" className={usersadd.input_field} value={name} onChange={ onInputChange} />
        <label>Enter Age:</label>
        <input type="text" name="age" className={usersadd.input_field} value={age} onChange={ onInputChange} />
        <label>Enter Email:</label>
        <input type="text" name="email" className={usersadd.input_field} value={email} onChange={ onInputChange} />
        <button onClick={onSubmit} className={usersadd.btnadd}>Update</button>
      </div>
    </div>
  )
}

export default Userupdate
