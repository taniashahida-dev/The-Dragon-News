import LogInSec from '@/components/Homepage/LogInSec';
import { getDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

  export async function generateMetadata({params}){
const {id} = await  params

const news = await getDetails(id)
// console.log(data)
return {
    title: news.title,
    description: news.details,
  };
  }
const NewsDetails =async ({params}) => {
    const {id} = await params
    // console.log(id)
    const data = await getDetails(id)
    // console.log(data)
    return (
         <div className='grid grid-cols-4 gap-4'>
          <div className="card shadow-lg my-6 col-span-3">
      
      <div className="p-5">
     
<h1 className="text-xl font-semibold mb-3">
  Dragon News
</h1>
        <Image
          src={data.image_url}
          height={300}
          width={300}
          alt={data.title}
          className="w-full"
        ></Image>
           <h1 className=" text-2xl font-semibold my-4 text-gray-700">
          {data.title}
        </h1>

       <div>
         <p className=" text-gray-600 my-4">{data.details}</p>
        <Link href={`/category/${data.category_id}`}><button className='text-white btn bg-pink-600 items-center'><FaArrowLeft /> All News in this Category</button></Link>
       </div>
        <div className="divider"></div>
      
      </div>
    </div>

    <div className='col-span-1 my-6'>
      <LogInSec></LogInSec>
    </div>
         </div>
    );
};

export default NewsDetails;