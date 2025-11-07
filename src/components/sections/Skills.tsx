import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "../ui/badge";

const skillsData = {
  "Languages & Frameworks": [
    { name: "Java", color: "bg-orange-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Spring Boot", color: "bg-green-600" },
    { name: "Spring MVC", color: "bg-green-500" },
    { name: "Hibernate", color: "bg-amber-700" },
    { name: "JWT", color: "bg-pink-500" },
  ],
  "Frontend Technologies": [
    { name: "HTML5", color: "bg-orange-600" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "Tailwind CSS", color: "bg-cyan-400" },
    { name: "Angular", color: "bg-red-600" },
  ],
  "Database & Tools": [
    { name: "MySQL", color: "bg-blue-700" },
    { name: "PostgreSQL", color: "bg-blue-800" },
    { name: "Git", color: "bg-orange-500" },
    { name: "GitHub", color: "bg-gray-700" },
    { name: "Maven", color: "bg-red-500" },
    { name: "Postman", color: "bg-orange-600" },
  ],
  "Development": [
    { name: "RESTful APIs", color: "bg-purple-600" },
    { name: "Agile", color: "bg-indigo-600" },
    { name: "Problem Solving", color: "bg-emerald-600" },
    { name: "Teamwork", color: "bg-teal-600" },
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

          <div className="max-w-6xl mx-auto space-y-12">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-base font-medium cursor-default shadow-sm hover:shadow-md transition-shadow"
                      >
                        {skill.name}
                      </Badge>
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
