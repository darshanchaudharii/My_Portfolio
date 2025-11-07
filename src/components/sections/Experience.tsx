import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "../ui/card";

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            My professional journey
          </p>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 shadow-elegant gradient-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-background rounded-lg p-3 shadow-sm">
                        <img
                          src="/images/tron-logo.png"
                          alt="TRON Softech"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">Full Stack Developer</h3>
                          <p className="text-lg text-primary font-semibold">TRON Softech</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">June 2025 - Present</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          Java
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          Spring Boot
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          React
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          MySQL
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          RESTful APIs
                        </span>
                      </div>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Engineered the XEEPL ERP project using Spring Boot, React, and MySQL, 
                            optimizing workflow automation and API integration. Boosted process 
                            efficiency by 35% and reduced manual errors by 50% through scalable 
                            RESTful service deployment and UI improvements.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Fostered cross-functional collaboration and agile teamwork by actively 
                            communicating project goals, organizing sprint reviews, and coordinating 
                            with designers, QA, and product managers.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Ensured on-time delivery and maintained 100% adherence to release 
                            deadlines through effective problem-solving and adaptability.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
