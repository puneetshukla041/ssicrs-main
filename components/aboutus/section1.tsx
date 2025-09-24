// components/aboutus/Section1.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full h-screen relative">
      {/* Background Image */}
      <Image
        src="/aboutus/images/section1.png"
        alt="SSI CRS"
        fill
        className="object-cover"
        priority
      />

      {/* Centered Heading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-white text-[64px] font-serif mb-6"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: 1.2,
          }}
        >
          Global Excellence in <br /> Robotic Surgery Training
        </h1>

<p
  className="text-white text-[20px] whitespace-nowrap"
  style={{
    fontFamily: "Lato, sans-serif",
    fontWeight: 400,
    lineHeight: 0.5,
  }}
>
  Expanding access to cutting-edge education, from established centers to underserved regions.
</p>

      </div>
    </section>
  );
}
