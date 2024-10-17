"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BtnLogout from "./btnLogout"
import {motion} from "framer-motion"
import { useState, createContext } from "react";
import 'boxicons'

function NavSide() {

    const [expend, setexpend] = useState(true)
    const pathname = usePathname()

  return (
    <main className={`h-[100vh] bg-white drawer ${expend ? "w-52" : "w-16 overflow-hidden text-nowrap"} transition-all`}>
        <motion.nav className=" h-full w-full border-2 py-1 flex flex-col border-r-black justify-around px-1 drawer-content">

        <div className={`px-3 flex items-center gap-2 h-max `} >
            <input type="radio"  id="drawerKu" className="drawer-toggle"/>
          <button onClick={() => setexpend(curr => !curr)} className="drawer-button h-max"><i className='bx bx-menu text-3xl mt-1 '></i></button>
          <Link href="/" className={`overflow-hidden ${expend ? "w-max" : "w-0"}`}> 
          <label htmlFor="drawerKu" className="font-batharia text-3xl font-medium text-nowrap">
            AI BATH
          </label>
          </Link>
        </div>

        

        <div className="flex flex-col gap-5 font-medium text-base ">
          <Link href="/" className={` py-2 px-3  ${pathname === "/" ? "text-white bg-black rounded-md" : "text-black bg-none"} flex gap-4 items-center ` }>
          <i className='bx bx-home text-3xl'></i>
            <h1>Beranda</h1>
          </Link>

          <Link href="/blog"  className={` py-2 px-3  ${pathname === "/blog" ? "text-white bg-black rounded-md" : "text-black bg-none"} flex gap-4 items-center ` }>
          <i className='bx bxl-blogger text-3xl' ></i>
            <h1 className="text-nowrap" >Blog</h1>
          </Link>

          <Link href="/about" className={` py-2 px-3  ${pathname === "/about" ? "text-white bg-black rounded-md" : "text-black bg-none"} flex gap-4 items-center ` }>
          <i className='bx bx-info-circle text-3xl' ></i>
            <h1 className="text-nowrap" >Tentang</h1>
          </Link>

          <Link href="/gallery" className={` py-2 px-3  ${pathname === "/gallery" ? "text-white bg-black rounded-md" : "text-black bg-none"} flex gap-4 items-center ` }>
          <i className='bx bx-photo-album text-3xl' ></i>
            <h1 className="text-nowrap" >Galeri</h1>
          </Link>

          <Link href="/shop" className={` py-2 px-3  ${pathname === "/shop" ? "text-white bg-black rounded-md" : "text-black bg-none"} flex gap-4 items-center ` }>
          <i className='bx bx-cart text-3xl' ></i>
            <h1 className="text-nowrap" >Belanja</h1>
          </Link>

          <Link href="/aibath" className={` py-2 px-3  ${pathname === "/aibath" ? "text-white bg-black rounded-md" : "text-black bg-none"} flex gap-4 items-center ` }>
          <i className='bx bx-chip text-3xl'  ></i>
            <h1 className="text-nowrap" >AI Bath</h1>
          </Link>
        </div>

        <div className="flex w-full justify-center px-3" >
          {expend ? <BtnLogout/> : <i className='bx bx-log-out text-3xl'></i>}
        </div>

        <div className="w-full flex justify-center">
            {expend ? <h1 className="text-center text-xs">© 2024 Bathari. All rights reserved.</h1> : <i className='bx bx-copyright'></i> }
        </div>
      </motion.nav>
    </main>
  )
}

export default NavSide