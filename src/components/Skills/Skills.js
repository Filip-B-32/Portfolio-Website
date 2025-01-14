import React from "react";
import "./skills.css";
import Fullstack from "../../assets/fullstack.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import Learning from "../../assets/learning.png";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <span className="skill-title">What i do</span>
      <span className="skill-description">
        With a solid background in web application development, I bring
        expertise in React, JavaScript, TypeScript, HTML, CSS, ASP.NET Core,
        Redux Toolkit, Python, Django Rest Framework, Docker, MobX, and
        PostgreSQL. My experience spans diverse projects where I've honed the
        ability to deliver exceptional user experiences by transforming client
        requirements into intuitive and visually appealing applications. I excel
        at seamlessly integrating established designs while applying creative
        solutions to enhance the final product's functionality and aesthetics.
        Committed to delivering high-quality projects and consistently exceeding
        expectations, I am eager to bring my skills, enthusiasm, and dedication
        to a dynamic and innovative team. With a commitment to quality and
        continuous improvement, I consistently deliver impactful results that
        exceed expectations.
      </span>
      <div className="skill-bars">
        <div className="skill-bar">
          <img src={Fullstack} alt="Fullstack" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Fullstack development</h2>
            <p>
              I seamlessly integrate frontend technologies with backend
              expertise for holistic project solutions in full-stack
              development.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={WebDesign} alt="WebDesign" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Website design</h2>
            <p>
              In website design, I use my eye for aesthetics and UX principles
              to create visually captivating, intuitive interfaces that enhance
              web application appeal and usability.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={AppDesign} alt="AppDesign" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Responsive design</h2>
            <p>
              I specialize in responsive design, ensuring seamless adaptation
              across devices for an optimal user experience on desktops,
              tablets, and mobiles.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={Learning} alt="Learning" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Exploring Boundaries, Embracing Growth</h2>
            <p>
              As a dynamic learner, I thrive on embracing new technologies and
              pushing boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
