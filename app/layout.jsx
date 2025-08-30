import React from "react";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import DotGrid from "@/components/DotGrid";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "TabMaster",
  description:
    "TabMaster, Developed by Ferdus Rhaman Khan. For NDF BD(National Debate Federation Bangladesh)",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmsans.variable} antialiased`}
    >
      <body className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={20}
            baseColor="#0a0a0a"
            activeColor="#8e51ff"
            proximity={150}
            shockRadius={450}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <main className="relative z-10 flex flex-col min-h-dvh">
          {children}
        </main>
      </body>
    </html>
  );
}
