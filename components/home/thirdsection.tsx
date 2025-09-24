"use client";

import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Fullscreen Image */}
      <Image
        src="/images/section3image.png"
        alt="Section 3 Background"
        fill
        priority
        className="object-cover object-center" // Added object-right to shift the image
      />

      {/* PC and Laptop Layout (hidden on mobile) */}
      <div className="hidden md:block relative w-full h-full">
        {/* First Heading */}
        <div
          className="absolute"
          style={{
            top: "313px",
            right: "204px",
            left: "1059px",
            bottom: "441px",
          }}
        >
          <h2
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "1.3",
              color: "#F2F0E4",
            }}
          >
            Empowering the next generation of surgeons 
            to transform healthcare with innovation and compassion
          </h2>
        </div>

        {/* Second Paragraph */}
        <div
          className="absolute"
          style={{
            top: "556px",
            right: "244px",
            left: "1059px",
            bottom: "313px",
          }}
        >
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500, // Medium
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#F2F0E4",
            }}
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. <br />
            His vision is shaping the future of healthcare—making advanced surgical <br />
            techniques accessible worldwide and equipping surgeons to deliver precision <br />
            and excellence in every procedure.
          </p>
        </div>
      </div>
      
      {/* Mobile Layout (hidden on PC and laptop) */}
      <div className="md:hidden flex flex-col items-center justify-center text-center px-6 py-16 w-full h-full relative z-10">
        <h2
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "1.4",
            color: "#F2F0E4",
          }}
          className="mb-8"
        >
          Empowering the next generation of surgeons to transform healthcare with innovation and compassion
        </h2>
        
        <p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#F2F0E4",
          }}
        >
          Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. His vision is shaping the future of healthcare—making advanced surgical techniques accessible worldwide and equipping surgeons to deliver precision and excellence in every procedure.
        </p>
      </div>
    </section>
  );
}