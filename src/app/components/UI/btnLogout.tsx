'use client'
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function BtnLogout() {
  return (
    <div>
    <button onClick={() => signOut()} className="border rounded-lg py-2 px-5 border-black shadow-shadowBtn hover:shadow-none hover:translate-y-[.10rem] hover:translate-x-[.10rem]">
    Logout
  </button>
    </div>
  )
}