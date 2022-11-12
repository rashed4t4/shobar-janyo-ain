import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function NotFound() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(()=>{
            router.push('/')
        }, 1500)
    }, []);
    return (

        <div>
            <h1>Ooooops.....</h1>
            <h2>That page cannot be found.</h2>
            <p>Going back to the <Link href={'/'}>Homepage</Link></p>
        </div>
    )
}

export default NotFound