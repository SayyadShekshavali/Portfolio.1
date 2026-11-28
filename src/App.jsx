import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader.jsx";
import Mainpage from "./components/Mainpage.jsx";
import DotGridBackground from "./components/DotGridBackground.jsx";

import BranchedMenu from "./components/BranchedMenu.jsx";

const navigationItems = [
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Proof of Work", id: "proof-of-work" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("experience");

  // Navigate to selected section
  const handleNavigation = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  // Detect currently visible section
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
      },
    );

    navigationItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="relative min-h-screen w-full bg-white">
      {!isLoading && (
        <DotGridBackground
          dotColor="#000000"
          dotSize={2}
          dotSpacing={20}
          orbitSpeed={1.5}
          impactRadius={120}
          scaleOnHover={1.8}
          enableRevolve={true}
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "85vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 100% at center, black 65%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 75% 100% at center, black 65%, transparent 100%)",
          }}
          className="dot-grid"
        />
      )}

      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Desktop Branched Navigation */}
          <div className="hidden lg:block fixed left-5 xl:left-3 bottom-0 -translate-y-1/2 z-50">
            <BranchedMenu
              items={[
                {
                  label: "Navigate",
                  children: navigationItems.map((item) => ({
                    value: item.id,
                    label: item.label,
                  })),
                },
              ]}
              defaultOpen={[0]}
              defaultActive={activeSection}
              onSelect={(value) => handleNavigation(value)}
              color="black"
              accentColor="#171717"
              lineColor="#a3a3a3"
              width={240}
              rowHeight={36}
              indent={40}
              trunk={14}
              radius={10}
              lineWidth={1.5}
              fontSize={13}
              drawDuration={400}
              foldDuration={300}
            />
          </div>

          {/* Mobile and Tablet Navigation */}
          <div className="lg:hidden fixed top-4 right-4 z-50">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="w-3 h-3 rounded-full bg-transparent border border-transparent flex items-center justify-center text-neutral-800 hover:bg-neutral-100/50 transition"
            >
              <span className="flex flex-col gap-[3px]">
                <span className="w-5 h-[2px] bg-neutral-800 rounded-full" />
                <span className="w-5 h-[2px] bg-neutral-800 rounded-full" />
                <span className="w-5 h-[2px] bg-neutral-800 rounded-full" />
              </span>
            </button>

            {menuOpen && (
              <div className="absolute top-12 right-0 w-44 rounded-xl border border-neutral-200 bg-white/95 backdrop-blur-md shadow-lg p-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition ${
                      activeSection === item.id
                        ? "text-black font-semibold bg-neutral-100"
                        : "text-neutral-600 hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <main className="relative z-20 w-full">
            <Mainpage />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
