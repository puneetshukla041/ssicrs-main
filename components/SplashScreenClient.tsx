// components/SplashScreenClient.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete(); // notify parent
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <motion.img
            src="/logos/splashlogo.png"
            alt="Splash Logo"
            className="w-40 h-40 object-contain"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
