import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Posts from '../pages/Posts'
import { MdArrowForwardIos } from 'react-icons/md';

export default function Sidebar() {
  const [isOpen,setIsOpen]=useState(0)
const menuItem = [
  {
    path:'/user/profile',
    name:"Profile"
  },
  {
    path:'/user/posts',
    name:"Posts"
  },
  {
    path:'/user/gallery',
    name:"Gallery"
  },
  {
    path:'/user/Todo',
    name:"Todo"
  },
]
const handleClick=(index)=>{

  setIsOpen(index);
}
  return (
      <div className='sidebar text-gray-400 font-normal text-lg fixed flex justify-center items-start gap-4 flex-col pl-10 top-10 lg:left-10 bottom-10 w-[300px] p-2 overscroll-y-auto text-center rounded-3xl bg-gradient-to-b from-indigo-600 to-violet-600'>
     {menuItem.map((item,index) => {
      return <>
      <NavLink to={item.path}  onClick={()=>handleClick(index)}  key={index} className={`cursor-pointer hover:text-gray-50 ${isOpen===index?"text-gray-50":""} ` }>
      <div className='flex justify-between'>
        <div>
          {item.name}
        </div>
      {isOpen===index?
      <div className='mt-1 p-2 pr-5 ml-[230px] mr-5 fixed bg-white text-gray-400 rounded-full rounded-br-full'>
      <MdArrowForwardIos/>
  
        </div>:""
      }
      
      </div>
    </NavLink>
    <hr className='mt-0 w-52'/>
      </>
     
    
     })}
    </div>
    
  )
}
