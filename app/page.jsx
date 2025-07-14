import React from "react";
import Hero from "@/components/landing_page/Hero";
import Navbar from "@/components/landing_page/Navbar";
import Feature from "@/components/landing_page/Feature";
import FinalCTA from "@/components/landing_page/Final-CTA";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl">
      <Navbar />
      <Hero />
      <Feature />
      <FinalCTA />
    </div>
  );
}
