import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="card shadow-lg my-6">
      <div className="flex justify-between items-center p-4 rounded-t-sm bg-gray-100">
        <div className="flex justify-between items-center gap-3 text-gray-600">
          <Image
            src={news.author?.img}
            height={50}
            width={50}
            alt={news.author?.name}
            className="rounded-full"
          ></Image>
          <div>
            {" "}
            <h1 className="text-lg">{news.author?.name}</h1>
            <p className="text-sm">{news.author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center text-2xl">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="p-5">
        <h1 className=" text-2xl font-semibold my-4 text-gray-700">
          {news.title}
        </h1>

        <Image
          src={news.image_url}
          height={300}
          width={400}
          alt={news.title}
          className="w-full"
        ></Image>

       <div>
         <p className="line-clamp-3 text-sm text-gray-600 my-4">{news.details}</p>
        <Link href={`/news/${news.category_id}`}><p className="text-orange-600 text-lg">Read More..</p></Link>
       </div>
        <div className="divider"></div>
        <div className="flex justify-between text-gray-500 items-center">
            <div className="flex gap-1 items-center  text-lg ">
                <FaStar className="text-orange-500 text-2xl"/>
                <p >{news.rating?.number}</p>
            </div>
          <div className="flex gap-2 items-center   text-lg ">
            <IoMdEye className="text-2xl"/>
              <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
