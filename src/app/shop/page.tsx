"use client"
import React from 'react'
import Image from 'next/image'

// Desain by canva
import imgUtama from "../../../public/img/SHOPP/utama.png"

import ProductShop1 from '../components/layouts/productShop1'
import ProductShop2 from '../components/layouts/productShop2'


function shop() {
  return (
    <main className='mb-10 h-max '>
      <div className='px-8 my-14 mb-36 w-full flex justify-center'>
        <Image src={imgUtama} alt='img utama' className='rounded-lg border-2 border-black shadow-md'></Image>
      </div>
      <div>
     <ProductShop1/>
     <ProductShop2/>
      </div>
    </main>
  )
}

export default shop