import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/LandingPage/Hero";
import Feature from "@/components/LandingPage/Feature";
import FinalCTA from "@/components/LandingPage/Final-CTA";
import Roles from "@/components/LandingPage/Roles";
import Footer from "@/components/LandingPage/Footer";
import Tech from "@/components/LandingPage/Tech";
import Name from "@/components/LandingPage/Name";
import Hero_2 from "@/components/LandingPage/Hero_2";
import Feature_2 from "@/components/LandingPage/Feature_2";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      {/* <Hero /> */}
      <Hero_2 />
      <Name />
      <Feature_2 />
      <Tech />

      <Feature />
      <Roles />
      <FinalCTA />
      <Footer />
    </div>
  );
}
