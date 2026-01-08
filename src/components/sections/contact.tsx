"use client";

import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: HiMail,
      label: "Email",
      value: "matheus.fernandes@email.com",
      link: "mailto:matheus.fernandes@email.com",
      color: "text-red-500",
    },
    {
      icon: BsLinkedin,
      label: "LinkedIn",
      value: "matheus-fernandes--devfull",
      link: "https://www.linkedin.com/in/matheus-fernandes--devfull/",
      color: "text-blue-500",
    },
    {
      icon: BsGithub,
      label: "GitHub",
      value: "MatheusFernandesDev",
      link: "https://github.com/MatheusFernandesDev",
      color: "text-gray-400",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Rio de Janeiro, Brazil",
      link: "#",
      color: "text-green-500",
    },
  ];

  return (
    <section
      id="contact"
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
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e conversas interessantes.
            Vamos conectar?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.link.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-card p-6 rounded-lg border border-border hover:border-primary transition-all shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${method.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center p-8 bg-card rounded-lg border border-border shadow-lg"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Estou disponível para projetos freelance e oportunidades de trabalho.
            </p>
            <p className="text-muted-foreground">
              Vamos criar algo incrível juntos! 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

