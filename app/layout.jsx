import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import DotGrid from "@/components/DotGrid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "TabMaster",
  description:
    "TabMaster, Developed by Ferdus Rhaman Khan. For NDF BD(National Debate Federation Bangladesh)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
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
