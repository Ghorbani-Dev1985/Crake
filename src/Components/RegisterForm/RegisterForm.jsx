import { Box } from '@mui/system'
import React, { useState } from 'react'
import SectionTitle from '../common/SectionTitle/SectionTitle'
import { FormControl } from '@mui/base'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import RtlProvider from './../common/RtlProvider/RtlProvider'


function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  return (
    <Box className="bg-registerFormBg">
        <Box className="container">
        <SectionTitle
          title="  شروع به کار رایگان  "
          subtitle="  لطفا فرم زیر را برای ثبت نام و شروع رایگان و سریع تکمیل نمایید"
          titleStyle="main"
        />
        <RtlProvider>
            <Box className="flex-center my-16">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='w-full max-w-md flex flex-col gap-5 bg-purple-50 shadow-orange rounded-lg p-10'>
            <TextField id="RegisterFirstName" label="نام" variant="outlined" size='small' />
            <TextField id="RegisterLastName" label="نام خانوادگی" variant="outlined" size='small' />
            <TextField id="RegisterUserName" label="کلمه کاربری" variant="outlined" size='small' />
            <TextField id="RegisterPassword"  type={showPassword ? 'text' : 'password'} label="کلمه عبور" variant="outlined" size='small' 
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            
            />
             <Button variant="contained"> ثبت نام </Button>
        </FormControl>  
            </Box>
           
        </RtlProvider>
        </Box>
    </Box>
   
  )
}

export default RegisterForm
