import { PROJECTS_DATA } from "../data/portfolioData";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects & Case Studies</h2>
      <div className="projects-container">
        {PROJECTS_DATA.map((project, idx) => (
          <article key={idx} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-role">{project.role}</span>
            </div>

            <div className="tech-stack">
              {project.stack.map((tech, tIdx) => (
                <span key={tIdx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-body">
              <p>
                <strong>The Challenge:</strong> {project.problem}
              </p>
              <p>
                <strong>The Solution:</strong> {project.solution}
              </p>
            </div>

            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link live"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link repo"
              >
                Source Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

