# 🌐 Darshan Chaudhari — Full Stack Developer Portfolio

![Portfolio Preview](./public/images/hero-bg.png)

Welcome to my **personal portfolio website**, built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.  
This portfolio showcases my professional work as a **Full Stack Developer**, featuring modern design, smooth animations, projects, certifications, and direct recruiter contact options.

---

## 🚀 Live Demo

🔗 **Portfolio URL:** [https://darshanchaudhari.vercel.app](#)  
*(Replace with your live deployed link if different)*

---

## 🧠 Overview

This project is a **single-page portfolio website** designed to highlight:

- 🧩 Full Stack Projects (React, Spring Boot, MySQL)
- 💼 Professional Experience (TRON Softech)
- 🧰 Skills & Tools
- 📜 Certifications & Courses
- ✉️ Contact options for recruiters (Email & WhatsApp)

The site uses **Framer Motion** for animations, **Tailwind CSS** for modern styling, and a **persistent dark/light theme**.

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | [React (Vite)](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theme** | Dark/Light toggle via localStorage |
| **Scroll Effects** | `react-intersection-observer` |
| **Deployment** | [Vercel](https://vercel.com) / [Netlify](https://www.netlify.com) |

---

## 📁 Folder Structure

portfolio/
├── public/
│ ├── images/
│ │ ├── hero-bg.png
│ │ ├── profile.jpg
│ │ ├── tron-logo.png
│ │ ├── logo.png
│ │ ├── favicon.png
│ │ ├── certificates/
│ │ └── projects/
│ ├── robots.txt
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── Footer.jsx
│ │ ├── ThemeToggle.tsx
│ │ └── ui/
│ ├── sections/
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── Experience.jsx
│ │ ├── Certifications.jsx
│ │ └── Contact.jsx
│ ├── contexts/
│ │ └── ThemeContext.jsx
│ ├── hooks/
│ │ └── useInViewAnimate.js
│ ├── data/
│ │ └── projects.json
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/darshanchaudharii/portfolio.git
cd portfolio

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


Then open → http://localhost:5173

4️⃣ Build for production
npm run build

5️⃣ Preview production build
npm run preview

🌙 Theme Configuration

Dark theme is enabled by default.

The user’s selection is stored in localStorage.

Logic is implemented in src/components/ThemeToggle.tsx.

If you wish to change the default theme to light, modify:

const [theme, setTheme] = useState<"light" | "dark">("light");

🧩 Key Features

✅ Modern UI/UX – Responsive, minimal, and clean
✅ Smooth Animations – Scroll-based and hover effects
✅ Dark / Light Mode – Persistent with localStorage
✅ Projects Showcase – Includes GitHub & Live links
✅ Certifications Section – Interactive certificate thumbnails
✅ Contact Form – One-click Email & WhatsApp actions
✅ Performance Optimized – Lazy-loaded images & smooth scroll
✅ SEO Ready – Meta tags & Open Graph configuration

🧱 Projects Showcased
Project	Live Demo	Repository
🧮 XEEPL ERP	—	GitHub

📘 NextGen Exam Portal	—	GitHub

🧾 Resume Builder Web App	Live
	GitHub

💼 Job Posting Demo (React)	Live
	GitHub

🚮 Digital Garbage Collection System	Live
	GitHub

🎉 Event Management, 📚 Library Management, 🚗 Vehicle Detection, 💊 Medixtract, ☁️ WeatherApp	—	Check on GitHub
🧰 Skills & Tools

Frontend: React, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, Framer Motion
Backend: Java, Spring Boot, Spring MVC, JPA, Hibernate, RESTful APIs
Databases: MySQL, PostgreSQL
Tools: Git, Maven, Postman, VS Code, Eclipse
Other: JWT Authentication, Responsive Design, Agile Methodology

💼 Professional Experience
🏢 TRON Softech Pvt. Ltd.

Software Developer — June 2025 – Present

Developed XEEPL ERP using Spring Boot + React + MySQL.

Automated internal workflows, reducing manual effort by 50%.

Collaborated in agile sprints and API integrations.

Optimized database schemas and deployed client-facing modules.

📜 Certifications
Certificate	Issued By
Java Programming	—
SQL Fundamentals	—
Git & GitHub	—
Google AI Essentials	—
HTML5 & CSS3	—

All certificates are stored under /public/images/certificates/.

📬 Contact Me

📧 Email: darshanchaudhari4998@gmail.com

💬 WhatsApp: +91 76663 58663

🔗 LinkedIn: linkedin.com/in/darshan-chaudhari-81600118b

💻 GitHub: github.com/darshanchaudharii

🧾 License

This project is open-source under the MIT License.
Feel free to use or modify the design and logic with credit.

🙌 Acknowledgments

Tailwind CSS

Framer Motion

Lucide Icons

Logo.dev
 for skill logos

Vercel
 for deployment

© 2025 Darshan Chaudhari — All Rights Reserved


---

Would you like me to create a **shorter GitHub profile summary (1-page version)** too — something that fits pe