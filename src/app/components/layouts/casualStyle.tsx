"use client"
import React from 'react'
import Image from 'next/image'


import imgCasual1 from "../../../../public/img/gallery/casual/1.1.jpg"
import imgCasual2 from "../../../../public/img/gallery/casual/1.2.png"
import imgCasual3 from "../../../../public/img/gallery/casual/2.jpg"
import imgCasual4 from "../../../../public/img/gallery/casual/3.1.jpg"
import imgCasual5 from "../../../../public/img/gallery/casual/3.2.jpg"
import imgCasual6 from "../../../../public/img/gallery/casual/4.jpg"
import imgCasual7 from "../../../../public/img/gallery/casual/5.1.jpg"
import imgCasual8 from "../../../../public/img/gallery/casual/5.2.jpg"

function casualStyle() {
  return (
    <div>
              <article className='mb-32 mt-10' >
        <h1 className='font-medium text-3xl my-8 ml-8'>Casual Style:</h1>
        <div className='flex w-full px-4 py-10 gap-3 justify-center bg-slate-50'>
          <figure className='w-[15%] flex flex-col gap-3'>
            <Image src={imgCasual1} alt='1.1' className='border-4 border-black'></Image>
            <Image src={imgCasual2} alt='1.1' className='border-4 border-black'></Image>
          </figure>
          <figure className='w-1/4'>
            <Image src={imgCasual3} alt='2' className='h-full w-auto border-4 border-black'></Image>
          </figure>
          <figure className='w-[15%] flex flex-col gap-3'>
            <Image src={imgCasual4} alt='3.1' className='border-4 border-black'></Image>
            <Image src={imgCasual5} alt='3.2' className='border-4 border-black'></Image>
          </figure>
          <figure className='w-1/4'>
            <Image src={imgCasual6} alt='4' className='h-full w-full border-4 border-black'></Image>
          </figure>
          <figure className='w-[15%] flex flex-col gap-3'>
            <Image src={imgCasual7} alt='5.1' className='border-4 border-black'></Image>
            <Image src={imgCasual8} alt='5.2' className='border-4 border-black'></Image>
          </figure>
        </div>
      </article>
    </div>
  )
}

export default casualStyle