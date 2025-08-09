import React from "react";
import Hero from "@/components/LandingPage/Hero";
import Feature from "@/components/LandingPage/Feature";
import FinalCTA from "@/components/LandingPage/Final-CTA";
import Roles from "@/components/LandingPage/Roles";
import Footer from "@/components/LandingPage/Footer";
import Tech from "@/components/LandingPage/Tech";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Feature />
      <Roles />
      <FinalCTA />
      <Tech />
      <Footer />
    </div>
  );
}
