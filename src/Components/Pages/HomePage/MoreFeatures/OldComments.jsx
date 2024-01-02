import { Box, Typography } from '@mui/material'
import React from 'react'
import AnchorIcon from '@mui/icons-material/Anchor';
import AnimateButton from '../../../common/AnimateButton/AnimateButton';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhonelinkSetupOutlinedIcon from '@mui/icons-material/PhonelinkSetupOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';


function OldComments() {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <Box className="space-y-5 mx-4">
        <Typography className='flex-center size-10 bg-purple-200 text-purple-500 rounded-full'>
                 <AnchorIcon />
           </Typography>
           <Typography variant="h4" className='font-DanaBold text-2xl' gutterBottom>
                 تکرار نظرات قدیمی
      </Typography> 
      <Typography className='text-slate-400'>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
           </Typography>
           <ul className='text-slate-400 child:before:content-[""] child:relative child:before:absolute child:before:-right-5 child:before:top-1.5 child:before:block child:before:bg-sky-500 child:before:size-3 child:before:rounded-full'>
            <li>تماس ویدیویی نامحدود</li>
            <li>اضافه کردن مخاطب مورد علاقه</li>
            <li>فیلتر دوربین</li>
           </ul>
           <Typography>
           <AnimateButton BtnText="ادامه مطلب"/>
           </Typography>   
      </Box>
      <Box className="md:max-w-lg flex-center gap-12 md:gap-0 md:flex-between animate-moveBounce">
                <Box className="size-40 md:size-50 relative flex flex-col justify-center items-center gap-2 rounded-md bg-gradient-to-l from-emerald-600 to-emerald-600 text-white shadow-green">
                  <SentimentSatisfiedAltIcon className='text-6xl' />
                  <Typography>مدیریت</Typography>
                <Box className="size-40 md:size-50 flex flex-col justify-center items-center gap-2 rounded-md bg-gradient-to-l absolute top-36 md:top-44 left-5 md:left-11 from-pink-500 to-pink-400 text-white shadow-orange">
                  <PhonelinkSetupOutlinedIcon className='text-6xl' />
                  <Typography>طراحی موبایل</Typography>
                </Box>
                </Box>
                <Box className="size-40 md:size-50 relative flex flex-col justify-center items-center gap-2 rounded-md bg-gradient-to-l from-yellow-600 to-yellow-600 text-white shadow-yellow">
                  <SentimentSatisfiedAltIcon className='text-6xl' />
                  <Typography>جامعه پسند</Typography>
                <Box className="size-40 md:size-50 flex flex-col justify-center items-center gap-2 rounded-md bg-gradient-to-l absolute top-36 md:top-44 left-5 md:left-11 from-teal-500 to-teal-400 text-white shadow-orange">
                  <AttachMoneyOutlinedIcon className='text-6xl' />
                  <Typography> قیمت گذاری صادقانه</Typography>
                </Box>
                </Box>
      </Box>
    </Box>
  )
}

export default OldComments
