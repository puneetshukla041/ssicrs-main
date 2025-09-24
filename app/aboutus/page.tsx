// app/aboutus/page.tsx
"use client";

import React from "react";
import Section1 from "@/components/aboutus/section1";
import Section2 from "@/components/aboutus/section2";
import Section3 from "@/components/aboutus/section3";
export default function AboutUsPage() {
  return (
    <div className="w-full bg-[#FBFAF2]">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
