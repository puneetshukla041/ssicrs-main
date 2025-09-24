"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    heading: "Full-Service Equestrian Training",
    text: "Explore our complete programs designed to improve your riding skills and horse management expertise.",
    image: "/images/slider/slider1.png",
  },
  {
    heading: "Advanced Riding Techniques",
    text: "Master advanced techniques with guidance from our experienced instructors.",
    image: "/images/slider/slider2.png",
  },
  {
    heading: "Competitive Show Jumping & Dressage",
    text: "Join our community for high-level competitive training and events.",
    image: "/images/slider/slider3.png",
  },
  {
    heading: "Foundational Riding Skills",
    text: "Begin your journey with essential horsemanship and riding lessons.",
    image: "/images/slider/slider4.png",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const autoPlayInterval = 3000;
  const totalSlides = slides.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentIndex(index % totalSlides);

  const handleTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(diff) > 10) e.preventDefault();
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif text-[#A67950] mb-12 relative inline-block group cursor-pointer">
        Our Comprehensive Training Program
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#A67950] transition-all duration-500 ease-out group-hover:w-full"></span>
      </h2>

      {/* Slider Container */}
      <div
        className="relative flex flex-col lg:flex-row items-center gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-[#5B102B] text-[24px] font-serif font-normal">
                {slides[currentIndex].heading}
              </h3>
              <p className="text-[#A67950] text-[16px] font-lato font-normal">
                {slides[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Carousel */}
        <div className="w-full lg:w-2/3 overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out relative"
            style={{ transform: `translateX(-${currentIndex * 70}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, idx) => {
              const offset = idx - currentIndex;
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[70%] px-2 flex justify-center relative"
                  style={{
                    zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                    transform: `translateX(${offset * 20}px) scale(${offset === 0 ? 1 : 0.85})`,
                    transition: "transform 0.5s",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-opacity-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#A67950]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-opacity-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#A67950]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === idx ? "bg-[#A67950]" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
