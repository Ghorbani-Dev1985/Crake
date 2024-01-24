import { Divider } from '@mui/material'
import React from 'react'
import Logo from '../../assets/Images/logo2.png'
import { Link } from 'react-router-dom'
import { Instagram, LinkedIn, Telegram, WhatsApp } from '@mui/icons-material'

function Footer() {
  return (
      <>
        <Divider />
        <p className='h-16 p-16'></p>
    <div className='bg-footer bg-no-repeat bg-cover bg-center min-h-96'>
        
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div className='flex flex-col items-center gap-4'>
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
        </div>

      </div>
    </div>
      </>
  )
}

export default Footer


const footerLink = ({}) => {
 return(
  <div className='flex flex-col'>

  </div>
 )
}

export {footerLink}