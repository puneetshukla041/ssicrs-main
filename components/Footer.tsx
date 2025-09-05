"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#A67951] relative">

      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden md:block w-full" style={{ height: "469px" }}>
        <div
          className="absolute"
          style={{
            top: "110px",
            left: "280px",
          }}
        >
          {/* Logo and text */}
          <div className="flex items-center">
            <Image
              src="/logos/ssicrs.png"
              alt="SSICRS Logo"
              width={57}
              height={57}
              className="object-contain"
            />
            <span
              style={{
                width: "86px",
                height: "28px",
                fontFamily: "DM Serif Text, serif",
                fontWeight: "bold",
                fontSize: "28px",
                color: "#FFFFFF",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              SSICRS
            </span>
          </div>

          {/* Paragraph */}
          <p
            style={{
              marginTop: "10px",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "14px",
              color: "#FFFFFF",
              lineHeight: "1.5",
              maxWidth: "400px",
            }}
          >
            Democratizing excellence in robotic surgery through world-class training and <br />
            mentorship. SSICRS empowers surgeons and healthcare teams to deliver advanced<br />
            care everywhere.
          </p>

          {/* Top menu */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "#FFFFFF",
              fontFamily: "Sora, sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              gap: "45px",
              paddingRight: "100px",
              position: "relative",
              top: "-200px",
            }}
          >
            <span style={{ cursor: "pointer" }}>ABOUT</span>
            <span style={{ cursor: "pointer" }}>PROGRAMS</span>
            <span style={{ cursor: "pointer" }}>RESOURCES</span>
            <span style={{ cursor: "pointer" }}>REGISTER NOW</span>
          </div>

          {/* White line */}
          <div
            style={{
              marginTop: "40px",
              height: "1px",
              backgroundColor: "#FFFFFF",
              width: "100%",
              paddingLeft: "1400px",
              paddingRight: "10px",
            }}
          ></div>

          {/* Bottom footer */}
          <footer
            style={{
              width: "100%",
              padding: "20px 100px",
              boxSizing: "border-box",
              color: "#FFFFFF",
              fontFamily: "Lato, sans-serif",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "left",
                marginBottom: "-15px",
                marginLeft: "-100px",
              }}
            >
              © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "25px",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Sora, sans-serif",
              }}
            >
              <span style={{ cursor: "pointer" }}>Cookies</span>
              <span>|</span>
              <span style={{ cursor: "pointer" }}>Privacy Policy</span>
              <span>|</span>
              <span style={{ cursor: "pointer" }}>Contact us</span>
              <span>|</span>
              <span style={{ cursor: "pointer" }}>Terms of use</span>
              <span>|</span>
              <span style={{ cursor: "pointer" }}>Sitemap</span>
            </div>
          </footer>
        </div>
      </div>

      {/* ---------------- Mobile View ---------------- */}
      <div className="block md:hidden w-full py-8 px-6">
        <div className="max-w-[600px] mx-auto flex flex-col items-start gap-4">
          {/* Logo and text */}
          <div className="flex items-center gap-2">
            <Image
              src="/logos/ssicrs.png"
              alt="SSICRS Logo"
              width={57}
              height={57}
              className="object-contain"
            />
            <span className="text-white font-bold text-2xl font-serif">SSICRS</span>
          </div>

          {/* Paragraph */}
          <p className="text-white text-sm font-lato leading-6">
            Democratizing excellence in robotic surgery through world-class training and mentorship. 
            SSICRS empowers surgeons and healthcare teams to deliver advanced care everywhere.
          </p>

          {/* Top menu */}
          <div className="flex flex-wrap gap-4 text-white text-sm font-sora font-light">
            <span className="cursor-pointer">About</span>
            <span className="cursor-pointer">Programs</span>
            <span className="cursor-pointer">Resources</span>
            <span className="cursor-pointer">Register Now</span>
          </div>

          {/* White line */}
          <div className="border-t border-white w-full my-6"></div>

          {/* Bottom section */}
          <div className="flex flex-col gap-2 text-white text-xs font-lato">
            <div>© 2025 SS International Center for Robotics Surgery | All Rights Reserved.</div>
            <div className="flex flex-wrap gap-2 items-center font-sora">
              <span className="cursor-pointer">Cookies</span>
              <span>|</span>
              <span className="cursor-pointer">Privacy Policy</span>
              <span>|</span>
              <span className="cursor-pointer">Contact us</span>
              <span>|</span>
              <span className="cursor-pointer">Terms of use</span>
              <span>|</span>
              <span className="cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
