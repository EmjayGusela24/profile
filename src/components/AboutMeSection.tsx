import React from "react";
import TextTouchGlow from "./TextTouchGlow";


const AboutMeSection: React.FC = () => {
  return (
<section id="about-me" className="about-me-section" data-animate="enter">
      <h2 className="section-title">
        <TextTouchGlow as="span" className="about-me-touch-title">
          About Me
        </TextTouchGlow>
      </h2>

      <div className="about-me-grid">
        <div className="about-me-card">
          <h3 className="about-me-heading">Hobbies</h3>

          <ul className="about-me-list">
            <li>
              <TextTouchGlow as="span" className="about-me-touch-text">
                Keyboard tuning & mechanical keyboards
              </TextTouchGlow>
            </li>
            <li>
              <TextTouchGlow as="span" className="about-me-touch-text">
                Exploring open-source projects
              </TextTouchGlow>
            </li>
            <li>
              <TextTouchGlow as="span" className="about-me-touch-text">
                Building small UI experiments
              </TextTouchGlow>
            </li>
            <li>
              <TextTouchGlow as="span" className="about-me-touch-text">
                Watching tech talks & learning
              </TextTouchGlow>
            </li>
            <li>
              <TextTouchGlow as="span" className="about-me-touch-text">
                Pishing
              </TextTouchGlow>
            </li>
          </ul>
        </div>

        <div className="about-me-photos" aria-label="Hobby photos collage">


          <div className="about-me-photo-touch" data-touch-glow-target="true">
            <img
              src="https://img.magnific.com/free-photo/tropical-island-turquoise-ocean-with-dramatic-cloudy-sky_84443-86108.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Hobby photo 1"
            />
            <span className="about-me-photo-glow" aria-hidden="true" />
          </div>

          <div className="about-me-photo-touch" data-touch-glow-target="true">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5hTvZ0cUosCWpao-Gsy8Dl7tRIt0-0dwCw&s"
              alt="Hobby photo 2"
            />
            <span className="about-me-photo-glow" aria-hidden="true" />
          </div>

          <div className="about-me-photo-touch" data-touch-glow-target="true">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVO3DQsBH735vVal9iUFJFTozvwrv4VkNVw&s"
              alt="Hobby photo 3"
            />
            <span className="about-me-photo-glow" aria-hidden="true" />
          </div>

          <div className="about-me-photo-touch" data-touch-glow-target="true">
            <img
              src="https://img.magnific.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Hobby photo 4"
            />
            <span className="about-me-photo-glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

