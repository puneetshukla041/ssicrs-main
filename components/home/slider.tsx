"use client";

import React, { useState, useRef, useEffect } from "react";

const images: string[] = [
  "/images/slider/slider1.png",
  "/images/slider/slider2.png",
  "/images/slider/slider3.png",
  "/images/slider/slider4.png",
];

const slideContent: string[] = [
  "Explore our full-service equestrian training programs.",
  "Master advanced riding techniques with our expert instructors.",
  "Join our community for competitive show jumping and dressage.",
  "Begin your journey with foundational riding skills and horsemanship.",
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const visibleSlides = 2;
  const totalSlides = images.length - visibleSlides;
  const autoPlayInterval = 3000; // 3 seconds

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalSlides + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (totalSlides + 1)) % (totalSlides + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index > totalSlides ? totalSlides : index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentTouchX = e.touches[0].clientX;
    const diff = touchStartX.current - currentTouchX;
    if (Math.abs(diff) > 10) e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();

    touchStartX.current = null;
  };

  // ✅ Fixed useEffect dependency array
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [isHovered]); // keep array size constant

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* Heading */}
      <div className="px-0 pt-0 -ml-12">
        <h1 className="text-[#A67950] font-serif font-medium text-[40px] text-left relative group cursor-pointer inline-block mb-12">
          Our Comprehensive Training Program
          <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#A67950] transition-all duration-500 ease-out group-hover:w-full"></span>
        </h1>
      </div>

      {/* Slider */}
      <div
        className="relative pb-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slider Wrapper with extra right space */}
        <div className="overflow-hidden pl-36">
          <div
            ref={slideContainerRef}
            className="flex space-x-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 w-1/2 rounded-[20px] transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100 z-20"
                    : index === currentIndex + 1
                    ? "opacity-50 scale-95 blur-sm z-10"
                    : "opacity-0 scale-90 z-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-[20px] object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[20px] flex items-end p-6">
                    <p className="text-white text-3xl font-bold font-serif leading-tight">
                      {slideContent[index]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 sm:px-8">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-70 backdrop-blur-sm text-[#A67950] shadow-md transition-all duration-300 hover:bg-opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-70 backdrop-blur-sm text-[#A67950] shadow-md transition-all duration-300 hover:bg-opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {Array.from({ length: totalSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ease-in-out ${
                currentIndex === index ? "bg-[#A67950]" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
