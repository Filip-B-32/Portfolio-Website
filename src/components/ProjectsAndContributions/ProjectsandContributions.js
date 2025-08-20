import React from "react";
import "./projects-and-contributions.css";

const projects = [
  {
    title: "StatusCurrent - Blog Application",
    description:
      "A modern and easy-to-use blog application for creating, updating, browsing, and managing blog posts with a clean design and smooth functionality.",
    technologies: ["React.js", "Django Rest Framework", "PostgreSQL", "Docker"],
    link: "https://github.com/Filip-B-32/StatusCurrent-Simple-Blog-Application",
  },
  {
    title: "Willow - Language Learning Application (On Hold)",
    description:
      "A subscription-based language learning app designed with two friends to make mastering new languages engaging and accessible. Currently on hold, but showcases my role as frontend lead, focusing on scalable architecture and user-friendly design.",
    technologies: ["React.js", "Docker"],
    link: "",
  },
  {
    title: "ReactViewset - React.js Package (On Hold)",
    description:
      "A reusable React.js package built to accelerate development with pre-built components, layouts, and pages. Although on hold, it demonstrates my initiative to create developer tools that improve efficiency.",
    technologies: ["React.js"],
    link: "https://github.com/Filip-B-32/ReactViewset",
  },
  {
    title: "VibeZone - Digital Music Library",
    description:
      "An interactive music library that allows users to explore artists, albums, and songs with smooth navigation and an engaging interface.",
    technologies: ["React.js", "ASP.Net", "EF Core", "SQL Server"],
    link: "https://github.com/Filip-B-32/VibeZone---Digital-music-library",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website, designed to highlight my skills, projects, and experience. It is responsive, optimized, and built with clean code to provide a professional online presence.",
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Django Rest Framework",
      "Docker",
    ],
    link: "https://github.com/Filip-B-32/Portfolio-Website",
  },
  {
    title: "Sport Event Manager",
    description:
      "A sports event management platform that supports event creation, participant chat, and AI-assisted queries, offering a modern and engaging way to manage sports events.",
    technologies: ["React.ts", "ASP.Net", "EF Core", "SQL Server", "Chakra UI"],
    link: "https://github.com/tecknoworks/SportEventManager",
  },
  {
    title: "Ocean Lair - Real-Time Communication App",
    description:
      "A MERN-stack based platform for real-time messaging, friend management, and audio/video calls, powered by WebRTC and Socket.IO.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "Simple-peer (WebRTC)",
    ],
    link: "https://github.com/Filip-B-32/OceanLair",
  },
];

const contributions = [
  {
    title: "Routier - Enterprise Resource Planning",
    description:
      "Contributed to an ERP system for a major logistics and transport company. Delivered production-ready code, built a notification system with gRPC and Redis, and worked with complex multi-VM deployments while enhancing .NET Core and React expertise.",
    technologies: [
      "React.js",
      "React Redux",
      ".NET Core",
      "PostgreSQL",
      "Docker",
      "Redis",
      "IIS",
    ],
  },
  {
    title: "Elpis - Warehouse Management System",
    description:
      "Developed and implemented key features to optimize operations and efficiency in a Warehouse Management System. Worked on both frontend and backend, delivering a user-friendly interface and scalable functionality.",
    technologies: [
      "React.js",
      "MobX",
      "Django Rest Framework",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "Sport Event Manager - Internship",
    description:
      "Developed during an internship at Tecknoworks in collaboration with two other teammates. Built a sports event management platform supporting event creation, participant chat, and AI-assisted queries, while ensuring modern design and functionality.",
    technologies: ["React.ts", "ASP.Net", "EF Core", "SQL Server", "Chakra UI"],
  },
  {
    title: "SciCan Project",
    description:
      "Frontend developer for a global infection control solutions provider. Built features in React.js, collaborated with backend developers, and transformed designs into interactive, user-friendly interfaces.",
    technologies: ["React.js", "React Redux"],
  },
  {
    title: "Stare App - Internship",
    description:
      "Internship as a frontend developer, contributing to a React and Ionic-based platform. Integrated backend APIs and transformed design concepts into functional, user-focused features.",
    technologies: ["React.js", "Ionic"],
  },
];

const ProjectsandContributions = () => {
  return (
    <section id="pandc" className="pandc">
      <span className="pandc-title">Projects and contributions</span>
      <span className="pandc-description">
        In this section, I showcase the projects I have developed and the
        contributions I brought to the teams and companies I worked with. From
        building applications to introducing innovative solutions, each project
        reflects my ability to solve problems, deliver value, and create real
        impact through technology.
      </span>
      <br />
      <div className="pandc-content-wrapper">
        <div className="projects-wrapper">
          <span className="projects-title">Projects</span>
          {projects.map((project, index) => (
            <div className="pandc-content-item" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <br />
              <ul>
                <li>Technologies: {project.technologies.join(", ")}</li>
                {project.link && (
                  <li>
                    Code:{" "}
                    <a
                      className="github-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <br />
        <div className="contributions-wrapper">
          <span className="contributions-title">Contributions</span>
          {contributions.map((contribution, index) => (
            <div className="pandc-content-item" key={index}>
              <h2>{contribution.title}</h2>
              <p>{contribution.description}</p>
              <br />
              <ul>
                <li>Technologies: {contribution.technologies.join(", ")}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsandContributions;
