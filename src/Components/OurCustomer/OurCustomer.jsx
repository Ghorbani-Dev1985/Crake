import React from "react";


import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import { AttachMoney, ManageAccounts, Store } from "@mui/icons-material";
import AnimateButton from "../common/AnimateButton/AnimateButton";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay} from 'swiper/modules';

function OurCustomer() {

  return (
    <section className="bg-ourCustomerBg relative">
      <Box className="container">
        <SectionTitle
          title=" نظر مشتریان "
          subtitle=" برخی از نظرهای مشتریان ما را می توانید در زیر مشاهده کنید"
          titleStyle="main"
        />
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay= {{
          delay: 2500,
        }}
        modules={[ Autoplay]}
        className="mySwiper my-12"
        >
       <SwiperSlide className="bg-white h-full">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-white h-full">Slide 9</SwiperSlide>
      </Swiper>
      </Box>
     
    </section>
  );
}

export default OurCustomer;


const PricingPlanBox = ({icon , price , planName , disableOne , disableTwo , disable , planNameBtnColor}) => {
  return (
    <Box className="bg-white relative shadow-ring flex flex-col gap-12 rounded-md top-0 hover:-top-3 transition-all ease-linear duration-300 items-center py-20">
      <Box className="w-full group">
      <p className="flex-center size-16 bg-white shadow-ring text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors rounded-full absolute -top-8 right-0 left-0 mx-auto">{icon}</p>
      <p className="space-y-2 text-center"><span className="font-DanaBold text-3xl ml-1 group-hover:text-mainColor">{price}</span><p>هزار تومان / ماهانه</p></p>
      <div className="relative w-full z-10 my-3 after:content-[''] after:block after:w-full after:absolute after:top-1/2 after:h-px after:bg-mainColor group-hover:after:bg-amber-500 after:-z-10">
      <p className={`${planNameBtnColor} group-hover:bg-amber-500 w-1/2 mx-auto py-2 text-center font-MorabbaBold text-2xl rounded-md text-white relative z-10`}>{planName}</p>
      </div>
      <ul className="text-slate-400 space-y-5 text-center mb-8">
        <li>5 ارسال فاکتورها و نقل</li>
        <li>2 مشتری و محصولات</li>
        <li>صورتحساب و پرداخت</li>
        <li>وارد کردن 5 صورتحساب</li>
        <li>امنیت اطلاعات و پشتیبان گیری</li>
        <li className={`${disableOne && "line-through text-slate-300"}`}>حساب کارکنان فضای مجاز: نامحدود</li>
        <li className={`${disableTwo && "line-through text-slate-300"}`}>وب رزرو ویجت</li>
        <li className={`${disable && "line-through text-slate-300"}`}>گزارشات ماهانه و تجزیه و تحلیل</li>
        <li className={`${disable && "line-through text-slate-300"}`}>24/7 پشتیبانی</li>
      </ul>
      </Box>
      <AnimateButton BtnText="شروع به کار"/>
    </Box>

  )
}

export {PricingPlanBox}