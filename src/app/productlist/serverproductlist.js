'use client'
import React, { useState, useEffect } from 'react'

const Serverproductlist = ({price}) => {

    return (
        <div style={{ paddingTop: '20px' }}>
           <button className='btn btn-primary' onClick={()=>alert(`Rs.${price}/-`)}> View</button>
        </div>
    )
}

export default Serverproductlist
