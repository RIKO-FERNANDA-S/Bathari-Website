"use client";
import React from "react";
import Seacrh from "./seacrh";
import { Jacques_Francois } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BtnLogin from "@/app/components/UI/btnLogin"
import BtnSignUp from "./btnSignUp";



function navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      
      
      <nav className="mt-2 w-11/12 border-2 rounded-lg py-1 h-20 flex items-center border-blue-200 shadow-shadowNavbar justify-between px-10 ">
        <div className="pl-4 pr-2  flex items-center ">
          <Link href="/">
          
          <h1 className="font-batharia text-3xl font-semibold">
            BATHARI
          </h1></Link>
        </div>
        <div className="flex gap-10 font-medium ">
          <Link href="/trending">
            <h1 className={` py-3 px-4  ${pathname === "/trending" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Trending</h1>
          </Link>

          <Link href="/about">
            <h1 className={` py-3 px-4  ${pathname === "/about" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>About</h1>
          </Link>

          <Link href="/gallery">
            <h1 className={` py-3 px-4  ${pathname === "/gallery" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Gallery</h1>
          </Link>

          <Link href="/shop">
            <h1 className={` py-3 px-4  ${pathname === "/shop" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Shop</h1>
          </Link>
        </div>
        <div className="flex gap-4 font-medium">
          <BtnLogin/>
          <BtnSignUp/>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
