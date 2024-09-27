"use client"
import React from 'react'
import Image from 'next/image';

// Image dari ai canva
import product1 from "../../../../public/img/trending/product/product1.png"
import product2 from "../../../../public/img/trending/product/product2.png"
import product3 from "../../../../public/img/trending/product/product3.png"
import product4 from "../../../../public/img/trending/product/product4.png"

// Image desain from canva prem
import doir from "../../../../public/img/trending/doir.png"
import dony from "../../../../public/img/trending/dony.png"
import mahkota from "../../../../public/img/trending/mahkota.png"



function trending() {
  return (
    <main className='my-20 p-2 flex'>
      <article className='w-2/4 px-8 border-r border-black'>
        <h1 className='font-semibold text-2xl'>Barang Yang Sering Dikunjungi:</h1>
        <div className='flex flex-col gap-10 mt-8'>
          <div className='bg-white rounded-2xl border-2 border-black shadow-cardTrending w-max'>
            <Image src={product1} alt='product1'  className='w-[11rem] rounded-t-2xl border-b-2 border-black '></Image>
            <div className='p-3'>
            <h1 className='font-medium text-base'>HANZ Hair Sprayl</h1>
            <h1 className='font-semibold my-1 text-base'>Rp. 559.000</h1>
            <div className='flex items-center'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
            <p className='text-xs mt-1'>1.1K Sold</p>
            </div>
          </div>
          <div className='bg-white rounded-2xl border-2 border-black shadow-cardTrending w-max'>
            <Image src={product2} alt='product1' className='w-[11rem] rounded-t-2xl border-b-2 border-black'></Image>
            <div className='p-3'>
            <h1 className='font-medium text-base '>N’oreal Lys Eye </h1>
            <h1 className='font-semibold my-1 text-base'>Rp. 519.000</h1>
            <div className='flex '>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
            <p className='text-xs mt-1'>1.1K Sold</p>
            </div>
          </div>
          <div className='bg-white rounded-2xl border-2 border-black shadow-cardTrending w-max'>
            <Image src={product3} alt='product1' className='w-[11rem] rounded-t-2xl border-b-2 border-black'></Image>
            <div className='p-3'>
            <h1 className='font-medium text-base'>SURJA Sunscreen </h1>
            <h1 className='font-semibold my-1 text-base'>Rp. 109.000</h1>
            <div className='flex '>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
            <p className='text-xs mt-1'>1.1K Sold</p>
            </div>
          </div>
          <div className='bg-white rounded-2xl border-2 border-black shadow-cardTrending w-max'>
            <Image src={product4} alt='product1' className='w-[11rem] rounded-t-2xl border-b-2 border-black'></Image>
            <div className='p-3'>
            <h1 className='font-medium text-base'>Fellise Serum</h1>
            <h1 className='font-semibold my-1 text-base'>Rp. 829.000</h1>
            <div className='flex '>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
            <p className='text-xs mt-1'>1.1K Sold</p>
            </div>
          </div>

        </div>
      </article>

      <article className='pt-20'>
        <figure className='flex border-b border-black pb-10 '>
          <div className='w-1/2 px-8'>
            <h1 className='w-max font-bold text-3xl'>Fashion Ala Dony Brown!</h1>
            
            <Image src={dony} alt='dony' className='w-[31rem] my-7 shadow-shadowBenner border-2 border-black rounded-2xl'></Image>
            <p className='w-full font-medium'><span className='font-bold'>Dony Brown</span> adalah seorang model yang sedang naik daun di dunia fashion internasional. Dengan gaya yang elegan, inovatif, dan sentuhan glamour, Dony berhasil memenangkan hati banyak penggemar fashion dan industri.</p>
          </div>
          <div className='w-1/2'>
            <h1 className='font-bold text-3xl'>Trending Model 
            Minggu Ini</h1>
            <div className='flex flex-col my-5 gap-6'>
              <div className='flex justify-between items-center bg-Cgold py-3 px-8 w-96 rounded-xl border-black border shadow-shadowBtn'>
                <h1 className='text-3xl font-semibold'>1. Dony Brown</h1>
                <Image src={mahkota} alt='maskota' className='w-20'/>
              </div>
              <div className='flex justify-between items-center bg-Csilver py-3 px-8 w-96 rounded-xl border-black border shadow-shadowBtn'>
                <h1 className='text-3xl font-semibold'>2. Eva Gonzalez</h1>
                
              </div>
              <div className='flex justify-between items-center bg-Cbrown py-3 px-8 w-96 rounded-xl border-black border shadow-shadowBtn'>
                <h1 className='text-3xl font-semibold'>3. Anne Valitaz</h1>
                
              </div>
            </div>
          </div>
        </figure>

        <figure className='flex pt-10'>
          <div className='w-1/2 px-8'>
            <h1 className='w-max font-bold text-3xl'>Beauty Ala DOIR!</h1>
            
            <Image src={doir} alt='dony' className='w-[31rem] my-7 shadow-shadowBenner border-2 border-black rounded-2xl'></Image>
            <p className='w-full font-medium text-base'>Menggabungkan unsur kecantikan klasik dengan teknologi modern, DOIR selalu berusaha menghadirkan produk yang tidak hanya mempercantik, tetapi juga merawat kulit dengan bahan-bahan premium. </p>
          </div>
          <div className='w-1/2'>
            <h1 className='font-bold text-3xl'>Trending Beauty Product Minggu Ini</h1>
            <div className='flex flex-col my-5 gap-6'>
              <div className='flex justify-between items-center bg-Cgold py-3 px-8 w-96 rounded-xl border-black border shadow-shadowBtn'>
                <h1 className='text-3xl font-semibold'>1. DOIR</h1>
                <Image src={mahkota} alt='maskota' className='w-20'/>
              </div>
              <div className='flex justify-between items-center bg-Csilver py-3 px-8 w-96 rounded-xl border-black border shadow-shadowBtn'>
                <h1 className='text-3xl font-semibold'>2. A Venus</h1>
                
              </div>
              <div className='flex justify-between items-center bg-Cbrown py-3 px-8 w-96 rounded-xl border-black border shadow-shadowBtn'>
                <h1 className='text-3xl font-semibold'>3. Warduh</h1>
                
              </div>
            </div>
          </div>
        </figure>
      </article>
    </main>
  )
}

export default trending;