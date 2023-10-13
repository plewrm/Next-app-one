import React from 'react'
import Link from 'next/link'

const studData= [
  {
    id: 1,
    name: "Pawan",
    age:25
  },
  {
    id: 2,
    name: "Vasant",
    age:55
  },
  {
    id: 3,
    name: "Salve",
    age:250
  },
  {
    id: 4,
    name: "Pune",
    age:2500
  },
]

const Studcontact = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Student List</h1>
      <ul>
        {studData.map((item) => (
          <li style={{listStyleType:"none"}} key={item.id}>
            <Link href={`/contact/studcontact/${item.id}`}>
              {item.name}
             
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">Go to home</Link>
    </main>
  )
}

export default Studcontact
