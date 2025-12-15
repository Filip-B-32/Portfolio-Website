import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  ArrowRight,
  Star,
  GitFork,
  Heart,
  Coffee,
  Smartphone,
  Camera,
  Music,
  Book,
  Download,
  Instagram,
  Languages,
  Dumbbell,
  PlaneTakeoff,
  CodeXml,
  Mountain
} from "lucide-react";
import heroBg from "@/assets/abstract_dark_purple_digital_geometric_background.png";
import profilePhoto from "@/assets/profile_photo/profile_photo.jpg";
import statusCurrentImg from "@/assets/projects_images/status_current.png";
import vibeZoneImg from "@/assets/projects_images/vibe_zone.png";
import portfolioSiteImg from "@assets/projects_images/portfolio_site.png";
import routierImg from "@assets/projects_images/routier.png";
import scicanImg from "@assets/projects_images/scican.png";
import stareAppImg from "@assets/projects_images/stare_app.png";
import resumePdf from "@/documents/CV-Bogdan-Filip.pdf";
import { useState } from "react";

// Schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fadeInUp = {
  visible: { opacity: 1, y: 0 },
};

// Featured projects data
const projects = [
  {
    title: "StatusCurrent - Blog Application",
    description:
      "A modern and easy-to-use blog application for creating, updating, browsing, and managing blog posts with a clean design and smooth functionality.",
    image: statusCurrentImg,
    tech: ["React", "Python", "Django Rest Framework", "Docker"],
    github:
      "https://github.com/Filip-B-32/StatusCurrent---Simple-Blog-Application",
    demo: "#",
  },
  {
    title: "ReactViewset - React.js Package (On Hold)",
    description:
      "A reusable React.js package built to accelerate development with pre-built components, layouts, and pages. Although on hold, it demonstrates my initiative to create developer tools that improve efficiency.",
    image: "#",
    tech: ["React"],
    github: "#",
    demo: "#",
  },
  {
    title: "VibeZone - Digital Music Library",
    description:
      "An interactive music library that allows users to explore artists, albums, and songs with smooth navigation and an engaging interface.",
    image: vibeZoneImg,
    tech: ["React", ".Net Core / EF Core", "SQL Server"],
    github: "https://github.com/Filip-B-32/VibeZone---Digital-music-library",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website, designed to highlight my skills, projects, and experience. It is responsive, optimized, and built with clean code to provide a professional online presence.",
    image: portfolioSiteImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sport Event Manager",
    description:
      "A sports event management platform that supports event creation, participant chat, and AI-assisted queries, offering a modern and engaging way to manage sports events.",
    image: "#",
    tech: [
      "React",
      "Typescript",
      ".Net Core / EF Core",
      "SQL Server",
      "Chakra UI",
      "OpenAI",
    ],
    github: "https://github.com/tecknoworks/SportEventManager",
    demo: "#",
  },
  {
    title: "Ocean Lair - Real-Time Communication App",
    description:
      "A MERN-stack based platform for real-time messaging, friend management, and audio/video calls, powered by WebRTC and Socket.IO.",
    image: "#",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "SQL Server",
      "Socket.IO",
      "Simple-peer (WebRTC)",
      "MongoDB",
    ],
    github: "https://github.com/Filip-B-32/OceanLair",
    demo: "#",
  },
  {
    title: "Routier - Enterprise Resource Planning",
    description:
      "Contributed to an ERP system for a major logistics and transport company. Delivered production-ready code, built a notification system with gRPC and Redis, and worked with complex multi-VM deployments while enhancing .NET Core and React expertise.",
    image: routierImg,
    tech: [
      "React",
      "React Redux",
      ".NET Core",
      "PostgreSQL",
      "Docker",
      "Redis",
      "IIS",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Elpis - Warehouse Management System",
    description:
      "Developed and implemented key features to optimize operations and efficiency in a Warehouse Management System. Worked on both frontend and backend, delivering a user-friendly interface and scalable functionality.",
    image: "#",
    tech: ["React", "MobX", "Django Rest Framework", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "SciCan Project",
    description:
      "Frontend developer for a global infection control solutions provider. Built features in React.js, collaborated with backend developers, and transformed designs into interactive, user-friendly interfaces.",
    image: scicanImg,
    tech: ["React", "React Redux"],
    github: "#",
    demo: "#",
  },
  {
    title: "Stare App",
    description:
      "Internship as a frontend developer, contributing to a React and Ionic-based platform. Integrated backend APIs and transformed design concepts into functional, user-focused features.",
    image: stareAppImg,
    tech: ["React", "Ionic"],
    github: "#",
    demo: "#",
  },
  // You can add more projects here
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: any) {
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          user_name: data.name,
          user_email: data.email,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
          form.reset(); // form is available here
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast({
            title: "Message Failed",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
          setLoading(false);
        }
      );
  }

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function downloadResume() {
    // preview first
    window.open(resumePdf, "_blank");
    const a = document.createElement("a");
    a.href = resumePdf;
    a.download = "CV-Bogdan-Filip.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
          <img
            src={heroBg}
            alt="Digital Abstract Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-20 px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm backdrop-blur-md"
              >
                Full-Stack Developer | AI Enthusiast
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400 text-glow">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              I build modern and scalable web applications with a focus on clean
              implementation, great user experience, and a growing interest in
              AI-powered technologies.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full h-12 text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                onClick={() => scrollToSection("experience")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 rounded-full h-12 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative">
        <div className="container px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-white/10 shadow-2xl flex items-center justify-center">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a web developer focused on building modern, responsive, and
                scalable applications, with a strong passion for AI-driven
                solutions and seamless user experiences. I enjoy transforming
                complex requirements into clean, efficient, and maintainable
                code while continuously exploring new technologies to deliver
                high-quality digital products.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My philosophy is simple: write clean code, design with the user
                in mind, and never stop learning. Outside of coding, I
                continuously explore new technologies.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold text-xl mb-1">3+</h4>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">10+</h4>
                  <p className="text-sm text-muted-foreground">
                    Projects Worked On
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">100%</h4>
                  <p className="text-sm text-muted-foreground">Commitment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-black/20">
        <div className="container px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-16 text-center"
          >
            Work Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -ml-px hidden md:block" />

            {[
              {
                role: "Full-Stack Developer",
                company: "CodexWorks Technologies",
                period: "Feb 2025 - Present",
                description:
                  "As a full-stack developer, I gained experience delivering projects on time and collaborating in production environments. One of my achievements was implementing a real-time notification system with Redis and gRPC, improving delivery speed by around 75%.",
              },
              {
                role: "Full-Stack Developer Intern",
                company: "CodexWorks Technologies",
                period: "Aug 2024 - Nov 2024",
                description:
                  "Conducted code reviews and contributed to a Warehouse Management System using Django Rest Framework, React.js (MobX), PostgreSQL, and Docker, improving stability, responsiveness, and exploring innovative solutions.",
              },
              {
                role: "Full-Stack Developer Intern",
                company: "Tecknoworks",
                period: "Oct 2023 - Nov 2023",
                description:
                  "As a full-stack developer intern, I strengthened my skills in Git, ASP.NET, Webpack, EF Core, SQL Server, Redux, TypeScript, and React.js, contributing to dynamic projects and delivering high-quality, user-focused web applications.",
              },
              {
                role: "Frontend Developer",
                company: "Synergo Applications SRL",
                period: "Apr 2022 - Jul 2023",
                description:
                  "As a frontend developer, I mastered React.js, React Ionic, JavaScript, and TypeScript, built reusable code, collaborated on translating requirements into solutions, and maintained high code quality.",
              },
              {
                role: "Software Developer Intern",
                company: "Synergo Applications SRL",
                period: "Oct 2021 - Feb 2022",
                description:
                  "During my software engineer internship, I trained in software development, creating UI elements and learning Agile, React.js, HTTP, and Git.",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:gap-0",
                  index % 2 === 0
                    ? "md:text-right"
                    : "md:flex-row-reverse md:text-left"
                )}
              >
                <div className="md:w-1/2 md:px-12">
                  <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                  <p className="text-lg font-medium mb-2">{job.company}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-muted-foreground mb-4 border border-white/5">
                    {job.period}
                  </span>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24">
        <div className="container px-6 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-16 text-center"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Frontend",
                icon: <Globe className="w-8 h-8 text-cyan-400" />,
                skills: [
                  "JavaScript / TypeScript",
                  "HTML",
                  "CSS / SASS / SCSS / LESS",
                  "Bootstrap",
                  "React",
                  "React Redux / Toolkit / MobX",
                  "React Testing / Vitest / Jest",
                  "End-to-End Testing (E2E)",
                ],
              },
              {
                category: "Backend",
                icon: <Terminal className="w-8 h-8 text-purple-400" />,
                skills: [
                  "Node.js",
                  "Express.js",
                  "C#",
                  ".NET Core / Entity Framework (EF)",
                  "Python",
                  "Django Rest Framework",
                  "Redis",
                  "Moq",
                  "xUnit",
                  "PostgreSQL",
                  "SQL",
                  "Microsoft SQL Server / SSMS",
                  "MongoDB",
                ],
              },
              {
                category: "Tools",
                icon: <Code2 className="w-8 h-8 text-pink-400" />,
                skills: [
                  "Git",
                  "GitHub",
                  "Bitbucket",
                  "Sourcetree",
                  "Git Tortoise",
                  "Docker",
                  "Figma",
                  "VS Code",
                  "Visual Studio",
                  "PyCharm",
                  "Windsurf",
                  "Jira",
                  "Confluence",
                  "Swagger",
                  "Toggle",
                ],
              },
              {
                category: "Soft Skills",
                icon: <Heart className="w-8 h-8 text-red-400" />,
                skills: [
                  "Problem-Solving",
                  "Communication",
                  "Teamwork",
                  "Adaptability",
                  "Attention to Detail",
                  "Creativity",
                  "Empathy",
                  "Continuous Learning",
                ],
              },
            ].map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="glass-card h-full border-white/5 bg-white/5">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                      {group.icon}
                    </div>
                    <CardTitle>{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/5 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-black/20">
        <div className="container px-6 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-16 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                <Card className="relative h-full bg-card border-white/10 overflow-hidden">
                  <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    {project.image === "#" ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="text-muted-foreground/20 w-24 h-24" />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    {(project.github !== "#" || project.demo !== "#") && (
                      <div className="flex gap-4">
                        {project.demo !== "#" && (
                          <Button
                            size="sm"
                            className="w-full"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Button>
                        )}
                        {project.github !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="mr-2 h-4 w-4" /> Code
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES & HOBBIES GRID */}
      <section className="py-24">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                <Languages className="text-primary" /> Languages
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Romanian", level: "Native", percent: 100 },
                  { name: "English", level: "Professional", percent: 85 },
                  { name: "German", level: "Intermediate", percent: 60 },
                  { name: "Italian", level: "Basic", percent: 30 },
                ].map((lang, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-lg">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                <Coffee className="text-primary" /> Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Mountain className="w-6 h-6" />,
                    name: "Hiking",
                    desc: "Exploring trails and embracing nature",
                  },
                  {
                    icon: <Music className="w-6 h-6" />,
                    name: "Music Production",
                    desc: "Making beats",
                  },
                  {
                    icon: <PlaneTakeoff className="w-6 h-6" />,
                    name: "Traveling",
                    desc: "Travel, culture, adventure, exploration",
                  },
                  {
                    icon: <Dumbbell className="w-6 h-6" />,
                    name: "Gym and Sports",
                    desc: "Fitness, discipline, health, balance",
                  },
                ].map((hobby, i) => (
                  <Card
                    key={i}
                    className="bg-white/5 border-white/5 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                      <div className="p-3 bg-background rounded-full text-primary">
                        {hobby.icon}
                      </div>
                      <div>
                        <div className="font-bold">{hobby.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {hobby.desc}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-black/20 to-background relative overflow-hidden"
      >
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg">
                Have a project in mind or just want to say hi? I'd love to hear
                from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="glass-card border-white/10 p-2">
                <CardContent className="p-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="bg-background/50 border-white/10"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                className="bg-background/50 border-white/10"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project..."
                                className="bg-background/50 border-white/10 min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@alex.dev"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-2 bg-white/5 rounded-lg">
                        <Mail className="w-5 h-5" />
                      </div>
                      bfilip32@yahoo.com
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 bg-white/5 rounded-lg">
                        <Globe className="w-5 h-5" />
                      </div>
                      Cluj-Napoca, CJ
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/Filip-B-32" },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/bogdan-filip-21b709220/",
                      },
                      {
                        icon: Instagram,
                        href: "https://www.instagram.com/filip._.bogdan/",
                      },
                      { icon: Twitter, href: "https://x.com/b_filip32" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-xl hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-900/20 border border-primary/20">
                  <h4 className="font-bold mb-2">Open for opportunities</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I am currently available for freelance projects and
                    full-time roles.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={downloadResume}
                  >
                    Download Resume <Download className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 bg-black/40 text-center">
        <div className="container px-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bogdan.Dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
