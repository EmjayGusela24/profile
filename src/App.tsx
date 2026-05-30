import React from "react";
import "./App.css";

import {

  Navbar,
  Hero,
  AboutMeSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
  ResumeCvSection,
} from "./components";

export const App: React.FC = () => {
  const portfolioRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = portfolioRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
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
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={portfolioRef} className="portfolio-container">
      <Navbar />
      <Hero />
      <AboutMeSection />
      <SkillsSection />

      <ProjectsSection />
      <ResumeCvSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

