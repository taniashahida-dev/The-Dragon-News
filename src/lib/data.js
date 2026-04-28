export const CategoryData= async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
 const data = await res.json()
 return data.data
  // console.log(data)
}
export const getNewsCategory= async(id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
 const data = await res.json()
 return data.data
  // console.log(data)
}
export const getDetails= async(id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
 const data = await res.json()
 return data.data[0]
  // console.log(data)
}