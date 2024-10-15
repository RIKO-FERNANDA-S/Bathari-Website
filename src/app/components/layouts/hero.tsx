"use client"
import React from "react";
import Image from "next/image";
import CanDo from "@/app/components/layouts/canDo"
import BeautyRecomend from "./beautyRecomend";
import FlashSale from "../UI/flashSale";
import Categories from "./categories"
import glamourText from "../../../../public/img/imgHome/GLAMOUR SHOWCASE TEXT SHADOW.png";
import glamourCard from "../../../../public/img/imgHome/GLAMOUR IMG HOME.png";
import {motion} from "framer-motion"


function Hero() {
  return (
    <div className="my-12">
      <main>
        <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
        className="flex items-center mx-5 py-10">
            {/* <Image src={glamourText} alt="glamourText" className="w-[50em] "></Image> */}
            <Image src={glamourCard} alt="glamourCard" className="w-[80em]"></Image>
        </motion.div>
        <CanDo/>
        <Categories/>
        <FlashSale/>
        <BeautyRecomend/>

      </main>
    </div>
  );
}

export default Hero;
