import React, { useEffect, useRef, useState } from "react";
import AsciiArtSequence from "./AsciiArtSequence.jsx";
import image from "../assets/profile-sketch.gif";
import RoleRotator from "./RoleRotator.jsx";
import { FaGlobeAsia, FaMapMarkerAlt } from "react-icons/fa";
import About from "./About.jsx";
import POW from "./POW.jsx";
import Projects from "./Projects.jsx";

const greetings = ["NICE TO SEE U!", "HOW R U?", "HV A GREAT DAY!"];

const Mainpage = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetingAnimationKey, setGreetingAnimationKey] = useState(0);

  const hoverCount = useRef(0);

  // Update current time
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

  // Change greeting one by one on hover
  const handleGreetingHover = () => {
    hoverCount.current += 1;

    // First hover keeps the opening greeting.
    // Every following hover changes to the next greeting.
    if (hoverCount.current > 1) {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }

    // Show text and restart both text and arrow animations
    setShowGreeting(true);
    setGreetingAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="min-h-screen w-full max-w-[780px] mx-auto bg-white flex flex-col overflow-x-hidden">
      {/* Greeting and arrow animations */}
      <style>{`
        @keyframes drawDottedArrow {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes arrowHeadAppear {
          from {
            opacity: 0;
            transform: scale(0.4);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes greetingPop {
          0% {
            opacity: 0;
            transform: scale(0.6) rotate(8deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.12) rotate(-3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes greetingFloat {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -3px;
          }
        }

        @keyframes greetingShimmer {
          0% {
            background-position: 150% center;
          }
          100% {
            background-position: -150% center;
          }
        }

        .draw-arrow-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawDottedArrow 1.4s ease-out forwards;
        }

        .draw-arrow-head {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: arrowHeadAppear 0.3s ease-out 1.2s forwards;
        }

        .greeting-pop {
          animation: greetingPop 0.7s cubic-bezier(.2,.8,.2,1) both;
        }

        .greeting-float {
          animation: greetingFloat 2.5s ease-in-out 0.8s infinite;
        }

        .greeting-shimmer {
          background: linear-gradient(
            110deg,
            #737373 25%,
            #b5a58b 45%,
            #737373 65%
          );
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: greetingShimmer 2.5s ease-in-out 1s 2;
        }

        /* Wider screens: move HI THERE to the left */
        @media (min-width: 1024px) {
          .top-greeting {
            left: -55px;
            right: auto;
            top: -30px;
            z-index: 40;
          }

          .top-greeting-arrow {
            left: -35px;
            right: auto;
            top: -12px;
            transform: scaleX(-1);
            transform-origin: center;
            z-index: 30;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .draw-arrow-line,
          .draw-arrow-head,
          .greeting-pop,
          .greeting-float,
          .greeting-shimmer {
            animation: none;
            stroke-dashoffset: 0;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Hero section */}
      <div className="relative w-full mx-auto">
        {/* Artwork */}
        <div className="relative z-10 w-full flex justify-center items-center overflow-hidden">
          <AsciiArtSequence />
        </div>

        {/* Profile section */}
        <div className="relative z-20 flex flex-row items-start gap-3 sm:gap-5 md:px-4 sm:pr-6 lg:px-4 lg:ml-8 md:ml-13 mx-2">
          {/* Profile image and greetings */}
          <div
            className="relative -mt-4 shrink-0"
            onMouseEnter={handleGreetingHover}
            onFocus={handleGreetingHover}
            tabIndex={0}
          >
            {/* Top greeting */}
            <span className="top-greeting absolute -top-7 right-[-80px] z-40 whitespace-nowrap rotate-6">
              <span className="inline-block px-2 py-1 greeting-pop greeting-float">
                <span className="greeting-shimmer text-[10px] sm:text-[15px] tracking-wide [font-family:'Zeyada',cursive] !text-white lg:!text-black">
                  HI THERE!
                </span>
              </span>
            </span>

            {/* Top animated dotted arrow */}
            <svg
              className="top-greeting-arrow absolute -top-3 -right-0 z-30 w-20 h-9 text-neutral-600 pointer-events-none"
              viewBox="0 0 40 36"
              fill="none"
            >
              <path
                pathLength="1"
                d="M2 32 C8 13 15 5 20 13 C26 23 15 28 17 17 C19 8 29 9 38 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeDasharray="0.01 0.025"
                strokeLinecap="round"
                className="draw-arrow-line"
              />

              <path
                d="M31 5 L38 10 L31 15"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="draw-arrow-head"
              />
            </svg>

            {/* Profile picture */}
            <img
              src={image}
              alt="Profile sketch"
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-26 lg:h-26 object-cover rounded-2xl border border-neutral-200 shadow-xl"
            />

            {/* Bottom greeting and arrow */}
            {showGreeting && (
              <div
                key={greetingAnimationKey}
                className="absolute -bottom-8 right-[-120px] z-30 w-[140px] h-[45px]"
              >
                {/* Bottom greeting text */}
                <span className="absolute right-0 bottom-0 whitespace-nowrap">
                  <span className="inline-block px-2.5 py-1.5 greeting-pop greeting-float">
                    <span className="greeting-shimmer text-[10px] sm:text-[13px] tracking-wide [font-family:'Zeyada',cursive] !text-black text-left">
                      {greetings[greetingIndex]}
                    </span>
                  </span>
                </span>

                {/* Bottom animated dotted arrow */}
                <svg
                  className="absolute -left-5 bottom-3 w-17 h-8 text-neutral-600 pointer-events-none"
                  viewBox="0 0 40 32"
                  fill="none"
                >
                  <path
                    pathLength="1"
                    d="M2 3 C14 15 27 19 38 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeDasharray="0.01 0.025"
                    strokeLinecap="round"
                    className="draw-arrow-line"
                  />

                  <path
                    d="M30 17 L36 18 L33 24"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="draw-arrow-head"
                  />
                </svg>
              </div>
            )}
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
              {/* Current time */}
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

              {/* Location */}
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
      <div className="-mt-10">
        <Projects />
      </div>
    </section>
  );
};

export default Mainpage;
