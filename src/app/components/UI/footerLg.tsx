"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../../public/img/social-media/facebook.png";
import Whastapp from "../../../../public/img/social-media/whatsapp.png";
import Instagram from "../../../../public/img/social-media/instagram.png";
import Tweeter from "../../../../public/img/social-media/Group 68.png";
import Telegram from "../../../../public/img/social-media/Group 67.png";

function footerLg() {
  return (
    <main className="bg-black text-white hidden lg:flex lg:flex-col">
    <article className="flex  py-10 justify-center px-24 border-b-2 border-borderAAA ">
      <div className="flex flex-col w-1/2 pr-32">
        <h1 className="text-4xl font-batharia">BAHTARI</h1>
        <p className="my-11 text-base font-normal text-textFooter">
          Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru, Kabupaten
          Sidoarjo, Jawa Timur 61256
        </p>
        <p className="text-base font-normal text-textFooter">
          Email: bathariagung@bussiness.com
        </p>
      </div>

      <div className="flex gap-28 ">
        <div className="flex flex-col gap-7 ">
          <h1 className="text-lg font-bold text-white ">
            Company
          </h1>
          <div className="collapse-content flex flex-col text-textFooter">
            
            <Link href="/404">
              <p>About Us</p>
            </Link>
            <Link href="/privacyAndPolicy">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/404">
              <p>Collaboration</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-7 ">
          
          <h1 className="text-lg font-bold text-white ">
            Help
          </h1>
          <div className=" text-textFooter">
            <Link href="/404">
              <p>Customer Service</p>
            </Link>
            <Link href="/404">
              <p>FAQ</p>
            </Link>
            <Link href="/404">
              <p>Email Us</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-7 ">
          <input type="radio" name="my-accordion-3" className="flex lg:hidden"/>
          <h1 className="text-lg font-bold text-white ">
            Blog
          </h1>
          <div className=" text-textFooter">
            <Link href="/404">
              <p>Article</p>
            </Link>
            <Link href="/404">
              <p>BathariaEdu</p>
            </Link>
            <Link href="/404">
              <p>Join Us</p>
            </Link>
          </div>
        </div>
      </div>
    </article>

    <article className="flex text-left justify-between px-20 py-4 items-center">
      <div className="w-1/2 border-borderAAA border-r-2 p-4">
        <h1>PT. Prakarsa Bathari Agung - THIS WEB FOR EDUCATION </h1>
      </div>
      <div className="flex flex-wrap gap-10 w-1/2 justify-center">
        <Image src={Facebook} alt="facebook" className="w-10"></Image>
        <Image src={Telegram} alt="Telegram" className="w-10"></Image>
        <Image src={Tweeter} alt="tweeter" className="w-10"></Image>
        <Image src={Whastapp} alt="whatsapp" className="w-10"></Image>
        <Image
          src={Instagram}
          alt="instagram"
          className="w-10"
        ></Image>
      </div>
    </article>
  </main>
  )
}

export default footerLg