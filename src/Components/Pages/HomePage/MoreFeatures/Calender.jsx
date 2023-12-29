import React from 'react'
import CalenderImg from "../../../../assets/Images/overview-1.png";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box } from '@mui/material';

function Calender() {
  return (
    <Box className='relative grid grid-cols-1 md:grid-cols-2 gap-10 my-25 z-20'>
      <div>
        <img src={CalenderImg}  alt='ghorbani-dev.ir' />
      </div>
      <div className='flex flex-col gap-10'>
           <p className='flex-center size-10 bg-purple-200 text-purple-500 rounded-full'>
                      <PowerSettingsNewIcon />
           </p>
           <h2 className='font-DanaBold text-2xl'>آغاز صفحه</h2>
           <p className='text-slate-400'>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
           </p>
           <ul className='text-slate-400 child:before:content-[""] child:relative child:before:absolute child:before:-right-5 child:before:top-1.5 child:before:block child:before:bg-emerald-500 child:before:size-3 child:before:rounded-full'>
            <li>تماس ویدیویی نامحدود</li>
            <li>اضافه کردن مخاطب مورد علاقه</li>
            <li>فیلتر دوربین</li>
           </ul>
      </div>
      
    </Box>
  )
}

export default Calender
