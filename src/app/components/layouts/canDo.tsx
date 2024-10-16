"use client"
import React from 'react'
import Image from 'next/image'
import imgCanDo from '../../../../public/img/imgHome/canDoImg.png'
import imgCanDoHp from '../../../../public/img/imgHome/canDoImgHp.png'

function canDo() {
  return (
    <main className='mb-3 lg:mb-20 mt-20 lg:mt-28 bg-black flex gap-4 items-center py-8 h-36 lg:h-max'>
      <div className=' h-max w-full flex'>
        <div className='w-1/2 hidden lg:flex'>
            <Image src={imgCanDo} alt='canDoImg' className='w-full '></Image>
        </div>
        <div className='flex flex-col bg-imgCanDoHp bg-cover text-white  gap-2 lg:gap-9 w-full lg:w-1/2 mx-3 lg:mx-8 justify-center max-lg:relative z-10 lg:z-0'>
          <h1 className='font-semibold text-xl lg:text-4xl'>Apa yang bisa kami lakukan untuk Anda?</h1>
          <p className='text-xs lg:text-xl font-light flex flex-col '>Dalam proyek ini, kami menghadirkan pengalaman digital interaktif dan inovatif, yang dirancang khusus untuk memenuhi kebutuhan fashion dan kecantikan Anda. <span className='hidden lg:flex'>Di BATHARI, kami menggabungkan teknologi canggih dengan estetika menakjubkan untuk memberikan solusi kecantikan dan mode yang dipersonalisasi dan dapat diakses. </span></p>
            {/* <Image src={imgCanDoHp} alt='canDoImg' className='w-full flex lg:hidden absolute z-0 opacity-[.1]'></Image> */}
        </div>
      </div>
    </main>
  )
}

export default canDo;