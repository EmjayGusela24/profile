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

import { PageTransition } from "./components/PageTransition";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="portfolio-container">
        <div className="neon-bg" aria-hidden="true" />
        <Navbar />


        <Routes>
          <Route path="/" element={<PageTransition><HeroPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><SkillsPage /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><ResumePage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


