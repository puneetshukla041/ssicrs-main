// components/SplashLayout.tsx
"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreenClient";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function SplashLayout({ children }: Props) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {splashDone && (
        <>
          <Header />
          <main className="min-h-screen">{children}</main>
        </>
      )}
    </>
  );
}
