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
        <div className="relative z-20 flex flex-row items-start gap-3 sm:gap-5 md:px-4 sm:pr-6 lg:px-4 lg:ml-8 md:ml-13 mx-2">
          {/* Profile image with floating text and curved arrows */}
          <div className="relative -mt-4 shrink-0">
            {/* Left floating text */}
            <span className="absolute -top-5 -left-2 z-20 whitespace-nowrap text-[8px] sm:text-[10px] font-semibold text-neutral-500 -rotate-12">
              HI THERE!
            </span>

            {/* Curved dotted arrow - left */}
            <svg
              className="absolute -top-3 -left-3 z-10 w-8 h-7 text-neutral-400 pointer-events-none"
              viewBox="0 0 40 32"
              fill="none"
            >
              <path
                d="M35 29 C25 8 14 5 4 10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="2 3"
                strokeLinecap="round"
              />
              <path
                d="M9 5 L4 10 L10 12"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Right floating text */}
            <span className="absolute -top-4 -right-14 z-20 whitespace-nowrap text-[8px] sm:text-[10px] font-medium text-neutral-500 rotate-6">
              HOW ARE YOU?
            </span>

            {/* Curved dotted arrow - right */}
            <svg
              className="absolute -top-3 -right-9 z-10 w-9 h-7 text-neutral-400 pointer-events-none"
              viewBox="0 0 40 32"
              fill="none"
            >
              <path
                d="M4 29 C14 8 26 5 36 10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="2 3"
                strokeLinecap="round"
              />
              <path
                d="M30 5 L36 10 L30 12"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Profile picture */}
            <img
              src={image}
              alt="Profile sketch"
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-26 lg:h-26 object-cover rounded-2xl border shadow-xl"
            />

            {/* Bottom floating text */}
            <span className="absolute -bottom-5 -right-5 z-20 whitespace-nowrap text-[8px] sm:text-[10px] text-neutral-400">
              NICE TO MEET YOU :)
            </span>

            {/* Curved dotted arrow - bottom */}
            <svg
              className="absolute -bottom-5 right-[-10px] z-10 w-9 h-8 text-neutral-400 pointer-events-none"
              viewBox="0 0 40 32"
              fill="none"
            >
              <path
                d="M3 3 C12 24 25 27 36 18"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="2 3"
                strokeLinecap="round"
              />
              <path
                d="M30 17 L36 18 L33 24"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Name and details */}
          <div className="w-full min-w-0 flex flex-row sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 lg:pt-6 text-left">
            {/* Name and role */}
            <div className="min-w-0 flex flex-col">
              <span className="font-['Sigmar_One'] text-lg sm:text-xl md:text-2xl lg:text-2xl tracking-tight leading-tight break-words">
                Sayyad Shekshavali
              </span>
              <RoleRotator />
            </div>

            {/* Time and location */}
            <div className="flex flex-col gap-2 sm:gap-3 ml-auto sm:mt-2 lg:mt-0 text-neutral-600 shrink-0 text-sm lg:mr-8 md:mr-8">
              <div className="flex items-center gap-2">
                <FaGlobeAsia
                  size={18}
                  className="text-neutral-700 sm:w-[20px] sm:h-[20px] shrink-0"
                />
                <span className="text-[7px] sm:text-xs font-semibold tracking-wide tabular-nums">
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
                <span className="text-[7px] sm:text-xs font-medium">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full mx-auto px-4 sm:px-0 lg:px-8 md:px-4 md:ml-5 md:mr-3 mt-3">
        <p className="sm:text-sm md:text-lg lg:text-lg leading-relaxed text-neutral-600 text-left">
          Driven by creativity, perseverance, curiosity, and a passion for
          continuous growth.
        </p>
      </div>

      {/* About section */}
      <div className="w-full min-w-0 mx-auto mt-0 md:mx-3">
        <About />
      </div>

      {/* Proof of Work */}
      <div className="w-full min-w-0 mx-auto">
        <POW />
      </div>
    </section>
  );
};

export default Mainpage;
