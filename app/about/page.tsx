"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data"

function About() {

  const workExperience = portfolioData.jobs;
  const education = portfolioData.studies;
  const techStack = portfolioData.techStack;

  const calculateAge = () => {
    const birthYear = 1994;
    const birthMonth = 11; // December, (index)
    const birthDay = 21;

    const today = new Date();
    let age = today.getFullYear() - birthYear;

    const hasHadBirthday =
      today.getMonth() > birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() >= birthDay);

    if (!hasHadBirthday) {
      age--;
    }

    return age;
  };

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

return (
  <div className="max-w-5xl mx-auto p-6 space-y-12">
    
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-8">
      
      <div className="w-64 h-64 relative flex-shrink-0 rounded-[50%] overflow-hidden shadow-lg">
        <Image
          src="/linkedIn-me.jpg"
          alt="Picture of me"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="space-y-4 text-center md:text-left">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Niklas Nordin</h1>
          <h2 className="text-2xl text-brand-orange italic">Fullstack Developer</h2>
        </div>
        <p className="leading-relaxed dark:text-gray-300">
          I’m Niklas, a {age} years old Fullstack Developer focused on building modern and user friendly applications from database design to responsive user interfaces. My primary stack includes things like JavaScript, TypeScript, React, Next.js, SQL/NoSQL databases and Node.js. I enjoy solving real world problems and creating clean, efficient code that delivers genuine value to users. Outside of programming, I’m driven by creativity and teamwork. You’ll usually find me spending time with my family, cooking, listening to music, playing football or disc golf.
        </p>
      </div>
    </div>

    <section className="flex flex-col gap-6">
      <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
        Tech Stack
      </h2>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((category) => (
          <li 
            key={category.category} 
            className="flex flex-col gap-4 p-6 bg-[#fcfbf9] dark:bg-neutral-900/50 border border-gray-200 shadow-sm dark:border-neutral-800/60 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 border-b border-gray-300 dark:border-neutral-800 pb-2">
              {category.category}
            </h3>
            
            <ul className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <li 
                  key={skill.name} 
                  className="flex items-center gap-2.5 px-3 py-2 bg-white dark:bg-neutral-900 border border-gray-300 shadow dark:border-neutral-800 rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-all hover:border-brand-orange dark:hover:border-brand-orange hover:text-brand-orange dark:hover:text-brand-orange cursor-default group"
                >
                  {skill.icon ? (
                    <div className="relative w-5 h-5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 transition-colors group-hover:bg-brand-orange" />
                  )}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>

    <section className="pt-4">
      <h2 className="text-3xl font-semibold mb-12">Work Experience</h2>
      <ul className="flex flex-col gap-6">
        {workExperience.map((job) => (
          <li key={job.id} className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-2 md:gap-8 border-b-[1px] border-gray-300 pb-6">
            <div>
              <h3 className="text-orange-500 font-bold text-lg">{job.timeOfEmployment}</h3>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-bold text-xl">{job.title}</h3>
              {job.description && (
                <ul>
                  {job.description.map((bullet, index) => (
                    <li key={index} className="leading-relaxed flex items-baseline gap-4">
                      <Image 
                      src="/arrow-right.svg"
                      alt="Arrow right"
                      width={10}
                      height={10}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-[250px_1fr] gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/building.svg"
                    alt="Office building icon"
                    width={15}
                    height={15}
                  />
                  <p>{job.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image 
                    src="/location_point.svg"
                    alt="Location icon"
                    width={15}
                    height={15}
                  />
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <h2 className="text-3xl font-semibold mb-12 mt-2">Education</h2>
      <ul className="flex flex-col gap-6">
        {education.map((study) => (
          <li key={study.id} className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-2 md:gap-8 border-b-[1px] border-gray-300 pb-6">
            <div>
              <h3 className="text-orange-500 font-bold text-lg">{study.timeForStudies}</h3>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-bold text-xl">{study.title}</h3>
              {study.description && (
                <ul>
                  {study.description.map((bullet, index) => (
                    <li key={index} className="leading-relaxed flex items-baseline gap-4">
                      <Image 
                      src="/arrow-right.svg"
                      alt="Arrow right"
                      width={10}
                      height={10}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-[250px_1fr] gap-2">
                <div className="flex items-center gap-2 w-[140px]">
                  <Image
                    src="/building.svg"
                    alt="Office building icon"
                    width={15}
                    height={15}
                  />
                  <p>{study.school}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image 
                    src="/location_point.svg"
                    alt="Location icon"
                    width={15}
                    height={15}
                  />
                  <p>{study.location}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
}

export default About;