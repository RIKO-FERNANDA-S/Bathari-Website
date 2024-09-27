"use client"
import React from 'react'
import Image from 'next/image'

// Image from ai freepik or freepik
import imgFormal1 from "../../../../public/img/gallery/formal/1.1.png"
import imgFormal2 from "../../../../public/img/gallery/formal/1.2.png"
import imgFormal3 from "../../../../public/img/gallery/formal/2.png"
import imgFormal4 from "../../../../public/img/gallery/formal/3.1.png"
import imgFormal5 from "../../../../public/img/gallery/formal/3.2.png"
import imgFormal6 from "../../../../public/img/gallery/formal/4.png"
import imgFormal7 from "../../../../public/img/gallery/formal/5.1.png"
import imgFormal8 from "../../../../public/img/gallery/formal/5.2.png"

function formalStyle() {
  return (
    <div>
              <article className='mb-32'>
      <h1 className='font-medium text-3xl my-8 ml-8'>Formal Style:</h1>
        <div className='flex w-full px-4 py-10 gap-3 justify-center bg-zinc-950'>
          <figure className='w-[15%] flex flex-col gap-3'>
            <Image src={imgFormal1} alt='1.1' className='border-4 border-white'></Image>
            <Image src={imgFormal2} alt='1.1' className='border-4 border-white'></Image>
          </figure>
          <figure className='w-1/4'>
            <Image src={imgFormal3} alt='2' className='h-full w-auto border-4 border-white'></Image>
          </figure>
          <figure className='w-[15%] flex flex-col gap-3'>
            <Image src={imgFormal4} alt='3.1' className='border-4 border-white'></Image>
            <Image src={imgFormal5} alt='3.2' className='border-4 border-white'></Image>
          </figure>
          <figure className='w-1/4'>
            <Image src={imgFormal6} alt='4' className='h-full w-full border-4 border-white'></Image>
          </figure>
          <figure className='w-[15%] flex flex-col gap-3'>
            <Image src={imgFormal7} alt='5.1' className='border-4 border-white'></Image>
            <Image src={imgFormal8} alt='5.2' className='border-4 border-white'></Image>
          </figure>
        </div>
      </article>
    </div>
  )
}

export default formalStyle