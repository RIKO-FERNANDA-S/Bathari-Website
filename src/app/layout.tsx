"use client";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "@/app/components/UI/navbar";
import Footer from "./components/layouts/footer";
import Seacrh from "./components/UI/seacrh";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "GLAMOUR",
//   description: "Beauty And Fasion",
// };

const disabledSearch = [
  "/blog",
  "/about",
  "/shop",
  "/gallery",
  "/shop/detailProduct",
  "/404",
  "/aibath",
  "/register",
  "/login"
];
const disabledNavbar = ["/shop/detailProduct", "/aibath", "/register","/login"];
const disabledFooter = ["/aibath", "/register","/login"];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="max-h-max">
        <SessionProvider>
          {!disabledSearch.includes(pathname) && <Seacrh />}
          {!disabledNavbar.includes(pathname) && <Navbar />}
          {children}
          {!disabledFooter.includes(pathname) && <Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
