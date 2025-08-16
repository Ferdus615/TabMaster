import React from "react";
import ButtonR from "../Button/ButtonCTA";

const Hero_2 = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl lg:min-h-screen">
      <h1 className="fluid-text-2 mt-20 gradient-universe sm:text-center">
        The Ultimate Debate Tournament Management Platform
      </h1>
      <p className="fluid-p sm:text-center">
        Seamlessly manage your debate tournaments from registration to final
        results with a powerful, intuitive, and real-time tabulation system.
      </p>

      <div className="flex flex-col gap-10 sm:flex-row items-center justify-between w-80 mt-5 sm:mt-10">
        <ButtonR text="Experience Demo" link="/demo" />
        <ButtonR text="Contact Us" link="/contact" />
      </div>
    </div>
  );
};

export default Hero_2;
