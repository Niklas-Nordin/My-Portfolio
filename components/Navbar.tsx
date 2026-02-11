"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full h-16 text-white bg-black flex items-center justify-between px-4">
      <Link href="/">
        <img className="w-40" src="./NordinDev-logo.png" alt="NordinDev logo" />
      </Link>

      <div className={`flex gap-4 items-center justify-center ${isOpen ? "flex-col gap-8 bg-orange-500 text-xl w-[50%] items-center py-16 absolute right-0 top-0 z-30" : "hidden"} md:flex md:flex-row`}>
        <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
        <Link onClick={() => setIsOpen(false)} href="/about">About</Link>
        <Link onClick={() => setIsOpen(false)} href="/techstack">Tech Stack</Link>
        <Link onClick={() => setIsOpen(false)} href="/projects">Projects</Link>
        <Link onClick={() => setIsOpen(false)} href="/contact">Contact</Link>
      </div>
      {isOpen && 
        <div className="absolute top-0 left-0 w-full h-screen z-20 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(!isOpen)}></div> 
      }
      <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        { isOpen ? <img className="w-8 z-30 absolute top-4 right-4" src="./close.svg" alt="Closing navbar icon" /> : <img className={"w-8 z-30"} src="./hamburger-menu.svg" alt="Navigation menu button mobile" /> }
      </button>
    </nav>
  );
}

export default Navbar;