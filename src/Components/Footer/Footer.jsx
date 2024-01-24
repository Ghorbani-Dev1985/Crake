import { Divider } from '@mui/material'
import React from 'react'
import Logo from '../../assets/Images/logo2.png'
import { Link } from 'react-router-dom'
import { Instagram, LinkedIn, Telegram, WhatsApp } from '@mui/icons-material'


const company = [
  {
    id: 1,
    title: "درباره شرکت",
    to: "/"
  },
  {
    id: 2,
    title: " شغل‌ها",
    to: "/"
  },
  {
    id: 3,
    title: " جوایز",
    to: "/"
  },
  {
    id: 4,
    title: " برنامه کاربر",
    to: "/"
  },
  {
    id: 5,
    title: " مکان‌ها",
    to: "/"
  },
]

const product = [
  {
    id: 1,
    title: " یکپارچگی",
    to: "/"
  },
  {
    id: 2,
    title: " شناسه",
    to: "/"
  },
  {
    id: 3,
    title: " قیمت",
    to: "/"
  },
  {
    id: 4,
    title: "  مستندات",
    to: "/"
  },
  {
    id: 5,
    title: " یادداشت‌ها",
    to: "/"
  },
]

const support = [
  {
    id: 1,
    title: " تماس با ما",
    to: "/"
  },
  {
    id: 2,
    title: " ارسال تیکت",
    to: "/"
  },
  {
    id: 3,
    title: " ورود به پنل",
    to: "/login"
  },
]

function Footer() {
  return (
      <>
        <Divider />
        <p className='h-16 p-16'></p>
    <div className='bg-footer bg-no-repeat bg-cover bg-center p-8'>
        
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center justify-evenly gap-10'>
             <img src={Logo} alt='ghorbani-dev.ir' className='object-fill w-40' />
               <p className='text-gray-500 text-justify'>
               برنامه روزانه، هفته یا ماه را پیش ببرید و وضعیت پروژه را در یک نگاه ببینید. جستجو و فیلتر برای تمرکز بر روی هر چیزی یک پروژه واحد فردی.
               </p>
               <div className='flex-center flex-row-reverse gap-5'>
                <Link to="" className='text-[#E1306C]'><Instagram /></Link>
                <Link to="" className='text-[#0077B5]'><LinkedIn /></Link>
                <Link to="" className='text-[#0077B5]'><Telegram /></Link>
                <Link to="" className='text-[#25D366]'><WhatsApp /></Link>
               </div>
          </div>
          <FooterLink footerMenu={company} footerTitle="شرکت" />
          <FooterLink footerMenu={product} footerTitle="محصولات" />
          <FooterLink footerMenu={support} footerTitle="پشتیبانی" />
        </div>

      </div>
    </div>
      </>
  )
}

export default Footer


const FooterLink = ({footerTitle,footerMenu}) => {
 return(
  <div className='flex flex-col items-center'>
   <h2 className='font-DanaBold text-2xl mb-4'>{footerTitle}</h2>
   <ul className='space-y-6'>
    {
      footerMenu.map(({id ,title , to}) => {
        return(
          <React.Fragment key={id}>
        <li className='child:text-zinc-700 child:hover:text-mainColor child:transition-all child:ease-linear child:duration-500 pr-0 child:hover:pr-4'><Link to={to}>{title}</Link></li>
          </React.Fragment>
        )
      })
    }
   </ul>
  </div>
 )
}

export {FooterLink}