'use client'
import React from 'react'
import Link from 'next/link'
const Student = ({params}) => {
    // console.log("See Parameter",params);
    
  return (
    <div>
      <h3> Name:{params.student}</h3>
      <Link href="/">Got to Home</Link>
    </div>
  )
}

export default Student
