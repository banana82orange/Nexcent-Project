import React from 'react'
import img01 from  '../assets/img/tim-smith.png'
import  clientImgLogo_1 from "../assets/img/clients/client-01.png"
import  clientImgLogo_2 from "../assets/img/clients/client-02.png"
import  clientImgLogo_3 from "../assets/img/clients/client-03.png"
import  clientImgLogo_4 from "../assets/img/clients/client-04.png"
import  clientImgLogo_5 from "../assets/img/clients/client-05.png"
import  clientImgLogo_6 from "../assets/img/clients/client-06.png"

function MeetCustomer() {
        const clientLogos = [
        {img:clientImgLogo_1},
        {img:clientImgLogo_2},
        {img:clientImgLogo_3},
        {img:clientImgLogo_4},
        {img:clientImgLogo_5},
        {img:clientImgLogo_6}
      ];
  return (
        <div className='py-10 '>
            <div className="container mx-auto max-w-[1920] p-10 grid grid-cols-1 md:grid-cols-2">
                <div >
                    <img src={img01}></img>
                </div>
                <div className="">

                    <div className="text-[#717171] my-5">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</div>
                    <div className="text-[#4CAF4F] my-5">Tim Smith</div>
                    <div className="text-[#717171] my-5">British Dragon Boat Racing Association</div>

                    <div className='flex'>
                        <div className='flex flex-col items-center my-10 md:flex-row md:justify-between'>
                            {
                                clientLogos.map((item) => (
                                <img src={item.img}></img>
                                ))
                            }
                        </div>
                        <div className='my-10 md:mx-0'><a className='inline-flex justify-center items-center py-3 px-8 text-[#4CAF4F]' href="#logout">Meet all customers </a></div>
                    </div>
                </div>

            </div>
        </div>

  )
}

export default MeetCustomer