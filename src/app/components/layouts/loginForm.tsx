"use client"
import React, { FormEvent, useState } from "react";
import 'boxicons'
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signIn } from "next-auth/react";



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
    <main className="h-[100vh] w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-2/5 flex flex-col gap-4">

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
          {isLoding? "Loding...." : "Login"}
        </button>
      </form>
    </main>
  );
}

export default LoginForm;
