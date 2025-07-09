import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import DotGrid from "@/components/DotGrid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={30}
            baseColor="#5227FF30"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
