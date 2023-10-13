'use client'
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DeletePro from "./deletpro/deletepro" 
import clientproduct from '@/style/clientproduct.module.css'
const Ownproduct = () => {
    const [productdata, setProductData] = useState([])
    const router = useRouter();
    const navigate = (item) => {
        router.push(item)
    }
    const myProduct = async()=>{
        let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"})
        data = await data.json()
        console.log("see data here", data);
        setProductData(data?.result)
    }
    useEffect(() => {
       myProduct();
    }, [])

    // const updateUser = async(id) =>{
    //     // let data = await fetch("https://dummyjson.com/products/"+id)
    //     // data = await data.json()
    //     // console.log("see data here", data);
    //     // setProductData(data?.products)
    //     navigate("/productlist/ownproduct/"+id)
    // }
    return (
        <div style={{ paddingTop: '20px' }}>
            <h1 className={clientproduct.textunder} style={{ textAlign: 'center', position: 'sticky', top: '50px', backgroundColor: 'white', zIndex: 99 }}>Own Mobile Phones</h1>
            <span style={{float:'right', margin:5}}>
            <button className="btn btn-primary "
             onClick={() => navigate("/productlist/ownproduct/addproduct")}
             >Add Product</button>
            </span>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Color</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productdata?.map((item, index) => (
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td>Rs.{item.price}/-</td>
                                <td><img src={item.file}/></td>
                                <td>
                                    {/* <button onClick={()=>updateUser(item.id)}>Update</button> */}
                                    <Link href={"/productlist/ownproduct/"+item._id}>Edit</Link> &nbsp;
                                    <DeletePro proid={item._id}/>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Ownproduct
