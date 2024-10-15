"use client"
import React, { FormEvent, useState } from "react";
import 'boxicons'
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



function RegisterForm() {

  const {push} = useRouter();
  const [isLoding, setIsLoding] = useState(false)
  const [error, setError] = useState('')


  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setError('')
    setIsLoding(true)
    const form = e.currentTarget as HTMLFormElement;
    const data = {
      fullname : form.fullname.value,
      email : form.email.value,
      password : form.password.value,
    }

    const result = await fetch('/api/auth/register',{
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data),
    });

   if(result.status == 200){
    e.target.reset();
    push("/login")
   }else{
    console.log(result)
   }

  }

  return (
    <main className="h-[100vh] w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-2/5 flex flex-col gap-4">

        <label className="input input-bordered flex items-center gap-2">
        <i className='bx bxs-user-circle text-2xl' ></i>
          <input type="text" name="fullname" id="fullname" className="grow" placeholder="Username" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
        <i className='bx bx-envelope text-2xl'></i>
          <input type="email" name="email" id="email" className="grow" placeholder="Email" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
        <i className='bx bx-dialpad-alt text-2xl' ></i>
          <input type="password" name="password" id="password" className="grow" placeholder="Password" />
        </label>

        <button
        disabled={isLoding}
         type="submit"
         className="btn btn-primary"
         >
          {isLoding? "Loding...." : "Register"}
        </button>
      </form>
    </main>
  );
}

export default RegisterForm;
