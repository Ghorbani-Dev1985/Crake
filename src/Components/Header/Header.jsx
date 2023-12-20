import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import Logo from "./../../assets/Images/logo.png";
import ShapeOne from "./../../assets/Images/shape1.png";
import ShapeTwo from "./../../assets/Images/shape2.png";
import ShapeThree from "./../../assets/Images/shape3.png";
import ShapeFour from "./../../assets/Images/shape4.png";
import MainImage from "./../../assets/Images/main-image.png";
import { Link } from "react-router-dom";

function Header() {
  return (
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
          <div className="flex-center gap-2">
            <div>
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
            </div>
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
                onClick={()=>document.getElementById('my_modal_2').showModal()}
              >
                مشاهده ویدیو
                <BiPlayCircle className="text-3xl group-hover:text-secondColor transition-colors" />
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-mainColor">
                  <h3 className="font-bold text-lg mb-3">جذب و جذب مشتریان با بازاریابی دیجیتال/ دیجیتال مارکتینگ </h3>
                <video className="w-full rounded-md" controls autoPlay>
                    <source src="https://www.aparat.com/v/aGXPg" type="video/mp4" />
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
          className="absolute left-72 bottom-72 z-0 opacity-10 animate-fullRotate rounded-full"
        />
        <img
          src={ShapeThree}
          alt="ghorbani-dev.ir"
          className="absolute right-8 bottom-30 animate-moveBounce"
        />
        <div className="w-36 h-36 bg-white/10 absolute left-5 bottom-30 rounded-full animate-moveBounce"></div>
      </div>
    </header>
  );
}

export default Header;

// defaultProps when props unavailable
// Header.defaultProps = {
//   image: './image.jpg'
// }