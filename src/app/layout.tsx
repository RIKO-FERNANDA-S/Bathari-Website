'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import Navbar from "@/app/components/UI/navbar";
import Footer from "./components/UI/footer";
import Seacrh from "./components/UI/seacrh";
import { usePathname } from "next/navigation";


// export const metadata: Metadata = {
//   title: "GLAMOUR",
//   description: "Beauty And Fasion",
// };


const disabledSearch = ['/trending','/about','/shop','/gallery']

export default function RootLayout({children }: Readonly<{ children: React.ReactNode; }>) 
{
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
      {!disabledSearch.includes(pathname) && <Seacrh />}
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
