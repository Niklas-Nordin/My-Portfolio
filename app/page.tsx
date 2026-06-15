import Image from "next/image";

function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-start bg-black text-white">
      <div className="relative w-[100%] h-[50%] flex">
        <Image
          src="/Me.jpg"
          alt="Picture of me"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />
      </div>
      <div className="flex flex-col items-center justify-center w-full px-8 gap-16">
        <h2 className="text-5xl font-bold ">I'm <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">Niklas Nordin</span></h2>
        <h3 className="w-full text-2xl text-center">Fullstack JavaScript developer focused on building <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">clean, interactive</span> web experiences with strong attention to <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">design</span></h3>
      </div>
    </section>
  );
}

export default Home;