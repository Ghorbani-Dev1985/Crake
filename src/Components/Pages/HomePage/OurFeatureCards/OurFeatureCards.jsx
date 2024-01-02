import React from 'react'
import { BiCheckDouble , BiCctv , BiGridAlt , BiLock , BiMouseAlt , BiWind} from "react-icons/bi";

function OurFeatureCards() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-12 my-20 relative z-30'>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="دسترسی سریع" Description="در زمان بسیار کوتاه دسترسی سریعی به امکانات داشته باشید تا بتوانید بهره وری بهتری را تجربه کنید"/>
       <OurFeatureCard Icon={<BiGridAlt />} Title=" مدیریت راحت" Description=" مدیریت راحت و حرفه ای و تجربه یک ابزار مدیریتی مدرن تا بتوانید عملکرد مناسبی داشته باشید"/>
       <OurFeatureCard Icon={<BiLock />} Title="  امنیتی" Description=" اجرای کلیه موارد امنیتی و زیر ساختی جهت برقراری بستری امن برای اجرای پروژه ها شما"/>
       <OurFeatureCard Icon={<BiCctv />} Title="  فیلتر دوربین" Description=" استفاده از پیشرفته ترین دوربین های روز برای ساختارمند شدن و بهینه تر شدن"/>
       <OurFeatureCard Icon={<BiWind />} Title="  سریع و بهینه شده" Description="  محبوبیت ما در اجرای سریع و بهینه است زیرا تجربه ما در اجرای این امر چاره ساز است"/>
       <OurFeatureCard Icon={<BiMouseAlt />} Title="  درگ و دراپ" Description="  با یک درگ و دراپ ساخته تنظیمات خود را بهینه نمایید و نتیجه آنرا مشاهده نمایید"/>
    </section>
  )
}

export default OurFeatureCards;


function OurFeatureCard ({Icon , Title , Description}) {
  return(
     <div className='flex flex-col items-center cursor-pointer group hover:-mt-4 transition-all ease-linear duration-300'>
       <p className='flex-center size-20 rounded-full bg-purple-100 group-hover:bg-purple-800 group-hover:text-white transition-colors text-purple-400 text-4xl mb-3'>
          {Icon}
       </p>
       <h3 className='font-DanaBold text-lg md:text-xl mb-4'>{Title}</h3>
       <p className='text-center'>{Description}</p>
     </div>
  )
}

export {OurFeatureCard}