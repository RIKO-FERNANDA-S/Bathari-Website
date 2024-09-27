"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImgProduct from "../../../../../public/img/SHOPP/detailProduct.png";

function detailProduct() {
  return (
    <main className=' p-5 '>
      <Link href="/shop" className='bg-btnNavbar px-6 py-4 my-16 rounded-lg border-2 border-black'><i className='bx bx-arrow-back mr-3' ></i>Back To Shop</Link>
      <section className='px-auto flex gap-6 justify-center w-full h-screen'>
      <article className='w-max flex justify-center items-center h-full'>
          <div className='w-96 '>
          <Image src={ImgProduct} alt='img' className='rounded-xl'></Image>
        </div>
      </article>
      <article className='flex flex-col justify-center gap-5 w-max'>
        <div>
          <h1 className='font-bold text-4xl mb-5'>Cla Cardigan Brown</h1>
          <p className='font-medium text-lg w-2/3'>Luaran dengan model menarik yang cocok dipadankan 
          dengan dalaman tank top serta celana palazzo dan mules.</p>
        </div>
        <div>
          <p className=' line-through'>IDR. 720.000</p>
          <h1 className='font-bold text-2xl text-[#C51E3A]'>IDR. 349.000</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-5'>
            <h1 className='font-medium text-xl'>Warna :</h1>
            <div className=' bg-slate-400 w-10 h-10 cursor-pointer hover:border hover:border-black'></div>
            <div className=' bg-[#FFA080] w-10 h-10 cursor-pointer hover:border hover:border-black'></div>
            <div className=' bg-[#2B2928] w-10 h-10 cursor-pointer hover:border hover:border-black'></div>
          </div>
          <div className='flex items-center gap-5'>
            <h1 className='font-medium text-xl'>Ukuran :</h1>
            <div className=' border border-black font-semibold flex justify-center items-center w-10 h-10 cursor-pointer hover:bg-black hover:text-white'>S</div>
            <div className=' border border-black font-semibold flex justify-center items-center w-10 h-10 cursor-pointer hover:bg-black hover:text-white'>M</div>
            <div className=' border border-black font-semibold flex justify-center items-center w-10 h-10 cursor-pointer hover:bg-black hover:text-white'>L</div>
            <div className=' border border-black font-semibold flex justify-center items-center w-10 h-10 cursor-pointer hover:bg-black hover:text-white'>XL</div>
          </div>
        </div>
        <div className='flex gap-5 text-3xl my-3'>
        <Link href="/"><i className='bx bx-message-rounded-dots'></i></Link>
        <Link href="/"><i className='bx bx-heart'></i></Link>
        <Link href="/"><i className='bx bx-share-alt'></i></Link>
        </div>
        <div className='flex gap-4'>
          <button className='bg-btnNavbar font-semibold text-white rounded-lg px-9 py-5 hover:translate-x-1 hover:translate-y-1 shadow-shadowBtn hover:shadow-none '>BUT NOW</button>
          <button className='border border-btnNavbar font-semibold text-black rounded-lg px-9 py-5 hover:translate-x-1 hover:translate-y-1 shadow-shadowBtn hover:shadow-none '>ADD TO CARD</button>
        </div>
      </article>
      </section>
    </main>
  )
}

export default detailProduct