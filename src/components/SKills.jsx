import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python", "FastAPI"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Qdrant"],
  },
  {
    category: "State Management",
    skills: ["Zustand"],
  },
  {
    category: "AI / Tools",
    skills: ["Gemini", "RAG", "Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="" key={index}>
              <h3 className="skill-category">{group.category}</h3>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
