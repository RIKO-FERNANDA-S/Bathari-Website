import React from "react";
import Image from "next/image";
import CanDo from "@/app/components/layouts/canDo"
import BeautyRecomend from "./beautyRecomend";
import BrandsCollab from "./brandsColab"
import glamourText from "../../../../public/img/imgHome/GLAMOUR SHOWCASE TEXT SHADOW.png";
import glamourCard from "../../../../public/img/imgHome/GLAMOUR IMG HOME.png";


function Hero() {
  return (
    <div className="my-12">
      <main>
        <div className="flex flex-col items-center">
            <Image src={glamourText} alt="glamourText" className="w-3/5"></Image>
            <Image src={glamourCard} alt="glamourCard" className="w-10/12"></Image>
        </div>
        <CanDo/>
        <BrandsCollab/>
        <BeautyRecomend/>

      </main>
    </div>
  );
}

export default Hero;
