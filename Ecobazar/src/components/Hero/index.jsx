import React from 'react'       
import { FaArrowRight } from "react-icons/fa";


export default function Hero() {
  return (
    <section>
       <div className="container mx-auto h-150 m-5">
  
  <div className="grid grid-cols-12 gap-6 h-full">

   
    <div className='col-span-8 rounded bg-[linear-gradient(98.82deg,rgba(0,0,0,0.6)_10.4%,rgba(0,0,0,0)_59.43%),url("/bg1.jpg")] bg-cover bg-center 
    flex items-center'>
      <div className="p-8">
        <h1 className="text-[48px] text-white font-Poppins font-bold mb-4">
          Fresh & Healthy <br />
           Organic Food
        </h1>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-0.5 h-14 bg-[#84D187]"></div>
          <div>
            <p className='text-[20px] font-semibold text-white '>
              Sale up to <span className="p-1 rounded bg-[#FF8A00]">30% OFF</span>
            </p>
            <p className='text-sm py-2 text-white'>Free shipping on all your order.</p>
          </div>
        </div>

        <button className="btn w-47.75 h-12.75 text-center bg-white text-(--main-color) rounded-[53px]  flex items-center justify-center gap-2">
          Shop Now <FaArrowRight />
        </button>
      </div>
    </div>

   
    <div className="col-span-4 grid grid-rows-2 gap-6">

      
      <div className='bg-[url("/bg2.jpg")] bg-cover bg-center scale-x-[-1]'>
     <div className='scale-x-[-1] flex flex-col gap-3 items-start p-8'>
        <p className='uppercase text-md font-semibold tracking-wide'>Summer Sale</p>
      <h1 className='text-4xl font-bold leading-tight'>75% OFF</h1>
      <p className='text-md font-normal text-gray-600 leading-loose '>Only Fruit & Vegetable</p>
      <button className='text-[16px] leading-tight font-bold btn text-(--main-color) flex items-center gap-2'>
        Shop Now
        <FaArrowRight />
      </button>

     </div>
      
      </div>

<div className="relative bg-[url('/bg3.jpg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-[rgba(0,38,3,0.8)]"></div>
  <div className="relative z-10 h-full text-white display flex flex-col items-center justify-center px-12">
    <p className='text-sm tracking-widest font-semibold uppercase'>Best Deal</p>
    <h1 className='text-4xl mt-4 font-bold leading-tight tracking-tight'>Special Products <br />
     Deal of the Month</h1>
     <button className='text-[16px] mt-8 leading-tight font-bold btn text-(--main-color) flex items-center gap-2'>
        Shop Now
        <FaArrowRight />
      </button>
    
  </div>
</div>

    </div>

  </div>
</div>
    </section>
  )
}
