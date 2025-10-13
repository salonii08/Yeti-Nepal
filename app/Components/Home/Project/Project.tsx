"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsLightningChargeFill } from 'react-icons/bs'

const Project = () => {
  return (
    <div className=' relative items-center justify-center text-center pb-6 '>
      <div className='text-[#3094CD] gap-2 mt-[38px] inline-flex items-center justify-center text-center'>
        <BsLightningChargeFill/> our tech allies
      </div>
      <h1 className="lg:text-5xl sm:text-5xl text-center font-bold bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent pb-0 pt-[32px] ">
            Your ally in building
            <br />
            <span >Future-ready technology</span>
        </h1>
        <p className="text-white pt-[32px] text-base text-center ">
            See the companies we’ve partnered with and the projects we’ve built to fuel their growth.
        </p>

         <div className='flex flex-wrap items-center justify-center mt-[52px] gap-[64px] pb-[47px]   '>
            {/* 1st project */}
                <Link href="https://misterwallpaper.com.au/">
                <Image  src='/images/download.jpg' alt='project' width={399} height={278} className='w-[399px] h-[278px] overflow-hidden rounded-lg over:scale-105 transition-transform shadow-lg shadow-[#39B6FD]/20 ' />
                </Link>
                {/* 2nd project */}
                <Link href="https://misterwallpaper.com.au/">
                <Image src='/images/project1.png' alt='project' width={399} height={278} className='w-[399px] h-[278px] overflow-hidden  rounded-lg over:scale-105 transition-transform shadow-lg shadow-[#39B6FD]/20 '  />
                </Link>
                {/* 3rd project */}
                <Link href="https://misterwallpaper.com.au/">
                <Image src='/images/project1.png' alt='project' width={399} height={278} className='w-[399px] h-[278px] overflow-hidden rounded-lg over:scale-105 transition-transform shadow-lg shadow-[#39B6FD]/20' />
                </Link> 
         </div>

         <button className="bg-[#39B6FD] text-[#FEFEFE] p-4 rounded-lg">View all Projects</button>

    </div>
  )
}

export default Project
