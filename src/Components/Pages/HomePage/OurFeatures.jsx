import React from 'react'

function OurFeatures() {
  return (
    <section className='my-8'>
       <div className="container">
        <div className='flex flex-col items-center'>
         <h2 className='font-MorabbaBold text-base md:text-4xl mt-8'>ویژگی های شگفت انگیز ما</h2>
           <p className="w-20 h-1 bg-mainColor my-5 mx-auto relative overflow-hidden rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-white before:animate-moveBgLine"></p>
           <p>در این قسمت می توانید بخش کوچکی از امکانات و ویژگی های قابل ارائه ما را ملاحظه بفرمایید.</p>
        </div>
       </div>
    </section>
  )
}

export default OurFeatures
