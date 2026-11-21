import { useEffect, useRef } from "react";

function smoothstep(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

function resolveVar(raw, el) {
  const s = raw.trim();

  if (!s.startsWith("var(")) return s;

  const inner = s.slice(4, -1).trim();
  const commaIdx = inner.indexOf(",");
  const varName = (commaIdx !== -1 ? inner.slice(0, commaIdx) : inner).trim();

  const fallback = commaIdx !== -1 ? inner.slice(commaIdx + 1).trim() : "";

  try {
    const resolved = getComputedStyle(el).getPropertyValue(varName).trim();

    if (resolved) return resolved;
  } catch (_) {}

  if (fallback) return resolveVar(fallback, el);

  return "#888888";
}

function parseColor(raw, el) {
  const color = resolveVar(raw, el);

  if (color.startsWith("rgb")) {
    const m = color.match(/[\d.]+/g) || [];

    return {
      r: Number(m[0]) || 0,
      g: Number(m[1]) || 0,
      b: Number(m[2]) || 0,
    };
  }

  let h = color.replace("#", "");

  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const n = parseInt(h.slice(0, 6), 16);

  if (isNaN(n)) {
    return { r: 136, g: 136, b: 136 };
  }

  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

export default function DotGridBackground({
  dotColor = "#000000",
  dotSize = 3,
  dotSpacing = 28,
  orbitSpeed = 1.5,
  impactRadius = 120,
  scaleOnHover = 1.8,
  enableRevolve = true,
  style,
  width = "100%",
  height = "100%",
}) {
  const canvasRef = useRef(null);

  const cfgRef = useRef({
    dotColor,
    dotSize,
    dotSpacing,
    orbitSpeed,
    impactRadius,
    scaleOnHover,
    enableRevolve,
  });

  cfgRef.current = {
    dotColor,
    dotSize,
    dotSpacing,
    orbitSpeed,
    impactRadius,
    scaleOnHover,
    enableRevolve,
  };

  const dotsRef = useRef([]);
  const spacingSnapRef = useRef(dotSpacing);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    let W = 0;
    let H = 0;

    let mouse = { x: -9999, y: -9999 };
    let hovering = false;
    let touching = false;
    let leaveTs = 0;
    let prevTs = 0;
    let raf = 0;
    let globalAngle = 0;

    function buildDots() {
      const screenWidth = window.innerWidth;

      const sp =
        screenWidth < 640
          ? 20
          : screenWidth < 1024
            ? 24
            : cfgRef.current.dotSpacing;

      spacingSnapRef.current = sp;
      dotsRef.current = [];

      const cols = Math.ceil(W / sp) + 2;
      const rows = Math.ceil(H / sp) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dotsRef.current.push({
            bx: c * sp,
            by: r * sp,
            inclination: Math.random() * Math.PI,
            ascension: Math.random() * Math.PI * 2,
            phase: Math.random() * Math.PI * 2,
            speedMult: 0.7 + Math.random() * 0.6,
          });
        }
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();

      W = rect.width;
      H = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildDots();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    function updatePointerPosition(e) {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      hovering = mouse.x >= 0 && mouse.x <= W && mouse.y >= 0 && mouse.y <= H;
    }

    function handlePointerMove(e) {
      if (e.pointerType === "touch" && !touching) return;

      updatePointerPosition(e);
    }

    function handlePointerDown(e) {
      if (e.pointerType === "touch") {
        touching = true;
      }

      updatePointerPosition(e);
    }

    function handlePointerUp() {
      touching = false;
      hovering = false;
      leaveTs = performance.now();
    }

    function handlePointerLeave(e) {
      if (e.pointerType === "mouse" || e.pointerType === "pen") {
        hovering = false;
        leaveTs = performance.now();
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);

    function loop(ts) {
      raf = requestAnimationFrame(loop);

      const dt = Math.min((ts - (prevTs || ts)) / 1000, 0.05);
      prevTs = ts;

      const cfg = cfgRef.current;

      if (spacingSnapRef.current !== cfg.dotSpacing) {
        buildDots();
      }

      globalAngle += cfg.orbitSpeed * dt;

      ctx.clearRect(0, 0, W, H);

      const rgb = parseColor(cfg.dotColor, canvas);

      const mx = mouse.x;
      const my = mouse.y;

      const timeSinceLeave = hovering ? 0 : Math.max(0, ts - leaveTs) / 1000;

      const decay = hovering
        ? 1
        : smoothstep(Math.max(0, 1 - timeSinceLeave * 1.5));

      for (const d of dotsRef.current) {
        const dx = d.bx - mx;
        const dy = d.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const inRange = hovering && dist < cfg.impactRadius && dist > 0;

        let x = d.bx;
        let y = d.by;
        let scale = 1;
        let alpha = 0.12;

        if (inRange) {
          const t = dist / cfg.impactRadius;
          const inf = smoothstep(1 - t) * decay;

          if (cfg.enableRevolve) {
            const orbitR = (1 - t) * cfg.dotSpacing * 0.7 * inf;

            const theta = globalAngle * d.speedMult + d.phase;

            const cosA = Math.cos(d.ascension);
            const sinA = Math.sin(d.ascension);
            const cosI = Math.cos(d.inclination);
            const sinI = Math.sin(d.inclination);

            const lx = Math.cos(theta);
            const ly = Math.sin(theta) * cosI;
            const lz = Math.sin(theta) * sinI;

            const ox = (lx * cosA - ly * sinA) * orbitR;
            const oy = (lx * sinA + ly * cosA) * orbitR;

            x = d.bx + ox;
            y = d.by + oy;

            const depthScale = 0.75 + 0.25 * ((lz + 1) * 0.5);

            scale = (1 + (cfg.scaleOnHover - 1) * inf) * depthScale;

            alpha = (0.12 + 0.88 * inf) * depthScale;
          } else {
            scale = 1 + (cfg.scaleOnHover - 1) * inf;
            alpha = 0.12 + 0.88 * inf;
          }
        }

        const screenWidth = window.innerWidth;

        const responsiveDotSize =
          screenWidth < 640 ? 2 : screenWidth < 1024 ? 2.5 : cfg.dotSize;

        const r = (responsiveDotSize / 2) * scale;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
        ctx.fill();
      }
    }

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width,
        height,
        touchAction: "pan-y",
        ...style,
      }}
    />
  );
}
