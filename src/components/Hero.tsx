import React from "react";
import ReflectiveCard from "./ReflectiveCard";
import TextTouchGlow from "./TextTouchGlow";

export const Hero: React.FC = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-top">
          <h1 className="hero-heading">
            Hi, I'm <TextTouchGlow as="span" className="highlight">Emjay Gusela</TextTouchGlow>
          </h1>
          <div className="hero-reflective">
            <ReflectiveCard
              overlayColor="rgba(0, 0, 0, 0.2)"
              blurStrength={12}
              glassDistortion={30}
              metalness={1}
              roughness={0.75}
              displacementStrength={20}
              noiseScale={1}
              specularConstant={5}
              grayscale={0.15}
              color="#ffffff"
            />
          </div>
        </div>

        <h2>Full-Stack Web Developer</h2>
        <p className="bio">
          I am a passionate software engineer specializing in building robust,
          scalable web applications using React and TypeScript. With a
          background in UI/UX design and backend systems, I bridge the gap
          between clean code and exceptional user experiences. When I'm not
          coding, you can find me exploring open-source projects or fine-tuning
          my keyboard setup.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

