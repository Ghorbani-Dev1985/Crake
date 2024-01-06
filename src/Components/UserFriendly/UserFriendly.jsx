import { Box, Typography } from '@mui/material'
import React from 'react'
import UserFriendlyImg from "./../../assets/Images/features-img2.png"
import AnimateButton from '../common/AnimateButton/AnimateButton'

function JoinUS() {
  return (
    <Box className='container relative grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
       <Box className='flex-center'>
      <img src={UserFriendlyImg}  alt='ghorbani-dev.ir' className='w-60 md:w-96 lg:w-[33rem]' />
    </Box>
    <Box className='flex flex-col gap-2 relative z-20 px-4'>
         <h2 className='font-DanaBold text-4xl mb-2'>  ساخت رابط زیبا در برنامه شما</h2>
         <Typography className='text-slate-400 relative z-20'>
        رابط کاربری اهمیت بسیار مهمی در برقراری ارتباط کاربر با 
        اپلیکیشن دارد و باعث می گردد تا بتواند 
        به راحتی از آن استفاده نماید و لذت ببرد
         </Typography>
         <ul className='text-slate-400 space-y-3 my-5 child:before:content-[""] child:relative child:before:absolute child:before:-right-5 child:before:top-1.5 child:before:block child:before:bg-orange-800 child:before:size-3 child:before:rounded-full'>
          <li>رعایت قوانین رنگ شناسی</li>
          <li>جانمایی درست المانهای هر صفحه </li>
          <li>قابلیت دسترسی آسان فیچرها </li>
         </ul>
         <AnimateButton BtnText="   ادامه مطلب"/>       
    </Box>
  </Box>
  )
}

export default JoinUS
