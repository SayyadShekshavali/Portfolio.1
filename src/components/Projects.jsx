import React from "react";

const projects = [
  {
    number: "01",
    title: "WaffleMania 🧇",
    description:
      "Wafflemania is a modern, fully responsive web application designed with a strong emphasis on visual polish and user experience. Built using clean, reusable components and fluid animations, the project bridges thoughtful micro-interactions with intuitive navigation to turn a sweet concept into a complete, production-ready website.",
    image: "/projects/project-1.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/SayyadShekshavali/Wafflemania",
    demo: "https://wafflemania.vercel.app/",
  },
  {
    number: "02",
    title: "TaskPilot",
    description:
      "TaskPilot is a real-time, AI-assisted task assignment and monitoring platform for software development teams. It allows team leads to assign technical coding or writing tasks to employees, watch their progress and cursor movements in real-time as they type, and provide employees with a real-time AI assistant that automatically reviews code and offers one-click corrections",

    image: "/projects/project-2.png",
    tech: ["React", "Node.js", "Express.js", "mongoDB", "zustand"],
    github: "https://github.com/SayyadShekshavali/TaskPilot",
    demo: "https://task-pilot-three-roan.vercel.app/",
  },
  {
    number: "03",
    title: "Insight RAG ",
    description:
      "Insight RAG is a multi-tenant AI-powered knowledge management platform that centralizes engineering information from GitHub, Jira, Google Drive, and documents.  It uses Hybrid RAG (Vector Search + BM25) to retrieve relevant organizational knowledge and generate context-aware answers using Google Gemini.",
    image: "/projects/project-3.png",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "Qdrant",
      "Google Gemini",
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
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/project-four",
    demo: "https://your-project-four.vercel.app",
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card group flex flex-col"
      style={{ "--delay": `${index * 140}ms` }}
    >
      {/* Image on top */}
      <div className="project-image-wrap w-full">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-image w-full"
          loading="lazy"
        />
        <span className="project-number">{project.number}</span>
      </div>

      {/* Content below image */}
      <div className="project-content w-full flex flex-col">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-description text-left">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item) => (
            <span key={item} className="project-tech-item">
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            GitHub ↗
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading flex ">
        <span className="projects-eyebrow">A FEW THINGS I'VE BUILT</span>
        <h2>
          Selected <span>Projects.</span>
        </h2>
        <p>Some ideas, experiments and solutions brought to life.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
