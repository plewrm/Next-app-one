import React from 'react'
import Link from 'next/link'
const Lecture = ({params}) => {
  return (
    <div>
      <h2>Lectur no:{params.lecture[0]}</h2>
      <Link href="/"> Go to home</Link>
    </div>
  )
}

export default Lecture
