import React, { useEffect, useState } from "react";
import AsciiArtSequence from "./AsciiArtSequence.jsx";
import image from "../assets/profile-sketch.gif";
import RoleRotator from "./RoleRotator.jsx";
import { FaGlobeAsia, FaMapMarkerAlt } from "react-icons/fa";
import About from "./About.jsx";
import POW from "./POW.jsx";

const Mainpage = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());

      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full max-w-[780px] mx-auto bg-white flex flex-col overflow-x-hidden">
      {/* Hero section */}
      <div className="relative w-full mx-auto">
        {/* Artwork */}
        <div className="relative z-10 w-full flex justify-center items-center overflow-hidden">
          <AsciiArtSequence />
        </div>

        {/* Profile section */}
        <div className="relative z-20 flex flex-row items-start gap-3 sm:gap-5 md:px-4 sm:pr-6 lg:px-4 lg:ml-8 md:ml-13 ml-0  ">
          {/* Profile image */}
          <div className="-mt-4  shrink-0">
            <img
              src={image}
              alt="Profile sketch"
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-26 lg:h-26 object-cover rounded-2xl border shadow-xl"
            />
          </div>

          {/* Name and details */}
          <div className=" w-full min-w-0 flex flex-row sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 lg:pt-6 text-left">
            {/* Name and role */}
            <div className="min-w-0 flex flex-col ">
              <span className="font-['Sigmar_One'] text-lg sm:text-xl md:text-2xl lg:text-2xl tracking-tight leading-tight break-words">
                Sayyad Shekshavali
              </span>
              <RoleRotator />
            </div>

            {/* Time and location */}
            <div className="flex flex-col gap-2 sm:gap-3 ml-auto sm:mt-2 lg:mt-0 text-neutral-600 shrink-0 text-sm  lg:mr-8 md:mr-8">
              <div className="flex items-center gap-2">
                <FaGlobeAsia
                  size={18}
                  className="text-neutral-700 sm:w-[20px] sm:h-[20px] shrink-0"
                />
                <span className=" text-[7px] sm:text-xs  font-semibold tracking-wide tabular-nums">
                  {currentTime}
                </span>
                <span className="text-[5px] sm:text-[6px] text-neutral-400">
                  IST
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt
                  size={16}
                  className="text-neutral-500 shrink-0"
                />

                <span className=" text-[7px] sm:text-xs  font-medium">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full mx-auto px-4 sm:px-0 lg:px-8 md:px-4 md:ml-5 mt-3">
        <p className=" sm:text-base md:text-xl lg:text-xl leading-relaxed text-neutral-600 text-left">
          Driven by creativity, perseverance, curiosity, and a passion for
          continuous growth.
        </p>
      </div>

      {/* About section */}
      <div className="w-full min-w-0 mx-auto mt-0 md:mx-3">
        <About />
      </div>

      {/* Proof of Work */}
      <div className="w-full min-w-0 mx-auto ">
        <POW />
      </div>
    </section>
  );
};

export default Mainpage;
