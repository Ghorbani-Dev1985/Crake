import { Box, Typography } from '@mui/material'
import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DiamondIcon from '@mui/icons-material/Diamond';
import ImportExportIcon from '@mui/icons-material/ImportExport';

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
       <Box className="flex flex-col gap-10 items-center border border-gray-200 border-solid rounded-lg p-4 hover:shadow-countBox group transition-colors">
       <Typography className='flex-center size-20 bg-purple-100 group-hover:bg-purple-800 group-hover:text-purple-100 text-purple-800 rounded-full transition-colors'>
                 {icon} 
           </Typography>
        <Typography className='font-DanaBold text-zinc-900 text-5xl'>{number}</Typography>
        <Typography className='text-gray-500'>{subtitle}</Typography>
       </Box>
    )
}

export {CountBox}