"use client"
import React, { useState } from 'react'
import usersadd from '@/style/usersadd.module.css'
const Adduser = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email })
    })
    response = await response.json()
    if (response.success) {
      alert("User Created Successfully...")
    }
    else {
      alert("Something went wrong please check...")
    }

    console.log(name, age, email);
  }
  return (
    <div className={usersadd.add_user}>
      <h1>Add New User</h1>
      <label >Enter Name:</label>
      <input type="text" className={usersadd.input_field} value={name} onChange={(e) => setName(e.target.value)} />
      <label>Enter Age:</label>
      <input type="text" className={usersadd.input_field} value={age} onChange={(e) => setAge(e.target.value)} />
      <label>Enter Email:</label>
      <input type="text" className={usersadd.input_field} value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit} className={usersadd.btnadd}>Submit</button>
    </div>
  )
}

export default Adduser
