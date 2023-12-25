import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "./../../assets/Images/logo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Paper } from "@mui/material";
const MenuItems = [
  {
    id: 1,
    title: "خانه",
    link: "",
    submenu: "صفحه اصلی",
  },
  {
    id: 2,
    title: "نمونه کار",
    link: "",
    submenu: "نمونه کار خارجی",
  },
  {
    id: 3,
    title: " بلاگ",
    link: "",
    submenu: "  تخصصی",
  },
  {
    id: 4,
    title: " فروشگاه",
    link: "",
    submenu: "  حراجی",
  },
  {
    id: 5,
    title: " تماس",
    link: "",
    submenu: "  تماس",
  },
];

function MobileNav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
       <AppBar className="static block md:hidden bg-mainColor border-b border-b-white/20">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="block md:hidden"
              >
              {MenuItems.map(({id , title , link}) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              alt="ghorbani-dev.ir"
              className="w-36 h-auto object-cover"
              />
          </Link>

        </Toolbar>
      </Container>
    </AppBar>
      {/* {
        toggleMobileNav &&
        <div onClick={() => setToggleMobileName(!toggleMobileNav)}
           className="w-full h-full bg-purple-200/20 fixed top-0 left-0 right-0 mx-auto backdrop-blur-sm transition-all z-40"></div>
      }
      <nav className="border-gray-200 bg-mainColor text-white py-3 dark:bg-gray-800 dark:border-gray-700 relative z-50">
        <div className="container">
        <div className="flex flex-wrap items-center justify-between mx-auto border-b border-b-white/30 pb-2">
          <button
            onClick={() => setToggleMobileName(!toggleMobileNav)}
            type="button"
            className="inline-flex items-center p-2 size-12 justify-center text-sm text-white hover:text-purple-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
           
          >
            <BiMenuAltRight className="size-12" />
          </button>
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              alt="ghorbani-dev.ir"
              className="w-36 h-auto object-cover"
            />
          </Link>
        {
          toggleMobileNav &&          
          <div
            className="w-full md:block bg-gray-100 md:w-auto absolute top-14 rounded-md"
            id="navbar-solid-bg"
          >
<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
    { MenuItems.map(({id , title , link , submenu}) => {
         return(
<>
          <h2 key={id} id={`accordion-flush-heading-${id}`}>
          <button type="button" className="flex items-center justify-between w-full py-5 px-1 rounded-md font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target={`#accordion-flush-body-${id}`} aria-expanded="true" aria-controls={`accordion-flush-body-${id}`}>
            <Link to={link}>{title}</Link>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id={`accordion-flush-body-${id}`} className="hidden px-1" aria-labelledby={`accordion-flush-heading-${id}`}>
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">{submenu}</p>
          </div>
        </div>
</>
         )
      })
    }

</div>
          </div>
        }    

        </div>
        </div>
      </nav> */}
    </>
  );
}

export default MobileNav;
