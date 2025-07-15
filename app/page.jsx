import React from "react";
import Hero from "@/components/landing_page/Hero";
import Navbar from "@/components/landing_page/Navbar";
import Feature from "@/components/landing_page/Feature";
import FinalCTA from "@/components/landing_page/Final-CTA";
import Footer from "@/components/landing_page/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Feature />
      <FinalCTA />
      <Footer />
    </div>
  );
}
