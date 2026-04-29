"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
  import { useForm } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";
  
  const ReistrationPage = () => {
   const [isShowPass, setShowPass]= useState(false)
       const {
      register,
      handleSubmit,
        formState: { errors },
     
    } = useForm()
    const handleReg = async(data)=>{
  // console.log(data)

  const { data:res, error } = await authClient.signUp.email({
        email : data.email,
        password:data.password,
        name:data.name,
        image :data.photo
      
       
    })
console.log(res,error)
if (error) {
  alert(error.message)
  return
}
      if (res) {
        alert("SignUp successfull")
      } 

    }
  
    return (
      <div className="hero bg-base-200 h-screen">
        <div className="bg-white p-10 rounded-lg ">
          <h1 className="text-3xl font-semibold text-center text-mauve-800">
         Register your account
          </h1>
          <div className="divider my-5"></div>
  
          <form className="space-y-2" onSubmit={handleSubmit(handleReg)}>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Your Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                 {...register("name", { required:"Name field is required" })} 
              />
            </fieldset>
  
  {
      errors.name && (<p className="text-xs text-red-600">{errors.name.message}</p>)
  }
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Photo URL</legend>
              <input
                type="url"
                className="input"
                placeholder="Enter URL"
                 {...register("photo", { required:"This field is required" })} 
              />
            </fieldset>
  
  {
      errors.photo && (<p className="text-xs text-red-600">{errors.photo.message}</p>)
  }
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Email Address</legend>
              <input
                type="email"
                className="input"
                placeholder="Enter Your Email"
                 {...register("email", { required:"Email field is required" })} 
              />
            </fieldset>
  
  {
      errors.email && (<p className="text-xs text-red-600">{errors.email.message}</p>)
  }
  
            <fieldset className="fieldset relative">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={isShowPass? "text":"password"}
                className="input"
                placeholder="Enter Your Password"
       {...register("password", { required:"Password field is required" })} 
              />
              <span className="cursor-pointer text-xl absolute top-3 right-5" onClick={()=>setShowPass(!isShowPass)}>
                            {
                              isShowPass?<LuEye />: <LuEyeClosed />
                            }
                           
                          </span>
                              {
      errors.password && (<p className="text-xs text-red-600">{errors.password.message}</p>)
  }
            </fieldset>
        
 
           <Link href={"/login"}> <button className="btn bg-mauve-600 text-white w-full my-2">
              Register
            </button></Link>
          </form>
        
        </div>
      </div>
    );
  };
  
  export default ReistrationPage;
  


