import React, { useState } from "react";
import Preloader from "./components/Preloader.jsx";
import Mainpage from "./components/Mainpage.jsx";
import DotGridBackground from "./components/DotGridBackground.jsx";

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

  const handleNavigation = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

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
          {/* Desktop side navigation */}
          <nav className="hidden lg:flex fixed left-5 xl:left-3  top-1/2 -translate-y-1/2 z-50 flex-col -gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="group flex items-center gap-1 text-left"
              >
                <span className="w-7 h-px bg-neutral-400 group-hover:w-11 group-hover:bg-black transition-all duration-300 " />

                <span className="text-[11px] tracking-wide text-neutral-500 group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile and tablet navigation */}
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
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs text-neutral-600 hover:text-black hover:bg-neutral-100 transition"
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
