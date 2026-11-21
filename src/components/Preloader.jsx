import React, { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(
        100,
        Math.floor((elapsed / duration) * 100),
      );

      setProgress(nextProgress);
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      setTimeout(() => {
        onComplete?.();
      }, 150);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  const blocks = Math.round(progress / 10);

  return (
    <div className="avatar-container">
      <img
        src="/avatar-transparent.apng"
        alt="Developer typing on laptop"
        className="avatar"
      />

      <div className="portfolio-terminal">
        <div className="terminal-title">PORTFOLIO LOADING</div>
        <div className="terminal-command">~/portfolio $ initializing...</div>

        <div className="terminal-progress">
          Loading assets [{"█".repeat(blocks)}
          {"░".repeat(10 - blocks)}] {progress}%
        </div>

        <div className="terminal-status">
          {progress === 100 ? "System ready ✓" : "Initializing..."}
        </div>
      </div>
    </div>
  );
}
