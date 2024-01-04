import { Box } from "@mui/system";
import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import { FormControl } from "@mui/base";
import {
  Alert,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  AccountCircle,
  PhoneAndroid,
  Person,
} from "@mui/icons-material";
import RtlProvider from "./../common/RtlProvider/RtlProvider";
import axios from "axios";
import toast from "react-hot-toast";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [notFirstNameValidError, setFirstNameShowNotValidError] =
    useState(false);
  const [notLastNameValidError, setLastNameShowNotValidError] = useState(false);
  const [notPhoneNumberValidError, setPhoneNumberShowNotValidError] =
    useState(false);
    const [notUserNameValidError, setUserNameShowNotValidError] =
    useState(false);
    const [notPasswordValidError, setPasswordShowNotValidError] =
    useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const registerHandler = async (event) => {
    event.preventDefault();
    let newUserInfos = {
      firstName,
      lastName,
      phoneNumber,
      userName,
      password,
    };
    console.log(newUserInfos);
    if (firstName && lastName && userName && phoneNumber && password && firstName.length > 3 && lastName.length > 4 && phoneNumber.length > 10 && userName.length > 6 && password.length > 8) {
      await axios
        .post("http://localhost:2000/api/users", newUserInfos)
        .then((response) => {
          toast.success("ثبت نام شما با موفقیت انجام شد");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("لطفا فرم را تکمیل نمایید");
    }
  };
  const firstNameInputHandler = (event) => {
    setFirstName(event.target.value);
    if (firstName.length < 3) {
      setFirstNameShowNotValidError(true);
    } else {
      setFirstNameShowNotValidError(false);
    }
  };
  const lastNameInputHandler = (event) => {
    setLastName(event.target.value);
    if (lastName.length < 4) {
      console.log(lastName.length);
      setLastNameShowNotValidError(true);
    } else {
      setLastNameShowNotValidError(false);
    }
  };
  const phoneNumberInputHandler = (event) => {
    setPhoneNumber(event.target.value);
    if (phoneNumber.length < 10) {
      setPhoneNumberShowNotValidError(true);
    } else {
      setPhoneNumberShowNotValidError(false);
    }
  };
  const userNameInputHandler = (event) => {
    setUserName(event.target.value)
    if (userName.length < 6) {
      setUserNameShowNotValidError(true);
    } else {
      setUserNameShowNotValidError(false);
    }
  };
 const passwordInputHandler = (event) => {
  setPassword(event.target.value)
    if (password.length < 8) {
      setPasswordShowNotValidError(true);
    } else {
      setPasswordShowNotValidError(false);
    }
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
            <form onSubmit={registerHandler} className="w-full max-w-lg">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="flex flex-col gap-5 bg-purple-50 shadow-orange rounded-lg p-10"
              >
                <TextField
                  id="RegisterFirstName"
                  value={firstName}
                  onChange={(event) => firstNameInputHandler(event)}
                  label={
                    <span>
                      نام <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  error={notFirstNameValidError && true}
                  helperText={
                    notFirstNameValidError && (
                      <span className="text-rose-500">
                        لطفا حداقل سه کاراکتر وارد نمایید
                      </span>
                    )
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
                  id="RegisterLastName"
                  value={lastName}
                  onChange={(event) => lastNameInputHandler(event)}
                  label={
                    <span>
                      نام خانوادگی{" "}
                      <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  error={notLastNameValidError && true}
                  helperText={
                    notLastNameValidError && (
                      <span className="text-rose-500">
                        لطفا حداقل چهار کاراکتر وارد نمایید
                      </span>
                    )
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
                  id="RegisterLastName"
                  value={phoneNumber}
                  inputProps={{
                    maxLength: 10,
                    type: 'number',
                }}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, e.target.maxLength);
                  }}
                  onChange={(event) => phoneNumberInputHandler(event)}
                  label={
                    <span>
                      شماره همراه{" "}
                      <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  error={notPhoneNumberValidError && true}
                  helperText={
                    notPhoneNumberValidError && (
                      <span className="text-rose-500">
                        لطفا حداقل یازده عدد وارد نمایید
                      </span>
                    )
                  }
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <PhoneAndroid />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="RegisterUserName"
                  value={userName}
                  onChange={(event) => userNameInputHandler(event)}
                  label={
                    <span>
                      نام کاربری
                      <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  variant="outlined"
                  size="small"
                  error={notUserNameValidError && true}
                  helperText={
                    notUserNameValidError && (
                      <span className="text-rose-500">
                        لطفا حداقل شش کاراکتر وارد نمایید
                      </span>
                    )
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <AccountCircle />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="RegisterPassword"
                  value={password}
                  onChange={(event) => passwordInputHandler(event)}
                  type={showPassword ? "text" : "password"}
                  label={
                    <span>
                      کلمه عبور <span className="text-rose-500 text-sm">*</span>
                    </span>
                  }
                  variant="outlined"
                  size="small"
                  error={notPasswordValidError && true}
                  helperText={
                    notPasswordValidError && (
                      <span className="text-rose-500">
                        لطفا حداقل هشت کاراکتر وارد نمایید
                      </span>
                    )
                  }
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
                <Button type="submit" variant="contained">
                  {" "}
                  ثبت نام{" "}
                </Button>
                {showError && (
                  <Alert severity="error">لطفا فرم را کامل تکمیل نمایید</Alert>
                )}
              </FormControl>
            </form>
          </Box>
        </RtlProvider>
      </Box>
    </Box>
  );
}

export default RegisterForm;
