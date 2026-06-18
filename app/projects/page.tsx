import Image from "next/image";

function Projects() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 w-full p-2">
      <h1 className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold text-center lg:text-left">My projects</h1>

      <Image
        src="/projects/SimInvest.png"
        alt="Image of SimInvest project"
        width={400}
        height={300}
        className="rounded-lg border-1 border-gray-400" // object-cover gör att bilden inte trycks ihop/blir skev
        sizes="(max-width: 768px) 100vw, 80vw"
        priority // Bra att ha på första projektbilden för snabbare laddning
      />
      <Image
        src="/projects/Trullo.png"
        alt="Image of SimInvest project"
        width={400}
        height={300}
        className="rounded-lg border-1 border-gray-400" // object-cover gör att bilden inte trycks ihop/blir skev
        sizes="(max-width: 768px) 100vw, 80vw"
        priority // Bra att ha på första projektbilden för snabbare laddning
      />
    </div>
  );
}

export default Projects;