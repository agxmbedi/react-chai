import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://github.com/agxmbedi')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github folowers: {data.followers}
      <img src={data.avatar_url} alt="git pic" width={300} />
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
  const response=await fetch('https://github.com/agxmbedi')
  return response.json()
}

