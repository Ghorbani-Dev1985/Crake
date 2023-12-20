import React from 'react'

import Logo from './../../assets/Images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-mainColor text-white'>
         <div className="container py-8">
            <div className="flex-between">
                <div>
                    <img src={Logo} alt="ghorbani-dev.ir" className='w-36 h-auto object-cover' />
                </div>
                <div className='flex-center gap-2'>
                   <div>
                    <nav>
                        <ul className='flex-center gap-2 child:px-4 child:py-1 child:font-DanaBold child:text-lg'>
                            <li><Link to="">خانه</Link></li>
                            <li><Link to="">نمونه کار</Link></li>
                            <li><Link to="">بلاگ</Link></li>
                            <li><Link to="">فروشگاه</Link></li>
                            <li><Link to="">تماس</Link></li>
                            
                        </ul>
                    </nav>
                   </div>

                </div>
            </div>
         </div>
    </header>
  )
}

export default Header
