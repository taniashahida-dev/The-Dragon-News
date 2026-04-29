"use client"
import Image from "next/image";
import Link from "next/link";
import userimg from "@/assest/user.png"
import Navlink from "./Navlink";
  import { authClient } from "@/lib/auth-client"

const Navbar = () => {

const { data: session,isPending } = authClient.useSession()
console.log(session)
const userdata = session?.user

    return (
        <>
       <div className="flex  justify-between  border-b border-b-gray-200 p-3">
        <div></div>
       <div className="">
         <ul className=" flex gap-4 ">

           <li>
             <Navlink href={'/'}>Home</Navlink>
           </li>
           
           <li>
             <Navlink href={'/about'}>About</Navlink>
           </li>
           
           <li>
             <Navlink href={'/career'}>Career</Navlink>
           </li>
           
        </ul>
       </div>
       
        {
          isPending? <span className="loading loading-ring loading-lg"></span>:
          userdata? <div className="flex gap-4 items-center"> <p>{userdata?.name}</p>
            <Image src={userdata?.image || userimg } height={40} width={40} alt="user" className="rounded-full h-full"></Image>
            <button className="btn bg-mauve-800 text-white" onClick={async()=>await authClient.signOut()}>Logout</button>
            </div>

      : <Link href={'/login'}> <button className="btn bg-mauve-800 text-white">Login</button></Link>
        }
     
       </div>
        </>
   
    );
};

export default Navbar;