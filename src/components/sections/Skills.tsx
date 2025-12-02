import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = {
  "Languages & Frameworks": [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "JWT",
  ],
  "Frontend Technologies": [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Angular",
  ],
  "Database & Tools": [
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Maven",
    "Postman",
  ],
  "Development": [
    "RESTful APIs",
    "Agile",
    "Problem Solving",
    "Teamwork",
  ],
};

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Technologies and tools I work with
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      className="px-5 py-2.5 bg-card/80 backdrop-blur-sm border border-border rounded-full text-sm md:text-base font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
