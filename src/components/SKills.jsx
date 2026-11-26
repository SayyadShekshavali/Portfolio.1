import React from "react";
import { LineShadowText } from "./ui/line-shadow-text";

const skillGroups = [
  {
    category: "Languages",
    skills: "JavaScript, TypeScript, Python, Java, C",
  },
  {
    category: "Frontend",
    skills:
      "React.js, Next.js, AngularJS, HTML5, CSS3, Tailwind CSS, Redux, Zustand, TipTap, ProseMirror",
  },
  {
    category: "Backend & APIs",
    skills:
      "Node.js, Express.js, Django, REST APIs, GraphQL, JWT Authentication, Middleware",
  },
  {
    category: "Database",
    skills: "MongoDB, MySQL, SQL",
  },
  {
    category: "AI & GenAI",
    skills:
      "RAG, LLM APIs, Gemini, OpenAI, Claude, AI Agents, Agentic Workflows, Prompt Engineering, Tool Calling, n8n",
  },
  {
    category: "Real-Time",
    skills: "Socket.IO & WebSockets",
  },
  {
    category: "Cloud & DevOps",
    skills: "AWS, Docker, Kubernetes, Vercel, GitHub Actions, CI/CD",
  },
  {
    category: "Tools & Practices",
    skills:
      "Git, GitHub, Postman, Cursor, Claude Code, GitHub Copilot, Jira, Confluence, Agile/Scrum, Code Reviews",
  },
  {
    category: "Core CS",
    skills:
      "Data Structures & Algorithms, Object Oriented Programming, MVC, Database Management Systems, System Design",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-3 py-8  sm:px-5 sm:py-10 md:px-8 md:py-12 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-5 sm:mb-6 md:mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            My{" "}
            <span className="font-serif font-normal italic">
              <LineShadowText>Skills.</LineShadowText>
            </span>
          </h2>

          <p className="mt-1.5 max-w-xl text-[10px] leading-relaxed text-gray-500 sm:text-xs md:mt-2 md:text-sm">
            Technologies, tools and concepts I use to build modern web
            applications and AI-powered products.
          </p>
        </div>

        {/* Skills List */}
        <div className="border-t border-gray-300/70 text-left">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className="group grid grid-cols-[105px_minmax(0,1fr)] items-start gap-2 border-b border-gray-300/70 py-2 transition-all duration-300 hover:pl-1 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-3 sm:py-2.5 md:grid-cols-[175px_minmax(0,1fr)] md:gap-5 md:py-3"
              style={{
                animation: `skillReveal 0.5s ease-out ${index * 0.07}s both`,
              }}
            >
              {/* Category */}
              <h3 className="break-words text-left text-[10px] font-semibold leading-relaxed tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-gray-500 sm:text-xs md:pt-0.5 md:text-sm">
                {group.category}
              </h3>

              {/* Skills */}
              <p className="min-w-0 break-words text-left text-[10px] leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-800 sm:text-xs md:text-[13px]">
                {group.skills}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4">
          <p className="text-[8px] uppercase tracking-[0.12em] text-gray-400 sm:text-[9px] sm:tracking-[0.2em]">
            Always Learning · Always Building
          </p>

          <p className="shrink-0 text-[9px] text-gray-400 sm:text-[10px]">
            {skillGroups.length} Categories
          </p>
        </div>
      </div>

      {/* Entrance Animation */}
      <style>{`
        @keyframes skillReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
