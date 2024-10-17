"use client"
import Link from 'next/link'
import React from 'react'

function btnSignUp() {
  return (
    <div className="flex py-2 px-5 items-center border rounded-lg text-white bg-btnNavbar shadow-shadowBtn border-black hover:shadow-none hover:translate-y-[.10rem] hover:translate-x-[.10rem]">
      <Link href="/register">
    <button className="mr-2">Register</button>
      </Link>
  </div>
  )
}

export default btnSignUp