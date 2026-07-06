import Image from "next/image";
import { portfolioData } from "@/data";
import ImageCarousel from "@/components/ImageCarousel";

function Projects() {

  const topProjects = portfolioData.topProjects;
  const otherProjects = portfolioData.otherProjects;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 w-full p-2">
      <h1 className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold text-center lg:text-left">My projects</h1>

      <ul className="flex flex-col gap-12 md:gap-16">
        {topProjects.map((project, index) => (
          <li 
            key={project.id} 
            className="flex flex-col gap-6 w-full border-b border-gray-300 pb-12"
          >
            <div className={`flex flex-col lg:flex-row gap-6 md:gap-10 items-center lg:items-start w-full ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <ImageCarousel
                imagePaths={project.imagePaths}
                title={project.title}
                priority={index === 0} // Prioritize the first project for faster loading
              />

              <div className="w-full max-w-[600px] flex flex-col gap-4 text-start md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                
                <ul className="dark:text-gray-300 space-y-2 text-sm md:text-base flex flex-col gap-2">
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

      <div className="pb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center lg:text-left">
          Other Projects
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full">
          {otherProjects.map((project) => (
            <li 
              key={project.id} 
              className="flex flex-col gap-4 w-full"
            >
              <div className="w-full flex justify-center">
                <Image
                  src={project.imagePath}
                  alt={`Image of ${project.title} project.`}
                  width={600}
                  height={400}
                  className="rounded-lg border border-gray-400 w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <ul className="dark:text-gray-300 space-y-2 text-sm flex flex-col">
                  {project.description.map((point, index) => (
                    <li key={index} className="flex gap-3 items-baseline">
                      <Image 
                        src="/arrow-right.svg"
                        alt="Arrow right"
                        width={8}
                        height={8}
                        className="shrink-0"
                      />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;