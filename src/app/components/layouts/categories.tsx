"use client"
import React from 'react'
// import Image from 'next/image'
// import imgBrand1 from "../../../../public/img/brandCollab/1.png"
// import imgBrand2 from "../../../../public/img/brandCollab/2.png"
// import imgBrand3 from "../../../../public/img/brandCollab/3.png"
// import imgBrand4 from "../../../../public/img/brandCollab/4.png"
// import imgBrand5 from "../../../../public/img/brandCollab/5.png"
// import imgBrand6 from "../../../../public/img/brandCollab/6.png"

// import { Splide, SplideSlide } from '../../../../node_modules/@splidejs/react-splide/dist/types';
import { Splide, SplideSlide} from "../../../../node_modules/@splidejs/react-splide"
import '@splidejs/react-splide/css/sea-green';
import Link from 'next/link';

const brandsCollab = () => {

return(
  <div  className='bg-imgCollab bg-cover bg-no-repeat py-32'>
    <div className='flex flex-col items-center w-full justify-center mb-8 gap-3'>
    <h1 className='font-bold text-black text-5xl '>Categories</h1>
    <p className='font-light'>Choose items that you like so that your appearance becomes more attractive</p>
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
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Lipstik</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Women's Fashion</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Men's Fashion </h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Makeup</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Fragrance</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Haircare</h1>
    </Link>
    </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Footwear</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Jewelry</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Bags</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Accessories </h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href="/">
    <h1 className='w-48 border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Nutrition</h1>
    </Link>
  </SplideSlide>
</Splide>
  </div>
)
}

export default brandsCollab


