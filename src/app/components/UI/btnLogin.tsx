'use client'
import Link from "next/link"

export default function BtnLogin() {
  return (
    <Link href="/">
    <button className="border rounded-lg py-2 px-5 border-black shadow-shadowBtn hover:shadow-none hover:translate-y-[.10rem] hover:translate-x-[.10rem]">
    Login
  </button>
    </Link>
  )
}