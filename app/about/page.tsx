"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data"

function About() {

  const workExperience = portfolioData.jobs;
  const education = portfolioData.studies

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
          <h2 className="text-2xl text-orange-500 font-medium italic">Fullstack Developer</h2>
        </div>
        <p className="leading-relaxed text-gray-650 dark:text-gray-300">
          I’m Niklas, a {age} years old Fullstack Developer focused on building modern and user friendly applications from database design to responsive user interfaces. My primary stack includes things like JavaScript, TypeScript, React, Next.js, SQL/NoSQL databases and Node.js. I enjoy solving real world problems and creating clean, efficient code that delivers genuine value to users. Outside of programming, I’m driven by creativity and teamwork. You’ll usually find me spending time with my family, cooking, listening to music, playing football or disc golf.
        </p>
      </div>
    </div>

    <section className="border-t pt-8 border-gray-400">
      <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
      <ul className="flex flex-col gap-6">
        {workExperience.map((job) => (
          <li key={job.id} className="flex flex-col gap-4 border-b-[1px] border-gray-400 pb-6">
            <div>
              <p className="text-orange-500">{job.timeOfEmployment}</p>
              <h3 className="font-bold text-xl">{job.title}</h3>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <Image
                  src="/office-building.svg"
                  alt="Office building icon"
                  width={25}
                  height={25}
                />
                <p>{job.company}</p>
              </div>
              <div className="flex gap-2">
                <Image 
                  src="/location.svg"
                  alt="Location icon"
                  width={25}
                  height={25}
                />
                <p>{job.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <h2 className="text-3xl font-semibold mb-6">Education</h2>
      <ul className="flex flex-col gap-6">
        {education.map((study) => (
          <li key={study.id} className="flex flex-col gap-4 border-b-[1px] border-gray-400 pb-6">
            <div>
              <p className="text-orange-500 font-bold">{study.timeForStudies}</p>
              <h3 className="font-bold text-xl">{study.title}</h3>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <Image
                  src="/office-building.svg"
                  alt="Office building icon"
                  width={25}
                  height={25}
                />
                <p>{study.school}</p>
              </div>
              <div className="flex gap-2">
                <Image 
                  src="/location.svg"
                  alt="Location icon"
                  width={25}
                  height={25}
                />
                <p>{study.location}</p>
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