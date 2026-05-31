import React from "react";
import { Link } from "react-router-dom";
import { ProjectsSection } from "../components/ProjectsSection";

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: "24px 0", textAlign: "center" }}>
        <Link to="/" className="btn btn-secondary">
          Return to Home
        </Link>
      </div>
      <ProjectsSection />
    </>
  );
};





