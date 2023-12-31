import { Box, Typography } from '@mui/material'
import React from 'react'
import Overview from "./../../../../assets/Images/overview-3.png"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AnimateButton from '../../../common/AnimateButton/AnimateButton';
import ShapeEight from './../../../../assets/Images/svgs/shape8-2.svg'

function CodeReview() {
  return (
    <Box className='relative grid grid-cols-1 md:grid-cols-2 gap-10 my-60'>
       <Box className='flex-center'>
      <img src={Overview}  alt='ghorbani-dev.ir' className='md:size-72 lg:size-auto' />
    </Box>
    <Box className='flex flex-col gap-10 relative z-20 px-4'>
         <p className='flex-center size-10 bg-purple-200 text-purple-500 rounded-full'>
                    <PeopleAltIcon />
         </p>
         <h2 className='font-DanaBold text-2xl'>تصاویر بررسی کد </h2>
         <Typography className='text-slate-400 relative z-20'>
         <img
      src={ShapeEight}
      alt="ghorbani-dev.ir"
      className="absolute -top-8 left-0 z-10 animate-fullRotate"
         />
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
         </Typography>
         <ul className='text-slate-400 child:before:content-[""] child:relative child:before:absolute child:before:-right-5 child:before:top-1.5 child:before:block child:before:bg-emerald-500 child:before:size-3 child:before:rounded-full'>
          <li>تماس ویدیویی نامحدود</li>
          <li>اضافه کردن مخاطب مورد علاقه</li>
          <li>فیلتر دوربین</li>
         </ul>
         <Typography>
         <AnimateButton BtnText="ادامه مطلب"/>
         </Typography>
             
    </Box>
    {/* <img
      src={ShapeSeven}
      alt="ghorbani-dev.ir"
      className="absolute -left-30 md:-left-52 bottom-0 z-10"
    />
    <img
      src={ShapeSix}
      alt="ghorbani-dev.ir"
      className="absolute -left-10 md:-left-40 -bottom-28 animate-fullRotateY z-10"
    /> */}
  </Box>
  )
}

export default CodeReview
