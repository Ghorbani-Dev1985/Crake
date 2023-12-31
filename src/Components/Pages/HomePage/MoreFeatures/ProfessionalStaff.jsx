import { Box, Typography } from '@mui/material'
import React from 'react'
import Overview from "./../../../../assets/Images/overview-4.png"
import MessageIcon from '@mui/icons-material/Message';
import AnimateButton from '../../../common/AnimateButton/AnimateButton';
import ShapeEight from './../../../../assets/Images/svgs/shape8-2.svg'

function ProfessionalStaff() {
  return (
    <Box className='relative grid grid-cols-1 md:grid-cols-2 gap-10'>
      
    <Box className='flex flex-col gap-10 relative z-20 px-4'>
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
             
    </Box>
    <Box className='flex-center'>
      <img src={Overview}  alt='ghorbani-dev.ir' className='md:size-72 lg:size-auto' />
    </Box>
  </Box>
  )
}

export default ProfessionalStaff
