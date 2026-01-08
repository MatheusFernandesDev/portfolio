"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Velotax",
      position: "Desenvolvedor Full Stack",
      location: "Rio de Janeiro, Brazil",
      period: "2024 - Presente",
      description: [
        "Desenvolvimento e manutenção de aplicações web escaláveis",
        "Implementação de APIs RESTful com alta performance",
        "Colaboração com equipes multidisciplinares em projetos desafiadores",
        "Foco em qualidade de código e boas práticas de desenvolvimento",
      ],
      technologies: ["Node.js", "React.js", "Nest.js", "Next.js", "TypeScript"],
    },
    {
      company: "Empresas Anteriores",
      position: "Desenvolvedor Full Stack",
      location: "Rio de Janeiro, Brazil",
      period: "2018 - 2024",
      description: [
        "Desenvolvimento de aplicações web completas do frontend ao backend",
        "Criação de APIs e integração com bancos de dados",
        "Participação em todo o ciclo de desenvolvimento de software",
        "Levantamento de requisitos e entrega de projetos",
      ],
      technologies: ["Node.js", "React.js", "JavaScript", "MongoDB", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-primary/5"
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
            Minha <span className="text-primary">Carreira</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            6 anos de experiência transformando ideias em soluções tecnológicas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex gap-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start pt-2">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-6 md:p-8 rounded-lg border border-border shadow-lg hover:border-primary transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-xl font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

