import React from "react";
import Feature from '../../../../assets/Images/features-img1.png'
import ShapeThree from '../../../../assets/Images/shape3.png'
import ShapeEight from '../../../../assets/Images/svgs/shape8.svg'
import ShapeEleven from '../../../../assets/Images/svgs/shape11.svg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RedeemIcon from '@mui/icons-material/Redeem';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Box } from "@mui/material";

function PanelServices() {
  return (
    <section className="mb-5">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative flex-center">
           <img src={Feature} alt="ghorbani-dev.ir" className="object-fill max-w-72 md:max-w-md relative z-20" />
           <img src={ShapeThree} alt="ghorbani-dev.ir" className="absolute size-25 md:size-auto right-0 z-10 -bottom-4 md:right-25 md:bottom-0 lg:bottom-48 lg:right-0 animate-moveBounce" />
          </div>
          <div className="w-full relative z-20">
        <img src={ShapeEight} alt="ghorbani-dev.ir" className="absolute left-6 -top-8 md:left-28 md:-top-4 animate-fullRotate" />
            <Service icon={<LocalPhoneIcon className="size-8"/>} title="خدمات تلفن رایگان" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            <Service icon={<RedeemIcon className="size-8"/>} title="هدیه رایگان روزانه" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            <Service icon={<QrCode2Icon className="size-8"/>} title="اسکنر QR کد " subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            <Box className="absolute left-0 md:left-8 bottom-1">
            <img src={ShapeEleven} alt="ghorbani-dev.ir" className="size-20 md:size-36 opacity-20 animate-fullRotate" />
            <div className="size-20 md:size-36 bg-mainColor opacity-20 rounded-full animate-moveBounce"></div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelServices;


function Service({icon, title , subTitle}){
    return(
        <div className="w-full flex flex-col items-center group hover:-mt-2 transition-all ease-linear duration-300 mb-16">
           <div className="flex gap-8">
             <div className="flex-center size-16 bg-slate-50 shadow-ring text-mainColor rounded-full group-hover:bg-mainColor group-hover:text-white transition-colors">
                   {icon}
             </div>
             <div className="w-3/4 flex flex-col">
                <h2 className="font-DanaBold text-2xl mb-4">{title}</h2>
              <p className="text-zinc-400">{subTitle}</p>
             </div>
           </div>
        </div>
    )
}

export {Service};