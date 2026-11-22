import React, { useState } from "react";
import Preloader from "./components/Preloader.jsx";
import Mainpage from "./components/Mainpage.jsx";
import DotGridBackground from "./components/DotGridBackground.jsx";
import About from "./components/About.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-white">
      {!isLoading && (
        <DotGridBackground
          dotColor="#000000"
          dotSize={1}
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
        <main className="relative z-20 w-full">
          <Mainpage />
        </main>
      )}
    </div>
  );
};

export default App;
