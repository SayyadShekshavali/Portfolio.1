import React from "react";

import { LineShadowText } from "./ui/line-shadow-text";
import ActivityDashboard from "./ActivityDashboard.jsx";
import { Highlighter } from "./ui/highlighter";
const POW = () => {
  return (
    <>
      <h2 className="sm:p-0 lg:p-5 viga-font p-3">
        <Highlighter action="underline" color="#36454F  ">
          Proof of
        </Highlighter>{" "}
        <LineShadowText>Work</LineShadowText>
      </h2>
      <div className=" w-full bg-black lg:p-5 mb-10 rounded-md">
        <ActivityDashboard />
      </div>
    </>
  );
};

export default POW;
