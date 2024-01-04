import { Box } from '@mui/system'
import React, { useState } from 'react'
import SectionTitle from '../common/SectionTitle/SectionTitle'
import { FormControl } from '@mui/base'
import { Alert, IconButton, InputAdornment, TextField , Button} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import RtlProvider from './../common/RtlProvider/RtlProvider'
import axios from 'axios'


function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [userName , setUserName] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');
    const [password , setPassword] = useState('');
    const [showError , setShowError] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const registerHandler = (event) => {
      event.preventDefault();
      let newUserInfos = {
        firstName,
        lastName,
        userName,
        phoneNumber,
        password
      }
    if(firstName && lastName && userName && phoneNumber && password){
      axios.post('http://localhost:2000/api/users' , {
        body: JSON.stringify(newUserInfos),
      })
      .then(response => console.log(response.config.data))
      .catch(function (error) {
       console.log(error);
     });
    }else{
       setShowError(true)
       setTimeout(() => {
        setShowError(false)
       }, 2000);
    }
    }
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
            <form onSubmit={registerHandler} className='w-full max-w-lg'>
            <FormControl sx={{ m: 1 }} variant="outlined" className='flex flex-col gap-5 bg-purple-50 shadow-orange rounded-lg p-10'>
            <TextField id="RegisterFirstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} label={<span>نام <span className='text-rose-500 text-sm'>*</span></span>} variant="outlined" size='small' />
            <TextField id="RegisterLastName" value={lastName} onChange={(event) => setLastName(event.target.value)} label={<span>نام خانوادگی <span className='text-rose-500 text-sm'>*</span></span>} variant="outlined" size='small' />
            <TextField id="RegisterLastName" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} label={<span>شماره همراه <span className='text-rose-500 text-sm'>*</span></span>} variant="outlined" size='small' />
            <TextField id="RegisterUserName" value={userName} onChange={(event) => setUserName(event.target.value)} label={<span>نام کاربری <span className='text-rose-500 text-sm'>*</span></span>} variant="outlined" size='small' />
            <TextField id="RegisterPassword" value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} label={<span>کلمه عبور <span className='text-rose-500 text-sm'>*</span></span>} variant="outlined" size='small' 
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
             <Button type='submit' variant="contained"> ثبت نام </Button>
             {
              showError &&
              <Alert severity="error">لطفا فرم را کامل تکمیل نمایید</Alert>
             }
        </FormControl>  
             </form>
            </Box>
           
        </RtlProvider>
        </Box>
    </Box>
   
  )
}

export default RegisterForm
