import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "WaffleMania",
    image: "/projects/project-1.png",
    poster: "/projects/poster1.jpeg",
    description:
      "A web project built with React and Tailwind CSS. Instead of manually searching multiple systems, employees can ask questions in natural language and receive AI-generated answers grounded in the organization's indexed knowledge. Instead of manually searching multiple systems, employees can ask questions in natural language and receive AI-generated answers grounded in the organization's indexed knowledge.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/SayyadShekshavali/Wafflemania",
    demo: "https://wafflemania.vercel.app/",
  },
  {
    number: "02",
    title: "TaskPilot",
    image: "/projects/project2.webp",
    poster: "/projects/poster2.jpeg",
    description:
      "A task management application built with a modern full-stack setup.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Zustand"],
    github: "https://github.com/SayyadShekshavali/TaskPilot",
    demo: "https://task-pilot-three-roan.vercel.app/",
  },
  {
    number: "03",
    title: "Insight RAG",
    image: "/projects/project2.png",
    poster: "/projects/poster3.jpeg",
    description:
      "Instead of manually searching multiple systems, employees can ask questions in natural language and receive AI-generated answers grounded in the organization's indexed knowledge. Instead of manually searching multiple systems, employees can ask questions in natural language and receive AI-generated answers grounded in the organization's indexed knowledge.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "Qdrant",
      "Gemini",
      "RAG",
    ],
    github: "https://github.com/SayyadShekshavali/Insight-RAG",
    demo: "https://insight-rag-lemon.vercel.app/",
  },
];

function ProjectCard({ project, isRevealed }) {
  return (
    <Tilt
      className="project-tilt-wrapper"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.01}
      transitionSpeed={1000}
      glareEnable={false}
    >
      <div className="project-flip-card">
        <div
          className={`project-flip-inner ${
            isRevealed ? "project-is-revealed" : ""
          }`}
        >
          {/* FRONT — POSTER */}
          <div className="project-card-face project-card-front">
            <img
              src={project.poster}
              alt={`${project.title} poster`}
              className="project-card-poster"
            />

            <div className="project-card-front-overlay">
              <span className="project-card-number">
                PROJECT / {project.number}
              </span>

              <h3>{project.title}</h3>

              <p>Selected work</p>
            </div>
          </div>

          {/* BACK — PROJECT DETAILS */}
          <div className="project-card-face project-card-back">
            <div className="project-card-topline">
              <span>PROJECT / {project.number}</span>
              <span>CASE STUDY</span>
            </div>

            <div className="project-card-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
              />
            </div>

            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>

              <p className="project-card-description">{project.description}</p>

              <div className="project-card-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="project-card-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub <span>↗</span>
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const sectionEntered = useRef(false);
  const activeIndexRef = useRef(0);
  const revealedRef = useRef(false);
  const flipFrame = useRef(null);
  const projectRows = useRef([]);

  const selectProject = (index) => {
    if (activeIndexRef.current === index && revealedRef.current) {
      return;
    }

    if (flipFrame.current) {
      cancelAnimationFrame(flipFrame.current);
    }

    activeIndexRef.current = index;
    revealedRef.current = false;

    setActiveIndex(index);
    setIsRevealed(false);

    // Show the selected poster first, then flip to details.
    flipFrame.current = requestAnimationFrame(() => {
      flipFrame.current = requestAnimationFrame(() => {
        revealedRef.current = true;
        setIsRevealed(true);
      });
    });
  };

  const handleSectionEnter = () => {
    if (sectionEntered.current) return;

    sectionEntered.current = true;
    revealedRef.current = true;
    setIsRevealed(true);
  };

  // On touch/mobile devices, select a project as its name
  // becomes visible while scrolling.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    if (!mediaQuery.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const index = Number(visibleEntries[0].target.dataset.index);

          if (Number.isInteger(index)) {
            selectProject(index);
          }
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-15% 0px -25% 0px",
      },
    );

    projectRows.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (flipFrame.current) {
        cancelAnimationFrame(flipFrame.current);
      }
    };
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <section
      className="projects-section"
      id="projects"
      onMouseEnter={handleSectionEnter}
    >
      <div className="projects-heading">
        <p className="projects-subtitle">A FEW THINGS I'VE BUILT</p>

        <h2>
          Selected <span>Projects.</span>
        </h2>
      </div>

      <div className="projects-showcase">
        {/* LEFT — PROJECT NAMES */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <button
              key={project.number}
              type="button"
              ref={(element) => {
                projectRows.current[index] = element;
              }}
              data-index={index}
              className={`project-selector ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => selectProject(index)}
              onFocus={() => selectProject(index)}
              onClick={() => selectProject(index)}
            >
              <span className="project-selector-number">{project.number}</span>

              <span className="project-selector-title">{project.title}</span>

              <span className="project-selector-arrow">↗</span>
            </button>
          ))}
        </div>

        {/* RIGHT — ACTIVE PROJECT CARD */}
        <div className="projects-active-card">
          <ProjectCard
            key={activeProject.number}
            project={activeProject}
            isRevealed={isRevealed}
          />
        </div>
      </div>
    </section>
  );
}
