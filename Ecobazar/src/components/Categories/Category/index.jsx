export default function Category({catImage, catName}) {
    return (

        <div>
             <div className="border-gray-100 border flex flex-col items-center hover:text-[#2C742F] hover:border-[#2C742F] ">
            <img className="w-47.5 h-32.5" src={catImage} alt="" />
            <p className="text-center text-[18px] font-[500px] py-2">{catName}</p>
        </div>
        </div>
    )
}