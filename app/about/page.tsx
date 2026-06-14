"use client";

import { useEffect, useState } from "react";

function About() {

  const calculateAge = () => {
    const birthYear = 1994;
    const birthMonth = 11; // December
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
    <div>
      <h1 className="text-3xl">About Me</h1>
      <p>I’m Niklas, a Fullstack Developer focused on building modern and user friendly applications from database design to responsive user interfaces. My primary stack includes things like JavaScript, TypeScript, React, Next.js, SQL/NoSQL databases and Node.js. I enjoy solving real world problems and creating clean, efficient code that delivers genuine value to users. Outside of programming, I’m driven by creativity and teamwork. You’ll usually find me spending time with my family, cooking, listening to music, playing football or disc golf.</p>

      <section>
        <h2>Work Experience</h2>
      </section>

      <section>
        <h2>Education</h2>
      </section>
    </div>
  );
}

export default About;