import React from "react";
import ButtonR from "../button/ButtonR";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl lg:min-h-screen">
      <h1 className="fluid-text gradient-text mt-20 sm:text-center">
        Elevate Your Debate Tournaments: Smart Tabulation, Lifetime Debater
        Growth.
      </h1>
      <p className="fluid-p sm:text-center">
        The future of debate tournament management is here. SmartTab combines
        intuitive design with powerful features, centralizing everything from
        draws to results, and giving every debater a lifelong record of their
        journey.
      </p>

      <div className="flex flex-col gap-10 sm:flex-row items-center justify-between w-80 mt-5 sm:mt-10">
        <ButtonR text="Experience Demo" link="/registration" />
        <ButtonR text="Contact Us" link="/registration" />
      </div>
    </div>
  );
};

export default Hero;
