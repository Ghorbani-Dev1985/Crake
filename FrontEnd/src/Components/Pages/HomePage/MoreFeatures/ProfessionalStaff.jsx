import { Box, Typography } from '@mui/material'
import React from 'react'
import Overview from "./../../../../assets/Images/overview-4.png"
import MessageIcon from '@mui/icons-material/Message';
import AnimateButton from '../../../common/AnimateButton/AnimateButton';
import ShapeEleven from '../../../../assets/Images/svgs/shape11.svg'
import ShapeThree from '../../../../assets/Images/shape3.png'


function ProfessionalStaff() {
  return (
    <Box className='relative grid grid-cols-1 md:grid-cols-2 gap-10'>
      
    <Box className='flex flex-col gap-10 relative z-20 px-4 pb-56'>
         <p className='flex-center size-10 bg-amber-200 text-amber-500 rounded-full'>
                    <MessageIcon />
         </p>
         <h2 className='font-DanaBold text-2xl'>  ما کارکنان حرفه ای را ارائه می دهیم </h2>
         <Typography className='text-slate-400'>
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
         </Typography>
         <ul className='text-slate-400 child:before:content-[""] child:relative child:before:absolute child:before:-right-5 child:before:top-1.5 child:before:block child:before:bg-teal-800 child:before:size-3 child:before:rounded-full'>
          <li>تماس ویدیویی نامحدود</li>
          <li>اضافه کردن مخاطب مورد علاقه</li>
          <li>فیلتر دوربین</li>
         </ul>
         <Typography>
         <AnimateButton BtnText="ادامه مطلب"/>
         </Typography>
         <img src={ShapeThree} alt="ghorbani-dev.ir" className="absolute -right-0 z-10 -bottom-4 md:bottom-10 animate-moveBounce" />   
    </Box>
    <Box className='flex-center relative'>
      <img src={Overview}  alt='ghorbani-dev.ir' className='md:size-72 lg:size-96 relative z-20' />
      <img src={ShapeEleven} alt="ghorbani-dev.ir" className="absolute z-10 size-24 md:size-36 lg:size-auto -left-12 md:left-12 opacity-10 bottom-28 md:bottom-0 lg:bottom-20 animate-fullRotate" />
            <div className="size-20 md:size-36 bg-purple-500 absolute z-10 opacity-10 -left-12 md:left-12 bottom-16 md:-bottom-20 lg:bottom-0 rounded-full animate-moveBounce"></div>
    </Box>
  </Box>
  )
}

export default ProfessionalStaff
