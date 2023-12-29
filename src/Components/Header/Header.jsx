import React, { useState } from "react";
import Logo from "./../../assets/Images/logo.png";
import ShapeOne from "./../../assets/Images/shape1.png";
import ShapeTwo from "./../../assets/Images/shape2.png";
import ShapeThree from "./../../assets/Images/shape3.png";
import ShapeFour from "./../../assets/Images/shape4.png";
import MainImage from "./../../assets/Images/main-image.png";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { BiMap , BiPhone, BiPlayCircle, BiEnvelope , BiLogoInstagram , BiLogoFacebook, BiLogoLinkedin , BiLogoTwitter , BiMenuAltRight} from "react-icons/bi";
import MobileNav from "./MobileNav";
import { Box, Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SectionTitle from "../../assets/common/SectionTitle/SectionTitle";


function Header(props) {
  console.log(props)
  return (
    <>
   {/* Logo & Nav - Mobile */}
        <MobileNav/>
      <header className="bg-mainColor text-white relative min-h-screen">
        <div className="container py-8">
          <img
            src={ShapeOne}
            alt="ghorbani-dev.ir"
            className="absolute left-1 md:left-10 md:top-25 animate-moveBounce"
          />
          <img
            src={ShapeTwo}
            alt="ghorbani-dev.ir"
            className="absolute right-0 md:top-20 h-24 md:h-auto animate-moveBounce opacity-20"
          />
          {/* Logo & Nav - Desktop */}
          <div className="hidden md:flex-between">
            <div>
              <img
                src={Logo}
                alt="ghorbani-dev.ir"
                className="w-36 h-auto object-cover"
              />
            </div>
            <div className="flex-center gap-5">
              <nav>
                <ul className="flex-center gap-2 child:px-4 child:py-1 child:font-DanaBold child:text-lg">
                  <li>
                    <Link to="" className="hover:text-amber-500 transition-colors">خانه</Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-amber-500 transition-colors">نمونه کار</Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-amber-500 transition-colors">بلاگ</Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-amber-500 transition-colors">فروشگاه</Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-amber-500 transition-colors">تماس</Link>
                  </li>
                </ul>
              </nav>
              <div className="relative">
                <HiOutlineShoppingCart className="text-3xl" />
                <span className="flex-center absolute -top-1 -left-3 size-6 bg-white text-mainColor rounded-full">
                  0
                </span>
              </div>
              <HiOutlineMagnifyingGlass className="text-3xl" />
              {/* Open Drawer */}
              <ContactUsDrawer />
            </div>
          </div>
          {/* Img & Text */}
          <div className="flex flex-col justify-between gap-16 lg:flex-between lg:flex-row md:gap-12 min-h-screen z-10 relative">
            <div className="flex flex-1 justify-center items-center">
              <img
                src={MainImage}
                alt="ghorbani-dev.ir"
                className="object-cover sm:size-72 md:size-auto"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-MorabbaBold text-xl md:text-5xl/[5rem] mb-4 text-center">
                استراتژی کسب و کار خود را در یک مکان حرفه ای مدیریت کنید
              </h1>
              <p className="max-w-lg mx-auto text-center leading-8">
                شور و شوق ما به کار سخت و ارائه نتایج عالی است. این می تواند
                نیازهای مشتریان خود را حل کند و نوآوری را توسعه دهد.
              </p>
              <div className="flex-between max-w-lg mx-auto my-10 gap-5">
                <Link
                  to="#"
                  className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-12 py-3 text-sm md:text-xl text-violet-800 font-DanaBold hover:text-mainColor hover:bg-gray-50 focus:outline-none focus:ring active:bg-secondColor active:text-white"
                >
                  <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-mainColor transition-all duration-200 group-hover:w-full"></span>
                  <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-mainColor transition-all duration-200 group-hover:h-full"></span>
                  <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-mainColor transition-all duration-200 group-hover:w-full"></span>
                  <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-mainColor transition-all duration-200 group-hover:h-full"></span>
                  شروع کنید
                </Link>
                <button
                  className="btn flex-center gap-4 bg-transparent text-white border-none shadow-none hover:bg-transparent group"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  مشاهده ویدیو
                  <BiPlayCircle className="text-3xl group-hover:text-secondColor transition-colors" />
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box text-mainColor">
                    <h3 className="font-bold text-lg mb-3">
                      جذب و جذب مشتریان با بازاریابی دیجیتال/ دیجیتال مارکتینگ
                    </h3>
                    <video className="w-full rounded-md" controls autoPlay>
                      <source
                        src="https://www.aparat.com/v/aGXPg"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
          <img
            src={ShapeFour}
            alt="ghorbani-dev.ir"
            className="absolute right-0 left-0 mx-auto bottom-48 lg:-left-[40rem] md:bottom-0 lg:bottom-72 size-72 md:size-auto z-0 opacity-30 animate-fullRotate rounded-full"
          />
          <img
            src={ShapeThree}
            alt="ghorbani-dev.ir"
            className="absolute right-1 bottom-20 size-25 md:size-auto md:right-8 md:bottom-30 animate-moveBounce"
          />
          <div className="size-20 md:size-36 bg-white/10 absolute left-5 bottom-20 md:bottom-30 rounded-full animate-moveBounce"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
  
function ContactUsDrawer() {
  const [state, setState] = useState( {right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550 }}
      role="presentation"
      className="px-4"
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <SectionTitle title="  لینک های اضافی " titleStyle=""/>
          <ul className="space-y-4">
            <li><Link className="text-zinc-700 hover:text-purple-900 transition-colors">ورود</Link></li>
            <li><Link className="text-zinc-700 hover:text-purple-900 transition-colors">ثبت نام</Link></li>
            <li><Link className="text-zinc-700 hover:text-purple-900 transition-colors"> گفت و گو</Link></li>
            <li><Link className="text-zinc-700 hover:text-purple-900 transition-colors"> خروج</Link></li>
          </ul>
          <SectionTitle title=" اطلاعات تماس " titleStyle=""/>
            <ul className="space-y-8">
              <li className="flex items-center gap-3">
                 <p className="flex-center size-14 text-3xl text-purple-800 rounded-md bg-purple-100">
                 <BiMap />
                 </p>
                 <div className="flex flex-col gap-3">
                   <span className="font-bold">آدرس</span>
                   <span>ایران - تهران - شهرک غرب</span>
                 </div>
              </li>
              <li className="flex items-center gap-3">
              <p className="flex-center size-14 text-3xl text-purple-800 rounded-md bg-purple-100">
              <BiPhone />
                 </p>
                 <div className="flex flex-col gap-3">
                   <span className="font-bold">تلفن</span>
                   <span> 09121111111</span>
                 </div>
              </li>
              <li className="flex items-center gap-3">
              <p className="flex-center size-14 text-3xl text-purple-800 rounded-md bg-purple-100">
              <BiEnvelope />
                 </p>
                 <div className="flex flex-col gap-3">
                   <span className="font-bold">ایمیل</span>
                   <span>admin@crake.com</span>
                 </div>
              </li>
            </ul>
            <SectionTitle title="ارتباط با ما" titleStyle=""/>
          <div className="flex items-center gap-2">
            <Link className="flex-center size-14 text-3xl text-gray-400 rounded-full border border-gray-400 cursor-pointer group">
            <BiLogoInstagram className="group-hover:text-purple-900 transition-colors"/>
            </Link>
            <Link className="flex-center size-14 text-3xl text-gray-400 rounded-full border border-gray-400 cursor-pointer group">
            <BiLogoFacebook className="group-hover:text-purple-900 transition-colors"/>
            </Link>
            <Link className="flex-center size-14 text-3xl text-gray-400 rounded-full border border-gray-400 cursor-pointer group">
            <BiLogoLinkedin className="group-hover:text-purple-900 transition-colors"/>
            </Link>
            <Link className="flex-center size-14 text-3xl text-gray-400 rounded-full border border-gray-400 cursor-pointer group">
            <BiLogoTwitter className="group-hover:text-purple-900 transition-colors"/>
            </Link>
          </div>
    </Box>
  );
  return (
    <>
                <button onClick={toggleDrawer('right', true)} className="cursor-pointer bg-transparent shadow-none border-none size-10 group">
                <div
                  className="size-2 relative block bg-white rounded-full mb-[2px] transition-all ease-in-out duration-[400]
                before:content-[''] before:absolute before:size-2 before:-left-3 before:top-0 before:bg-white before:rounded-full before:transition-all before:ease-in-out before:duration-[400] after:content-[''] after:absolute after:size-2 after:-left-6 after:top-0 after:bg-white after:rounded-full after:transition-all after:ease-in-out after:duration-[400]"
                ></div>
                <div
                  className="size-2 relative block bg-white rounded-full mb-[2px] transition-all ease-in-out duration-300
             before:content-[''] before:absolute before:size-2 before:-left-3 before:top-0 before:bg-white before:rounded-full before:transition-all before:ease-in-out before:duration-[400] after:content-[''] after:absolute after:size-2 after:group-hover:opacity-0 after:group-hover:invisible after:group-hover:-translate-x-full after:-left-6 after:top-0 after:bg-white after:rounded-full after:transition-all after:ease-in-out after:duration-300"
                ></div>
                <div
                  className="size-2 relative block bg-white rounded-full mb-[2px] transition-all ease-in-out duration-700
            before:content-[''] before:absolute before:size-2 before:-left-3 before:top-0 before:bg-white before:rounded-full before:transition-all before:ease-in-out before:duration-700 after:content-[''] after:absolute after:size-2 after:-left-6 after:top-0 after:bg-white after:rounded-full after:transition-all after:ease-in-out after:duration-1000 before:group-hover:opacity-0 before:group-hover:invisible before:group-hover:-translate-x-full after:group-hover:opacity-0 after:group-hover:invisible after:group-hover:-translate-x-full"
                ></div>
              </button> 
          <Drawer
          anchor="right"
            open={state['right']}
            onClose={toggleDrawer( false)}
           
          >
              <div className="bg-gradient-to-l flex-between from-purple-900 to-purple-400 py-10 px-4"><img src={Logo} alt="ghorbani-dev.ir" className="w-44 h-auto object-cover" />
               <CloseIcon onClick={toggleDrawer('right' ,false)} className="text-white size-8 cursor-pointer" />
              </div>
            {list('right')}
          </Drawer>
    </>
  );
}

export { ContactUsDrawer };
