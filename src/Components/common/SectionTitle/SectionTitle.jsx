import React from 'react'

function SectionTitle({children , title , subtitle , CustomStyle , titleStyle}) {
  return (
    <div className={`flex flex-col ${titleStyle === 'main' && "items-center"}`}>
    <h2 className={`${titleStyle === 'main' ? "font-MorabbaBold text-base md:text-4xl mt-8" : "flex font-DanaBold mt-4"} `}>{title}</h2>
    <p className={`${CustomStyle} w-20 h-1 bg-mainColor my-5 relative overflow-hidden rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-white before:animate-moveBgLine`}></p>
      <p className='text-slate-400 text-base'>{subtitle}</p>
      {children}
   </div>
  )
}

export default SectionTitle
