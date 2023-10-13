'use client'
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react'
import clientproduct from '@/style/clientproduct.module.css'
const Clientproduct = () => {
    const [productdata, setProductData] = useState([])

    const myProduct = async()=>{
        let data = await fetch("https://dummyjson.com/products")
        data = await data.json()
        console.log("see data here", data);
        setProductData(data?.products)
    }
    useEffect(() => {
       myProduct();
    }, [])
    return (
        <div style={{ paddingTop: '20px' }}>
            <h1 className={clientproduct.textunder} style={{ textAlign: 'center', position: 'sticky', top: '50px', backgroundColor: 'white', zIndex: 99 }}>Mobile Phones Clients</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productdata?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>Rs.{item.price}/-</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Clientproduct
