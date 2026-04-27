import Image from "next/image";
import Link from "next/link";
import user from "@/assest/user.png"
import Navlink from "./Navlink";


const Navbar = () => {
    return (
        <>
       <div className="flex  justify-between  border-b border-b-gray-200 py-3">
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
        <div className="flex gap-4">
            <Image src={user} height={40} width={40} alt="user"></Image>
       <Link href={'/loginpage'}> <button className="btn bg-mauve-800 text-white">Login</button></Link>
        </div>
       </div>
        </>
   
    );
};

export default Navbar;