 import React from "react";
import { useLocation } from "react-router-dom";

type PageTransitionProps = {
  children: React.ReactNode;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mql =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
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

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const reducedMotion = usePrefersReducedMotion();
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (reducedMotion) {
      el.style.transform = "";
      return;
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop || 0;
        const scrollable = doc.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? scrollTop / scrollable : 0;

        // Subtle float: slightly up as you scroll down.
        const maxOffset = 10; // px
        const offset = -maxOffset * Math.min(1, Math.max(0, progress));

        el.style.transform = `translateY(${offset.toFixed(2)}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, location.pathname]);

  // Keyed by pathname so the wrapper remounts on each navigation.
  return (
    <div
      ref={wrapperRef}
      key={location.pathname}
      className={reducedMotion ? undefined : "page-touch-anim scroll-float"}
      aria-live="polite"
    >
      {children}
    </div>
  );
};


