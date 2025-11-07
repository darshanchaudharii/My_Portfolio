import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Avatar className="w-32 h-32 border-4 border-primary shadow-elegant">
                <AvatarImage src="/images/profile.jpg" alt="Darshan Chaudhari" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-center text-muted-foreground">
              Get to know more about my journey and expertise
            </p>
          </div>

          <Card className="p-8 shadow-elegant gradient-card">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Recent Electronics Engineering graduate and Full Stack Developer with 6+ months of 
                experience at TRON Softech, building scalable web applications using Spring Boot, 
                React.js, and MySQL. I've contributed to real-time projects, including an ERP System 
                and an Online Exam Assessment Platform.
              </p>
              
              <p className="text-lg leading-relaxed">
                Skilled in Java, JavaScript, RESTful APIs, and SQL databases, I'm passionate about 
                modern software engineering, cloud-based architectures, and agile development. 
                I thrive in collaborative environments and am always eager to learn new technologies 
                and best practices.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+917666358663" className="hover:text-primary transition-colors">
                    +91-7666358663
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:darshanchaudhari4998@gmail.com" className="hover:text-primary transition-colors truncate">
                    darshanchaudhari4998@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">BE - Electronics and Telecommunication Engineering</p>
                    <p className="text-muted-foreground">North Maharashtra University, Jalgaon</p>
                    <p className="text-sm text-muted-foreground">2022 - 2025 | CGPA: 7.24</p>
                  </div>
                  <div>
                    <p className="font-semibold">Diploma in Electronics and Telecommunication</p>
                    <p className="text-muted-foreground">MSBTE University, Jalgaon</p>
                    <p className="text-sm text-muted-foreground">2019 - 2022 | Percentage: 79.65%</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
