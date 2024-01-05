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
              <MenuIcon className="text-white"/>
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
              className="block md:hidden backdrop-blur-sm bg-emerald-500/5"
              >
                <Box className="w-96">
              {MenuItems.map(({id , title , link}) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
              </Box>
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
   
    </>
  );
}

export default MobileNav;
