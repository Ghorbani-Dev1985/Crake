import React from "react";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";

import { Box } from "@mui/system";

function AllTools() {
  return (
    <section className="MoreFeaturesBG bg-no-repeat bg-fixed bg-auto bg-right relative">
      <Box className="container">
        <SectionTitle
          title=" ابزار برای همه"
          subtitle="موارد متفاوت در ابزارها وجود دارد که می تواند نیازهای شما را برآأورده نمایید"
          titleStyle="main"
        />
      <Box className="bg-white rounded-lg shadow-lg min-h-24">

      </Box>
     </Box>
    </section>
  );
}

export default AllTools;
