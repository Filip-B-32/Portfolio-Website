import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <span className="experience-title">Work experience and education</span>
      <span className="experience-description">
        Explore this section to witness how I've cultivated my skills as a
        software developer, enabling me to consistently deliver exceptional
        products of the highest quality.
      </span>
      <div class="container">
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Full-Stack Developer</h3>
            <span>CodexWorks Technologies, Cluj-Napoca</span>
            <br></br>
            <div className="timeline-date">Feb 2025 - Present</div>
            <p>
              As a full-stack developer, I gained valuable experience in
              teamwork, cooperation, and effective time management to
              consistently deliver projects on schedule. I learned what it truly
              means to work in production environments, including how to deploy
              applications to production servers and configure websites on IIS.
              My work involved React.js, Docker, and .NET Core, where I
              contributed to building and maintaining scalable applications. I
              also explored testing practices by running Cypress automated
              tests, documented technical processes, and created prototypes
              through research and experimentation—many of which later evolved
              into key features in the application.
            </p>
          </div>
        </div>
        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Full-Stack Developer Intern</h3>
            <span>CodexWorks Technologies, Cluj-Napoca</span>
            <br></br>
            <div className="timeline-date">Aug 2024 - Nov 2024</div>
            <p>
              Conducted code reviews to ensure high-quality standards across the
              team. Collaborated on developing a Warehouse Management System
              using Django Rest Framework, React.js (with MobX), PostgreSQL, and
              Docker. Debugged complex issues, enhanced system stability, and
              implemented responsive designs for seamless cross-device
              compatibility. Proactively explored emerging technologies to
              provide creative solutions and technical direction.
            </p>
          </div>
        </div>
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Full-Stack Developer Intern</h3>
            <span>Tecknoworks, Cluj-Napoca</span>
            <br></br>
            <div className="timeline-date">Oct 2023 - Nov 2023</div>
            <p>
              As a full stack developer intern, I enhanced my expertise in Git,
              ASP.NET, Webpack, EF Core, SQL Server, Redux, TypeScript, and
              React.js. Strengthening my existing knowledge, I ensured a robust
              grasp of these technologies, contributing to dynamic projects and
              fostering efficient teamwork. My internship solidified my skills,
              empowering me to deliver high‑quality, user‑centric web
              applications.
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Frontend Developer</h3>
            <span>Synergo Applications SRL, Cluj-Napoca</span>
            <br></br>
            <div className="timeline-date">Apr 2022 - Jul 2023</div>
            <p>
              During my tenure as a frontend developer, I mastered React.js,
              React Ionic, JavaScript, and TypeScript. I streamlined processes
              by building reusable code, collaborated effectively with the team
              to translate requirements into technical solutions, and maintained
              code quality to adhere to best practices.
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Software Developer Intern</h3>
            <span>Synergo Applications SRL, Cluj-Napoca</span>
            <br></br>
            <div className="timeline-date">Oct 2021 - Feb 2022</div>
            <p>
              During my software engineer internship, I trained in software
              development theory and techniques, creating UI elements. I learned
              Agile methodologies, React.js for UI development, HTTP protocol,
              and Git for version control.
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Bachelor's degree in Informatics, Applied Informatics</h3>
            <span>West University of Timișoara, Timișoara</span>
            <br></br>
            <div className="timeline-date">Oct 2020 - Jul 2023</div>
            <p>
              During college, I immersed myself in the intricacies of
              programming, crafting captivating projects while honing my
              enthusiasm for web development, particularly in the realm of
              full-stack development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
