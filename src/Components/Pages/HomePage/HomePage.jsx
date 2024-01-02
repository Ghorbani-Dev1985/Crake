import React from 'react'
import OurFeatures from './OurFeatures'
import PanelServices from './PanelServices/PanelServices'
import MoreFeatures from './MoreFeatures/MoreFeatures'
import JoinUS from '../../JoinUS/JoinUS'
import UserCTA from '../../UserCTA/UserCTA'
import RegisterForm from '../../RegisterForm/RegisterForm'

function HomePage() {
  return (
    <>
    <OurFeatures />
    <PanelServices />
    <MoreFeatures />
    <JoinUS />
    <UserCTA />
    <RegisterForm />
    </>
  )
}

export default HomePage
