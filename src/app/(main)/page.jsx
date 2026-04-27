import Categories from "@/components/Homepage/Categories"


const CategoryData= async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
 const data = await res.json()
 return data.data
  // console.log(data)
}

export default async function Home() {
  const data = await CategoryData()
  console.log(data.news_category)
  
 
  return (
   <div className="grid grid-cols-4 my-10 gap-3">
    <div className="col-span-1">
      <Categories data={data} active_id={"01"}></Categories>
    
    </div>

    <div className="col-span-2">
      <h1>Dragon News Home</h1>
     
    </div>
    <div className="col-span-1">
      <h1>Login with</h1>
    </div>
   </div>
  );
}
