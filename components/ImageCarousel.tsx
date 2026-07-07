"use client";

import Image from "next/image";
import { useState } from "react";

// Vi behöver bara veta bilderna, en titel för alt-text, och om den ska prioriteras
interface ImageCarouselProps {
  imagePaths: string[];
  title: string;
  priority?: boolean;
  ribbon?: boolean;
}

export default function ImageCarousel({ imagePaths, title, priority = false, ribbon }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!imagePaths || imagePaths.length <= 1) {
    return (
      <div className="relative w-full aspect-[3/2] rounded-lg border border-gray-400 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          {ribbon && (
          <div className="absolute top-[-8] left-[-8] w-50 h-60 overflow-hidden pointer-events-none z-20">
            <div className="absolute top-14 -left-12 w-60 bg-brand-orange text-white text-sm font-bold py-1 text-center shadow-md rotate-315 uppercase tracking-wider border-b border-black/40">
              <span>Frontend In-progress</span>
            </div>
          </div>
        )}
        <Image
          src={imagePaths?.[0] || "/placeholder.png"}
          alt={`Image of ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          priority={priority}
        />
      </div>
    );
  }

  const nextProjectImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === imagePaths.length - 1 ? 0 : prev + 1));
  };

  const prevProjectImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? imagePaths.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full aspect-[3/2] rounded-lg border border-gray-400 overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-sm">
      {ribbon && (
        <div className="absolute top-[-8] left-[-8] w-50 h-60 overflow-hidden pointer-events-none z-20">
          <div className="absolute top-14 -left-12 w-60 bg-brand-orange text-white text-sm font-bold py-1 text-center shadow-md rotate-315 uppercase tracking-wider border-b border-black/40">
            <span>Frontend In-progress</span>
          </div>
        </div>
      )}
      
      <Image
        src={imagePaths[currentImageIndex]}
        alt={`Image of ${title} - Slide ${currentImageIndex + 1}`}
        fill
        className=""
        sizes="(max-width: 768px) 100vw, 600px"
        priority={priority}
      />

      <button
        onClick={prevProjectImage}
        className="absolute top-1/2 -translate-y-1/2 left-4 w-11 h-11 flex items-center justify-center rounded-lg bg-black/60 border border-brand-orange hover:bg-black/80 hover:border-brand-orange transition-all cursor-pointer z-10"
        aria-label="Föregående bild"
      >
        <Image src="/arrow-right.svg" alt="Föregående" width={22} height={22} className="rotate-180" />
      </button>

      {/* Högerpil */}
      <button
        onClick={nextProjectImage}
        className="absolute top-1/2 -translate-y-1/2 right-4 w-11 h-11 flex items-center justify-center rounded-lg bg-black/60 border border-brand-orange hover:bg-black/80 hover:border-brand-orange transition-all cursor-pointer z-10"
        aria-label="Nästa bild"
      >
        <Image src="/arrow-right.svg" alt="Nästa" width={22} height={22} />
      </button>

      {/* Prickar i botten */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {imagePaths.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.preventDefault(); setCurrentImageIndex(index); }}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              currentImageIndex === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Gå till bild ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}