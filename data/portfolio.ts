import { Database, Lock, Server, FileCode2, Layout, Terminal } from 'lucide-react';
import React from 'react';

export const portfolioData = {
  about: {
    journey: "My programming journey started when I built my first HTML website in college. Since then, I've been fascinated by the endless possibilities of software development. Over the years, I have honed my skills in web technologies, transitioning from simple static sites to complex, fully functional web applications.",
    workEnjoyed: "I particularly enjoy solving complex backend logic problems and crafting beautifully interactive and blazing-fast user interfaces. Bridging the gap between the server and the client with end-to-end type safety using TypeScript is my current passion.",
    hobbies: "When I am not coding, you can find me exploring nature trails, experimenting with new recipes in the kitchen, or reading science fiction novels. I believe that stepping away from the screen fuels creativity and helps me solve programming problems more effectively."
  },
  skills: {
    frontend: [
      { name: "React / Next.js", level: 90, iconName: "Layout" },
      { name: "TypeScript", level: 85, iconName: "FileCode2" },
      { name: "Tailwind CSS", level: 95, iconName: "Layout" }
    ],
    backend: [
      { name: "Node.js", level: 85, iconName: "Server" },
      { name: "PostgreSQL", level: 80, iconName: "Database" },
      { name: "BetterAuth / Prisma", level: 85, iconName: "Lock" }
    ],
    tools: [
      { name: "Git & GitHub", level: 90, iconName: "Terminal" },
      { name: "Docker", level: 60, iconName: "Terminal" },
      { name: "Vercel / VPS", level: 75, iconName: "Server" }
    ]
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Tech University",
      duration: "2018 - 2022",
      description: "Graduated with Honors. Specialized in software engineering and web technologies."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "City College",
      duration: "2016 - 2018",
      description: "Science group with a focus on Mathematics and Physics."
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Modern Web Solutions",
      duration: "2022 - Present",
      description: "Developing and maintaining scalable enterprise-level applications using Next.js, TypeScript, and Prisma. Mentoring junior developers and overhauling CI/CD pipelines."
    },
    {
      role: "Frontend Developer Intern",
      company: "Creative Agency Inc.",
      duration: "2021 - 2022",
      description: "Built responsive, accessible interfaces for multiple client projects. Improved load times by 40% through code splitting and asset optimization."
    }
  ],
  projects: [
    {
      slug: "ecommerce-platform",
      title: "Next.js E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
      shortDescription: "A full-featured modern e-commerce platform with real-time inventory and payments.",
      longDescription: "This robust e-commerce solution features a highly responsive frontend built with Next.js App Router and Framer Motion. The backend leverages Prisma ORM connected to a PostgreSQL database for seamless and type-safe data handling. Users can browse products, manage their cart, and complete purchases securely via Stripe integration.",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      challenges: "Implementing a highly performant and secure cart system that synchronized correctly between the client context and the database.",
      futurePlans: "Integrating a comprehensive admin dashboard for inventory management and sales analytics."
    },
    {
      slug: "task-management",
      title: "Realtime Task Manager",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1600&auto=format&fit=crop",
      techStack: ["React", "Express", "Socket.io", "MongoDB", "Redux Toolkit"],
      shortDescription: "Collaborative project management tool with live updates.",
      longDescription: "A functional clone of popular project management tools, enabling teams to create boards, lists, and cards. Socket.io powers the real-time collaboration aspect so multiple users can edit the same board concurrently without refreshing.",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      challenges: "Handling race conditions in the database when multiple users updated the same task concurrently.",
      futurePlans: "Adding granular role-based access control and file attachments."
    },
    {
      slug: "portfolio-website",
      title: "Interactive Minimalist Portfolio",
      image: "https://images.unsplash.com/photo-1507238692062-5a042e9eac88?q=80&w=1600&auto=format&fit=crop",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      shortDescription: "A blazing fast, highly animated personal portfolio.",
      longDescription: "Designed with an incredible focus on micro-interactions and smooth scrolling using Lenis and Framer Motion. The entire architecture is decoupled, allowing data to be easily swapped out.",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      challenges: "Optimizing the layout calculation to ensure smooth physics-based scrolling didn't jitter on smaller devices.",
      futurePlans: "Adding a blog section integrating a headless CMS."
    }
  ],
  contact: {
    email: "israt.nisha@example.com",
    phone: "+880 1234 567890",
    whatsapp: "+880 1234 567890"
  }
};
