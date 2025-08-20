import React from "react";
import "./skills.css";
import Fullstack from "../../assets/fullstack.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import Learning from "../../assets/learning.png";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-description">
        Passionate and experienced in web application development, I specialize
        in creating dynamic, intuitive, and visually appealing applications. I
        excel at transforming complex client requirements into seamless user
        experiences, integrating established designs, and applying innovative
        solutions to enhance functionality and aesthetics. Committed to
        delivering high-quality projects, I continuously strive to exceed
        expectations through ongoing improvement and impactful results.
      </span>
      <br></br>
      <div className="technical-expertise">
        <h3>Technical Expertise</h3>
        <div className="technical-item">
          <span className="list-element-highlight">Languages & Markup:</span>{" "}
          JavaScript, TypeScript, Python, C#, C/C++ (familiar), HTML, CSS, SQL
        </div>
        <div className="technical-item">
          <span className="list-element-highlight">
            Frontend Frameworks & Libraries:
          </span>{" "}
          React, Redux Toolkit, MobX(familiar)
        </div>
        <div className="technical-item">
          <span className="list-element-highlight">Backend Frameworks:</span>{" "}
          ASP.NET Core, Django Rest Framework(familiar), Node.js (familiar)
        </div>
        <div className="technical-item">
          <span className="list-element-highlight">DevOps & Tools:</span>{" "}
          Docker, setting up sites on IIS + IIS express
        </div>
        <div className="technical-item">
          <span className="list-element-highlight">Databases:</span> PostgreSQL,
          SSMS (SQL Server Management Studio), Microsoft SQL Server, MongoDB
          (familiar)
        </div>
      </div>
      <div className="technical-expertise">
        <h3>Language Skills</h3>
        <div className="technical-item">
          <span className="list-element-highlight">Languages:</span> Romanian
          (native), English (fluent/professional), German (conversational),
          Italian (basic)
        </div>
      </div>
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
