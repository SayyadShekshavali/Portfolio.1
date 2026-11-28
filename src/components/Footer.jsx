import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaFilePdf,
} from "react-icons/fa";

import { HiArrowUpRight } from "react-icons/hi2";
import GradientASCII from "./GradientASCII";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/YOUR_USERNAME",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/YOUR_USERNAME",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "mailto:syedshaikshavali330@gmail.com",
      icon: FaEnvelope,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#101827] text-white rounded-2xl">
      {/* Full Footer GradientASCII Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <GradientASCII
          colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={1}
          glyphOpacity={1}
          glow={0.45}
          depthOfField={0}
          flicker={0.2}
          softness={0.25}
          scale={1}
          flow={0.5}
          speed={1}
          gradientOpacity={1}
          grain={0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={false}
        />
      </div>

      {/* Overlay for Readability */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[#101827]/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 pt-8 min-[400px]:px-4 min-[400px]:pt-10 sm:px-6 sm:pt-10 lg:px-12 lg:pt-10">
        {/* Contact CTA */}
        <div className="mb-7 border-b border-white/20 pb-5 min-[400px]:mb-9 min-[400px]:pb-9 sm:mb-12 sm:pb-5 lg:mb-10 lg:pb-10">
          <p className="mb-0 text-[8px] font-medium uppercase tracking-[0.2em] text-white/60 min-[400px]:text-[9px] md:!mb-5 sm:text-xs sm:tracking-[0.25em]">
            Have a project in mind?
          </p>

          <div className="flex flex-col justify-between gap-5 sm:gap-7 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl text-[clamp(1.35rem,5vw,2.25rem)] font-semibold leading-tight tracking-tight text-white min-[400px]:text-3xl sm:text-5xl lg:text-7xl mt-0">
                Let's build
                <span className="text-white/45"> something </span>
                great.
              </h2>

              <p className="mt-0 max-w-xl text-[9px] leading-5 text-white/65 min-[400px]:text-[10px] min-[400px]:leading-6 sm:mt-0 sm:text-sm sm:leading-7 lg:text-base">
                I'm always interested in building useful products, solving
                challenging problems and exploring new opportunities. Let's
                connect and create something meaningful.
              </p>
            </div>

            <a
              href="mailto:syedshaikshavali330@gmail.com"
              className="group flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[9px] font-medium text-neutral-900 transition-all duration-300 hover:bg-[#78865b] hover:text-white min-[400px]:gap-2 min-[400px]:px-4 min-[400px]:py-2.5 min-[400px]:text-[10px] sm:gap-3 sm:px-6 sm:py-4 sm:text-sm"
            >
              Let's Talk
              <HiArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-[18px]"
              />
            </a>
          </div>
        </div>

        {/* Footer Main Content - Always 4 Columns */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 pb-5 min-[400px]:gap-x-3 min-[400px]:gap-y-5 min-[400px]:pb-6 sm:gap-x-5 sm:gap-y-7 sm:pb-10 lg:gap-x-8 lg:pb-14">
          {/* Identity */}
          <div className="col-span-1 min-w-0">
            <h3 className="text-[9px] font-semibold tracking-tight text-white min-[400px]:text-[10px] sm:text-base lg:text-xl">
              Sayyad
              <span className="text-[#9aa77b]">.</span>
            </h3>

            <p className="mt-1 text-[7px] leading-3 text-white/60 min-[400px]:text-[8px] min-[400px]:leading-4 sm:mt-2 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
              Software Engineer passionate about building real-world
              applications and meaningful digital experiences.
            </p>

            <div className="mt-2 flex items-start gap-1 text-[7px] leading-3 text-white/50 min-[400px]:text-[8px] min-[400px]:leading-4 sm:mt-4 sm:gap-1.5 sm:text-[10px] lg:text-xs">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#9aa77b] min-[400px]:h-1.5 min-[400px]:w-1.5" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 min-w-0">
            <h4 className="mb-2 text-[7px] font-semibold uppercase tracking-[0.12em] text-white/50 min-[400px]:text-[8px] min-[400px]:tracking-[0.15em] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em] lg:mb-5 lg:text-xs">
              Explore
            </h4>

            <ul className="space-y-1 min-[400px]:space-y-1.5 sm:space-y-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-0.5 text-[7px] text-white/75 transition-colors duration-200 hover:text-[#b6c58e] min-[400px]:text-[8px] sm:gap-1 sm:text-xs lg:text-sm"
                  >
                    {item.name}

                    <HiArrowUpRight
                      size={8}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:size-3"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1 min-w-0">
            <h4 className="mb-2 text-[7px] font-semibold uppercase tracking-[0.12em] text-white/50 min-[400px]:text-[8px] min-[400px]:tracking-[0.15em] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em] lg:mb-5 lg:text-xs">
              Connect
            </h4>

            <ul className="space-y-1 min-[400px]:space-y-1.5 sm:space-y-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.name === "Email" ? undefined : "_blank"}
                      rel={
                        item.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group inline-flex items-center gap-1 text-[7px] text-white/75 transition-colors duration-200 hover:text-[#b6c58e] min-[400px]:gap-1 min-[400px]:text-[8px] sm:gap-2 sm:text-xs lg:text-sm"
                    >
                      <Icon className="shrink-0" size={10} />

                      <span className="truncate">{item.name}</span>

                      <HiArrowUpRight
                        size={8}
                        className="hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 min-[400px]:inline-flex sm:size-3"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resume */}
          <div className="col-span-1 min-w-0">
            <h4 className="mb-2 text-[7px] font-semibold uppercase tracking-[0.12em] text-white/50 min-[400px]:text-[8px] min-[400px]:tracking-[0.15em] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em] lg:mb-5 lg:text-xs">
              Resume
            </h4>

            <p className="mb-2 text-[7px] leading-3 text-white/60 min-[400px]:text-[8px] min-[400px]:leading-4 sm:mb-3 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
              Interested in my background and experience? Take a look at my
              resume.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-wrap items-center gap-0.5 border-b border-white/40 pb-0.5 text-[7px] font-medium text-white transition-colors duration-200 hover:border-[#b6c58e] hover:text-[#b6c58e] min-[400px]:text-[8px] sm:gap-1 sm:pb-1 sm:text-xs lg:text-sm"
            >
              <FaFilePdf size={9} />

              <span>View CV</span>

              <HiArrowUpRight
                size={8}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-3"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between gap-2 border-t border-white/20 py-3 min-[400px]:py-4 sm:gap-4 sm:py-5">
          <p className="text-[7px] text-white/50 min-[400px]:text-[8px] sm:text-xs">
            © {currentYear} Sayyad Shekshavali.
          </p>

          <p className="hidden text-[8px] text-white/50 sm:block sm:text-xs">
            Designed & built with care.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex shrink-0 items-center gap-1 text-[7px] font-medium text-white/75 transition-colors duration-200 hover:text-[#b6c58e] min-[400px]:text-[8px] sm:gap-2 sm:text-xs"
          >
            Back to top
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#9aa77b] group-hover:bg-[#78865b] group-hover:text-white min-[400px]:h-6 min-[400px]:w-6 sm:h-8 sm:w-8">
              <FaArrowUp
                size={9}
                className="min-[400px]:size-3 sm:size-[15px]"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
