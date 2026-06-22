import Image from "next/image";
import { portfolioData } from "@/data";

function Projects() {

  const topProjects = portfolioData.topProjects;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 w-full p-2">
      <h1 className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold text-center lg:text-left">My projects</h1>

      <ul className="flex flex-col gap-12 md:gap-16">
        {topProjects.map((project, index) => (
          <li 
            key={project.id} 
            className="flex flex-col gap-6 w-full border-b border-gray-300 pb-12"
          >
            {/* Övre sektion: Bild och text i två kolumner på lg-skärmar */}
            <div className={`flex flex-col lg:flex-row gap-6 md:gap-10 items-center lg:items-start w-full ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="w-full max-w-[600px] flex justify-center md:justify-start">
                <Image
                  src={project.imagePath}
                  alt={`Image of ${project.title} project.`}
                  width={600}
                  height={400}
                  className="rounded-lg border border-gray-400 w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={project.id === "siminvest"}
                />
              </div>

              <div className="w-full max-w-[600px] flex flex-col gap-4 text-start md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm md:text-base flex flex-col gap-2">
                  {project.description.map((point, index) => (
                    <li key={index} className="flex gap-4 items-baseline">
                      <Image 
                      src="/arrow-right.svg"
                      alt="Arrow right"
                      width={10}
                      height={10}
                      />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nedre sektion: Tags som ligger under både bild och text */}
            <div className="mx-auto w-full max-w-[600px] lg:max-w-7xl">
              <ul className="flex flex-wrap gap-2.5">
                {project.skills.map((skill) => (
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;