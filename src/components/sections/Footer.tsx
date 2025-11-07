import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="Darshan Logo" className="h-12 mb-4" />
            <p className="text-sm text-muted-foreground">
              Full Stack Developer passionate about building scalable and efficient web applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-2 mb-4">
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
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:darshanchaudhari4998@gmail.com" className="hover:text-primary">
                darshanchaudhari4998@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="tel:+917666358663" className="hover:text-primary">
                +91-7666358663
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Darshan Chaudhari. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
