import React from 'react'
import  clientImgLogo_1 from "../assets/img/article-01.png"
import  clientImgLogo_2 from "../assets/img/article-02.png"
import  clientImgLogo_3 from "../assets/img/article-03.png"

function Marketing() {
    const data = [
        {img:clientImgLogo_1 ,text:"Creating Streamlined Safeguarding Processes with OneRen" },
        {img:clientImgLogo_2 ,text:"What are your safeguarding responsibilities and how can you manage them?"   } ,
        {img:clientImgLogo_3 ,text:"Revamping the Membership Model with Triathlon Australia"  }
    ];
  return (
        <div className='container md-auto max-w-[1920] py-4 text-center mx-auto'>
        <div className='text-[2.3rem] font-semibold text-[#4D4D4D]'>Caring is the new marketing</div>
        <div className='text-[1.1rem] font-semibold text-[#4D4D4D] mb-10'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[100px] m-10 md:m-0'>


                {
                    data.map((data,index) =>(
                        <div>
                            <img
                                className="w-full h-48 object-cover"
                                src={data.img}
                                alt="Card Image"/>
                            <div className="p-6 text-center">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                {data.text}
                                </h2>
                                <a
                                href="#"
                                className="text-green-500 font-medium hover:underline"
                                >
                                Readmore →
                                </a>
                            </div>
                        </div>
                    ))
                }



        </div>
    </div>
  )
}

export default Marketing