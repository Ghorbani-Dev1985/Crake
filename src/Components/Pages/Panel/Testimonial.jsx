import React, { forwardRef, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Swal from "sweetalert2";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
  Edit,
  DeleteOutlineOutlined,
  Person,
  PhoneAndroid,
  AccountCircle,
  VisibilityOff,
  Visibility,
  TaskAlt,
  HideSource,
  PeopleAlt,
  Comment,
} from "@mui/icons-material";
import {
  Button,
  DialogContent,
  InputAdornment,
  ListItem,
  Slide,
  TextField,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RtlProvider from "../../common/RtlProvider/RtlProvider";
import { useState } from "react";
import axios from "axios";
import { DataGrid, faIR } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import useUpdate from "../../../Hooks/useUpdate";
import useDelete from "../../../Hooks/useDelete";
import { useShowRealtimeDatas } from "../../../Contexts/ShowRealtimeDatasContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function Panel() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(true);
  const [users, setUsers] = useState([]);
  const { datas: testimonials } = useFetch("testimonials/all");
  const { showRealtimeDatas, setShowRealTimeDatas } = useShowRealtimeDatas();
  const [showDeleteUserDialog, setShowDeleteUserDialog] = useState(false);
  const [showUpdateUserDialog, setShowUpdateUserDialog] = useState(false);
  const [getUsersData, setGetUsersData] = useState(false);
  const [testimonialID, setTestimonialID] = useState("");
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
  const [notUserNameValidError, setUserNameShowNotValidError] = useState(false);
  const [notPasswordValidError, setPasswordShowNotValidError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const columns = [
    {
      field: "id",
      headerName: "ردیف",
      width: 10,
    },
    {
      field: "CREATED_AT",
      headerName: "تاریخ ایجاد",
      type: "number",
      width: 100,
    },
    {
      field: "firstName",
      headerName: "نام ",
      width: 100,
    },
    {
      field: "lastName",
      headerName: " نام خانوادگی",
      width: 120,
    },
    {
      field: "jobTitle",
      headerName: "  عنوان شغلی ",
      width: 160,
    },
    {
      field: "text",
      headerName: " متن ",
      width: 150,
    },
    {
      field: "status",
      headerName: " وضعیت ",
      width: 95,
      renderCell: (testimonial) => {
        return testimonial.row.isShowing ? (
          <p className="bg-sky-100 text-sky-500 rounded-lg px-2 py-1">
            {" "}
            منتشر شده
          </p>
        ) : (
          <p className="bg-slate-50 text-slate-500 px-2 py-1 rounded-lg">
            {" "}
            منتشر نشده
          </p>
        );
      },
    },
    {
      field: "acceptAction",
      headerName: "تایید",
      width: 10,
      headerAlign: "center",
      align: "center",
      renderCell: (testimonial) => {
        return testimonial.row.isShowing ? (
          <TaskAlt className="text-gray-400 opacity-45" />
        ) : (
          <div
            onClick={() => {
              acceptTestimonialHandler(testimonial.id);
            }}
            className="flex-center cursor-pointer text-emerald-500"
          >
            <TaskAlt />
          </div>
        );
      },
    },
    {
      field: "rejectAction",
      headerName: "رد نظر",
      width: 60,
      headerAlign: "center",
      align: "center",
      renderCell: (testimonial) => {
        return testimonial.row.isShowing ? (
          <div
            onClick={() => {
              rejectCommentHandler(testimonial.id);
            }}
            className="flex-center cursor-pointer text-rose-500"
          >
            <HideSource />
          </div>
        ) : (
          <HideSource className="text-gray-400 opacity-45" />
        );
      },
    },
    {
      field: "deleteAction",
      headerName: "حذف",
      width: 60,
      renderCell: (testimonial) => {
        return (
          <div
            onClick={() => {
              testimonialDeleteHandler(testimonial.id);
            }}
            className="flex-center cursor-pointer text-rose-500"
          >
            <DeleteOutlineOutlined />
          </div>
        );
      },
    },
  ];

  const rejectCommentHandler = (commentID, isAccept) => {
    console.log(isAccept);
    Swal.fire({
      title: "برای رد نظر مطمعن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f43f5e",
      cancelButtonColor: "#0ea5e9",
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        const update = useUpdate("testimonials/reject", false, commentID);
        setShowRealTimeDatas((prev) => !prev);
      }
    });
  };
  const acceptTestimonialHandler = (testimonialID) => {
    Swal.fire({
      title: "برای تایید نظر مطمعن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f43f5e",
      cancelButtonColor: "#0ea5e9",
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        const update = useUpdate("testimonials/accept", true, testimonialID);
        setShowRealTimeDatas((prev) => !prev);
      }
    });
  };

  const testimonialDeleteHandler = (testimonialID) => {
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
        const deleteHook = useDelete("testimonials/delete" , testimonialID)
        setShowRealTimeDatas((prev) => !prev)
      }
    });
  };

  return (
    <RtlProvider>
      <Box sx={{ display: "flex" }}>
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
                ...(openDrawer && { display: "none" }),
              }}
            >
              <Menu className="text-white" />
            </IconButton>
            <Typography
              variant="h6"
              className="text-white !font-MorabbaBold !text-3xl"
              noWrap
              component="div"
            >
              پنل کاربری
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={openDrawer}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
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
          <Typography
            variant="span"
            className="block !font-MorabbaBold !text-3xl !my-4"
          >
            لیست نظرات
          </Typography>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={testimonials.map((testimonial, index) => {
                return { id: index + 1, ...testimonial };
              })}
              getRowId={(testimonial) => testimonial._id}
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
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </Box>
    </RtlProvider>
  );
}

export default Panel;
