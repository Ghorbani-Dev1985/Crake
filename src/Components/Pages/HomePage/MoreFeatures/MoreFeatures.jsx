import React from 'react'
import SectionTitle from '../../../../assets/common/SectionTitle/SectionTitle'
import ShapeSeven from "../../../../assets/Images/shape7.png";
import ShapeSix from "../../../../assets/Images/shape6.png";
import Calender from './Calender'


function MoreFeatures() {
  return (
    <section className='MoreFeaturesBG bg-no-repeat bg-fixed bg-auto bg-right relative'>
      <div className='container'>
      <SectionTitle title=" کشف موارد بیشتر " subtitle="مواردی که هر کدام می توانند باعث پیشرفت شما شوند و آینده روشنی داشته باشید" titleStyle="main"/>
      <Calender />

      </div>
     
      <img src={ShapeSeven} alt="ghorbani-dev.ir" className='absolute -left-20 md:left-0 bottom-0 z-10'/>
      <img src={ShapeSix} alt="ghorbani-dev.ir" className='absolute left-0 md:left-12 -bottom-28 animate-fullRotateY z-10'/>
    </section>
  )
}

export default MoreFeatures
