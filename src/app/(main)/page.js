

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
    <div className="col-span-1"><h1 className="text-xl font-bold mb-3">All Caterogy</h1>
     <ul>
{
  data.news_category.map(category=> <li key={category.category_id} className="p-3 bg-mauve-400 text-lg text-center my-4 rounded-sm">{category.category_name}</li>)
}
      </ul>
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
