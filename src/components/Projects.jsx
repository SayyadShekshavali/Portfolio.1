import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "WaffleMania 🧇",
    description:
      "Wafflemania is a modern, fully responsive web application designed with a strong emphasis on visual polish and user experience. Built using clean, reusable components and fluid animations, the project bridges thoughtful micro-interactions with intuitive navigation to turn a sweet concept into a complete, production-ready website.",
    image: "/projects/project-1.png",
    poster: "/projects/poster1.jpeg",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/SayyadShekshavali/Wafflemania",
    demo: "https://wafflemania.vercel.app/",
  },
  {
    number: "02",
    title: "TaskPilot",
    description:
      "TaskPilot is a real-time, AI-assisted task assignment and monitoring platform for software development teams. It allows team leads to assign technical coding or writing tasks to employees, watch their progress and cursor movements in real-time as they type, and provide employees with a real-time AI assistant that automatically reviews code and offers one-click corrections.",
    image: "/projects/project2.webp",
    poster: "/projects/poster2.jpeg",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Zustand"],
    github: "https://github.com/SayyadShekshavali/TaskPilot",
    demo: "https://task-pilot-three-roan.vercel.app/",
  },
  {
    number: "03",
    title: "Insight RAG",
    description:
      "Insight RAG is a multi-tenant AI-powered knowledge management platform that centralizes engineering information from GitHub, Jira, Google Drive, and documents. It uses Hybrid RAG (Vector Search + BM25) to retrieve relevant organizational knowledge and generate context-aware answers using Google Gemini.",
    image: "/projects/project-3.png",
    poster: "/projects/poster3.jpeg",
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
  {
    number: "04",
    title: "Project Four",
    description:
      "A creative digital experience focused on usability, performance and elegant visual design.",
    image: "/projects/project-4.png",
    poster: "/projects/poster4.jpeg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/project-four",
    demo: "https://your-project-four.vercel.app",
  },
];

function ProjectCard({ project, isRevealed }) {
  return (
    <Tilt
      className="project-flip-card"
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1200}
      scale={1.02}
      transitionSpeed={400}
      gyroscope={false}
      glareEnable={false}
      tiltReverse={true}
    >
      <div
        className={`project-flip-inner ${
          isRevealed ? "project-is-revealed" : ""
        }`}
      >
        {/* FRONT: POSTER */}
        <div className="project-card-face project-card-front">
          <img
            src={project.poster}
            alt={`${project.title} poster`}
            className="project-poster-image"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="project-poster-fallback">
            <span className="project-poster-number">
              SELECTED WORK / {project.number}
            </span>

            <h3>{project.title}</h3>

            <span className="project-poster-line" />

            <p>DESIGN · DEVELOPMENT · EXPERIENCE</p>
          </div>

          <span className="project-poster-index">{project.number}</span>
        </div>

        {/* BACK: PROJECT DETAILS */}
        <div className="project-card-face project-card-back">
          <div className="project-card-topline">
            <span>PROJECT / {project.number}</span>
          </div>

          <div className="project-card-image-wrap">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-card-image"
              loading="lazy"
            />
          </div>

          <h3 className="project-card-title">{project.title}</h3>

          <p className="project-card-description text-left">
            {project.description}
          </p>

          <div className="project-card-tech">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="project-card-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub <span>↗</span>
            </a>

            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function Projects() {
  const [hasRevealed, setHasRevealed] = useState(false);

  const revealProjects = () => {
    setHasRevealed(true);
  };

  return (
    <section
      id="projects"
      className="projects-section"
      onMouseEnter={revealProjects}
      onTouchStart={revealProjects}
    >
      <div className="projects-heading">
        <p className="projects-eyebrow">A FEW THINGS I'VE BUILT</p>

        <h2>
          Selected <span>Projects.</span>
        </h2>

        <p className="projects-subtitle">
          A collection of products, experiments, and ideas brought to life.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
            isRevealed={hasRevealed}
          />
        ))}
      </div>
    </section>
  );
}
