"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Matheus Fernandes. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/matheus-fernandes--devfull/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://github.com/MatheusFernandesDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <HiMail size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-muted-foreground">
          <p>Desenvolvido com 💜 usando Next.js, TypeScript e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

