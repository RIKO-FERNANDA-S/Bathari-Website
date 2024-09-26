"use client"
import React from 'react'

import Image from 'next/image'

// Image from freepik ai
import imgPoster1 from "../../../../public/img/SHOPP/poster1.png"
import imgPoster2 from "../../../../public/img/SHOPP/poster2.png"
import imgPoster3 from "../../../../public/img/SHOPP/poster3.jpg"

// Image from canva prem
import imgProduct1 from "../../../../public/img/SHOPP/product1.png"
import imgProduct2 from "../../../../public/img/SHOPP/product2.png"
import imgProduct3 from "../../../../public/img/SHOPP/product3.png"
import imgProduct4 from "../../../../public/img/SHOPP/product4.png"
import imgProduct5 from "../../../../public/img/SHOPP/product5.png"
import imgProduct6 from "../../../../public/img/SHOPP/product6.png"
import imgProduct7 from "../../../../public/img/SHOPP/product7.png"
import imgProduct8 from "../../../../public/img/SHOPP/product8.png"


function productShop1() {
  return (
    <main>
         <article className='flex flex-col mx-7 items-center'>
        <h1 className='font-semibold text-5xl mb-7'>Bauty Product</h1>
        <div className='flex gap-4'>
          <div className='w-1/2 h-[36rem] bg-slate-400'>
            <Image src={imgPoster1} alt='imgPoster1' className='w-full h-full'></Image>
          </div>
          <div className='w-1/2 h-[36rem] flex flex-col gap-4 '>
            <Image src={imgPoster2} alt='imgPoster2' className='h-[18rem]'></Image>
            <Image src={imgPoster3} alt='imgPoster3' className='h-[18rem]'></Image>
          </div>
        </div>

        <div className='mt-20 p-10 flex flex-wrap justify-center gap-5'>
          <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct1} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>Warduh - Sun Cream Mencerahkan Kulit Maghrib</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 259.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
          <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct2} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>A Venus - Hair Care Shampoo Pencegah Rambut  Rontok</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 309.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
{/*skip*/}<div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct3} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>A Venus - Hair Care Shampoo Pencegah Rambut  Rontok</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 309.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
{/*skip*/}<div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct4} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>Warduh - Sun Cream Mencerahkan Kulit Maghrib</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 259.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
          <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct5} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>DOIR - Liquid Foundation Super Glowing, For A Radiant.</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 1.119.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
          <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct6} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>Vijra Beauty - Message Oil Orchid Aromateraphy </h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 999.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
          <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct7} alt='product' className='rounded-t-md'></Image>
            <div className='p-4'>
              <h1 className='text-wrap text-lg mb-1'>GIVE - Sunscreen Anti UVA/UVB Protect SPF 50, Lightweight Protection.</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 309.000</h2>

            <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
          <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
            <Image src={imgProduct8} alt='product' className='rounded-t-md'></Image>
            <div className='p-4 '>
              <h1 className='text-wrap text-lg mb-1'>HANZ - Hair Spray Foam Wash 150 ml, Volumizes Effortlessly.</h1>
              <div className='flex items-center mb-3'>
              <p className='text-xs'>5.0</p>
              <ul className='flex text-xs'>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              <i className='bx bxs-star text-textGold'></i>
              </ul>
            </div>
              <h2 className='text-xl font-medium mb-1'>Rp. 559.000</h2>

 
              <div className=''>
                  <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default productShop1