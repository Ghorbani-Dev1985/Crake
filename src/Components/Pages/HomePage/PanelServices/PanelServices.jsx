import React from "react";
import Feature from '../../../../assets/Images/features-img1.png'

function PanelServices() {
  return (
    <section>
      <div className="container">
        <div className="flex-between">
          <div className="flex flex-1">
           <img src={Feature} alt="ghorbani-dev.ir" />
          </div>
          <div className="flex flex-1"></div>
        </div>
      </div>
    </section>
  );
}

export default PanelServices;


function Service(){
    return(
        <div className="flex flex-col items-center">
           
        </div>
    )
}

export {Service};