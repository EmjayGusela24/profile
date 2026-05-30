import { SKILLS_DATA } from "../data/portfolioData";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section" data-animate="enter">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {SKILLS_DATA.map((cat, idx) => (
          <div key={idx} className="skill-card">
            <h3>{cat.category}</h3>
            <ul className="skill-list">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

