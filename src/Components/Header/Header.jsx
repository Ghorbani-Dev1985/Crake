import React from "react";
import { BiPlayCircle } from "react-icons/bi";
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

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Stack,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Input,
} from '@chakra-ui/react'


function Header() {

  return (
    <>
    <header className="bg-mainColor text-white relative min-h-screen">
      <div className="container py-8">
        <img
          src={ShapeOne}
          alt="ghorbani-dev.ir"
          className="absolute left-10 top-25 animate-moveBounce"
        />
        <img
          src={ShapeTwo}
          alt="ghorbani-dev.ir"
          className="absolute right-0 top-20 animate-moveBounce opacity-20"
          />
        {/* Logo & Nav */}
        <div className="flex-between">
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
                  <Link to="">خانه</Link>
                </li>
                <li>
                  <Link to="">نمونه کار</Link>
                </li>
                <li>
                  <Link to="">بلاگ</Link>
                </li>
                <li>
                  <Link to="">فروشگاه</Link>
                </li>
                <li>
                  <Link to="">تماس</Link>
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
            <button className="cursor-pointer size-10 group">
              <div
                className="size-2 relative block bg-white rounded-full mb-[2px] transition-all ease-in-out duration-[400]
                before:content-[''] before:absolute before:size-2 before:-left-3 before:top-0 before:bg-white before:rounded-full before:transition-all before:ease-in-out before:duration-[400] after:content-[''] after:absolute after:size-2 after:-left-6 after:top-0 after:bg-white after:rounded-full after:transition-all after:ease-in-out after:duration-[400]"
                ></div>
               <div className="size-2 relative block bg-white rounded-full mb-[2px] transition-all ease-in-out duration-300
             before:content-[''] before:absolute before:size-2 before:-left-3 before:top-0 before:bg-white before:rounded-full before:transition-all before:ease-in-out before:duration-[400] after:content-[''] after:absolute after:size-2 after:group-hover:opacity-0 after:group-hover:invisible after:group-hover:-translate-x-full after:-left-6 after:top-0 after:bg-white after:rounded-full after:transition-all after:ease-in-out after:duration-300"></div>
             <div className="size-2 relative block bg-white rounded-full mb-[2px] transition-all ease-in-out duration-700
            before:content-[''] before:absolute before:size-2 before:-left-3 before:top-0 before:bg-white before:rounded-full before:transition-all before:ease-in-out before:duration-700 after:content-[''] after:absolute after:size-2 after:-left-6 after:top-0 after:bg-white after:rounded-full after:transition-all after:ease-in-out after:duration-1000 before:group-hover:opacity-0 before:group-hover:invisible before:group-hover:-translate-x-full after:group-hover:opacity-0 after:group-hover:invisible after:group-hover:-translate-x-full"></div>
            </button>
            {/* <Drawer onClose={onClose} initialFocusRef={HeaderDrawer} isOpen={isOpen} size={xl}>
    <DrawerOverlay />
    <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader></DrawerHeader>
    <DrawerBody>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Consequat nisl vel pretium lectus quam id. Semper quis lectus
    nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
      quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
      magna eget est lorem. Erat imperdiet sed euismod nisi porta.
      Lectus vestibulum mattis ullamcorper velit.
      </p>
      </DrawerBody>
      </DrawerContent>
    </Drawer> */}
  
          </div>
        </div>
        {/* Img & Text */}
        <div className="flex-between gap-12 min-h-screen z-10 relative">
          <div className="flex flex-1">
            <img
              src={MainImage}
              alt="ghorbani-dev.ir"
              className="object-cover"
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
                    جذب و جذب مشتریان با بازاریابی دیجیتال/ دیجیتال مارکتینگ{" "}
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
          className="absolute left-96 bottom-72 z-0 opacity-30 animate-fullRotate rounded-full"
          />
        <img
          src={ShapeThree}
          alt="ghorbani-dev.ir"
          className="absolute right-8 bottom-30 animate-moveBounce"
        />
        <div className="w-36 h-36 bg-white/10 absolute left-5 bottom-30 rounded-full animate-moveBounce"></div>
      </div>
    </header>
          </>
  );
}

export default Header;


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export {DrawerExample}