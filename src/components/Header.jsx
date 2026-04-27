import Image from "next/image";
import logo from "@/assest/logo.png"
import {  format } from "date-fns";
import Marquee from "react-fast-marquee";


const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const Header = () => {

    return (
       <div className="text-center space-y-2 my-8 text-gray-700 text-xl ">
    <Image src={logo} height={400} width={500} alt="logo" className="mx-auto"></Image>
    <p>
        Journalism Without Fear or Favour
    </p>
  
     <p>
          { format(new Date(), " EEEE, MMM dd,yyyy")};
     </p>
   <div className=" flex  items-center">
    <button className="btn bg-pink-800 text-lg text-white">Latest</button>
    <div className="bg-mauve-100 py-2 rounded-r-lg">
        <Marquee pauseOnHover={true}>
     {
        news.map(n=><p key={n._id} className="mr-10 ">{n.title}</p>)
     }
    </Marquee>
    </div>
   </div>
   </div>

    );
};

export default Header;