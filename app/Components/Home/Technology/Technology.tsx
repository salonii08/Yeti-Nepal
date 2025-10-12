"use client";
import React from 'react'
import html from '@/public/images/html.png'
import css from '@/public/images/css.png'
import javascript from '@/public/images/js.png'
import react from '@/public/images/react.png'
import next from '@/public/images/Next.png'
import nuxt from '@/public/images/Nuxt.png'
import python from '@/public/images/python.png'
import laravel from '@/public/images/Laravel.png'
import flutter from '@/public/images/flutter.png'
import Link from 'next/link'
import Image from 'next/image'

const techs =[
    {
        name:'HTML',
        icon: html,

    },
    {
        name:'CSS',
        icon: css,

    },
    {
        name:'JavaScript',
        icon: javascript,

    },
    {
        name:'React',
        icon: react,

    },
    {
        name:'Next',
        icon: next,

    },
    {
        name:'Nuxt',
        icon: nuxt,

    },
    {
        name:'Python',
        icon: python,

    },
    {
        name:'Laravel',
        icon: laravel,

    },
    {
        name:'Flutter',
        icon: flutter,

    }
    
]

const Technology = () => {

  return (
    <div className=' mt-0 overflow-hidden relative '>
        <div className='text-white text-center text-[16px]'>Technologies in our stack</div>
         <div className='flex  gap-10 p-4 whitespace-nowrap animate-scroll  '>
            {[...techs, ...techs].map((tech,index)=> (
            <div key={`${tech.name}-${index}`} className='flex gap-2 '>
                <Image src={tech.icon} alt={tech.name} width={100} height={100}/>
                <p className='text-white text-3xl'>{tech.name}</p>
            </div>
         )
            
         )}</div>
    </div>
  )
}

export default Technology
