import React from "react";


import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle/SectionTitle";



function PricingPlan() {

  return (
    <section className="bg-[#edf5ff] relative pb-24 z-20">
      <Box className="container">
        <SectionTitle
          title=" طرح های قیمت گذاری آسان "
          subtitle=" یکی از طرح ها را می توانید از جدول زیر انتخاب نمایید و خریداری نمایید"
          titleStyle="main"
        />

      </Box>
    </section>
  );
}

export default PricingPlan;

const ToolsName = ({ icon}) => {
  return (
    <Box className="flex flex-col gap-8">
      <Box className="flex-center size-16 rounded-full bg-emerald-50 text-mainColor">
        {icon}
      </Box>
    </Box>
  );
};
export { ToolsName };


const TabPanelContent = ({title , description , liOne , liTwo , liThree , liFour , img}) => {
  return (
    <Box className="flex flex-col gap-4 items-center md:flex-row md:flex-between my-8">
  
    </Box>
  )
}

export {TabPanelContent}