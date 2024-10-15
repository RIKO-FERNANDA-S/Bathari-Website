"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BtnLogin from "./btnLogin"
import BtnSignUp from "./btnSignUp";
import {motion} from "framer-motion";
import { useSession } from "next-auth/react";
import BtnLogout from "./btnLogout";



function Navbar() {
  const pathname = usePathname();
  const { status}: { status: string} = useSession()

  return (
    <div className="w-full hidden lg:flex flex-col items-center justify-center gap-3">
      <motion.nav
         initial={{
          y:-200
        }}
        animate={{
          y:0
        }}
        transition={{
          duration: 0.6
        }}
      
      className="mt-2 w-11/12 border-2  rounded-lg py-1 h-20 flex items-center border-black shadow-shadowNavbar justify-between px-10 ">
        <div className="pl-4 pr-2  flex items-center ">
          <Link href="/">
          
          <h1 className="font-batharia text-3xl font-medium">
            BATHARI
          </h1></Link>
        </div>
        <div className="flex gap-5 font-medium text-base ">
          <Link href="/">
            <h1 className={` py-2 px-5  ${pathname === "/" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Beranda</h1>
          </Link>

          <Link href="/blog">
            <h1 className={` py-2 px-5  ${pathname === "/blog" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Blog</h1>
          </Link>

          <Link href="/about">
            <h1 className={` py-2 px-5  ${pathname === "/about" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Tentang</h1>
          </Link>

          <Link href="/gallery">
            <h1 className={` py-2 px-5  ${pathname === "/gallery" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Galeri</h1>
          </Link>

          <Link href="/shop">
            <h1 className={` py-2 px-5  ${pathname === "/shop" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>Belanja</h1>
          </Link>

          <Link href="/aibath">
            <h1 className={` py-2 px-5  ${pathname === "/aibath" ? "text-white bg-black rounded-md" : "text-black bg-none"}`}>AI Bath</h1>
          </Link>
        </div>
        <div className="flex gap-4 font-medium">
          {status === 'authenticated' 
          ?  (<BtnLogout/>)
          : (<BtnLogin/>)
          }
          <BtnSignUp/>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
