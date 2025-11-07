import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "../ui/card";

const certificates = [
  {
    name: "Google AI Essentials",
    issuer: "Google via Coursera",
    image: "/images/certificates/google.png",
    date: "Feb 2025",
  },
  {
    name: "Learn Java Course",
    issuer: "Codecademy",
    image: "/images/certificates/java.png",
    date: "May 2025",
  },
  {
    name: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    image: "/images/certificates/sql.jpg",
    date: "Mar 2025",
  },
];

export const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certifications <span className="text-gradient">& Achievements</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Continuous learning and professional development
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full cursor-pointer">
                    <div className="relative overflow-hidden bg-secondary/50">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <ExternalLink className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-2">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-8 gradient-card">
                <h3 className="text-2xl font-bold mb-4">Extra-Curricular Activities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Smart India Hackathon Finalist</strong> - Represented SSBT College, Jalgaon. 
                      Contributed to building an innovative full-stack web solution, showcasing teamwork 
                      and problem-solving excellence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Youth Festival Leader 2K23, 2K24</strong> - Led the Youth Festival, 
                      engaging 200+ participants and coordinating 3 activities.
                    </span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
