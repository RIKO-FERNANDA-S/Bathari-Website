'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Facebook from "../../../../public/img/social-media/facebook.png"
import Whastapp from "../../../../public/img/social-media/whatsapp.png"
import Instagram from "../../../../public/img/social-media/instagram.png"
import Tweeter from "../../../../public/img/social-media/tweeter.png"
import Github from "../../../../public/img/social-media/github.png"

function footer() {
  return (
    <main className='bg-black text-white'>
      <article className='flex py-10 justify-center px-24 border-b-2 border-borderAAA'>
        <div className='flex flex-col w-1/2 pr-32'>
          <h1 className='text-4xl font-batharia'>BAHTARI</h1>
          <p className='my-11 text-base font-normal text-textFooter'>Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256</p>
          <p className='text-base font-normal text-textFooter'>Email: bathariagung@bussiness.com</p>
        </div>
        <div className='flex text-textFooter gap-28'>
          <div className='flex flex-col gap-7'>
            <h1 className='text-lg font-bold text-white'>Company</h1>
            <a href=''>About Us</a>
            <Link href="/privacyAndPolicy">
            <p >Privacy Policy</p></Link>
            <a href=''>Collaboration</a>
          </div>
          <div className='flex flex-col gap-7'>
            <h1 className='text-lg font-bold text-white'>Help</h1>
            <a href=''>Customer Service</a>
            <a href=''>FAQ</a>
            <a href=''>Email Us</a>
          </div>
          <div className='flex flex-col gap-7'>
            <h1 className='text-lg font-bold text-white'>Blog</h1>
            <a href=''>Article</a>
            <a href=''>BathariaEdu</a>
            <a href=''>Join Us</a>
          </div>
        </div>
      </article>

      <article className='flex justify-between px-20 py-4 items-center'>
        <div className='w-1/2 border-borderAAA border-r-2 p-4'>
          <h1>PT.  Prakarsa Bathari Agung - THIS WEB FOR EDUCATION  </h1>
        </div>
        <div className='flex gap-10 w-1/2 justify-center'>
          <Image src={Facebook} alt='facebook' className='w-10'></Image>
          <Image src={Github} alt='github' className='w-10'></Image>
          <Image src={Tweeter} alt='tweeter' className='w-10'></Image>
          <Image src={Whastapp} alt='whatsapp' className='w-10'></Image>
          <Image src={Instagram} alt='instagram' className='w-10'></Image>
        </div>
      </article>
    </main>
  )
}

export default footer