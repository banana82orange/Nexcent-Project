import React from 'react'
import icon01 from '../assets/img/icon-01.png'
import icon02 from '../assets/img/icon-02.png'
import icon03 from '../assets/img/icon-03.png'

function Comunity() {
    const data = [
        {img:icon01 ,texthead:"Membership",texttail:"Organisations"},
        {img:icon02 ,texthead:"National"  ,texttail:"Associations"} ,
        {img:icon03 ,texthead:"Clubs And" ,texttail:"Groups"}
    ];
  return (
    <div className='container md-auto max-w-[1920] py-4 text-center mx-auto'>
        <div className='text-[2.3rem] font-semibold text-[#4D4D4D]'>Manage Your entire community in<br/> a single system</div>
        <div className='text-[1.5rem] font-semibold text-[#4D4D4D] mb-10'>Who is Nextcent suitable for?</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[100px] m-10 md:m-0'>
            {
                data.map((dataIn)=>
                    <div className='shadow-lg p-10 rounded-lg'>
                        <img className='mx-auto' src={dataIn.img} ></img>
                        <div className='text-[1.8rem] font-semibold text-[#4D4D4D]'>{dataIn.texthead} <br/>{dataIn.texttail}</div>
                        <div>our membership management software provides full automation of membership renewals and payments</div>
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default Comunity