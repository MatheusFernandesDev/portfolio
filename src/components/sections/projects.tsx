"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SiNodedotjs, SiReact, SiNextdotjs, SiNestjs, SiTypescript } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "API de Taxas de Câmbio",
      description:
        "API completa para consulta e armazenamento de taxas de câmbio, desenvolvida com foco em performance, escalabilidade e boas práticas. Sistema robusto para gerenciamento de dados financeiros em tempo real.",
      technologies: [SiNestjs, SiNodedotjs, SiTypescript],
      tags: ["Node.js", "Nest.js", "TypeScript", "API", "Performance"],
      github: "https://github.com/MatheusFernandesDev",
      demo: "#",
      featured: true,
    },
    {
      title: "Sistema de Login e Autenticação",
      description:
        "Sistema completo de autenticação utilizando Java + Spring Boot, com implementação de segurança robusta, JWT tokens e gerenciamento de sessões.",
      technologies: [SiReact, SiNextdotjs, SiTypescript],
      tags: ["Java", "Spring Boot", "JWT", "Security"],
      github: "https://github.com/MatheusFernandesDev",
      demo: "#",
      featured: false,
    },
    {
      title: "Plataforma Full Stack Moderna",
      description:
        "Aplicação web completa desenvolvida com Next.js e Node.js, incluindo dashboard administrativo, autenticação e integração com APIs externas.",
      technologies: [SiNextdotjs, SiReact, SiNodedotjs],
      tags: ["Next.js", "React", "Node.js", "Full Stack"],
      github: "https://github.com/MatheusFernandesDev",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8 bg-background"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada profissional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-card rounded-lg border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3 items-center">
                    {project.technologies.map((TechIcon, techIndex) => (
                      <TechIcon
                        key={techIndex}
                        className="w-6 h-6 text-primary"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

