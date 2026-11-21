import React from "react";

import { LineShadowText } from "./ui/line-shadow-text";
import ActivityDashboard from "./ActivityDashboard.jsx";
const POW = () => {
  return (
    <>
      <h1 className="sm:p-0 lg:p-5">
        Proof of <LineShadowText>Work</LineShadowText>
      </h1>
      <div className=" w-full bg-black lg:p-5 mb-10 rounded-md">
        <ActivityDashboard />
      </div>
    </>
  );
};

export default POW;
