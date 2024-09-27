"use client";
import React from "react";
import Image from "next/image";

// Image from canva
import imgProduct1 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0011.jpg";
import imgProduct2 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0012.jpg";
import imgProduct3 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0013.jpg";
import imgProduct4 from "../.,/../../../../public/img/imgHome/flashSale/IMG-20240927-WA0014.jpg";
import Link from "next/link";

function flashSale() {
  return (
    <main>
      <div className="w-full pb-10 pt-2 bg-[#C51E3A]">
        <div className="my-8 flex items-center justify-between mx-9">
          <h1 className="font-extrabold text-4xl font-alumni italic text-Cgold text-str">FLASH <span className="text-white">SALE</span></h1>
          <div>
            <Link href="/" className="bg-btnNavbar px-5 py-3 text-white rounded-lg border-2 border-white">Views More</Link>
          </div>
        </div>
        <div className=" flex justify-center gap-9">
          <div className="bg-white rounded-lg w-56  shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct1}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-xl hover:underline">Drees Man</h1>
                </Link>
              <div className="flex gap-2 font-light text-sm">
                <p className="line-through ">Rp. 3.100.000 </p>
                <p>- 45%</p>
              </div>
              <h1 className="font-semibold text-2xl">Rp. 1.705.000</h1>
              <span className="flex items-center gap-1">
                <i className="bx bxs-star text-textGold"></i>
                <p className="font-light text-xs">5.0 | 10K+ Sold</p>
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg w-56  shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
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
          <div className="bg-white rounded-lg w-56  shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
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
          <div className="bg-white rounded-lg w-56  shadow-cardFlashSale border border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Image
              src={imgProduct4}
              alt="product img"
              className=" rounded-t-lg"
            />
            <div className="p-3 flex flex-col gap-2">
                <Link href="/">
              <h1 className="font-medium text-xl hover:underline">Drees Man</h1>
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
         
        </div>
      </div>
    </main>
  );
}

export default flashSale;
