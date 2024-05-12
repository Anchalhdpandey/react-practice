import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Anchalhdpandey')
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setData(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt='git picture' width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/Anchalhdpandey')
  return response.json()
}