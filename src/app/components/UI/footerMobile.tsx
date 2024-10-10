"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../../public/img/social-media/facebook.png";
import Whastapp from "../../../../public/img/social-media/whatsapp.png";
import Instagram from "../../../../public/img/social-media/instagram.png";
import Tweeter from "../../../../public/img/social-media/Group 68.png";
import Telegram from "../../../../public/img/social-media/Group 67.png";

function footerMobile() {
  return (   
  <main className="bg-black text-white lg:hidden">
    <article className="flex flex-wrap py-10 px-10 justify-center border-b-2 border-borderAAA ">
      <div className="flex flex-col w-full mb-7 text-center  ">
        <h1 className="text-4xl font-batharia">BAHTARI</h1>
        <p className="my-5 text-base font-normal text-textFooter">
          Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru, Kabupaten
          Sidoarjo, Jawa Timur 61256
        </p>
        <p className="text-base font-normal text-textFooter">
          Email: bathariagung@bussiness.com
        </p>
      </div>

      <div className="flex gap-10 flex-wrap mt-2">
        <div className="flex flex-col gap-1 collapse collapse-plus border-2">
          <input type="radio" name="my-accordion-3" defaultChecked className="absolute"/>
          <h1 className="text-lg font-bold  collapse-title">
            Company
          </h1>
          <div className="collapse-content max-h-0  transition-all duration-300 flex flex-col gap-3 text-textFooter">
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

        <div className="flex flex-col gap-1  collapse collapse-plus border-2">
          <input type="radio" name="my-accordion-3" className="absolute"/>
          <h1 className="text-lg font-bold  collapse-title">
            Help
          </h1>
          <div className="collapse-content max-h-0  transition-all duration-300 flex flex-col gap-3 text-textFooter">
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

        <div className="flex flex-col gap-1 h-max collapse collapse-plus border-2">
          <input type="radio" name="my-accordion-3" className="absolute"/>
          <h1 className="text-lg font-bold  collapse-title">
            Blog
          </h1>
          <div className="collapse-content max-h-0  transition-all duration-300 flex flex-col gap-3 text-textFooter">
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

    <article className="flex text-center pt-5 gap-5 flex-col justify-between items-center">
      <div className="flex flex-wrap gap-7   w-full justify-center">
        <Link href="/404"><Image src={Facebook} alt="facebook" className="w-8 "></Image></Link>
        <Link href="/404"><Image src={Telegram} alt="Telegram" className="w-8 "></Image></Link>
        <Link href="/404"><Image src={Tweeter} alt="tweeter" className="w-8 "></Image></Link>
        <Link href="/404"><Image src={Whastapp} alt="whatsapp" className="w-8 "></Image></Link>
        <Link href="/404"><Image src={Instagram} alt="instagram" className="w-8 "></Image></Link>
      </div>
      <div className="w-full p-4">
        <h1>PT. Prakarsa Bathari Agung - THIS WEB FOR EDUCATION </h1>
      </div>
    </article>
  </main>
  )
}

export default footerMobile