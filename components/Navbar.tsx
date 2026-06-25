"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkStyle = (href: string) => {
      const isActive = pathname === href;
      return isActive 
        ? "text-brand-orange font-bold transition-colors duration-200" 
        : "text-white hover:text-brand-orange hover:border-b hover:border-brand-orange transition-colors duration-200";
    };
  return (
    <nav className="relative w-full h-16 text-white bg-black flex items-center justify-between px-4 border-b-5 border-brand-orange">
      <Link href="/">
        <img className="w-50" src="./NordinDev-logo.png" alt="NordinDev logo" />
      </Link>

      <div className={`flex gap-8 items-center justify-center uppercase text-lg md:text-sm ${isOpen ? "flex-col gap-8 bg-black w-[50%] items-center py-16 absolute right-0 top-0 z-30" : "hidden"} md:flex md:flex-row`}>
        <Link className={linkStyle("/")} onClick={() => setIsOpen(false)} href="/">Home</Link>
        <Link className={linkStyle("/about")} onClick={() => setIsOpen(false)} href="/about">About</Link>
        <Link className={linkStyle("/projects")} onClick={() => setIsOpen(false)} href="/projects">Projects</Link>
        <Link className={linkStyle("/contact")} onClick={() => setIsOpen(false)} href="/contact">Contact</Link>
      </div>
      {isOpen && 
        <div className="absolute top-0 left-0 w-full h-screen z-20 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(!isOpen)}></div> 
      }
      <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        { isOpen ? <img className="w-6 z-30 absolute top-4 right-4" src="./close.svg" alt="Closing navbar icon" /> : <img className={"w-8 z-30"} src="./hamburger-menu.svg" alt="Navigation menu button mobile" /> }
      </button>
    </nav>
  );
}

export default Navbar;