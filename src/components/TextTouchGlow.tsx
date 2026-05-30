import React, { useEffect, useRef, useState } from "react";

export type TextTouchGlowProps = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

const COLOR_PALETTE = ["#00F5FF", "#FF00FF", "#7CFF00", "#FFD400", "#8B5CFF"];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mql) return;

    const update = () => setReduced(!!mql.matches);
    update();

    // Safari fallback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyMql = mql as any;
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }

    if (typeof anyMql.addListener === "function") {
      anyMql.addListener(update);
      return () => anyMql.removeListener(update);
    }
  }, []);

  return reduced;
}

const TextTouchGlow: React.FC<TextTouchGlowProps> = ({
  children,
  as = "span",
  className = "",
}) => {
  const reducedMotion = usePrefersReducedMotion();
  const [isTouching, setIsTouching] = useState(false);
  const [color, setColor] = useState(COLOR_PALETTE[0]);
  const lastTouchAtRef = useRef<number>(0);

  const randomizeColor = () => {
    const idx = Math.floor(Math.random() * COLOR_PALETTE.length);
    setColor(COLOR_PALETTE[idx]);
  };

  return React.createElement(
    as,
    {
      className,
      style: { "--touch-glow-color": color } as React.CSSProperties,
      "data-touch-glow": true,
      "data-touch-glow-active": isTouching,
      onPointerDown: () => {
        if (reducedMotion) return;
        const now = Date.now();
        // prevent extremely fast re-randomization
        if (now - lastTouchAtRef.current > 80) {
          randomizeColor();
          lastTouchAtRef.current = now;
        }
        setIsTouching(true);
      },
      onPointerUp: () => setIsTouching(false),
      onPointerCancel: () => setIsTouching(false),
      onPointerLeave: () => setIsTouching(false),
    },
    children
  );
};

export default TextTouchGlow;

