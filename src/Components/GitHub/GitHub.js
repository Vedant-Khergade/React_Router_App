import React from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {

    const data=useLoaderData();
  return (
    <>
    
    <div className="container bg-black text-white w-[100vw] h-[80vh] text-4xl 
           pt-[5vh] px-[5vw] " >
 
      GitHub Users:{data.followers} <br></br>

      <img className=" mt-14 w-[100px] h-[100px] " src={data.avatar_url} alt="My_Image" 
     />


    </div>
    
    </>
  )
}

export default GitHub;

export  const gitInfo=async()=>{

const response=await fetch("https://api.github.com/users/Vedant-Khergade")

return response.json();
}
