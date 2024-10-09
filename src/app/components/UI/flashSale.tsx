"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide} from "../../../../node_modules/@splidejs/react-splide"
import '@splidejs/react-splide/css/sea-green';

// Image from canva
import imgProduct1 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0011.jpg";
import imgProduct2 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0012.jpg";
import imgProduct3 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0013.jpg";
import imgProduct4 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0014.jpg";
import Link from "next/link";

function flashSale() {
  return (
    <main>
      <div className="w-full pb-10 pt-2 bg-[#C51E3A] text-black">
        <div className="my-3 flex items-center justify-between mx-9">
          <h1 className="font-extrabold text-xl lg:text-4xl font-alumni italic text-Cgold text-str">FLASH <span className="text-white">SALE</span></h1>
          <div>
            <Link href="/" className="bg-btnNavbar lg:text-base text-sm px-3 py-2 lg:px-5 lg:py-3 text-white rounded-lg border-2 border-white">Views More</Link>
          </div>
        </div>

        <Splide className="hidden lg:flex justify-center max-h-min" 
        options={{
          type: 'loop',
          perPage: 4,
          interval: 9000,
          autoplay: true,
          pagination: false,
          arrows: true,
          easing: 'ease-in',
          speed: 1000,
          gap: "1rem",
          
        }} 
        >
          <SplideSlide className="py-2">
            <div className="bg-white rounded-xl w-72 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct1}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium lg:text-xl hover:underline">Drees Man</h1>
                </Link>
              <div className="flex gap-2 font-light text-sm">
                <p className="line-through ">Rp. 3.100.000 </p>
                <p>- 45%</p>
              </div>
              <h1 className="font-semibold text-base lg:text-2xl">Rp. 1.705.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
            </div>
          </SplideSlide>

          <SplideSlide className="py-2">
           <div className="bg-white rounded-xl w-72 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
           <Image
              src={imgProduct2}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-xl hover:underline">Bag Woman</h1>
                </Link>
              <div className="flex gap-2 font-light text-sm">
                <p className="line-through ">Rp. 10.500.000</p>
                <p>- 50%</p>
              </div>
              <h1 className="font-semibold text-2xl">Rp. 5.250.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
           </div>
          </SplideSlide>

          <SplideSlide className="py-2">
            <div className="bg-white rounded-xl w-72 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct3}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-xl hover:underline">Drees Woman</h1>
                </Link>
              <div className="flex gap-2 font-light text-sm">
                <p className="line-through ">Rp. 2.520.000 </p>
                <p>- 40%</p>
              </div>
              <h1 className="font-semibold text-2xl">Rp. 720.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
            </div>
          </SplideSlide>

          <SplideSlide className="py-2">
            <div className="bg-white rounded-xl w-72 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct4}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-xl hover:underline">Skincare</h1>
                </Link>
              <div className="flex gap-2 font-light text-sm">
                <p className="line-through ">Rp. 150.000</p>
                <p>- 30%</p>
              </div>
              <h1 className="font-semibold text-2xl">Rp. 105.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
            </div>
          </SplideSlide>
         
        </Splide>

        {/* Mobile Phone */}

        <Splide className=" flex justify-center lg:hidden " 
        options={{
          type: 'loop',
          perPage: 2,
          interval: 100,
          autoplay: false,
          pagination: false,
          arrows: false,
          gap: "3rem",
          
        }} 
        >
          <SplideSlide className="py-2">
            <div className="bg-white rounded-xl w-36 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct1}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-base hover:underline">Drees Man</h1>
                </Link>
              <div className="flex gap-1 lg:gap-2 font-light text-xs lg:text-sm">
                <p className="line-through text-xs lg:text-base ">Rp. 3.100.000 </p>
                <p>- 45%</p>
              </div>
              <h1 className="font-semibold text-base lg:text-2xl">Rp. 1.705.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
            </div>
          </SplideSlide>

          <SplideSlide className="py-2">
           <div className="bg-white rounded-xl w-36 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
           <Image
              src={imgProduct2}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-base lg:text-xl hover:underline">Bag Woman</h1>
                </Link>
              <div className="flex gap-1 lg:gap-2 font-light text-xs lg:text-sm">
                <p className="line-through text-xs lg:text-base  ">Rp. 10.500.000</p>
                <p>- 50%</p>
              </div>
              <h1 className="font-semibold text-base lg:text-2xl">Rp. 5.250.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
           </div>
          </SplideSlide>

          <SplideSlide className="py-2">
            <div className="bg-white rounded-xl w-36 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct3}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-base lg:text-xl hover:underline">Drees Woman</h1>
                </Link>
              <div className="flex gap-1 lg:gap-2 font-light text-xs lg:text-sm">
                <p className="line-through text-xs lg:text-base ">Rp. 2.520.000 </p>
                <p>- 40%</p>
              </div>
              <h1 className="font-semibold text-base lg:text-2xl">Rp. 720.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
            </div>
          </SplideSlide>

          <SplideSlide className="py-2">
            <div className="bg-white rounded-xl w-36 shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct4}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-base lg:text-xl hover:underline">Skincare</h1>
                </Link>
              <div className="flex gap-1 lg:gap-2 font-light text-xs lg:text-sm">
                <p className="line-through text-xs lg:text-base ">Rp. 150.000</p>
                <p>- 30%</p>
              </div>
              <h1 className="font-semibold text-base lg:text-2xl">Rp. 105.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
            </div>
          </SplideSlide>
          </Splide>
      </div>
    </main>
  );
}

export default flashSale;
