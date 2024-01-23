import React from "react";

import { Box } from "@mui/system";
import { Button, TextField, TextareaAutosize, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import { AttachMoney, ManageAccounts, RateReview, Store } from "@mui/icons-material";
import AnimateButton from "../common/AnimateButton/AnimateButton";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import RtlProvider from "../common/RtlProvider/RtlProvider";
import useInsert from '../../Hooks/useInsert'


function OurCustomer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [text , setText] = useState("")
  const [isShowing, setIsShowing] = useState(false);
  const [isShowTestimonialFrom , setIsShowTestimonialFrom] = useState(false);
  const [notFirstNameValidError, setFirstNameShowNotValidError] =
  useState(false);
const [notLastNameValidError, setLastNameShowNotValidError] = useState(false);
const [notJobTitleValidError, setJobTitleShowNotValidError] =
  useState(false);
  const [notTextValidError, setTextShowNotValidError] =
  useState(false);
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
  const jobTitleInputHandler = (event) => {
    setJobTitle(event.target.value);
    if (jobTitle.length < 2) {
      setJobTitleShowNotValidError(true);
    } else {
      setJobTitleShowNotValidError(false);
    }
  };
  const textInputHandler = (event) => {
    setText(event.target.value)
    if (text.length < 20) {
      setTextShowNotValidError(true);
    } else {
      setTextShowNotValidError(false);
    }
  };
  const newTestimonialHandler = (event) => {
    event.preventDefault()
    let newTestimonialInfos = {
      firstName,
      lastName,
      jobTitle,
      text
    }
    const insert = useInsert("testimonials/newTestimonial" , newTestimonialInfos) 
    setFirstName("")
    setLastName("")
    setJobTitle("")
    setText("")
  }
  return (
    <>
    <section className="bg-[#edf5ff] relative py-25 overflow-hidden">
      <Box className="container relative z-10">
        <SectionTitle
          title=" نظر مشتریان "
          subtitle=" برخی از نظرهای مشتریان ما را می توانید در زیر مشاهده کنید"
          titleStyle="main"
        />
        <Box onClick={() => setIsShowTestimonialFrom(!isShowTestimonialFrom)} className="w-full flex-center my-10"> 
        <Button component="label" variant="contained" className="!text-white" startIcon={<RateReview />}>
          <span className="mr-2"> ثبت نظر جدید</span>
       
    </Button>
        </Box>
      {
        isShowTestimonialFrom &&
        <RtlProvider> 
          {/* Testimonial Form */}
          <form onSubmit={(event) => newTestimonialHandler(event)} className='bg-gray-50 p-12 rounded-lg'>
            <Box className="w-full flex justify-between items-center mb-6">
          <TextField
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
                  />
                   <TextField
                    value={lastName}
                    onChange={(event) => lastNameInputHandler(event)}
                    autoComplete='off'
                    label={
                      <span>
                        نام خانوادگی
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
                  />
                    <TextField
                    value={jobTitle}
                    onChange={(event) => jobTitleInputHandler(event)}
                    autoComplete='off'
                    label={
                      <span>
                        عنوان تخصص
                        <span className="text-rose-500 text-sm">*</span>
                      </span>
                    }
                    error={notJobTitleValidError && true}
                    helperText={
                      notJobTitleValidError && (
                        <span className="text-rose-500">
                          لطفا حداقل دو کاراکتر وارد نمایید
                        </span>
                      )
                    }
                    variant="outlined"
                    size="small"
                  />
            </Box>
            <TextField
                    value={text}
                    onChange={(event) => textInputHandler(event)}
                    autoComplete='off'
                    multiline
                    rows={5}
                    maxRows={7}
                    label={
                      <span>
                        متن کامل نظر
                        <span className="text-rose-500 text-sm">*</span>
                      </span>
                    }
                    error={notTextValidError && true}
                    helperText={
                      notTextValidError && (
                        <span className="text-rose-500">
                          لطفا حداقل بیست کاراکتر وارد نمایید
                        </span>
                      )
                    }
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                  <Box className="w-full flex-center my-4">
                  <Button type="submit" variant="contained" className="!text-white w-1/2">ثبت نظر</Button>
                  </Box>
          </form>
          </RtlProvider>
      }
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          className="mySwiper my-12"
          >
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 5</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 6</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 7</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 8</SwiperSlide>
          <SwiperSlide className="bg-emerald-50/90 shadow-ring rounded-md border-0 border-b-4 border-mainColor border-solid min-h-60">Slide 9</SwiperSlide>
        </Swiper>
      </Box>
      <Box className="absolute bottom-0 right-0 w-full h-auto left-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff"></path>
			</svg>
      </Box>
    </section>
          </>
  );
}

export default OurCustomer;

const PricingPlanBox = ({
  icon,
  price,
  planName,
  disableOne,
  disableTwo,
  disable,
  planNameBtnColor,
}) => {
  return (
    <Box className="bg-white relative shadow-ring flex flex-col gap-12 rounded-md top-0 hover:-top-3 transition-all ease-linear duration-300 items-center py-20">
      <Box className="w-full group">
        <p className="flex-center size-16 bg-white shadow-ring text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors rounded-full absolute -top-8 right-0 left-0 mx-auto">
          {icon}
        </p>
        <p className="space-y-2 text-center">
          <span className="font-DanaBold text-3xl ml-1 group-hover:text-mainColor">
            {price}
          </span>
          <p>هزار تومان / ماهانه</p>
        </p>
        <div className="relative w-full z-10 my-3 after:content-[''] after:block after:w-full after:absolute after:top-1/2 after:h-px after:bg-mainColor group-hover:after:bg-amber-500 after:-z-10">
          <p
            className={`${planNameBtnColor} group-hover:bg-amber-500 w-1/2 mx-auto py-2 text-center font-MorabbaBold text-2xl rounded-md text-white relative z-10`}
          >
            {planName}
          </p>
        </div>
        <ul className="text-slate-400 space-y-5 text-center mb-8">
          <li>5 ارسال فاکتورها و نقل</li>
          <li>2 مشتری و محصولات</li>
          <li>صورتحساب و پرداخت</li>
          <li>وارد کردن 5 صورتحساب</li>
          <li>امنیت اطلاعات و پشتیبان گیری</li>
          <li className={`${disableOne && "line-through text-slate-300"}`}>
            حساب کارکنان فضای مجاز: نامحدود
          </li>
          <li className={`${disableTwo && "line-through text-slate-300"}`}>
            وب رزرو ویجت
          </li>
          <li className={`${disable && "line-through text-slate-300"}`}>
            گزارشات ماهانه و تجزیه و تحلیل
          </li>
          <li className={`${disable && "line-through text-slate-300"}`}>
            24/7 پشتیبانی
          </li>
        </ul>
      </Box>
      <AnimateButton BtnText="شروع به کار" />
    </Box>
  );
};

export { PricingPlanBox };
