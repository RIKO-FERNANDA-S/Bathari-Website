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
          <h1 className='font-semibold text-4xl'>Apa yang bisa kami lakukan untuk anda?</h1>
          <p className='text-xl font-light'>Pada project ini, kami menghadirkan pengalaman digital yang interaktif dan inovatif, dirancang khusus untuk memenuhi kebutuhan fashion dan kecantikan Anda. Di BATHARI, kami memadukan teknologi canggih dengan estetika yang memukau untuk memberikan solusi kecantikan dan fashion yang personal dan mudah diakses. </p>
        </div>
    </main>
  )
}

export default canDo;