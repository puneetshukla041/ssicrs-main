"use client";

import React from "react";
import { DM_Serif_Text } from "next/font/google";

// Load DM Serif Text with weight 400
const dmSerif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const Slider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Heading with hover underline animation */}
      <h1
        className={`${dmSerif.className} text-[#A67950] text-[40px] -mt-12 text-left relative group cursor-pointer inline-block`}
      >
        Our Comprehensive Training Program
        {/* Animated underline */}
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#A67950] transition-all duration-500 ease-out group-hover:w-full"></span>
      </h1>

      {/* Slider placeholder */}
      <p className="text-center text-xl mt-6">Slider Component Placeholder</p>
    </div>
  );
};

export default Slider;
