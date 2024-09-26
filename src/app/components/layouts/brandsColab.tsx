"use client"
import React from 'react'
import Image from 'next/image'
import imgBrand1 from "../../../../public/img/brandCollab/1.png"
import imgBrand2 from "../../../../public/img/brandCollab/2.png"
import imgBrand3 from "../../../../public/img/brandCollab/3.png"
import imgBrand4 from "../../../../public/img/brandCollab/4.png"
import imgBrand5 from "../../../../public/img/brandCollab/5.png"
import imgBrand6 from "../../../../public/img/brandCollab/6.png"

import { Splide, SplideSlide } from '../../../../node_modules/@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const brandsCollab = () => {

return(
  <div  className='bg-imgCollab bg-cover bg-no-repeat py-32'>
    <div className='flex flex-col items-center w-full justify-center mb-8 gap-3'>
    <h1 className='font-bold text-black text-5xl '>Brands Collab</h1>
    <p className='font-light'>Rangkaian kecantikan baru, hasil kolaborasi terbaik</p>
    </div>
  <Splide className=' py-3' options={{
    type: 'loop',
    perPage: 5,
    interval: 9000,
    autoplay: true,
    pagination: false,
    arrows: true,
    easing: 'ease-in',
    speed: 1000
  }} 
    aria-label="My Favorite Images">
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand1} alt="Image 1" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand2} alt="Image 2" className='w-48 border-2 border-pink-600 shadow-xl  '/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand3} alt="Image 3" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand4} alt="Image 4" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand5} alt="Image 5" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand6} alt="Image 6" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand1} alt="Image 1" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand2} alt="Image 2" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand3} alt="Image 3" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand4} alt="Image 4" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand5} alt="Image 5" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Image src={imgBrand6} alt="Image 6" className='w-48 border-2 border-pink-600 shadow-xl'/>
  </SplideSlide>
</Splide>
  </div>
)
}

export default brandsCollab


