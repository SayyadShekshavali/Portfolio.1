import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Award, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "PROFESSIONAL EXPERIENCE",
    role: "Software Development Intern",
    company: "Laktotech Labs Private Limited",
    period: "Jul 2025 — Oct 2025",
    location: "Hyderabad, India",
    description:
      "Worked on full-stack application development across two release cycles as part of a 5-member Agile team.",
    highlights: [
      "Developed 10+ full-stack application features using JavaScript, Node.js, Express.js and REST APIs.",
      "Contributed business logic across 20 features, helping increase company revenue by 5% within two months.",
      "Identified, debugged and resolved 20+ application defects, improving feature stability and reliability.",
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "REST APIs"],
    icon: Briefcase,
  },
  {
    id: 2,
    type: "LEARNING EXPERIENCE",
    role: "Mastering Data with Machine Learning",
    company: "IBM SkillsBuild × CSRBOX Foundation",
    period: "Oct 22 — Nov 5, 2024",
    location: "Internship Program",
    description:
      "Successfully completed the IBM SkillsBuild Mastering Data with Machine Learning Internship with CSRBOX Foundation.",
    highlights: [
      "Completed the 15-day IBM SkillsBuild internship program focused on Data with Machine Learning.",
    ],
    technologies: ["IBM SkillsBuild", "Machine Learning", "Data"],
    certificateId: "0800",
    icon: Award,
  },
];

function ExperienceCard({ experience, isOpen, onToggle, index }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);
  const Icon = experience.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`relative pl-6 transition-all duration-700 ease-out sm:pl-8 lg:pl-10 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <span className="absolute left-[3px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gray-500 bg-white transition-transform duration-500 sm:h-3 sm:w-3 lg:top-2" />

      <div className="border-b border-gray-200 pb-3 sm:pb-4 lg:pb-5">
        {/* Experience heading */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="group flex w-full items-start justify-between gap-2 text-left sm:gap-3"
        >
          <div className="min-w-0 flex-1">
            <span className="mb-1 block text-[8px] font-semibold tracking-[0.15em] text-gray-500 sm:mb-1.5 sm:text-[9px] sm:tracking-[0.18em] lg:text-[10px] lg:tracking-[0.2em]">
              {experience.type}
            </span>

            <h3 className="text-sm font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-gray-600 sm:text-base lg:text-xl">
              {experience.role}
            </h3>

            <p className="mt-0.5 text-[10px] text-gray-600 sm:text-xs lg:text-sm">
              {experience.company}
            </p>
          </div>

          {/* Duration and arrow */}
          <div className="flex shrink-0 items-start gap-1 sm:gap-2 lg:gap-3">
            <span className="pt-1 text-right text-[8px] leading-relaxed text-gray-500 sm:text-[10px] lg:text-xs">
              {experience.period}
              <span className="mt-0.5 hidden sm:block">
                {experience.location}
              </span>
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-gray-100 sm:h-7 sm:w-7">
              <ChevronDown
                size={14}
                className={`text-gray-500 transition-transform duration-500 sm:h-4 sm:w-4 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </div>
        </button>

        {/* Expandable content */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "mt-2.5 grid-rows-[1fr] opacity-100 sm:mt-3"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`space-y-2 transition-transform duration-500 sm:space-y-3 ${
                isOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              <p className="max-w-2xl text-[10px] leading-5 text-gray-600 sm:text-xs sm:leading-6 lg:text-sm">
                {experience.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 sm:space-y-2">
                {experience.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-[10px] leading-relaxed text-gray-700 sm:gap-3 sm:text-xs lg:text-sm"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400 sm:h-1.5 sm:w-1.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 pt-0.5 sm:gap-1.5">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    className="rounded-full border border-gray-200 px-2 py-1 text-[8px] text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 sm:px-2.5 sm:text-[9px] lg:text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Certificate */}
              {experience.certificateId && (
                <div className="flex items-center gap-2 pt-1 text-[9px] text-gray-500 sm:text-[10px] lg:text-[11px]">
                  <Icon size={12} />
                  Certificate ID: {experience.certificateId}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const [openId, setOpenId] = useState(1);

  return (
    <section
      id="experience"
      className="w-full bg-white px-[3%] py-6 text-left sm:px-[4%] sm:py-8 lg:px-[8%] lg:py-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-5 animate-[fadeInUp_0.8s_ease-out_both] sm:mb-6 lg:mb-8">
          <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-gray-500 sm:mb-2 sm:text-[9px] lg:text-[10px] lg:tracking-[0.3em]">
            The Journey So Far
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Where I've Grown.
          </h2>

          <p className="mt-1.5 max-w-lg text-xs leading-5 text-gray-500 sm:mt-2 sm:text-sm sm:leading-6">
            A timeline of experiences, contributions and continuous learning.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative space-y-3 before:absolute before:bottom-3 before:left-[7px] before:top-2 before:w-px before:bg-gray-200 sm:space-y-4 sm:before:left-[8px]">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isOpen={openId === experience.id}
              onToggle={() =>
                setOpenId(openId === experience.id ? null : experience.id)
              }
            />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-4 pl-6 text-[8px] tracking-wide text-gray-400 sm:mt-5 sm:pl-8 sm:text-[9px] lg:text-[10px]">
          ALWAYS BUILDING. ALWAYS LEARNING.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #experience *,
          #experience *::before {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
