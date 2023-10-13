"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const DeleteProduct = (props) => {
    // const router = useRouter()
    
    const userId = props.proid
    const handleDelete = async (e) => {
        e.preventDefault();
        let result = await fetch("http://localhost:3000/api/products/" + userId, {
            method: "delete"
        })
        result = await result.json()
        if (result.success) {
            alert("User deleted")
            // router.push("/productlist/ownproduct")
            window.location.reload();
            
        }
    }
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
            {/* <Link href={"/productlist/ownproduct/"+item._id}>Delete</Link> */}

        </div>
    )
}

export default DeleteProduct
