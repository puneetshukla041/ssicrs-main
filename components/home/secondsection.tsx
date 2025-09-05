"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="w-full bg-white relative flex flex-col items-center justify-center pt-16 pb-24 md:pt-24 md:pb-32 px-4 md:px-12 lg:px-24">
      {/* Container for content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:items-start md:justify-center gap-12 md:gap-24 lg:gap-32">
        {/* Left-side content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#A67950]">
            &apos;Democratizing <br />
            Excellence in Robotic <br />
            Surgery&apos;
          </h2>
          {/* Paragraphs */}
          <div className="mt-8 md:mt-12 max-w-[500px]">
            <p className="font-lato text-base md:text-lg text-[#401323] leading-relaxed">
              SSICRS is a pioneering center committed to transforming surgical education and innovation. Our mission is to empower healthcare professionals across the globe with access to advanced knowledge, expert mentorship, and multi-specialty training on the SSI Mantra platform.
            </p>
            <p className="font-lato text-base md:text-lg text-[#401323] leading-relaxed mt-6">
              Through our programs, surgeons and surgical teams develop the expertise to drive a worldwide movement in decentralizing robotic surgery—bringing advanced care to every corner of the world, including underserved regions.
            </p>
          </div>
        </div>

        {/* Right-side Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/images/image2.webp"
            alt="Decorative"
            width={513}
            height={280}
            className="w-full md:w-[500px] h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
      
      {/* "At SSICRS, you will:" Section */}
      <div className="w-full max-w-7xl mt-16 md:mt-24 text-center md:text-left">
        <h3 className="font-serif text-xl md:text-2xl font-semibold leading-tight text-[#A67950] mb-8 md:mb-12">
          At SSICRS, you will:
        </h3>

        {/* Logos/Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo 1 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/logos/bottomlogo1.png" alt="Logo 1" width={48} height={50} className="w-12 h-auto" />
            <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
              Learn from visionary surgeons and clinical leaders.
            </p>
          </div>

          {/* Logo 2 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/logos/bottomlogo2.png" alt="Logo 2" width={48} height={50} className="w-12 h-auto" />
            <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
              Access world-class training resources, and research.
            </p>
          </div>

          {/* Logo 3 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/logos/bottomlogo3.png" alt="Logo 3" width={48} height={50} className="w-12 h-auto" />
            <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
              Join a global initiative shaping the future of robotic surgery.
            </p>
          </div>

          {/* Logo 4 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/logos/bottomlogo4.png" alt="Logo 4" width={48} height={50} className="w-12 h-auto" />
            <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
              Lead the effort to make surgical excellence accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}