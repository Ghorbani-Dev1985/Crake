import React from 'react'
import OurFeatureCards from './OurFeatureCards/OurFeatureCards'
import ShapeTen from '../../../assets/Images/svgs/shape10.svg'
import ShapeSex from '../../../assets/Images/shape6.png'
import ShapeSeven from '../../../assets/Images/shape7.png'
import ShapeNine from '../../../assets/Images/svgs/shape9.svg'
import SectionTitle from '../../../assets/common/SectionTitle/SectionTitle'


function OurFeatures() {
  return (
    <section className='my-8 relative'>
       <div className="container">
        <img src={ShapeTen} className='absolute size-30 right-1 md:right-44 top-10 md:size-auto animate-moveBounce opacity-50' alt='ghorbani-dev.ir' />
        <SectionTitle title="ویژگی های شگفت انگیز ما" subtitle="در این قسمت می توانید بخش کوچکی از امکانات و ویژگی های قابل ارائه ما را ملاحظه بفرمایید." titleStyle="main"/>
        <OurFeatureCards />
        <img src={ShapeSeven} className='absolute sm:size-40 md:size-auto left-0 bottom-25' alt='ghorbani-dev.ir' />
        <img src={ShapeSex} className='absolute -left-8 md:left-8 bottom-10 md:bottom-25 animate-fullRotateY' alt='ghorbani-dev.ir' />
        <img src={ShapeNine} className='absolute left-0 right-0 mx-auto bottom-80 animate-rectangle' alt='ghorbani-dev.ir' />
       </div>
    </section>
  )
}

export default OurFeatures
