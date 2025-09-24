// components/aboutus/Section3.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

const images = [
  "/aboutus/images/section3/image1.png",
  "/aboutus/images/section3/image2.png",
  "/aboutus/images/section3/image3.png",
  "/aboutus/images/section3/image4.png",
  "/aboutus/images/section3/image5.png",
];

export default function Section3() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (images.length - 1));
    setActiveIndex(newIndex);
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-black" // 👈 black background to prevent white flash
      style={{ height: `${images.length * 60}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Crossfade Images */}
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false} // 👈 prevents initial white flash
            animate={{ opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt={`Scroll Image ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Overlay text */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="text-white text-4xl font-bold">
            Scroll Animation Section
          </h2>
        </div>

        {/* Right-side dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          {images.map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              initial={false}
              animate={{
                scale: i === activeIndex ? 1.5 : 1,
                backgroundColor:
                  i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.4)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
