"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Install lucide-react for clean icons

const images = [
  { src: "/p1/Full_V1.jpg", alt: "No. 1" },
  { src: "/p1/Competition_v1.jpg", alt: "No. 2" },
  { src: "/p1/Online_V1.jpg", alt: "No. 3" },
  { src: "/p1/Inside_V1_Unofficial_Intake.jpg", alt: "No. 4" },
  { src: "/p1/V1_With_Unofficial_Intake_And_3D_Printed_Shooter.jpg", alt: "No. 5" },
];

export default function Carousel({ autoPlayInterval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  // Handle auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval, isPaused]);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[450px] overflow-hidden rounded-2xl shadow-xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images Wrapper */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            {/* Dark gradient overlay for typography readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Caption */}
            {/* <div className="absolute bottom-12 left-8 right-8 text-white">
              <h2 className="text-2xl font-bold md:text-3xl drop-shadow-md">{img.alt}</h2>
              <p className="text-sm md:text-base text-gray-200 mt-2">Explore the beauty of the world.</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Manual Navigation: Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Manual Navigation: Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Manual Navigation: Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              currentIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}