import React from "react";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import Calender from "./Calender";
import OldComments from "./OldComments";
import CodeReview from "./CodeReview";
import ProfessionalStaff from "./ProfessionalStaff";
import ShapeSeven from "../../../../assets/Images/shape7.png";
import ShapeSix from "../../../../assets/Images/shape6.png";
import { Box } from "@mui/system";

function MoreFeatures() {
  return (
    <section className="MoreFeaturesBG bg-no-repeat bg-fixed bg-auto bg-right relative">
      <div className="container">
        <SectionTitle
          title=" کشف موارد بیشتر "
          subtitle="مواردی که هر کدام می توانند باعث پیشرفت شما شوند و آینده روشنی داشته باشید"
          titleStyle="main"
        />
        <Calender />
        <OldComments />
        <CodeReview />
        <ProfessionalStaff />
      </div>
      <Box className="absolute left-0 top-96 z-10">
      <img
        src={ShapeSeven}
        alt="ghorbani-dev.ir"
        className="object-fill opacity-70"
      />
      <img
        src={ShapeSix}
        alt="ghorbani-dev.ir"
        className="absolute left-0 -bottom-25 animate-fullRotateY z-10"
      />
      </Box>
    </section>
  );
}

export default MoreFeatures;
