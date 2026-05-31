import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Footer,
} from "./components";

import { HeroPage } from "./pages/HeroPage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { ContactPage } from "./pages/ContactPage";

export const App: React.FC = () => {
  const portfolioRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = portfolioRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

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
  }, []);

  return (
    <BrowserRouter>
      <div ref={portfolioRef} className="portfolio-container">
        <div className="neon-bg" aria-hidden="true" />
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


