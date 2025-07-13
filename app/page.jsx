import React from "react";
import Hero from "@/components/landing_page/Hero";
import Navbar from "@/components/landing_page/Navbar";
import Feature from "@/components/landing_page/Feature";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
}
