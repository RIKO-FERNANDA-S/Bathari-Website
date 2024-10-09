"use client"
import React from 'react'
import { Splide, SplideSlide} from "../../../../node_modules/@splidejs/react-splide"
import '@splidejs/react-splide/css/sea-green';
import Link from 'next/link';
import { col } from 'framer-motion/client';

const brandsCollab = () => {

return(
  <div  className='bg-imgCollab bg-cover bg-no-repeat py-32 text-black'>
    <div className='flex flex-col items-center text-center w-full justify-center mb-3 gap-2 lg:mb-8 lg:gap-3'>
    <h1 className='font-bold text-black text-3xl lg:text-5xl '>Categories</h1>
    <p className='font-light text-base '>Pilihlah item yang Anda sukai agar penampilan Anda menjadi lebih menarik</p>
    </div>

  <Splide className=' py-3 hidden lg:flex ' options={{
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
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Lipstik</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Women's Fashion</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Men's Fashion </h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Makeup</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Fragrance</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Haircare</h1>
    </Link>
    </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Footwear</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Jewelry</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Bags</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Accessories </h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-48 text-lg border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-3'>Nutrition</h1>
    </Link>
  </SplideSlide>
</Splide>

  <Splide className=' py-1 flex lg:hidden ' options={{
    type: 'loop',
    perPage: 2,
    interval: 2000,
    autoplay: false,
    pagination: false,
    arrows: false,
    easing: 'ease-in',
    speed: 1000,
    grid: {
      gap:{
        row: "2rem",
      }
    }
  }} 
    aria-label="My Favorite Images">
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Lipstik</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Women's Fashion</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Men's Fashion </h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Makeup</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Fragrance</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Haircare</h1>
    </Link>
    </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Footwear</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Jewelry</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Bags</h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Accessories </h1>
    </Link>
  </SplideSlide>
  <SplideSlide className="flex justify-center items-center">
    <Link href='/'>
    <h1 className='w-36 text-xs border-2 border-pink-600 shadow-xl text-center bg-white py-2 px-2'>Nutrition</h1>
    </Link>
  </SplideSlide>
</Splide>

  </div>
)
}

export default brandsCollab


