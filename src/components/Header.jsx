import Image from "next/image";
import logo from "@/assest/logo.png"
import {  format } from "date-fns";

const Header = () => {
    return (
       <div className="text-center space-y-2 my-8 text-gray-700 text-xl">
    <Image src={logo} height={400} width={500} alt="logo" className="mx-auto"></Image>
    <p>
        Journalism Without Fear or Favour
    </p>
  
     <p>
          { format(new Date(), " EEEE, MMM dd,yyyy")};
     </p>
   
   </div>
    );
};

export default Header;