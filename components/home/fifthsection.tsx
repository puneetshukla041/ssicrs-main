"use client";

import Image from "next/image";

export default function FifthSection() {
  return (
    <section className="w-full flex justify-center items-center relative bg-white">
      {/* Desktop View */}
      <div className="hidden md:flex relative w-full justify-center">
        <Image
          src="/images/fifthsection/image1.png"
          alt="Fifth Section Image"
          width={1906}
          height={124}
          className="object-contain w-full"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2
            className="text-white"
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: "400",
              fontSize: "48px",
              lineHeight: "1.2",
            }}
          >
            Aligned with Core Mission<br />
            Each option references key SSICRS values—expert<br />training, accessibility, innovation.
          </h2>
        </div>
      </div>

{/* Mobile View */}
<div
  className="flex md:hidden relative w-full justify-center items-center"
  style={{
    height: "300px", // fixed height for mobile background
    backgroundImage: "url('/images/fifthsection/image1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Centered Text */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
    <h2
      className="text-white"
      style={{
        fontFamily: "DM Serif Text, serif",
        fontWeight: "400",
        fontSize: "28px", // smaller for mobile
        lineHeight: "1.2",
      }}
    >
      Aligned with Core Mission<br />
      Each option references key SSICRS values—expert<br />training, accessibility, innovation.
    </h2>
  </div>
</div>

    </section>
  );
}
