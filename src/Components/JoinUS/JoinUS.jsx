import { Box, Typography } from '@mui/material'
import React from 'react'
import JoinUSImg from "./../../assets/Images/3.png"
import AnimateButton from '../common/AnimateButton/AnimateButton'

function JoinUS() {
  return (
    <Box className='container relative grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
       <Box className='flex-center'>
      <img src={JoinUSImg}  alt='ghorbani-dev.ir' className='w-72 md:w-96 lg:w-auto' />
    </Box>
    <Box className='flex flex-col gap-2 relative z-20 px-4'>
         <p className='text-purple-500 text-sm'>
         شروع آزمایشی رایگان 30 روزه
         </p>
         <h2 className='font-DanaBold text-2xl'>  به طور کلی 400K + مشتریان ما! لطفا شروع کنید </h2>
         <Typography className='text-slate-400 relative z-20'>
        
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
         </Typography>
         <ul className='text-slate-400 space-y-3 my-5 child:before:content-[""] child:relative child:before:absolute child:before:-right-5 child:before:top-1.5 child:before:block child:before:bg-slate-800 child:before:size-3 child:before:rounded-full'>
          <li>تماس ویدیویی نامحدود</li>
          <li>اضافه کردن مخاطب مورد علاقه</li>
          <li>فیلتر دوربین</li>
         </ul>
         <AnimateButton BtnText=" هم اکنون وارد شوید"/>       
    </Box>
  </Box>
  )
}

export default JoinUS
