import React, { forwardRef, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {Menu , ChevronLeft , ChevronRight , Edit , DeleteOutlineOutlined, Person, PhoneAndroid, AccountCircle, VisibilityOff, Visibility, PeopleAlt, Comment} from '@mui/icons-material';
import { Button, DialogContent, InputAdornment, ListItem, Slide, TextField } from '@mui/material';
import RtlProvider from '../../common/RtlProvider/RtlProvider';
import { useState } from 'react';
import { DataGrid ,faIR} from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import useDelete from '../../../Hooks/useDelete';
import Swal from "sweetalert2";
import { useShowRealtimeDatas } from '../../../Contexts/ShowRealtimeDatasContext';
import useUpdate from '../../../Hooks/useUpdate';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
function Panel() {
    const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(true);
  const [showDeleteUserDialog, setShowDeleteUserDialog] = useState(false);
  const [showUpdateUserDialog, setShowUpdateUserDialog] = useState(false);
  const { showRealtimeDatas, setShowRealTimeDatas } = useShowRealtimeDatas();
  const [getUsersData , setGetUsersData] = useState(false)
  const [userID , setUserID] = useState('')
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
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const columns = [
    { 
      field: 'id',
      headerName: 'ردیف', 
      width: 60 ,
  },
    {
      field: 'CREATED_AT',
      headerName: 'تاریخ ایجاد',
      type: 'number',
      width: 110,
    },
    {
      field: 'userName',
      headerName: '  نام کاربری ',
      width: 200,
    },
    {
      field: 'firstName',
      headerName: 'نام ',
      width: 150,
    },
    {
      field: 'lastName',
      headerName: ' نام خانوادگی',
      width: 200,
    },
    {
      field: 'phoneNumber',
      headerName: ' تلفن همراه ',
      width: 150,
    },
    {
      field: 'editAction',
     headerName: 'ویرایش', width: 60 ,
    renderCell: (user) => {
      return (
          <div onClick={() => {
            setShowUpdateUserDialog(true)
            setUserID(user.row._id)
          }} className="flex-center cursor-pointer text-sky-500">
              <Edit />
           </div>
      );
   }
  },
  { 
    field: "deleteAction",
    headerName: 'حذف', width: 60 ,
    renderCell: (user) => {
      return (
          <div onClick={() => {
            userDeleteHandler(user.row._id)
          }} className="flex-center cursor-pointer text-rose-500">
              <DeleteOutlineOutlined />
           </div>
      );
   }
  },
  ];
  const userDeleteHandler = (userID) => {
    console.log(userID)
    Swal.fire({
      title: "برای حذف نظر مطمعن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f43f5e",
      cancelButtonColor: "#0ea5e9",
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteHook = useDelete("users/delete" , userID)
        setShowRealTimeDatas((prev) => !prev)
      }
    });
  }
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
    if (lastName.length < 3) {
      console.log(lastName.length);
      setLastNameShowNotValidError(true);
    } else {
      setLastNameShowNotValidError(false);
    }
  };
  const phoneNumberInputHandler = (event) => {
    setPhoneNumber(event.target.value);
    if (phoneNumber.length < 9) {
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
  
  console.log(phoneNumber.length)
  const userUpdateHandler = () => {
    let userUpdateInfos ={
      firstName,
      lastName,
      phoneNumber,
      userName,
      password,
    };
    if (firstName && lastName && userName && phoneNumber && password && firstName.length >= 3 && lastName.length >= 3 && userName.length >= 6 && password.length >= 8) {
      const Update = useUpdate("users/update" , userUpdateInfos ,userID)
      setShowRealTimeDatas((prev) => !prev)
      setShowUpdateUserDialog(false)
      setFirstName('')
          setLastName('')
          setPhoneNumber('')
          setUserName('')
          setPassword('')

    }else{
      toast.error("لطفا فرم را تکمیل نمایید");
    }
   
  }
  const { datas: users } = useFetch("users/all");
  // Show edit user infos in dialog form
  useEffect(() => {
    let filteredUpdateUser = users.find(user => user._id === userID)
    if(filteredUpdateUser){
      setFirstName(filteredUpdateUser.firstName)
      setLastName(filteredUpdateUser.lastName)
      setPhoneNumber(filteredUpdateUser.phoneNumber)
      setUserName(filteredUpdateUser.userName)
      setPassword(filteredUpdateUser.password)
    }
  }, [userID])
  return (
    <RtlProvider>
     
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={openDrawer}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
         
          edge="start"
          sx={{
            marginRight: 5,
            ...(openDrawer && { display: 'none' }),
          }}
        >
          <Menu  className='text-white'/>
        </IconButton>
        <Typography variant="h6" className='text-white !font-MorabbaBold !text-3xl' noWrap component="div">
        پنل کاربری
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={openDrawer}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem>
        <NavLink to="/panel" className="text-slate-800 flex-center gap-3">
          <PeopleAlt />
            کاربران
        </NavLink>
        </ListItem>
        <ListItem>
        <NavLink to="/testimonial" className="text-slate-800 flex-center gap-3">
          <Comment />
            نظرات
        </NavLink>
        </ListItem>
      </List>

    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography variant='span' className='block !font-MorabbaBold !text-3xl !my-4'>لیست کاربران</Typography>
      <Box sx={{ width: '100%' }}>
      <DataGrid
         rows={users.map((user,index)=>{return {id:index+1,...user}})}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
            
          },
        }}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </Box>
  </Box>
  {/* Delete User Dialog */}
  <Dialog
        open={showDeleteUserDialog}
        onClose={() => setShowDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"آیا برای حذف مطمعن هستید؟"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setShowDeleteUserDialog(false)} autoFocus className='!text-zinc-800'>انصراف</Button>
          <Button onClick={() => userDeleteHandler()} className='!text-rose-500'>
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      {/* Edit User Dialog */}
      <Dialog
        open={showUpdateUserDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowUpdateUserDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='flex-center !font-MorabbaBold'>{" ویرایش اطلاعات کاربر"}</DialogTitle>
          <form className='w-full'>
        <DialogContent className='flex flex-col gap-4'>      
        <TextField
                  id="RegisterFirstName"
                  value={firstName}
                  onChange={(event) => firstNameInputHandler(event)}
                  autoComplete='off'
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
                  autoComplete='off'
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
               
                  onChange={(event) => phoneNumberInputHandler(event)}
                  autoComplete='off'
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
                  autoComplete='off'
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
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowUpdateUserDialog(false)} className='!text-zinc-800'>انصراف</Button>
          <Button onClick={() => userUpdateHandler()}>ثبت</Button>
        </DialogActions>
          </form>
      </Dialog>
  </RtlProvider>
  )
}

export default Panel
