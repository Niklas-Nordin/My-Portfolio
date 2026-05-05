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
      <p>My name is Niklas, I’m {age} years old and passionate about creativity, teamwork, and continuous learning. Outside of work, I enjoy cooking, football, music, spending time with my family, and playing disc golf. Recently, I’ve discovered a strong interest in web development, and I’m excited to continue growing my skills in creating modern and user-friendly websites.</p>

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