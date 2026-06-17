"use client";

import Image from "next/image";

function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-start bg-gray-100 p-6 relative overflow-hidden">
      
      <div className="block lg:hidden relative w-full h-[50%] flex justify-center items-center overflow-hidden mt-10">
        <div className="relative w-full h-full max-w-[440px] aspect-square max-h-[440px]">
          <Image
            src="/Me.jpg"
            alt="Picture of me"
            fill
            priority
            className="object-cover rounded-[50%]"
          />
          <div 
            className="absolute inset-0 z-10 pointer-events-none rounded-[50%] border-[1.5px] border-gray-100 scale-[1.01]" 
            style={{
              background: "radial-gradient(circle closest-side, transparent 80%, #f6f5f3"
            }}
          />
        </div>
      </div>

      <div 
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-[50%] z-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, calc(100% - 16vh) 100%, 0 100%)" 
        }}
      >
        <Image
          src="/Me.jpg"
          alt="Picture of me"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div 
        className="hidden lg:flex absolute top-0 bottom-0 w-[50%] left-0 pointer-events-none justify-end z-20"
        style={{
          transform: "translateX(0)"
        }}
      >

        <div 
          className="absolute top-0 bottom-0 w-16 flex items-center justify-center"
          style={{
            transform: "skewX(-10deg)",
            transformOrigin: "top right",
            right: "-40px"
          }}
        >

          <div 
            className="absolute h-[150vh] w-[16px] bg-gradient-to-l from-brand-orange to-gray-900 origin-center origin-center"
            style={{
              filter: "drop-shadow(-8px 12px 10px rgba(0, 0, 0, 0.9))"
            }}
          />
          
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-[45%] lg:ml-[52%] px-8 gap-12 mt-8 lg:mt-0 z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center lg:text-left">
          I'm <span className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent">Niklas Nordin</span>
        </h2>
        <h3 className="w-full text-2xl lg:text-3xl text-center lg:text-left leading-relaxed">
          Fullstack JavaScript developer focused on building{" "}
          <span className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent">clean, interactive</span>{" "}
          web experiences with strong attention to{" "}
          <span className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent">design</span>
        </h3>
      </div>

    </section>
  );
}

export default Home;