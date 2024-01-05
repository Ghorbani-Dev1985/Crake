import React from "react";
import OurFeatures from "./OurFeatures/OurFeatures";
import PanelServices from "./PanelServices/PanelServices";
import MoreFeatures from "./MoreFeatures/MoreFeatures";
import JoinUS from "../../JoinUS/JoinUS";
import UserCTA from "../../UserCTA/UserCTA";
import RegisterForm from "../../RegisterForm/RegisterForm";
import AllTools from "./AllTools/AllTools";
import Counts from "./Counts/Counts";

function HomePage() {
  return (
    <>
      <OurFeatures />
        <PanelServices />
    <MoreFeatures />
    <JoinUS />
    <UserCTA />
    <RegisterForm />
    <AllTools />
    <Counts />
    </>
  );
}

export default HomePage;
