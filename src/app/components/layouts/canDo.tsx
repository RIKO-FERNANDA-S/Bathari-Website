"use client"
import React from 'react'
import Image from 'next/image'
import imgCanDo from '../../../../public/img/imgHome/canDoImg.png'

function canDo() {
  return (
    <main className='mb-20 mt-32 bg-black flex gap-4'>
        <div className='w-2/3'>
            <Image src={imgCanDo} alt='canDoImg' className='w-full'></Image>
        </div>
        <div className='flex flex-col text-white gap-9 w-1/2 mx-8 justify-center'>
          <h1 className='font-semibold text-4xl'>What can we do for you?</h1>
          <p className='text-xl font-light'>In this project, we present an interactive and innovative digital experience, specifically designed to meet your fashion and beauty needs. At BATHARI, we combine advanced technology with stunning aesthetics to provide personalized and accessible beauty and fashion solutions. </p>
        </div>
    </main>
  )
}

export default canDo;