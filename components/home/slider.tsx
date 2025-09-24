"use client";

import React, { useState, useRef } from "react";

const images: string[] = [
  "/images/slider/slider1.png",
  "/images/slider/slider2.png",
  "/images/slider/slider3.png",
  "/images/slider/slider4.png",
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const visibleSlides = 2;
  const totalSlides = images.length - visibleSlides;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= totalSlides ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index > totalSlides ? totalSlides : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* Heading Section */}
      <div className="px-0 pt-0 -ml-12">
        <h1 className="text-[#A67950] font-serif font-medium text-[40px] text-left relative group cursor-pointer inline-block mb-12">
          Our Comprehensive Training Program
          <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#A67950] transition-all duration-500 ease-out group-hover:w-full"></span>
        </h1>
      </div>

      {/* Slider Section */}
      <div className="relative pb-16">
        {/* Slides */}
        <div
          ref={slideContainerRef}
          className="flex w-full space-x-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-1/2 rounded-[20px] transition-opacity duration-300 ${
                index === currentIndex + 1 ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-[20px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 sm:px-8">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-70 backdrop-blur-sm text-[#A67950] shadow-md transition-all duration-300 hover:bg-opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-70 backdrop-blur-sm text-[#A67950] shadow-md transition-all duration-300 hover:bg-opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {images.map((_, index) => (
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



