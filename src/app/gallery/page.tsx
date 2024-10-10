"use client";
import React from 'react'
import CasualStyle from '@/app/components/layouts/casualStyle';
import FormalStyle from '@/app/components/layouts/formalStyle';


function gallery() {
  return (
    <main className='my-10'>
      <h1 className='text-center font-semibold text-6xl my-8'>Gallery Bathari</h1>
      <CasualStyle/>
      <FormalStyle/>
    </main>
  )
}

export default gallery