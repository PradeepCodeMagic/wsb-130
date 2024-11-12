import React from 'react'
import logo from '../assets/images/download.jpg'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";



export default function Header() {
  return (
    <div className='w-full grid grid-cols-2 bg-slate-300 p-5 items-center'>
        <div className='flex'>
            <div className=''>
                <img src= {logo} className='w-[150px]' />
            </div>
            <ul className='flex items-center'> 
                <li className='p-[0px_20px]'>Men </li>
                <li className='p-[0px_20px]'>Men </li>
                <li className='p-[0px_20px]'>Men </li>
                <li className='p-[0px_20px]'>Men </li>
                <li className='p-[0px_20px]'>Men </li>

            </ul>
        </div>
        <div className='flex'>

       <div className=''>
       <CiUser className='text-[28px]' />
       </div>
       <div className=''>
       <CiHeart className='text-[28px]' />
       </div>

       <MdOutlineShoppingBag />

        
        </div>
    </div>
  )
}
