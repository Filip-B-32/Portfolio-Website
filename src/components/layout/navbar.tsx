import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import resumePdf from "@/documents/CV-Bogdan-Filip.pdf";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  };

  const downloadCV = () => {
    // Preview in new tab
    window.open(resumePdf, "_blank");
    // Auto-download after opening
    const a = document.createElement("a");
    a.href = resumePdf;
    a.download = "CV-Bogdan-Filip.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold font-display cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
        >
          BOGDAN.DEV
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            onClick={downloadCV}
          >
            <Download className="mr-2 h-4 w-4" /> CV
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button
                className="w-full mt-4"
                variant="default"
                onClick={downloadCV}
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
