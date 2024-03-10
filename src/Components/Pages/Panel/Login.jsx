import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../../../assets/Images/logo.png'
import RtlProvider from '../../common/RtlProvider/RtlProvider'
import { Person, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Login() {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userName , setUserName] = useState();
    const [password , setPassword] = useState();
    const LoginHandler = (event) => {
        event.preventDefault()
        if(userName === 'admin' , password === 'admin'){
            toast.success("ورود با موفقیت انجام شد");
            navigate('/panel')
        }else{
            toast.error("نام کاربری یا کلمه عبور اشتباه است");
        }
    }
  return (
    <Box className="w-full h-screen flex-center bg-slate-100">
      <Box className="container">
        <Box className="flex flex-col items-center gap-4">
        <img src={Logo} alt='ghorbani-dev.ir' className='bg-mainColor p-4 rounded-lg' />
        <Box className="bg-white p-4 w-full max-w-lg rounded-xl flex flex-col items-center gap-4">
            <Typography variant='h1' className='font-MorabbaBold text-xl md:text-2xl my-5'>ورود به پنل کاربری</Typography>
                <RtlProvider>
            <form onSubmit={(event) => LoginHandler(event)} className='flex flex-col gap-9'>
                <TextField
                  id="LoginUserName"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  autoComplete='off'
                  label={
                    <span>
                      کلمه کاربری <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Person />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="LoginPassword"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={showPassword ? "text" : "password"}
                  label={
                    <span>
                      کلمه عبور <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                 <Button type="submit" variant="contained" className="!text-white !text-xl">
                   ورود به حساب کاربری
                </Button>
            </form>
                </RtlProvider>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
