"use client";

import { motion } from "framer-motion";
import { Code2, Users, Zap, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Foco em escrever código limpo, organizado e manutenível seguindo as melhores práticas.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Desenvolvimento de aplicações otimizadas e de alta performance.",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Experiência em colaboração e comunicação eficiente com times multidisciplinares.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Comprometido em entregar soluções que agreguem valor real ao negócio.",
    },
  ];

  return (
    <section
      id="about"
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
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou Desenvolvedor Full Stack com <strong className="text-foreground">6 anos de experiência</strong>,
              apaixonado por tecnologia e desenvolvimento de software. Minha jornada começou com uma
              curiosidade genuína sobre como as coisas funcionam, e desde então tenho me dedicado
              a aprender e evoluir constantemente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ao longo da minha carreira, trabalhei em diversos projetos desafiadores, sempre
              focando em criar soluções escaláveis e de alta qualidade. Tenho expertise em
              tecnologias modernas como <strong className="text-primary">Node.js</strong>,{" "}
              <strong className="text-primary">React.js</strong>,{" "}
              <strong className="text-primary">Nest.js</strong> e{" "}
              <strong className="text-primary">Next.js</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acredito que a evolução profissional não é apenas sobre aprender novas tecnologias,
              mas também sobre desenvolver empatia, trabalho em equipe e a capacidade de resolver
              problemas complexos de forma eficiente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all shadow-lg"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

