import React from "react";
import OurFeatureCards from "./OurFeatureCards/OurFeatureCards";
import ShapeTen from "../../../../assets/Images/svgs/shape10.svg";
import ShapeSex from "../../../../assets/Images/shape6.png";
import ShapeSeven from "../../../../assets/Images/shape7.png";
import ShapeNine from "../../../../assets/Images/svgs/shape9.svg";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import { Box } from "@mui/material";

function OurFeatures() {
  return (
    <section className="my-8">
       <Box className="w-full relative">
        <img
          src={ShapeSeven}
          className="absolute left-0 top-[44rem] md:top-[31rem] w-44 lg:w-auto opacity-50"
          alt="ghorbani-dev.ir"
        />
        <img
          src={ShapeSex}
          className="absolute left-0 top-[44rem] md:top-[40rem] lg:top-[45rem] animate-fullRotateY"
          alt="ghorbani-dev.ir"
        />    
        </Box>
      <div className="container relative">
        <img
          src={ShapeTen}
          className="absolute size-30 right-1 md:right-44 top-10 md:size-auto animate-moveBounce opacity-50"
          alt="ghorbani-dev.ir"
        />
        <SectionTitle
          title="ویژگی های شگفت انگیز ما"
          subtitle="در این قسمت می توانید بخش کوچکی از امکانات و ویژگی های قابل ارائه ما را ملاحظه بفرمایید."
          titleStyle="main"
        />
        <OurFeatureCards />
        <Box className="relative">
        <img
          src={ShapeNine}
          className="absolute left-0 right-0 mx-auto bottom-80 lg:bottom-[30rem] animate-rectangle"
          alt="ghorbani-dev.ir"
        />
        </Box>
      </div>
    </section>
  );
}

export default OurFeatures;
