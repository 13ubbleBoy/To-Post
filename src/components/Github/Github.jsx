import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {
    const data = useLoaderData()

    // esko optmize kr k neeche likha hai
    // const [ data, setData ] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/13ubbleBoy')
    //     .then((response) => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className='lg:mx-0 text-center text-black p-4 text-3xl justify-center lg:flex lg:items-center'>
            <img className='rounded-full border-2 border-orange-700 border-opacity-60 shadow-2xl my-4 mx-auto lg:mx-0' src={data?.avatar_url} alt="Git DP" width={300} />

            <div>
                <h2 className='my-2 font-serif text-orange-700 text-lg lg:text-3xl'>Name: {data?.name}</h2>
                <h2 className='my-2 font-serif text-orange-700 text-lg lg:text-3xl'>Github followers: {data?.followers}</h2>
                <h2 className='lg:ml-10 my-2 font-serif text-blue-600 hover:text-blue-800 text-lg lg:text-3xl'><a href='https://github.com/13ubbleBoy?tab=repositories' target='_blank'>Visit my repositories</a></h2>
                <h2 className='lg:mr-12 my-2 font-serif text-blue-600 hover:text-blue-800 text-lg lg:text-3xl'><a href='https://github.com/13ubbleBoy' target='_blank'>Visit my profile</a></h2>
                <h2 className='lg:mr-16 my-2 font-serif text-orange-700 text-lg lg:text-3xl'>Public repos: {data?.public_repos}</h2>
            </div>
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/13ubbleBoy')
    return response.json()
}
