export default function Feature({icon, title, description}) {

return (
    <div className="flex items-center gap-4">
               <img className=" text-[#00B207]" src={icon} alt="icon" />
               <div >
                <h1 className="text-[16px]  font-semibold leading-tight text-[#1A1A1A]">{title}</h1>
                <p className="text-sm font-[400px] text-[#999999]  leading-relaxed  py-1.5">{description}</p>
               </div>
            </div>
)



}