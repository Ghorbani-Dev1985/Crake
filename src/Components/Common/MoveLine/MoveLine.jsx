import React from 'react'

function MoveLine({CustomStyle}) {
  return (
    <p className={`${CustomStyle} w-20 h-1 bg-mainColor my-5 relative overflow-hidden rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-white before:animate-moveBgLine`}></p>
  )
}

export default MoveLine
