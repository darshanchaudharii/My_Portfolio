import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:darshanchaudhari4998@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact from ${formData.name} - ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  const handleWhatsApp = () => {
    const message = `Hi Darshan, I am ${formData.name || "[Your Name]"}. I saw your portfolio and would like to discuss ${formData.subject || "a project"}.`;
    const whatsappLink = `https://wa.me/917666358663?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Let's discuss your project or opportunity
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-elegant gradient-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    rows={6}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1 gap-2">
                    <Mail className="h-4 w-4" />
                    Send Email
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="flex-1 gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
