import React from "react";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import Calender from "./Calender";
import OldComments from "./OldComments";
import CodeReview from "./CodeReview";
import ProfessionalStaff from "./ProfessionalStaff";

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
    </section>
  );
}

export default MoreFeatures;
