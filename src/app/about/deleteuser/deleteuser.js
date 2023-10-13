"use client"
import React from 'react'

const deleteuser = (props) => {
    const userId = props.id
    const handleDelete = async () => {
        let result = await fetch("http://localhost:3000/api/users/"+userId,{
            method:"delete"
        })
        result=await result.json()
        if(result.success){
            alert("User deleted")
        }
    }
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default deleteuser
