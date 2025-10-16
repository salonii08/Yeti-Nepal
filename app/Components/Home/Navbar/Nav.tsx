"use client";
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';


const Nav = () => {
  return (
    <div className='  z-[10000]  w-full  '>
       <div className=' flex items-center justify-between mx-auto  w-[90%] mt-4 '>
      {/* logo */}
      <div>
       <Image src='/images/logo.png' alt='logo' width={60} height={60}/> 
      </div>
      <div className='text-white flex items-center justify-between gap-10'>
        <Link href='/ServicePage'>Services</Link>
       
        <h1>Careers</h1>
        
        <button className='bg-[#39B6FD] rounded-lg p-3 flex gap-2'> Contact Us
          <FiArrowUpRight className='w-5 h-5'/>
        </button>  
      </div>
    </div>
    <br />
    <hr className='h-[2px] bg-[#444444] mx-auto' />
    </div>
   
  )
}

export default Nav
