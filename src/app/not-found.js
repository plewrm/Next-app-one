'use client'
import Link  from 'next/link'
export default function PageNotFound() {
    return (
        <div >
            <h1>This Page is Not Found</h1>
            <Link href="/">Go to Home</Link>
        </div>
    )
}

