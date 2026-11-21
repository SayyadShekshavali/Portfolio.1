import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FlickeringGrid({ squareSize = 4, gap = 6, className }) {
  const [dimensions, setDimensions] = useState({
    columns: 0,
    rows: 0,
  });

  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Reduce desktop grid density
      const responsiveGap = width >= 1024 ? 9 : gap;

      const columns = Math.ceil(width / (squareSize + responsiveGap));
      const rows = Math.ceil(height / (squareSize + responsiveGap));

      setDimensions({
        columns,
        rows,
        responsiveGap,
      });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, [squareSize, gap]);

  const cells = dimensions.columns * dimensions.rows;

  return (
    <div
      aria-hidden="true"
      data-slot="flickering-grid"
      style={{
        gridTemplateColumns: `repeat(${dimensions.columns}, ${squareSize}px)`,
        gridAutoRows: `${squareSize}px`,
        gap: `${dimensions.responsiveGap ?? gap}px`,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 grid content-start justify-center overflow-hidden",
        className,
      )}
    >
      {Array.from({ length: cells }).map((_, i) => (
        <span
          key={i}
          className="rounded-[1px] bg-current motion-safe:animate-flicker"
          style={{
            width: squareSize,
            height: squareSize,
            animationDelay: `${((i * 37) % 100) / 25}s`,
            animationDuration: `${2 + ((i * 13) % 5) * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
