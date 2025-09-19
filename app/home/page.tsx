"use client";

import Header from "@/components/Header";
import SecondSection from "@/components/home/secondsection";
import ThirdSection from "@/components/home/thirdsection";
import FourthSection from "@/components/home/fourthsection";
import FifthSection from "@/components/home/fifthsection";
import SixthSection from "@/components/home/sixthsection";
import SeventhSection from "@/components/home/seventhsection";
import Footer from "@/components/Footer";
import Slider from "@/components/home/slider"; // Import your slider component
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* ✅ Fixed Header at the top */}
      <Header className="fixed top-0 left-0 w-full z-50" />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/image1.webp"
          alt="SSICrs"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Centered Text with scroll-triggered animation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              lineHeight: "1.2",
            }}
            className="text-white text-[64px] sm:text-[48px] md:text-[56px] lg:text-[64px]"
          >
            Shaping the Future of <br className="hidden sm:block" /> Robotic Surgery Training
          </h1>

          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              lineHeight: "1.5",
            }}
            className="text-white text-center mt-5 text-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] px-4 sm:px-8 md:px-16"
          >
            Empowering healthcare professionals worldwide to master the SSI Mantra system and deliver safer, smarter care.
          </p>
        </motion.div>
      </section>

      {/* ✅ White Section Below Hero */}
      <SecondSection />



      {/* Remaining Sections */}
      <ThirdSection />
    
      <FourthSection />

    <section className="w-full bg-white py-[100px]">
  <div className="max-w-[1920px] mx-auto flex flex-col gap-[42px] h-[477px]">
    <Slider />
  </div>
</section>



      <FifthSection />

      {/* White gap */}
      <div style={{ height: "60px", backgroundColor: "#ffffff" }} />

      <SixthSection />
      <SeventhSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
