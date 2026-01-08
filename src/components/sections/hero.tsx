"use client";

import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              variants={itemVariants}
            >
              👋 Olá, bem-vindo ao meu portfólio!
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-primary">Matheus</span> Fernandes
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
              variants={itemVariants}
            >
              Desenvolvedor Full Stack
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Com <strong className="text-foreground">6 anos de experiência</strong> em
              desenvolvimento, especializado em criar soluções escaláveis e de alta
              qualidade utilizando <strong className="text-primary">Node.js</strong>,{" "}
              <strong className="text-primary">React.js</strong>,{" "}
              <strong className="text-primary">Nest.js</strong> e{" "}
              <strong className="text-primary">Next.js</strong>. Apaixonado por
              tecnologia e sempre em busca de aprendizado contínuo.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              variants={itemVariants}
            >
              <a
                href="https://www.linkedin.com/in/matheus-fernandes--devfull/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                <BsLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/MatheusFernandesDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                <BsGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                <HiMail size={20} />
                <span>Contato</span>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 pt-4 text-sm text-muted-foreground"
              variants={itemVariants}
            >
              <span>📍 Rio de Janeiro, Brazil</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <motion.img
                src="/perfil.png"
                alt="Matheus Fernandes"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-primary shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

