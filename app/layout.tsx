// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import SplashLayout from "@/components/SplashLayout";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "SSICRS",
  description: "Professional web & mobile app",
  icons: {
    icon: "/logos/ssicrs.png", // ✅ favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} ${lato.variable}`}
      lang="en"
    >
      <body className="antialiased font-lato">
        <SplashLayout>{children}</SplashLayout>
      </body>
    </html>
  );
}
