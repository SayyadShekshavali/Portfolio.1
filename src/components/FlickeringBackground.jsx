import { useEffect, useRef, useState } from "react";
import { FlickeringGrid } from "@/components/velora/flickering-grid.jsx";

export default function FlickeringTest() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-white pointer-events-none"
    >
      <div
        className="absolute inset-0 text-green-400"
        style={{
          maskImage: `
            radial-gradient(
              circle 150px at ${position.x}px ${position.y}px,
              black 0%,
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              circle 150px at ${position.x}px ${position.y}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      >
        <FlickeringGrid className="h-full w-full" squareSize={4} gap={6} />
      </div>
    </div>
  );
}
