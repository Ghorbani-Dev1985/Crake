import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import Logo from "./../../assets/Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-mainColor text-white relative">
      <div className="container py-8">
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
        <div className="flex-between my-10">
          <div className="flex flex-1"></div>
          <div className="flex flex-1 flex-col">
            <h1 className="font-MorabbaBold text-xl md:text-5xl/[5rem] mb-4">
              استراتژی کسب و کار خود را در یک مکان حرفه ای مدیریت کنید
            </h1>
            <p className="max-w-lg mx-auto text-center leading-8">
              شور و شوق ما به کار سخت و ارائه نتایج عالی است. این می تواند
              نیازهای مشتریان خود را حل کند و نوآوری را توسعه دهد.
            </p>
            <div className="flex-between max-w-lg mx-auto my-10 gap-5">
              <Link
                to="#"
                class="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-12 py-3 text-sm font-medium text-secondColor hover:text-mainColor hover:bg-gray-50 focus:outline-none focus:ring active:bg-secondColor active:text-white"
              >
                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-secondColor transition-all duration-200 group-hover:w-full"></span>
                <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-secondColor transition-all duration-200 group-hover:h-full"></span>
                <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondColor transition-all duration-200 group-hover:w-full"></span>
                <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-secondColor transition-all duration-200 group-hover:h-full"></span>
                شروع کنید
              </Link>
              <button class="btn flex-center gap-4 bg-transparent text-white border-none shadow-none hover:bg-transparent group" onclick="my_modal_2.showModal()">مشاهده ویدیو <BiPlayCircle className="text-3xl group-hover:text-secondColor transition-colors" /></button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
            </div>
          </div>
        </div>
        <div className="w-36 h-36 bg-gray-200/50 absolute left-5 bottom-2 rounded-full animate-moveBounce"></div>
      </div>
    </header>
  );
}

export default Header;
