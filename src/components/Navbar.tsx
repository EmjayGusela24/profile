import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">&lt; DevPortfolio /&gt;</div>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume CV
        </a>
      </nav>
    </header>
  );
};
