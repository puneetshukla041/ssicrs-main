"use client";

import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF2]">
      <SecondSection />
    </div>
  );
};

const SecondSection = () => {
  const logos = [
    {
      src: "/logos/bottomlogo1.png",
      text: "Learn from visionary surgeons and clinical leaders.",
    },
    {
      src: "/logos/bottomlogo2.png",
      text: "Access world-class training resources, and research.",
    },
    {
      src: "/logos/bottomlogo3.png",
      text: "Join a global initiative shaping the future of robotic surgery.",
    },
    {
      src: "/logos/bottomlogo4.png",
      text: "Lead the effort to make surgical excellence accessible to all.",
    },
  ];

  return (
    <section className="w-full relative flex flex-col items-center justify-center pt-16 pb-24 md:pt-24 md:pb-32 px-4 md:px-12 lg:px-24">
      {/* Container with 3 columns: Heading → Paragraphs → Image */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16 lg:gap-24">
        
        {/* Left: Heading */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <h2 className="font-serif text-2xl md:text-2xl font-bold leading-tight text-[#A67950] text-center md:text-left">

            ‘Democratizing<br /> Excellence in Robotic<br /> Surgery’
          </h2>
        </div>

        {/* Middle: Paragraphs */}
{/* Middle: Paragraphs */}
<div className="md:w-1/2 flex flex-col text-center md:text-left">
  <p className="font-lato text-[15px] md:text-[16px] text-[#401323] leading-relaxed mb-6">
    SSICRS is a pioneering center committed to <br />
    transforming surgical education and innovation. Our <br />
    mission is to empower healthcare professionals across <br />
    the globe with access to advanced knowledge, expert <br />
    mentorship, and multi-specialty training on the SSI <br />
    Mantra platform.
  </p>

  <p className="font-lato text-[15px] md:text-[16px] text-[#401323] leading-relaxed">
    Through our programs, surgeons and surgical teams <br />develop the expertise to lead a worldwide movement <br />
    in decentralizing robotic surgery, bringing advanced <br />care to every corner of the world,
    including<br /> underserved regions.
  </p>
</div>


        {/* Right: Image */}
<div className="flex justify-center md:justify-end md:pr-[-20] md:w-[700px]">
  <img
    src="/images/image2.webp"
    alt="Decorative"
    width={1400}
    height={900}
    className="w-full h-auto object-cover rounded-2xl shadow-2xl transform md:translate-x-0"
  />
</div>


      </div>

      {/* "At SSICRS, you will:" Section */}
      <div className="w-full max-w-7xl mt-20 md:mt-28 text-center md:text-left">
        <h3 className="font-serif text-xl md:text-2xl font-semibold leading-tight text-[#A67950] mt-6 mb-6 ml-4 mr-4">
          At SSICRS, you will:
        </h3>

        {/* Logos/Icons with hover brackets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group cursor-pointer p-4"
            >
              {/* Logo Image */}
              <img
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={48}
                height={50}
                className="w-12 h-auto mt-4 mb-4 relative z-10"
              />

              {/* Decorative Brackets */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Left bracket */}
                <span className="absolute left-0 top-0 bottom-0 w-[2px] border-l-2 border-[#6A4336] rounded-tl-lg rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>

                {/* Right bracket */}
                <span className="absolute right-0 top-0 bottom-0 w-[2px] border-r-2 border-[#6A4336] rounded-tr-lg rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>

                {/* Top-Left Bracket Segment */}
                <span className="absolute top-0 left-0 w-4 h-[2px] border-t-2 border-l-2 border-[#6A4336] rounded-tl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>

                {/* Top-Right Bracket Segment */}
                <span className="absolute top-0 right-0 w-4 h-[2px] border-t-2 border-r-2 border-[#6A4336] rounded-tr-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>

                {/* Bottom-Left Bracket Segment */}
                <span className="absolute bottom-0 left-0 w-4 h-[2px] border-b-2 border-l-2 border-[#6A4336] rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>

                {/* Bottom-Right Bracket Segment */}
                <span className="absolute bottom-0 right-0 w-4 h-[2px] border-b-2 border-r-2 border-[#6A4336] rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
              </div>

              {/* Logo Text */}
              <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
                {logo.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
