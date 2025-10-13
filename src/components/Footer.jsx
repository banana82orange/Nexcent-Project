import React from 'react'
import img01 from  '../assets/img/img-02.png'
function Footer() {
  return (
        <div className='py-10 '>
            <div className="container mx-auto max-w-[1920] p-10 grid grid-cols-1 md:grid-cols-2">
                <div >
                    <img src={img01}></img>
                </div>
                <div className="">
                    <div className='text-[1.8rem] text-lg font-semibold text-[#4D4D4D]'>How to design your site footer like we did</div>
                    <div className="text-[#717171] my-5">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</div>
                    <div className='my-10 md:mx-0'><a className='inline-flex justify-center items-center py-3 px-8 bg-[#4CAF4F] text-white rounded-md' href="#logout">Learn More</a></div>
                </div>

            </div>
        </div>

  )
}

export default Footer