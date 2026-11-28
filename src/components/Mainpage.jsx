import React, { useEffect, useRef, useState } from "react";
import AsciiArtSequence from "./AsciiArtSequence.jsx";
import image from "../assets/profile-sketch.gif";
import RoleRotator from "./RoleRotator.jsx";
import { FaGlobeAsia, FaMapMarkerAlt } from "react-icons/fa";
import About from "./About.jsx";
import POW from "./POW.jsx";
import Projects from "./Projects.jsx";
import Skills from "./SKills.jsx";
import Experience from "./Experience.jsx";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiFileText } from "react-icons/fi";
import Achivements from "./Achivements.jsx";
import Footer from "./Footer.jsx";
import ElectricBorder from "./ElectricBorder";

const greetings = ["NICE TO SEE U!", "HOW R U?", "HV A GREAT DAY!"];

const Mainpage = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetingAnimationKey, setGreetingAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const hoverCount = useRef(0);

  // Detect mobile screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const handleScreenChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleScreenChange();
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

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

  // Hide bottom greeting after 3 seconds
  useEffect(() => {
    if (!showGreeting) return;

    const timeout = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showGreeting, greetingAnimationKey]);

  // Mobile: automatically show greetings every 5 seconds
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
      setShowGreeting(true);
      setGreetingAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Desktop and tablet: change greeting on every hover
  const handleGreetingHover = () => {
    if (isMobile) return;

    hoverCount.current += 1;

    setGreetingIndex((prev) => (prev + 1) % greetings.length);
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

        

        @media (prefers-reduced-motion: reduce) {
          .draw-arrow-line,
          .draw-arrow-head,
          .greeting-pop,
          .greeting-float,
          .greeting-shimmer {
            animation: none !important;
            stroke-dashoffset: 0;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Profile area with Electric Border */}

      <div className="w-full rounded-2xl bg-white">
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
              <span className="top-greeting absolute -top-4 right-[-80px] sm:-right-[100px] z-40 whitespace-nowrap rotate-6">
                <span className="inline-block px-2 py-1 greeting-pop greeting-float">
                  <span className="greeting-shimmer text-[10px] sm:text-[15px] tracking-wide [font-family:'Zeyada',cursive] lg:!text-black !text-white !bg-white">
                    HI THERE!
                  </span>
                </span>
              </span>

              {/* Top animated dotted arrow */}
              <svg
                className="top-greeting-arrow absolute -top-3 -right-12 z-30 w-20 h-9 text-neutral-600 pointer-events-none"
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
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                spread={0.6}
                strands={3}
                thickness={1.5}
                borderRadius={16}
              >
                <img
                  src={image}
                  alt="Profile sketch"
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-26 lg:h-26 object-cover rounded-2xl border border-neutral-200 shadow-xl"
                />
              </ElectricBorder>
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
        <div className="w-full box-border mx-auto px-4 sm:px-4 md:px-4 lg:px-8 mt-3 pb-4">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-neutral-600 text-left">
            Driven by creativity, perseverance, curiosity, and a passion for
            continuous growth.
          </p>

          <div className="flex items-center justify-end gap-3 mt-1 -ml-4 w-full">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sayyad-shekshavali/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative group text-neutral-500 hover:text-blue-600 hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
                LinkedIn
              </span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/SayyadShekshavali/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="relative group text-neutral-500 hover:text-yellow-500 hover:scale-125 transition-all duration-300"
            >
              <SiLeetcode className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
                LeetCode
              </span>
            </a>

            {/* Resume */}
            <a
              href="/Common_SE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="relative group text-neutral-500 hover:text-green-600 hover:scale-125 transition-all duration-300"
            >
              <FiFileText className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
                Resume
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SayyadShekshavali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="relative group text-neutral-500 hover:text-neutral-900 hover:scale-125 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="lg:-mt-0">
        <Experience />
      </div>

      {/* About section */}
      <div id="about" className="w-full min-w-0 mx-auto mt-0 md:mx-3">
        <About />
      </div>

      {/* Proof of Work */}
      <div id="proof-of-work" className="w-full min-w-0 mx-auto">
        <POW />
      </div>

      {/* Projects */}
      <div id="projects" className="-mt-10">
        <Projects />
      </div>

      {/* Skills */}
      <div id="skills">
        <Skills />
      </div>

      {/* Achievements */}
      <div>
        <Achivements id="achievements" />
      </div>

      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
    </section>
  );
};

export default Mainpage;
