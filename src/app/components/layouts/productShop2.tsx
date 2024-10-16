"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import imgPoster1 from "../../../../public/img/SHOPP/posterPt2/assortment-father-son-clothing 1.png"
import imgPoster2 from "../../../../public/img/SHOPP/posterPt2/img-from-rawpixcel com-freepiik 1.png"
import imgPoster3 from "../../../../public/img/SHOPP/posterPt2/spring-wardrobe-switch-flat-lay 1.png"


import imgProduct1 from "../../../../public/img/SHOPP/productPt2/1.png"
import imgProduct2 from "../../../../public/img/SHOPP/productPt2/2.png"
import imgProduct3 from "../../../../public/img/SHOPP/productPt2/3.png"
import imgProduct4 from "../../../../public/img/SHOPP/productPt2/4.png"
import imgProduct5 from "../../../../public/img/SHOPP/productPt2/5.png"
import imgProduct6 from "../../../../public/img/SHOPP/productPt2/6.png"
import imgProduct7 from "../../../../public/img/SHOPP/productPt2/7.png"
import imgProduct8 from "../../../../public/img/SHOPP/productPt2/8.png"



function productShop2() {
    return (
      <main>
           <article className='flex flex-col mx-7 items-center mt-20'>
          <h1 className='font-semibold text-5xl mb-7'>Produk Fesyen</h1>
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
                <h1 className='truncate text-lg mb-1'> Cavier - White T-shirt Bahan Katun</h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 169.000</h2>
  
              <div className=''>
                    <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                  </div>
              </div>
            </div>
            <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
              <Image src={imgProduct2} alt='product' className='rounded-t-md'></Image>
              <div className='p-4'>
                <h1 className='truncate text-lg mb-1'>NICE - Gray Sneakers Size S, M, X, XL, L</h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 839.000</h2>
  
              <div className=''>
                    <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                  </div>
              </div>
            </div>
            <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
              <Image src={imgProduct3} alt='product' className='rounded-t-md'></Image>
              <div className='p-4'>
                <h1 className='truncate text-lg mb-1'>F&B - Elegant Floral V-Neck Dress </h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 439.000</h2>
  
              <div className=''>
                <Link href="/shop/detailProduct">
                    <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                </Link>
                  </div>
              </div>
            </div>
            <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
              <Image src={imgProduct4} alt='product' className='rounded-t-md'></Image>
              <div className='p-4'>
                <h1 className='truncate text-lg mb-1'>BAGGUES - Cream Tote Bag for Date</h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 123.000</h2>
  
              <div className=''>
                    <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                  </div>
              </div>
            </div>
            <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
              <Image src={imgProduct5} alt='product' className='rounded-t-md'></Image>
              <div className='p-4'>
                <h1 className='truncate text-lg mb-1'>VENZ - Cozy Cable Knit Cardigan in Beige</h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 359.000</h2>
  
              <div className=''>
                    <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                  </div>
              </div>
            </div>
            <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
              <Image src={imgProduct6} alt='product' className='rounded-t-md'></Image>
              <div className='p-4'>
                <h1 className='truncate text-lg mb-1'>JAWVA - Batik Solo Tradisional </h1>
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
              <Image src={imgProduct7} alt='product' className='rounded-t-md'></Image>
              <div className='p-4'>
                <h1 className='truncate text-lg mb-1'>DIRHAM - Gray Suit Formal Elegant Stylish</h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 10.449.000</h2>
  
              <div className=''>
                    <button className='bg-btnNavbar w-full py-2 font-medium text-white'>Buy Now</button>
                  </div>
              </div>
            </div>
            <div className='w-64 bg-white shadow-lg border-2 rounded-t-md'>
              <Image src={imgProduct8} alt='product' className='rounded-t-md'></Image>
              <div className='p-4 '>
                <h1 className='truncate text-lg mb-1'>GINCCU - Casual Cream Dress Woman </h1>
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
                <h2 className='text-xl font-medium mb-1'>Rp. 449.000</h2>
  
   
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
  
  export default productShop2