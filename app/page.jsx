import React from "react";
import Hero from "@/app/components/landing_page/Hero";
import Feature from "@/app/components/landing_page/Feature";
import FinalCTA from "@/app/components/landing_page/Final-CTA";
import Roles from "@/app/components/landing_page/Roles";
import Footer from "@/app/components/landing_page/Footer";
import Tech from "@/app/components/landing_page/Tech";

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
