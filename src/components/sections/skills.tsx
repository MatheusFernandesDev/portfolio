"use client";

import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazonaws,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 90 },
        { name: "Nest.js", icon: SiNestjs, level: 80 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "REST APIs", icon: SiNodedotjs, level: 90 },
      ],
    },
    {
      category: "Banco de Dados",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
      ],
    },
    {
      category: "DevOps & Ferramentas",
      skills: [
        { name: "Git", icon: SiGit, level: 85 },
        { name: "Docker", icon: SiDocker, level: 70 },
        { name: "AWS", icon: SiAmazonaws, level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Minhas <span className="text-primary">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino e utilizo no dia a dia para criar
            soluções incríveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-primary" />
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

