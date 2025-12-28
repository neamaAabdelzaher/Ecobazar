import Category from "./Category"
export default function Categories() {
  
    const Categories=[
        {id:1, catImage:"/imageCat1.png",catName:"Fresh Fruit"},
        {id:2, catImage:"/imageCat2.png",catName:"Fresh Vegetables"},
        {id:3, catImage:"/imageCat3.png",catName:"Meat & Fish"},
        {id:4, catImage:"/imageCat4.png",catName:"Snacks"},
        {id:5, catImage:"/imageCat5.png",catName:"Beverages"},
        {id:6, catImage:"/imageCat6.png",catName:"Beauty & Health"},
        {id:7, catImage:"/imageCat7.png",catName:"Bread & Bakery"},
        {id:8, catImage:"/imageCat8.png",catName:"Baking Needs"},
        {id:9, catImage:"/imageCat9.png",catName:"Cooking"},
        {id:10,catImage:"/imageCat10.png",catName:"Diabetic Food"},
        {id:11,catImage:"/imageCat11.png",catName:"Dish Detergents"},
        {id:12,catImage:"/imageCat12.png",catName:"Oil"},

    ]



    return (
    <div className="container mx-auto mt-10 ">
        <div className="flex items-center justify-between">
           <h1 className="text-[32px] font-semibold leading-tight">Popular Categories</h1> 
           <div className="flex items-center gap-3 text-(--main-color) ">
            <button className="text-[16px] font-[500px] leading-tight " >View All</button>
            <img src="/arrow.png" alt="" />
           </div>
        </div>

       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  mt-10 gap-6">
        {
            Categories.map((cat)=><Category key={cat.id} catImage={cat.catImage} catName={cat.catName}/>)
        }
        
       </div>

    </div>
    )
}