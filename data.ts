export interface Job {
  id: number;
  title: string;
  company: string;
  timeOfEmployment: string;
  location: string;
  description: string[];
}

export interface Study {
  id: number;
  title: string;
  school: string;
  timeForStudies: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface TechStack {
  category: string;
  skills: Skill[];
}

export interface topProjects {
  id: string;
  title: string;
  liveUrl?: string;
  githubUrl?: string;
  imagePaths: string[];
  skills: Skill[];
  description: string[];
  ribbon?: boolean;
}

export interface otherProjects {
  id: string;
  title: string;
  imagePath: string;
  description: string[];
}

export interface PortfolioData {
  jobs: Job[];
  studies: Study[];
  techStack: TechStack[];
  topProjects: topProjects[];
  otherProjects: otherProjects[];
}

export const portfolioData: PortfolioData = {
jobs: [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Hilja",
      timeOfEmployment: "Feb 2026 - May 2026",
      location: "Värmdö, Sweden",
      description: [
        "Developed functionality in a B2B system using Outsystems, with a focus on usability and performance.",
        "Built an address management system with full CRUD functionality for handling contact data.",
        "Implemented search functionality to improve data accessibility.",
        "Developed a hierarchical file and document structure with support for nested folders.",
        "Implemented drag-and-drop functionality using JavaScript to improve user interaction.",
        "Worked with performance optimisation to minimise server load and create responsive user interfaces."
      ]
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "Webbab",
      timeOfEmployment: "Dec 2025 - Feb 2026",
      location: "Remote, Sweden",
      description: [
        "Designed UI/UX in Figma, focusing on a checkout flow for an e-commerce solution."
      ]
    },
    {
      id: 3,
      title: "Delivery & Warehouse Associate / Team Support",
      company: "Mathem I Sverige AB",
      timeOfEmployment: "Nov 2016 - Present (On Leave)",
      location: "Stockholm, Sweden",
      description: [
        "Responsible for deliveries with high standards of quality and punctuality.",
        "Supported recruitment, onboarding and training of new employees.",
        "Experience as a Health and Safety Representative at the Stockholm site, contributing to workplace improvements.",
        "Worked with warehouse logistics, including order picking with high efficiency."
      ]
    },
    {
      id: 4,
      title: "Restaurant Assistant",
      company: "Fazer Amica AB",
      timeOfEmployment: "Sep 2014 - 2016",
      location: "Tyresö, Sweden",
      description: [
        "Managed product procurement, administrative tasks, and coordinated food orders and deliveries for elder care facilities and home care services.",
        "Assisted in kitchen operations, food preparation, and ensured high standards of hygiene and dish management.",
        "Provided excellent customer service through cash handling, point-of-sale operations, and guest relations in the dining area."
      ]
    },
    {
      id: 5,
      title: "Warehouse Associate",
      company: "Bageriprodukter i Sverige AB",
      timeOfEmployment: "April 2015 - 2015",
      location: "Tumba, Sweden",
      description: [
        "Efficiently packed, stacked, and secured goods onto pallets using industrial wrapping to prepare orders for transit."
      ]
    }
  ],
  studies: [
    {
      id: 1,
      title: "Fullstack Javascript",
      school: "Chas Academy",
      timeForStudies: "Sep 2024 - June 2026",
      location: "Globen Shopping Center",
      description: [
        "Comprehensive fullstack program focusing on modern JavaScript/TypeScript ecosystems, covering advanced frontend frameworks, backend architecture, and database management.",
        "Hands-on experience in agile team projects (Scrum), practicing version control (Git), CI/CD pipelines, and collaborative software development workflows.",
        "Emphasis on building secure, scalable web applications, RESTful/GraphQL APIs, and implementing clean code practices like linting and automated testing."
      ]
    },
    {
      id: 2,
      title: "Fullstack JavaScript & React Web Development",
      school: "Udemy",
      timeForStudies: "Mars 2024 - Sep 2024",
      location: "Distance",
      description: [
        "Successfully completed three comprehensive courses: 'The Complete Fullstack Web Developer', 'JavaScript from Zero to Expert', and a dedicated deep-dive in React.",
        "Developed several independent fullstack applications to master core programming concepts, state management, and modern frontend architecture."
      ]
    },
    {
      id: 3,
      title: "CPR & AED",
      school: "HLR-Rådet",
      timeForStudies: "2021",
      location: "Home",
      description: [
        "Completed practical training certified by the Swedish Resuscitation Council (HLR-rådet).",
        "Gained hands-on skills in Cardiopulmonary Resuscitation (CPR) and the correct use of an automated external defibrillator (AED)."
      ]
    },
    {
      id: 4,
      title: "High School",
      school: "Cybergymnasiet",
      timeForStudies: "2010 - 2013",
      location: "Odenplan/Stockholm",
      description: [
        "Chose a technical track focused on software and digital creation, sparking my early interest in technology and web development.",
        "Completed coursework in Web Development, Computer Programming, and 3D Modeling/Design."
      ]
    },
  ],
  techStack: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: "/techStack/html-icon.svg" },
        { name: "CSS3", icon: "/techStack/css-icon.svg" },
        { name: "Tailwind CSS", icon: "/techStack/tailwind-icon.svg" },
        { name: "JavaScript (ES6+)", icon: "/techStack/javascript-icon.svg" },
        { name: "TypeScript", icon: "/techStack/Typescript_logo.svg" },
        { name: "React", icon: "/techStack/react-icon.svg" },
        { name: "Redux", icon: "/techStack/redux-icon.svg" },
        { name: "Next.js", icon: "/techStack/nextjs-icon.svg" },
        { name: "Vue.js", icon: "/techStack/Vue.js_Logo_2.svg" },
        { name: "Zustand", icon: "/techStack/zustand.jpg" },
        { name: "Vite", icon: "/techStack/Vitejs-logo.svg" },
        { name: "Recharts", icon: "/techStack/recharts.png" },
        { name: "Responsiv design", icon: "/techStack/responsive.svg" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "/techStack/nodejs-icon.svg" },
        { name: "Express.js", icon: "/techStack/Express.svg" },
        { name: "REST APIs", icon: "/techStack/REST_API.png" },
        { name: "GraphQL", icon: "/techStack/GraphQL_Logo.png" },
        { name: "Swagger", icon: "/techStack/swagger.svg" },
        { name: "Zod", icon: "/techStack/zod.png" },
        { name: "JWT", icon: "/techStack/jwt.png" },
        { name: "Bcrypt", icon: "/techStack/bcrypt.jpg" }
      ]
    },
    {
      category: "Databaser",
      skills: [
        { name: "MySQL", icon: "/techStack/mysql-logo-svgrepo-com.svg" },
        { name: "PostgreSQL", icon: "/techStack/Postgresql_elephant.svg" },
        { name: "MongoDB", icon: "/techStack/mongodb-icon.svg" },
        { name: "Prisma", icon: "/techStack/prisma-svgrepo-com.svg" },
        { name: "Supabase", icon: "/techStack/supabase.png" }
      ]
    },
    {
      category: "Low Code & CMS",
      skills: [
        { name: "Outsystems", icon: "/techStack/Outsystems.png" },
        { name: "Strapi", icon: "/techStack/strapi-icon.svg" }
      ]
    },
    {
      category: "DevOps & Hosting",
      skills: [
        { name: "GitHub (Actions / Projects)", icon: "/techStack/github-icon.svg" },
        { name: "GitLab (Issue boards)", icon: "/techStack/gitlab-icon.svg" },
        { name: "Git", icon: "/techStack/git-icon.svg" },
        { name: "CI/CD", icon: "/techStack/CI_CD_icon.png" },
        { name: "Docker", icon: "/techStack/Docker-logo.svg" },
        { name: "Vercel", icon: "/techStack/vercel.svg" },
        { name: "Netlify", icon: "/techStack/Netlify-Logo.png" }
      ]
    },
    {
      category: "Testing, Tools & Design",
      skills: [
        { name: "Jest", icon: "/techStack/Jest-logo.svg" },
        { name: "ESLint", icon: "/techStack/ESLint-logo.svg" },
        { name: "Figma", icon: "/techStack/Figma-logo.svg" },
        { name: "Google Analytics", icon: "/techStack/Logo_Google_Analytics.svg" },
        { name: "Visual Studio Code", icon: "/techStack/vs-code-icon.svg" }
      ]
    }
  ],
  topProjects: [
    {
      id: "siminvest",
      title: "SimInvest",
      liveUrl: "https://siminvest-rouge.vercel.app/",
      imagePaths: ["/projects/SimInvestLandingPage.png", "/projects/SimInvestAboutUs.png", "/projects/SimInvestPortfolio.png", "/projects/SimInvestMarket.png", "/projects/SimInvestBuy.png"],
      skills: [
        { name: "Next.js", icon: "/techStack/nextjs-icon.svg" },
        { name: "TypeScript", icon: "/techStack/Typescript_logo.svg" },
        { name: "Supabase", icon: "/techStack/supabase.png" },
        { name: "PostgreSQL", icon: "/techStack/Postgresql_elephant.svg" },
        { name: "Prisma", icon: "/techStack/prisma-svgrepo-com.svg" },
        { name: "Recharts", icon: "/techStack/recharts.png" },
        { name: "Zod", icon: "/techStack/zod.png" },
        { name: "JWT", icon: "/techStack/jwt.png" },
        { name: "bcrypt", icon: "/techStack/bcrypt.jpg" }
      ],
      description: [
        "Fullstack developer role for this MVP with total ownership of the entire frontend, UI/UX design, and backend authentication.",
        "Solely designed and developed the entire user interface and responsive layouts, building dynamic dashboards, portfolio tables, and interactive price graphs utilizing Recharts.",
        "Architected and implemented a secure authentication system from scratch, managing registration, login, and secure sessions via JWT (HttpOnly cookies) and bcrypt.",
        "Developed structured backend endpoints to handle authentication requests and served formatted database data directly to the frontend components."
      ],
      ribbon: false
    },
    {
      id: "trullo",
      title: "Trullo",
      githubUrl: "https://github.com/Niklas-Nordin/Trullo",
      imagePaths: ["/projects/Trullo.png"],
      skills: [
        { name: "Node.js", icon: "/techStack/nodejs-icon.svg" },
        { name: "Express.js", icon: "/techStack/Express.svg" },
        { name: "TypeScript", icon: "/techStack/Typescript_logo.svg" },
        { name: "JavaScript", icon: "/techStack/javascript-icon.svg" },
        { name: "MongoDB", icon: "/techStack/mongodb-icon.svg" },
        { name: "Mongoose", icon: "/techStack/mongoose.png" }, // Återanvänder MongoDB-ikon för Mongoose
        { name: "JWT", icon: "/techStack/jwt.png" },
        { name: "bcrypt", icon: "/techStack/bcrypt.jpg" }
      ],
      description: [
        "A backend-focused Trello clone built entirely from scratch to master API design and NoSQL database modeling.",
        "Architected and developed a robust REST API with comprehensive CRUD functionality for workspaces, boards, lists, and tasks.",
        "Modeled a non-relational database structure using MongoDB and Mongoose, implementing strict schema validation and data integrity rules.",
        "Implemented secure user authentication and session handling from scratch using JWT and password hashing."
      ],
      ribbon: true
    }
  ],
  otherProjects: [
    {
      id: "adventure-excursions",
      title: "Adventure Excursions",
      imagePath: "/projects/AdventureProject.png",
      description: [
        "Collaborated with three other students to build a dynamic web application showcasing various outdoor activities and tours.",
        "Developed the frontend utilizing Vue.js and Nuxt.js to ensure a modern, structured, and scalable architecture.",
        "Designed and implemented a fully responsive user interface featuring interactive elements for exploring adventure options."
      ]
    },
    {
      id: "react-quiz",
      title: "React Quiz",
      imagePath: "/projects/react-quiz.png",
      description: [
        "Built an interactive quiz application driven by a 15-question React API to master complex data fetching and asynchronous state handling.",
        "Focused heavily on advanced state management by utilizing useReducer to cleanly centralize logic for quiz status, timers, answers, and scoring.",
        "Designed and developed a strict mobile-first user interface, optimized specifically for a seamless and intuitive quiz experience on mobile screens."
      ]
    },
    {
      id: "todo-list",
      title: "Todo List",
      imagePath: "/projects/ToDoList.png",
      description: [
        "Developed a lightweight and efficient task management application built entirely with TypeScript.",
        "Implemented seamless data persistence by utilizing Local Storage to save and retrieve tasks across sessions.",
        "Created comprehensive CRUD functionality allowing users to add, delete, edit, and mark tasks as completed."
      ]
    }
  ]
};