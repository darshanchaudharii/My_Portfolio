import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Star } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import projectsData from "../../data/projects.json";

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Some of the projects I've worked on
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className={`grid ${project.featured ? "md:grid-cols-2" : "grid-cols-1"} h-full`}>
                    <div className="relative overflow-hidden bg-secondary/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground gap-1">
                            <Star className="h-3 w-3 fill-current" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.highlights && (
                        <ul className="mb-4 space-y-1 text-sm">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex gap-3 mt-auto pt-4">
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        {project.live && (
                          <Button size="sm" className="gap-2" asChild>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
