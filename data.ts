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

export interface PortfolioData {
  jobs: Job[];
  studies: Study[];
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
};