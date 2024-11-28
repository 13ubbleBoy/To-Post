import React from 'react'
import { useParams } from 'react-router' // user wale router jo jo variable pass kiya hai (main.jsx line no. 35), usko access karne k liye 'useParams()' use krte hai

const User = () => {
    const { userid } = useParams() // name should be same as we passed in the router, useParams() is used to access dynamic data.

    return (
        <div className='bg-gray-700 text-white p-4 px-auto font-serif font-semibold italic text-lg flex items-center justify-center' /* center content of a div using "flex items-center justify-center" */>User: {userid}</div>
    )
}

export default User