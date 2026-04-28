import Categories from "@/components/Homepage/Categories";
import LogInSec from "@/components/Homepage/LogInSec";
import NewsCard from "@/components/Homepage/NewsCard";
import { CategoryData, getNewsCategory } from "@/lib/data";




const NewsCategory =async ({params}) => {
    const {id} = await params
    // console.log(id)

     const data = await CategoryData()
  // console.log(data.news_category)
  const news =await getNewsCategory(id)
  // console.log(news)
    return (
          <div className="grid grid-cols-4 my-10 gap-3">
    <div className="col-span-1">
      <Categories data={data} active_id={id}></Categories>
    
    </div>

    <div className="col-span-2">
      <h1 className="text-xl font-semibold mb-3">News by categories</h1>
      <div>
        {
         news.length>0? news?.map(n=> <NewsCard key={n._id} news={n}></NewsCard> ): <h1 className="text-4xl text-center text-mauve-700 mt-20">No News Found!!</h1>
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