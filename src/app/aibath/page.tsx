"use client"
import React from 'react'
import NavbarSide from '../components/layouts/navbarSide'
import OutputAiPromt from '../components/UI/AiPromt'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Aibath() {

const {data: session, status} = useSession()
const router = useRouter()
console.log(session)

useEffect(() => {
  if(status == "unauthenticated" ){
    router.push('/login')
  } else {
    if(session?.user.role !== "admin"){
      router.push('/')
    }
  }
}, [router,session, session?.user.role , status])

  return (
    <main className='flex'>
      <section>
        <NavbarSide />
      </section>

      <section className=' w-full flex justify-end items-center flex-col'>
        <OutputAiPromt/>
      </section>
    </main>
  )
}

export default Aibath