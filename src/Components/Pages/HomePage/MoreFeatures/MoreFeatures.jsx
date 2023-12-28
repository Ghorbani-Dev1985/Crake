import React from 'react'
import SectionTitle from '../../../../assets/common/SectionTitle/SectionTitle'
import Calender from './Calender'


function MoreFeatures() {
  return (
    <section className='MoreFeaturesBG bg-no-repeat bg-fixed bg-auto bg-right'>
      <div className='container'>
      <SectionTitle title=" کشف موارد بیشتر " subtitle="مواردی که هر کدام می توانند باعث پیشرفت شما شوند و آینده روشنی داشته باشید" titleStyle="main"/>
      <Calender />

      </div>
    </section>
  )
}

export default MoreFeatures
