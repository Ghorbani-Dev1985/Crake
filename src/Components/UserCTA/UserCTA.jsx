import { Box, Typography } from '@mui/material'
import React from 'react'
import AnimateButton from '../common/AnimateButton/AnimateButton'

function UserCTA() {
  return (
    <Box className='bg-UserCTAbg bg-center bg-cover bg-fixed bg-no-repeat relative z-20 py-20 border-t-4 border-purple-300 border-solid border-r-0 border-l-0 before:content-[""] before:w-full before:h-full before:bg-purple-800 before:absolute before:z-10 before:left-0 before:top-0 before:opacity-60'>
      <Box className="container">
        <Box className="flex flex-col items-center md:flex-between md:flex-row">
          <Typography className='font-DanaBold text-lg md:text-2xl text-white z-20'>
            می خواهید پیشرفت کنید؟ با ما همراه باشید
          </Typography>
          <AnimateButton BtnText=" یک تست درایو بگیرید"/>
        </Box>
      </Box>
    </Box>
  )
}

export default UserCTA
