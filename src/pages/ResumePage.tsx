import React from "react";
import { Link } from "react-router-dom";
import { default as ResumeCvSection } from "../components/ResumeCvSection";

export const ResumePage: React.FC = () => {
  return (
    <>
      <div style={{ padding: "24px 0", textAlign: "center" }}>
        <Link to="/" className="btn btn-secondary">
          Return to Home
        </Link>
      </div>
      <ResumeCvSection />
    </>
  );
};





