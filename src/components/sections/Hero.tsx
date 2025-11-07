import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

const roles = ["Full Stack Developer", "React Specialist", "Spring Boot Expert", "Problem Solver"];

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-bg.png)' }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Floating shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Darshan Chaudhari</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building scalable web applications with React, Spring Boot, and MySQL. 
              Passionate about creating efficient, user-focused solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button size="lg" className="gap-2" onClick={() => {
              const element = document.querySelector("#projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}>
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/Darshan_Chaudhari_Resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a
                href="https://github.com/darshanchaudharii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a
                href="https://www.linkedin.com/in/darshan-chaudhari-81600118b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a
                href="mailto:darshanchaudhari4998@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
