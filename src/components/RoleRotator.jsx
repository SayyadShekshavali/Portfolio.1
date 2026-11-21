import React, { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI-Engineer",
  "Problem Solver",
];

const RoleRotator = () => {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2 text-left lg:-mt-0">
      <span className="text-sm sm:text-base text-neutral-500">I'm a</span>
      <span
        key={activeRole}
        className="role-enter !text-base sm:text-xl font-semibold text-gray-700"
      >
        {roles[activeRole]}
      </span>
    </div>
  );
};

export default RoleRotator;
