'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
const Serverauth = () => {
    const router = useRouter();
    const navigate = () => {
        router.push("/authorization")
    }
  return (
    <div>
      <h1>  Welcome server authentication</h1>
      <button className="btn btn-primary" onClick={navigate}> &lt;&lt; Back</button>

    </div>
  )
}

export default Serverauth
