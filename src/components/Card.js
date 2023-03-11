import React, { useContext, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';


export default function Card({profilepicture,name,handleUser}) {
  
  return (
    <div className=''>
      <Link to='/user/profile' onClick={()=>handleUser(name)} className='contact flex justify-start px-5 mb-3 mt-4 rounded-md transform cursor-pointer hover:translate-x-2 duration-300 ml-4 mr-4 '>
        <img className='rounded-full w-10 h-10' src={profilepicture} alt="profile pic"/>
        <div className='flex items-center'>
        <p className='px-5'>{name}</p>
        </div>
    </Link>
    <hr className='ml-8 mr-8'/>
 
    </div>
   
  )
}
