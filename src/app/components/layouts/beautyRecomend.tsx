"use client"
import React from 'react'
import Image from 'next/image'
import img1 from "../../../../public/img/imgHome/brands/img1.png"
import img2 from "../../../../public/img/imgHome/brands/img2.png"
import img3 from "../../../../public/img/imgHome/brands/img3.png"
import img4 from "../../../../public/img/imgHome/brands/img4.png"

function beautyRecomend() {
  return (
    <main className='flex items-center flex-col my-20'>
        <div className='mb-6 flex flex-col gap-3 text-center'>
        <h1 className='font-semibold text-4xl'>Beauty Recommendation</h1>
        <h4 className='font-light'>Produk pilihan untuk kilau yang mempesona sepanjang hari!</h4>
        </div>
        <div className='flex justify-center gap-10 mt-8'>
            <div className='flex flex-col justify-center items-center text-center w-max'>
                <Image src={img1} alt='img1' className='w-60 shadow-shadowRecommend'></Image>
                <div className=' mt-4'>
                    <h1 className='font-medium text-xl'>N’oreal</h1>
                    <h1 className='font-light'> Eye Smooth Mascara </h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center w-max'>
                <Image src={img2} alt='img1' className='w-60 shadow-shadowRecommend'></Image>
                <div className='mt-4'>
                    <h1 className='font-medium text-xl'>A Venus</h1>
                    <h1 className='font-light'> Romantical Parfume </h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center w-max'>
                <Image src={img3} alt='img1' className='w-60 shadow-shadowRecommend'></Image>
                <div className='mt-4'>
                    <h1 className='font-medium text-xl'>DOIR </h1>
                    <h1 className='font-light'> Woman Face Serum </h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center w-max'>
                <Image src={img4} alt='img1' className='w-60 shadow-shadowRecommend'></Image>
                <div className='mt-4'>
                    <h1 className='font-medium text-xl'>Warduh</h1>
                    <h1 className='font-light'> Red Berry Lipstick </h1>
                </div>
            </div>
        </div>
    </main>
  )
}

export default beautyRecomend