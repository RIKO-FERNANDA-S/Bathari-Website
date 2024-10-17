"use client"
import React, { FormEvent, useState } from "react";
import 'boxicons'
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
// IMAGE FROM CANVA PREMIUM
import img from "../../../../public/img/Login-Register/3.png"




function LoginForm() {

  const {push} = useRouter();
  const [isLoding, setIsLoding] = useState(false)
  const [error, setError] = useState('')


  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setError('')
    setIsLoding(true)

    try {
        const res =await signIn('credentials', {
            redirect:false,
            email : e.target.email.value,
            password : e.target.password.value,
        });
        if(!res?.error){
            push('/');
        } else {
            console.log(res.error)
        } 
    } catch (error) {
        console.log(error);
    }

    // const form = e.currentTarget as HTMLFormElement;
    // const data = {
    //   fullname : form.fullname.value,
    //   email : form.email.value,
    //   password : form.password.value,
    // }

    // const result = await fetch('/api/auth/register',{
    //   method : "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify(data),
    // });

//    if(result.status == 200){
//     e.target.reset();
//     push("/login")
//    }else{
//     console.log(result)
//    }

  }

  return (
    <main className="h-[100vh] w-full flex justify-center items-center ">

      <div className="w-1/2 h-full justify-center items-center flex">

      <form onSubmit={handleSubmit} className="w-5/6 h-5/6 justify-start items-center rounded-xl px-10 shadow-profil bg-slate-300 flex flex-col gap-5   ">
        
        <div className="w-full text-center mb-10 mt-16 text-white">
        <h1 className="text-7xl font-semibold">LOGIN</h1>
        <p className="text-xl">Lanjut Untuk Masuk</p>
        </div>

        <div className="w-full flex justify-center">
        <label className="input input-bordered flex items-center gap-2 w-full rounded-full">
        <i className='bx bx-envelope text-2xl'></i>
          <input type="email" name="email" id="email" className="grow" placeholder="Email" />
        </label>
        </div>

        <div className="w-full flex justify-center">
        <label className="input input-bordered flex items-center gap-2 w-full rounded-full">
        <i className='bx bx-dialpad-alt text-2xl' ></i>
          <input type="password" name="password" id="password" className="grow" placeholder="Password" />
        </label>
        </div>

        <div className="w-full flex flex-col text-center justify-center gap-5">
        <button
        disabled={isLoding}
        type="submit"
        className="btn btn-primary w-full rounded-full"
        >
          {isLoding? "Loding...." : "Login"}
        </button>

        <p>Buat akun baru? | <Link href="/register" className="text-blue-500">Register</Link></p>
           </div>
      </form>
      </div>

      <div className="w-1/2 h-full flex justify-center items-center">
      <Image src={img} alt="img1" className="h-full w-auto"></Image>
      </div>
    </main>
  );
}

export default LoginForm;
