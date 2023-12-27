import React from "react";
import Feature from '../../../../assets/Images/features-img1.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function PanelServices() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="w-full">
           <img src={Feature} alt="ghorbani-dev.ir" className="object-fit w-[650px]" />
          </div>
          <div className="w-full">
            <Service icon={<LocalPhoneIcon className="size-12"/>} title="خدمات تلفن رایگان" subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelServices;


function Service({icon, title , subTitle}){
    return(
        <div className="w-full flex flex-col items-center group hover:-mt-2 transition-all ease-linear duration-300">
           <div className="flex-center gap-8">
             <p className="w-16p flex-center size-25 align-middle rounded-full bg-white shadow-lg group-hover:bg-purple-800 group-hover:text-white transition-colors text-purple-400 text-4xl mb-3">
                 <span> {icon}</span>
             </p>
             <div className="w-3/4 flex flex-col">
                <h2 className="font-DanaBold text-2xl mb-4">{title}</h2>
              <p className="text-zinc-400">{subTitle}</p>
             </div>
           </div>
        </div>
    )
}

export {Service};