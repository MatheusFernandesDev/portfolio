"use client";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import AvatarPerfil from "./avatar";
import MenurBar from "./menu-mobile";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "experience", label: "Carreira" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 flex items-center justify-between p-2 md:p-4 bg-background/80 backdrop-blur-md shadow-md border-b border-border">
      <div className="flex items-center gap-3">
        <AvatarPerfil />
        <div className="flex flex-col text-left">
          <p className="font-semibold">Matheus Fernandes</p>
          <p className="text-sm text-muted-foreground">Desenvolvedor Fullstack</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-1 rounded-md border border-border bg-card/50">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`rounded-none hover:bg-primary/10 hover:text-primary transition-all ${
              activeSection === item.id
                ? "bg-primary/10 text-primary border-b-2 border-primary"
                : ""
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
      </div>
      <div className="block md:hidden">
        <MenurBar isOpen={isOpen} onToggle={handleToggle} onNavigate={scrollToSection} />
      </div>
    </header>
  );
};

export default Header;
