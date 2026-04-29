"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const LogIn = () => {

  const [isShowPass, setShowPass]= useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { data:res, error } = await authClient.signIn.email({
      email:data.email,
      password: data.password,
      callbackURL: "/",
      rememberMe: true,
    });
    console.log(res,error)
    if (error) {
      alert(error.message)
      return
    } else {
      alert("Login Successful")
    }
    // console.log(data)
  };
  return (
    <div className="hero bg-base-200 h-[80vh]">
      <div className="bg-white p-10 rounded-lg ">
        <h1 className="text-3xl font-semibold text-center text-mauve-800">
          Login Your Account
        </h1>
        <div className="divider my-5"></div>

        <form className="space-y-2" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email field is required" })}
            />
          </fieldset>

          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPass? "text":"password"}
              className="input"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />

            <span className="cursor-pointer text-xl absolute top-3 right-3" onClick={()=>setShowPass(!isShowPass)}>
              {
                isShowPass?<LuEye />: <LuEyeClosed />
              }
             
            </span>
              {errors.password && (
            <p className="text-xs text-red-600">{errors.password.message}</p>
          )}
          </fieldset>
        

          <button className="btn bg-mauve-600 text-white w-full my-2">
            Login
          </button>
        </form>
        <p className="text-center text-mauve-400 text-sm">
          Dont't Have An Account ?
          <Link href={"/registration"} className="text-purple-600">
            {" "}
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LogIn;
