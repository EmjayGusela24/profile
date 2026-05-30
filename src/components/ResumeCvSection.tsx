import React from "react";

const ResumeCvSection: React.FC = () => {
  return (
<section id="resume" className="resume-section" data-animate="enter">
      <h2 className="section-title">Resume / CV</h2>

      <div style={{ textAlign: "center", marginBottom: 24, color: "var(--text-muted)" }}>
        Tip: you can print this web resume to PDF.
      </div>


      <div className="resume-card" role="region" aria-label="Resume download">
        <p className="resume-subtitle">
          Download a web-style resume (HTML) or use the print-to-PDF option.
        </p>

        <div className="resume-actions">
          <a
            className="btn btn-primary"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Resume
          </a>

          <a className="btn btn-secondary" href="/resume.html" download>
            Download Resume (HTML)
          </a>
        </div>

        <div className="resume-preview">
          <iframe
            title="Resume preview"
            src="/resume.html"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeCvSection;

