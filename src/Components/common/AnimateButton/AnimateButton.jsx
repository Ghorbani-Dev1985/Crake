import React from 'react'
import { Link } from 'react-router-dom'

function AnimateButton({to , BtnText , icon}) {
  return (
    <Link target='_blank' to={to} className='group font-bold tracking-wide select-none text-lg relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-secondColor text-white border-secondColor hover:text-secondColor focus:text-secondColor'>
        {icon}
    <strong className='font-medium'>{BtnText}</strong>
    <span className='absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]'></span>
</Link>
  )
}

export default AnimateButton
