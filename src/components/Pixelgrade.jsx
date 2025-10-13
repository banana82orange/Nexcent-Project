import React from 'react'
import img01 from  '../assets/img/img-01.png'
function Pixelgrade() {
  return (
        <div className='py-10 '>
            <div className="container mx-auto max-w-[1920] p-10 grid grid-cols-1 md:grid-cols-2">
                <div >
                    <img src={img01}></img>
                </div>
                <div className="">
                    <div className='text-[1.8rem] text-lg font-semibold text-[#4D4D4D]'>The unseen of spending three<br/> years at Pixelgrade</div>
                    <div className="text-[#717171] my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
                    <div className='my-10 md:mx-0'><a className='inline-flex justify-center items-center py-3 px-8 bg-[#4CAF4F] text-white rounded-md' href="#logout">Learn More</a></div>
                </div>

            </div>
        </div>

  )
}

export default Pixelgrade