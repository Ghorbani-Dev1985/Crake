import React, { useEffect } from 'react'
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
import {Menu , ChevronLeft , ChevronRight , Inbox , Mail , Edit , DeleteOutlineOutlined} from '@mui/icons-material';
import { Button, ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RtlProvider from '../common/RtlProvider/RtlProvider';
import { useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import toast from 'react-hot-toast';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
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
  const [open, setOpen] = useState(true);
  const [users , setUsers] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [getUsersData , setGetUsersData] = useState(false)
  const [userID , setUserID] = useState('')
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
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
      width: 150,
    },
    {
      field: 'firstName',
      headerName: 'نام ',
      width: 150,
    },
    {
      field: 'lastName',
      headerName: ' نام خانوادگی',
      width: 150,
    },
    {
      field: 'phoneNumber',
      headerName: ' تلفن همراه ',
      width: 150,
    },
    {
      field: 'editAction',
     headerName: 'ویرایش', width: 60 ,
    renderCell: (editID) => {
      return (
          <div className="flex-center cursor-pointer text-sky-500">
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
            setShowDialog(true)
            setUserID(user.id)
            console.log(user.id)
          }} className="flex-center cursor-pointer text-rose-500">
              <DeleteOutlineOutlined />
           </div>
      );
   }
  },
  ];
  const userDeleteHandler = async () => {
   await axios
    .delete(`http://localhost:2000/api/users/remove/${userID}`)
    .then(response => {
      toast.success("  کاربر مورد نظر با موفقیت حذف گردید");
      setShowDialog(false)
      setGetUsersData(prev => !prev)
      console.log(response , getUsersData)
    })
    .catch((error) => {
      toast.error(" حذف کاربر انجام نشد");
      console.log(error);
    });
    console.log(userID)
  }
  useEffect(() => {
  axios
   .get('http://localhost:2000/api/users/all')
   .then(response => setUsers(response.data))
  }, [getUsersData])
  console.log(users)
  return (
    <RtlProvider>
     
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
         
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <Menu  className='text-white'/>
        </IconButton>
        <Typography variant="h6" className='text-white !font-MorabbaBold !text-3xl' noWrap component="div">
        پنل کاربری
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {['مشاهده کاربران', 'ارسال پیام', 'مشاهده پیام ', 'تنظیمات'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography variant='span' className='!font-MorabbaBold !text-3xl !my-4'>لیست کاربران</Typography>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
         rows={users.map((user,index)=>{return {id:index+1,...user}})}
        getRowId={(row) => row.ID}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
            labelRowsPerPage : "از",
            labelDisplayedRows: 'از'
            
          },
        }}
        localeText={{
          MuiTablePagination: {
            labelDisplayedRows: ({ from, to, count }) =>
              `${from} - ${to} از ${count} کاربر`,
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </Box>
  </Box>
  <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"آیا برای حذف مطمعن هستید؟"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} autoFocus>انصراف</Button>
          <Button onClick={() => userDeleteHandler()} className='!text-rose-500'>
            تایید
          </Button>
        </DialogActions>
      </Dialog>
  </RtlProvider>
  )
}

export default Panel
