// components/Header.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isRegisterPage = pathname === "/register";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToRegister = () => {
    router.push("/register");
    setMobileNavOpen(false);
  };

  const handleNavClick = (item: string) => {
    if (item === "Home") {
      router.push("/home");
    } else {
      // Handle other navigation links here if needed in the future
    }
    setMobileNavOpen(false); // Close mobile nav after clicking
  };

  const headerBgColor = isRegisterPage ? "bg-white" : scrolled ? "bg-white" : "bg-transparent";
  const headerShadow = isRegisterPage ? "shadow-md" : scrolled ? "shadow-md" : "shadow-none";
  const headerTextColor = isRegisterPage ? "text-gray-600" : scrolled ? "text-gray-800" : "text-white";

  return (
    <header
      className={`w-full py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500 ${headerBgColor} ${headerShadow} ${className} px-4 md:px-12 lg:px-24`}
    >
      {/* Left Side - Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logos/ssicrs.png"
          alt="SSI Studios Logo"
          width={150}
          height={50}
          className="h-12 w-auto"
        />
      </div>

      {/* Hamburger Menu Button (mobile) */}
      <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="md:hidden p-2 z-50 mr-2"
        aria-label="Toggle Mobile Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke={mobileNavOpen ? "gray" : isRegisterPage ? "gray" : scrolled ? "gray" : "white"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={mobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop Nav */}
      <nav
        className="hidden md:flex items-center gap-10 text-base font-normal relative z-50"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        {["Home", "About Us", "Programs", "Resources"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`hover-underline inline-block relative overflow-visible ${headerTextColor}`}
          >
            {item}
          </button>
        ))}

        {/* Register Now Button with brown background touching top of header */}
        <div className="relative flex items-center">
          {/* Brown background behind button, touches top of nav */}
          <div
            className="absolute top-[-20] left-0 w-full"
            style={{
              height: "170%", // same as nav height
              backgroundColor: "#A67950",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              zIndex: 0,
            }}
          ></div>

          {/* Button on top */}
          <button
            onClick={goToRegister}
            className="relative z-10 px-6 py-2 rounded-full cursor-pointer text-white font-medium transition-colors duration-500"
            style={{ backgroundColor: "transparent" }}
          >
            Register Now
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 mt-20 flex flex-col items-start gap-5">
          {["Home", "About Us", "Programs", "Resources"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-gray-800 text-lg hover:text-gray-600 transition-colors"
            >
              {item}
            </button>
          ))}

          {/* Mobile Register Button */}
          <button
            onClick={goToRegister}
            className="mt-4 w-full px-4 py-2 rounded transition-colors"
            style={{ backgroundColor: "#A67950", color: "#fff" }}
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
}