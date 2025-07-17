import React from "react";
import ButtonR from "../button/ButtonR";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl lg:min-h-screen">
      <h1
        className="text-4xl font-bold p-5 mt-20 text-transparent bg-clip-text bg-linear-to-tr
       from-violet-500 to-rose-500 sm:text-center lg:text-5xl xl:text-6xl"
      >
        Elevate Your Debate Tournaments: Smart Tabulation, Lifetime Debater
        Growth.
      </h1>
      <p className="p-5 text-lg text-zinc-600 sm:text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
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
