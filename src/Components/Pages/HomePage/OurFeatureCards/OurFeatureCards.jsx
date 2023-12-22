import React from 'react'
import { BiCheckDouble } from "react-icons/bi";

function OurFeatureCards() {
  return (
    <section className='grid grid-cols-3 grid-rows-3 gap-8 my-8'>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="دسترسی سریع" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiCheckDouble />} Title=" مدیریت راحت" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="  امنیتی" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="  فیلتر دوربین" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="  سریع و بهینه شده" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
       <OurFeatureCard Icon={<BiCheckDouble />} Title="  درگ و دراپ" Description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
    </section>
  )
}

export default OurFeatureCards;


function OurFeatureCard ({Icon , Title , Description}) {
  return(
     <div className='flex flex-col items-center'>
       <p className='flex-center size-20 rounded-full bg-purple-100 text-purple-400 text-xl'>
          {Icon}
       </p>
       <h3 className='font-DanaBold text-lg md:text-xl mb-4'>{Title}</h3>
       <p>{Description}</p>
     </div>
  )
}

export {OurFeatureCard}