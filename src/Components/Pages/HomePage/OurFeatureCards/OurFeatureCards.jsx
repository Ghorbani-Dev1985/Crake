import React from 'react'
import { BiCheckDouble , BiCctv , BiGridAlt , BiLock , BiMouseAlt , BiWind} from "react-icons/bi";

function OurFeatureCards() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-8 my-8'>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="دسترسی سریع" Description="در زمان بسیار کوتاه دسترسی سریعی به امکانات داشته باشید تا بتوانید بهره وری بهتری را تجربه کنید"/>
       <OurFeatureCard Icon={<BiGridAlt />} Title=" مدیریت راحت" Description=" مدیریت راحت و"/>
       <OurFeatureCard Icon={<BiLock />} Title="  امنیتی" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiCctv />} Title="  فیلتر دوربین" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiWind />} Title="  سریع و بهینه شده" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiMouseAlt />} Title="  درگ و دراپ" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
    </section>
  )
}

export default OurFeatureCards;


function OurFeatureCard ({Icon , Title , Description}) {
  return(
     <div className='flex flex-col items-center'>
       <p className='flex-center size-20 rounded-full bg-purple-100 text-purple-400 text-4xl mb-3'>
          {Icon}
       </p>
       <h3 className='font-DanaBold text-lg md:text-xl mb-4'>{Title}</h3>
       <p className='text-center'>{Description}</p>
     </div>
  )
}

export {OurFeatureCard}