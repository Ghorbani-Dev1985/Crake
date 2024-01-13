import { Box, Typography } from '@mui/material'
import React from 'react'
import AnimateButton from '../common/AnimateButton/AnimateButton'
import SectionTitle from '../common/SectionTitle/SectionTitle'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DoneIcon from '@mui/icons-material/Done';

function Process() {
  return (
    <Box className='bg-UserCTAbg bg-center bg-cover bg-fixed bg-no-repeat relative py-20 border-t-[20px] border-b-[20px] rounded-tr-3xl rounded-bl-3xl border-emerald-200 border-solid border-r-0 border-l-0 before:content-[""] before:w-full before:h-full before:bg-mainColor before:absolute before:left-0 before:top-0 before:opacity-60'>
      <Box className="container">
        <SectionTitle title="فرآیند کار" subtitle="در تمام مراحل فرآیند کار در کنار شما هستیم تا از درست بودن روند مطمعن باشیم" titleStyle="main" mainStyle="relative z-20 text-white" CustomStyle="text-white" subtitleStyle="text-white"/>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
         <ProcessBox icon={<CalendarMonthIcon />} boxTitle="پلن" boxSubtitle="پلن کار بسیار دقیق در شروع پروژه مشخص می گردد" />
         <ProcessBox icon={<CodeIcon />} boxTitle="توسعه" boxSubtitle=" بعد از مشخص شدن نیازمندی ها توسعه شروع می شود" />
         <ProcessBox icon={<StorageIcon />} boxTitle="اجرا" boxSubtitle="بعد از امکان سنجی اجرای پروژه را داریم" />
         <ProcessBox icon={<DoneIcon />} boxTitle="گزارش" boxSubtitle="  از تمام مراحل قبل گزارش تهیه و ارائه می گردد" />
        </Box>
      </Box>
    </Box>
  )
}

export default Process


const ProcessBox = ({icon , boxTitle , boxSubtitle}) => {
  return(
    <>
     <Box className="flex flex-col gap-8 bg-white group top-0 hover:-top-3 rounded-md z-10 p-4 relative transition-all ease-linear duration-300">
       <p className='size-14 flex-center bg-slate-200 text-mainColor group-hover:bg-mainColor group-hover:text-slate-200 transition-none rounded-full'>
            <span className='flex-center'>{icon}</span>
       </p>
       <p className='font-DanaBold text-4xl'>{boxTitle}</p>
       <p className='text-slate-400'>{boxSubtitle}</p>
     </Box>
    </>
  )
}

export {ProcessBox}