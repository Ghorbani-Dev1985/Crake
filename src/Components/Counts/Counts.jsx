import { Box, Typography } from '@mui/material'
import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DiamondIcon from '@mui/icons-material/Diamond';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CountUp from 'react-countup';

function Counts() {
  return (
      <Box className="container">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-30">
      <CountBox icon={<PeopleAltIcon  />} number="806" subtitle="مشتریان رضایت مند" />
      <CountBox icon={<ThumbUpIcon />} number="202" subtitle="  قدردانی" />
      <CountBox icon={<DiamondIcon />} number="5241" subtitle="  زمان پاسخ گویی" />
      <CountBox icon={<ImportExportIcon />} number="512" subtitle=" ورود اطلاعات" />
      
    </Box>
    </Box>
  )
}

export default Counts

const CountBox = ({icon , number , subtitle}) => {
    return(
       <Box className="flex flex-col gap-10 items-center border border-gray-200 border-solid rounded-lg p-4 shadow-countBox lg:shadow-md hover:shadow-countBox group transition-colors">
       <Typography className='flex-center size-20 bg-emerald-50 group-hover:bg-mainColor group-hover:text-white group-hover:text-mainColor text-mainColor rounded-full transition-colors'>
                 {icon} 
           </Typography>
           <CountUp start={0}  duration={2.75} end={number} className='font-DanaBold text-4xl'/>
        <Typography className='text-gray-500'>{subtitle}</Typography>
       </Box>
    )
}

export {CountBox}