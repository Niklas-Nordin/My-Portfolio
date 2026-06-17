export interface Job {
  id: number;
  title: string;
  company: string;
  timeOfEmployment: string;
  location: string;
}

export interface Study {
  id: number;
  title: string;
  school: string;
  timeForStudies: string;
  location: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface TechStack {
  category: string;
  skills: Skill[];
}

export interface PortfolioData {
  jobs: Job[];
  studies: Study[];
  techStack: TechStack[];
}

export const portfolioData: PortfolioData = {
  jobs: [
    {
      id: 1,
      title: "Web Developer (Internship)",
      company: "Hilja",
      timeOfEmployment: "Feb 2026 - Now",
      location: "Gustavsberg",
    },
    {
      id: 2,
      title: "Driver / Warehouse Worker",
      company: "Mathem I Sverige AB",
      timeOfEmployment: "Nov 2016 - Now",
      location: "Larsboda",
    },
    {
      id: 3,
      title: "Restaurant Assistant",
      company: "Fazer Amica AB",
      timeOfEmployment: "Sep 2014 - 2016",
      location: "Tyresö",
    },
    {
      id: 4,
      title: "Warehouse Worker",
      company: "Bageriprodukter AB",
      timeOfEmployment: "April 2015 - 2015",
      location: "Tumba",
    },
  ],
  studies: [
    {
      id: 1,
      title: "Fullstack Javascript",
      school: "Chas Academy",
      timeForStudies: "Sep 2024 - now",
      location: "Globen Shopping Center",
    },
    {
      id: 2,
      title: "Fullstack Web Developer, React",
      school: "Udemy",
      timeForStudies: "Mars 2024 - now",
      location: "Distance",
    },
    {
      id: 3,
      title: "CPR",
      school: "HLR-Rådet",
      timeForStudies: "2021",
      location: "Home",
    },
    {
      id: 4,
      title: "High School",
      school: "Cybergymnasiet",
      timeForStudies: "2010 - 2013",
      location: "Odenplan/Stockholm",
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
        { name: "MongoDB", icon: "/techStack/MongoDB_logo.svg" },
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
      category: "DevOps & Verktyg",
      skills: [
        { name: "GitHub (Actions / Projects)", icon: "/techStack/github-icon.svg" },
        { name: "GitLab (Issue boards)", icon: "/techStack/gitlab-icon.svg" },
        { name: "Git", icon: "/techStack/git-icon.svg" },
        { name: "CI/CD", icon: "/techStack/CI_CD_icon.png" },
        { name: "Docker", icon: "/techStack/Docker-logo.svg" },
        { name: "ESLint", icon: "/techStack/ESLint-logo.svg" },
        { name: "Jest", icon: "/techStack/Jest-logo.svg" },
        { name: "Figma", icon: "/techStack/Figma-logo.svg" },
        { name: "Google Analytics", icon: "/techStack/Logo_Google_Analytics.svg" },
        { name: "Visual Studio Code", icon: "/techStack/vs-code-icon.svg" },
        { name: "Vercel", icon: "/techStack/vercel.svg" },
        { name: "Netlify", icon: "/techStack/Netlify-Logo.png" }
      ]
    }
  ]
};