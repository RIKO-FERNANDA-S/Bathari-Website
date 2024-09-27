import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowNavbar: '4px 3px 0px 3px rgba(0, 0, 0)',
        shadowSearch: '1px 1px 0px 3px rgba(0, 0, 0)',
        shadowBtn: '2px 2px 0px 1px rgba(0, 0, 0)',
        'profil': '0 0 15px -6px rgba(0,0,0)',
        cardTrending: '6px 6px 0px 2px rgba(0, 0, 0)',
        cardFlashSale: '4px 4px 0px 2px rgba(0, 0, 0, 0.8)',
        shadowBenner: '3px 3px 0px 2px rgba(0, 0, 0)',
        shadowRecommend: '3px 3px 10px -5px rgba(0, 0, 0)',
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'borderAAA': "#AAAA",
        btnNavbar: "#FF3C9A",
        Cgold: "#FABC3F",
        Csilver: "#F8EDED",
        Cbrown: "#C08B5C"
      },
      fontFamily: {
        'batharia': "'Jacques Francois', serif",
        'poppins': "'Poppins', sans-serif",
        'alumni': "'Alumni Sans', sans-serif",
      },
      textColor:{
        'textFooter': "#AAAA",
        'textGold': "#FFBB00",
      },
      backgroundImage:{
        imgProduct1: "./public/img/trending/product/product1.png",
        imgCollab: "./public/img/imgHome/collab.png"
      },
      animation:{
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      }

    },
  },
  plugins: [
    require('daisyui')
  ],
};
export default config;
