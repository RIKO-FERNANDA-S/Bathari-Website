'use client';
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


const disabledSearch = ['/trending','/about','/shop','/gallery','/shop/detailProduct']
const disabledNavbar = ['/shop/detailProduct']

export default function RootLayout({children }: Readonly<{ children: React.ReactNode; }>) 
{
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
      {!disabledSearch.includes(pathname) && <Seacrh />}
      {!disabledNavbar.includes(pathname) && <Navbar/>}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
