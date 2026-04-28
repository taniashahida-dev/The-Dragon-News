import Categories from "@/components/Homepage/Categories";
import LogInSec from "@/components/Homepage/LogInSec";
import { CategoryData, getNewsCategory } from "@/lib/data";




const NewsCategory =async ({params}) => {
    const {id} = await params
    console.log(id)

     const data = await CategoryData()
  // console.log(data.news_category)
  const news =await getNewsCategory(id)
  console.log(news)
    return (
          <div className="grid grid-cols-4 my-10 gap-3">
    <div className="col-span-1">
      <Categories data={data} active_id={id}></Categories>
    
    </div>

    <div className="col-span-2">
      <h1 className="text-xl font-semibold mb-3">News by categories</h1>
      <div>
        {
          news?.map(n=><h1 key={n._id} className="bg-gray-100 p-5 border my-3 rounded-lg">{n.title}</h1>)
        }
      </div>
     
    </div>
    <div className="col-span-1">
      <LogInSec></LogInSec>
     
    </div>
   </div>
    );
};

export default NewsCategory;