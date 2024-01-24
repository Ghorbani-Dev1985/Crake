import React from "react";


import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import { AttachMoney, ManageAccounts, Store } from "@mui/icons-material";
import AnimateButton from "../common/AnimateButton/AnimateButton";



function PricingPlan() {

  return (
    <section className="bg-[#edf5ff] relative pb-30 z-20">
      <Box className="container">
        <SectionTitle
          title=" طرح های قیمت گذاری آسان "
          subtitle=" یکی از طرح ها را می توانید از جدول زیر انتخاب نمایید و خریداری نمایید"
          titleStyle="main"
        />
         <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                     <PricingPlanBox icon={<ManageAccounts />} price="500,000" planName="شخصی" planNameBtnColor="bg-emerald-400" disableOne={true} disableTwo={true} disable={true}/>
                     <PricingPlanBox icon={<Store />} price="1,000,000" planName="شرکتی" planNameBtnColor="bg-emerald-500" disable={true}/>
                     <PricingPlanBox icon={<AttachMoney />} price="2,000,000" planName="سرمایه گذاری" planNameBtnColor="bg-emerald-600"/>
         </Box>
      </Box>
    </section>
  );
}

export default PricingPlan;


const PricingPlanBox = ({icon , price , planName , disableOne , disableTwo , disable , planNameBtnColor}) => {
  return (
    <Box className="bg-white relative shadow-ring flex flex-col gap-12 rounded-md top-0 hover:-top-3 transition-all ease-linear duration-300 items-center py-20">
      <Box className="w-full group">
      <div className="flex-center size-16 bg-white shadow-ring text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors rounded-full absolute -top-8 right-0 left-0 mx-auto">{icon}</div>
      <div className="space-y-2 text-center"><span className="font-DanaBold text-3xl ml-1 group-hover:text-mainColor">{price}</span><p>هزار تومان / ماهانه</p></div>
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