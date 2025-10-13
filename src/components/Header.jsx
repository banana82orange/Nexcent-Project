import React from 'react'
import Headerimg from "../assets/img/header-img.png"
function Header() {
  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[37.5rem] flex items-center mx-auto'>
        <div className='container max-auto max-w-[1920px] mx-20 p-12 flex flex-col md:flex-row md:justify-between'>
            <div>
                <h1 className='text-[4rem] leading-[1] font-semibold text-[#4D4D4D]'>Lessons and insights<br /> <span className='text-[#4CAF4F]'>from 8 year</span> </h1>
                <div className='text-[#717171] mt-4'>Where to grow your business as a photographer: site or social media?</div>
                <div className='my-10 md:mx-0'><a className='inline-flex justify-center items-center py-3 px-8 bg-[#4CAF4F] text-white rounded-md' href="#logout">Register</a></div>
            </div>
            <div>
                <img src={Headerimg}></img>
            </div>
        </div>


    </div>
  )
}

export default Header