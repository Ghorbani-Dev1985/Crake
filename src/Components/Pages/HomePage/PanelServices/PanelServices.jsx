import React from "react";
import Feature from '../../../../assets/Images/features-img1.png'
import ShapeThree from '../../../../assets/Images/shape3.png'
import ShapeEight from '../../../../assets/Images/svgs/shape8.svg'
import ShapeEleven from '../../../../assets/Images/svgs/shape11.svg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RedeemIcon from '@mui/icons-material/Redeem';
import QrCode2Icon from '@mui/icons-material/QrCode2';

function PanelServices() {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
           <img src={Feature} alt="ghorbani-dev.ir" className="object-fit max-w-2xl relative z-20" />
           <img src={ShapeThree} alt="ghorbani-dev.ir" className="absolute -right-0 z-10 -bottom-4 md:bottom-20 animate-moveBounce" />
          </div>
          <div className="w-full relative z-20">
        <img src={ShapeEight} alt="ghorbani-dev.ir" className="absolute left-28 -top-4 animate-fullRotate" />
            <Service icon={<LocalPhoneIcon className="size-8"/>} title="خدمات تلفن رایگان" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            <Service icon={<RedeemIcon className="size-8"/>} title="هدیه رایگان روزانه" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            <Service icon={<QrCode2Icon className="size-8"/>} title="اسکنر QR کد " subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            <img src={ShapeEleven} alt="ghorbani-dev.ir" className="absolute size-24 md:size-36 lg:size-auto z-20 -left-12 md:-left-0 opacity-10 bottom-28 md:bottom-0 lg:bottom-10 animate-fullRotate" />
            <div className="size-20 md:size-36 bg-purple-500 absolute z-10 opacity-10 -left-12 md:-left-1 bottom-16 md:-bottom-20 lg:bottom-0 rounded-full animate-moveBounce"></div>
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
           <div className="flex-center gap-8">
             <div className="flex-center size-16 bg-slate-50 shadow-ring text-purple-800 rounded-full group-hover:bg-purple-800 group-hover:text-white transition-colors">
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