"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function SeventhSection() {
  return (
    <section className="w-full bg-white relative flex justify-center items-center py-12 md:py-0">
      
      {/* ---------------- Mobile view - small card ---------------- */}
      <div className="md:hidden w-11/12 max-w-sm mx-auto flex flex-col items-center justify-center p-6 bg-cover bg-center rounded-lg relative"
           style={{ backgroundImage: "url('/images/seventhsection/image1.png')" }}>
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          
          {/* Heading */}
          <h2
            className="text-2xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] mb-2"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Take the Next Step Toward Surgical Excellence
          </h2>

          {/* Subtitle */}
          <p
            className="text-base font-medium text-[#FBFAF2] mb-6"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Enroll today and gain access to expert mentorship, hands-on training, and internationally recognized certification.
          </p>

          {/* Button */}
          <button
            className="flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)] px-6 py-2"
            style={{
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
              color: "#000",
            }}
          >
            Register Now
            <FiArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
{/* ---------------- Desktop view ---------------- */}
<div className="hidden md:block relative flex flex-col justify-center items-center min-h-screen">
  <Image
    src="/images/seventhsection/image1.png"
    alt="Seventh Section Image"
    width={1306}
    height={724}
    className="object-contain mt-32" // <-- increased margin-top to push image further down
  />

  {/* Heading */}
  <h2
    className="absolute text-center text-4xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] whitespace-nowrap"
    style={{
      fontFamily: "DM Serif Text, serif",
      top: "40%", // moved a bit lower from 30%
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    Take the Next Step Toward Surgical Excellence
  </h2>

  {/* Subtitle */}
  <p
    className="absolute text-center text-[24px] font-medium"
    style={{
      fontFamily: "Lato, sans-serif",
      color: "#FBFAF2",
      top: "48%", // moved a bit lower from 48%
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "90%",
    }}
  >
    Enroll today and gain access to expert mentorship, hands-on training, and internationally recognized certification.
  </p>

  {/* Button */}
  <button
    className="absolute flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)]"
    style={{
      top: "58%", // moved a bit lower from 63%
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "167px",
      height: "43px",
      background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
      fontFamily: "Lato, sans-serif",
      fontWeight: "400",
      fontSize: "16px",
      color: "#000",
    }}
  >
    Register Now
    <FiArrowRight className="ml-2" size={18} />
  </button>
</div>

    </section>
  );
}
